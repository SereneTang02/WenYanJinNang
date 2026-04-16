// pages/statistics/statistics.js
const { getStudyStats } = require('../../utils/storage.js');

Page({
  data: {
    stats: {
      totalWords: 15,
      totalStudied: 0,
      totalAttempts: 0,
      correctCount: 0,
      accuracy: 0,
      progress: 0,
      recentDays: 0,
      dailyStats: {}
    },
    collectedCount: 0,
    recentDays: [],
    encourageData: {
      icon: '💪',
      text: '继续努力，你会越来越棒！'
    }
  },

  onLoad() {
    this.loadStats();
  },

  onShow() {
    this.loadStats();
  },

  // 加载统计数据
  loadStats() {
    const stats = getStudyStats();
    const collectedWords = wx.getStorageSync('collectedWords') || [];

    // 处理最近7天数据
    const recentDays = this.processRecentDays(stats.dailyStats || {});

    // 根据进度生成鼓励语
    const encourageData = this.getEncouragement(parseFloat(stats.progress) || 0);

    this.setData({
      stats,
      collectedCount: collectedWords.length,
      recentDays,
      encourageData
    });
  },

  // 处理最近7天的数据
  processRecentDays(dailyStats) {
    const days = [];
    const today = new Date();

    // 找出最大值用于计算百分比
    let maxCount = 1;
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toLocaleDateString();
      const count = dailyStats[dateStr] ? dailyStats[dateStr].total : 0;
      if (count > maxCount) maxCount = count;
    }

    // 生成7天数据
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toLocaleDateString();
      const monthDay = `${date.getMonth() + 1}/${date.getDate()}`;
      const count = dailyStats[dateStr] ? dailyStats[dateStr].total : 0;
      const percent = maxCount > 0 ? (count / maxCount * 100) : 0;

      days.push({
        date: monthDay,
        count,
        percent
      });
    }

    return days;
  },

  // 根据进度获取鼓励语
  getEncouragement(progress) {
    if (progress === 0) {
      return {
        icon: '🌱',
        text: '开始你的学习之旅吧！'
      };
    } else if (progress < 20) {
      return {
        icon: '💪',
        text: '良好的开端是成功的一半！'
      };
    } else if (progress < 50) {
      return {
        icon: '🚀',
        text: '进步神速，继续保持！'
      };
    } else if (progress < 80) {
      return {
        icon: '⭐',
        text: '已经掌握大半，加油！'
      };
    } else if (progress < 100) {
      return {
        icon: '🔥',
        text: '就快完成了，坚持住！'
      };
    } else {
      return {
        icon: '🎉',
        text: '恭喜你完成所有实词学习！'
      };
    }
  },

  // 清空数据
  clearData() {
    wx.showModal({
      title: '确认清空',
      content: '清空后将删除所有学习记录和收藏，此操作不可恢复！',
      confirmText: '确认清空',
      cancelText: '取消',
      confirmColor: '#E05A47',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('studyRecords');
          wx.removeStorageSync('collectedWords');

          wx.showToast({
            title: '已清空',
            icon: 'success'
          });

          setTimeout(() => {
            this.loadStats();
          }, 1500);
        }
      }
    });
  }
});
