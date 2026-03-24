// pages/index/index.js
const { getStudyStats, getDailyTask, getDailyTaskProgress } = require('../../utils/storage.js');

Page({
  data: {
    greeting: '上午好',
    stats: {
      totalStudied: 0,
      totalWords: 15,
      accuracy: 0
    },
    dailyTarget: 10,
    todayStudied: 0,
    dailyProgress: 0,
    dailyTaskInfo: {
      hasTask: false,
      finishedCount: 0,
      totalCount: 0,
      progress: 0,
      isCompleted: false
    },
    dailyTaskDesc: '点击开始今日任务'
  },

  onLoad() {
    this.updateGreeting();
    this.loadStats();
  },

  onShow() {
    this.loadStats();
  },

  // 根据时间设置问候语
  updateGreeting() {
    const hour = new Date().getHours();
    let greeting;
    if (hour < 6) greeting = '凌晨好';
    else if (hour < 9) greeting = '早上好';
    else if (hour < 12) greeting = '上午好';
    else if (hour < 14) greeting = '中午好';
    else if (hour < 18) greeting = '下午好';
    else greeting = '晚上好';

    this.setData({ greeting });
  },

  // 加载统计数据
  loadStats() {
    const stats = getStudyStats();

    // 计算今日学习数量
    const today = new Date().toLocaleDateString();
    const todayStudied = stats.dailyStats[today] ? stats.dailyStats[today].total : 0;
    const dailyProgress = Math.min((todayStudied / this.data.dailyTarget) * 100, 100);

    // 加载每日任务进度
    const dailyTaskInfo = getDailyTaskProgress();
    const dailyTaskDesc = dailyTaskInfo.hasTask
      ? (dailyTaskInfo.isCompleted ? '今日已完成' : `已完成${dailyTaskInfo.progress}%`)
      : '点击开始今日任务';

    this.setData({
      stats: {
        totalStudied: stats.totalStudied,
        totalWords: stats.totalWords,
        accuracy: stats.accuracy
      },
      todayStudied,
      dailyProgress,
      dailyTaskInfo,
      dailyTaskDesc
    });
  },

  // 开始随机背诵
  startRandomStudy() {
    wx.navigateTo({
      url: '/pages/study/study?mode=random'
    });
  },

  // 前往分类学习页面
  goToCategory() {
    wx.navigateTo({
      url: '/pages/category/category'
    });
  },

  // 前往练习测试
  goPractice() {
    wx.navigateTo({
      url: '/pages/practice-config/practice-config'
    });
  },

  // 前往房间PK
  goToPK() {
    wx.showToast({
      title: '房间PK功能即将上线',
      icon: 'none'
    });
  },

  // 开始每日任务
  startDailyTask() {
    const { getUserGrade } = require('../../utils/storage.js');
    const grade = getUserGrade();

    if (!grade) {
      wx.showModal({
        title: '提示',
        content: '请先在个人中心设置年级，以便生成专属任务',
        confirmText: '去设置',
        success: (res) => {
          if (res.confirm) {
            wx.switchTab({ url: '/pages/profile/profile' });
          }
        }
      });
      return;
    }

    const dailyTask = getDailyTask(true);
    if (dailyTask && dailyTask.wordIds && dailyTask.wordIds.length > 0) {
      wx.navigateTo({ url: '/pages/study/study?mode=daily' });
    } else {
      wx.showToast({ title: '暂无可学习的词汇', icon: 'none' });
    }
  },

  // 学习某个分类
  studyCategory(e) {
    const category = e.currentTarget.dataset.category;
    wx.navigateTo({
      url: `/pages/study/study?mode=category&category=${category}`
    });
  }
});
