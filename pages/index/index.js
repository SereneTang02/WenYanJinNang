// pages/index/index.js
const { wordsData, categories } = require('../../data/words.js');
const { getStudyStats } = require('../../utils/storage.js');

Page({
  data: {
    stats: {
      totalStudied: 0,
      totalWords: 15,
      accuracy: 0
    },
    categories: [
      { id: 1, name: '基础实词', count: 9 },
      { id: 2, name: '进阶实词', count: 6 },
      { id: 3, name: '动词类', count: 3 },
      { id: 4, name: '多义词', count: 8 }
    ],
    dailyTarget: 10,
    todayStudied: 0,
    dailyProgress: 0
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

    // 计算今日学习数量
    const today = new Date().toLocaleDateString();
    const todayStudied = stats.dailyStats[today] ? stats.dailyStats[today].total : 0;
    const dailyProgress = Math.min((todayStudied / this.data.dailyTarget) * 100, 100);

    this.setData({
      stats: {
        totalStudied: stats.totalStudied,
        totalWords: stats.totalWords,
        accuracy: stats.accuracy
      },
      todayStudied,
      dailyProgress
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

  // 学习某个分类
  studyCategory(e) {
    const category = e.currentTarget.dataset.category;
    wx.navigateTo({
      url: `/pages/study/study?mode=category&category=${category}`
    });
  }
});
