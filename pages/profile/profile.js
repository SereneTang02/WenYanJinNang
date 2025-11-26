// pages/profile/profile.js
const storage = require('../../utils/storage.js');

Page({
  data: {
    userInfo: null,
    role: null,
    stats: {
      totalWords: 0,
      masteredWords: 0,
      checkInStreak: 0
    }
  },

  onLoad() {
    this.loadUserInfo();
    this.loadStats();
  },

  onShow() {
    // 每次显示时刷新统计数据
    this.loadStats();
  },

  /**
   * 加载用户信息
   */
  loadUserInfo() {
    const app = getApp();
    const loginInfo = wx.getStorageSync('userLoginInfo');

    this.setData({
      userInfo: loginInfo || app.globalData.userInfo,
      role: loginInfo?.role || app.globalData.role
    });
  },

  /**
   * 加载统计数据
   */
  loadStats() {
    const progress = storage.getUserProgress();
    const totalWords = Object.keys(progress).length;

    // 统计掌握的词（答对次数 > 答错次数）
    let masteredWords = 0;
    for (const wordId in progress) {
      if (progress[wordId].correct > progress[wordId].wrong) {
        masteredWords++;
      }
    }

    const checkInStreak = storage.getCheckInStreak();

    this.setData({
      stats: {
        totalWords,
        masteredWords,
        checkInStreak
      }
    });
  },

  /**
   * 退出登录
   */
  onLogout() {
    wx.showModal({
      title: '确认退出',
      content: '退出登录后需要重新登录，确定要退出吗？',
      success: (res) => {
        if (res.confirm) {
          const app = getApp();
          app.logout();
        }
      }
    });
  }
});
