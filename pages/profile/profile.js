// pages/profile/profile.js
const storage = require('../../utils/storage.js');

const DEFAULT_AVATAR = '/image/profile.png';

Page({
  data: {
    userInfo: null,
    role: null,
    defaultAvatar: DEFAULT_AVATAR,
    stats: {
      totalWords: 0,
      masteredWords: 0,
      checkInStreak: 0
    },
    hasChanged: false
  },

  onLoad() {
    this.loadUserInfo();
    this.loadStats();
  },

  onShow() {
    this.loadUserInfo();
    this.loadStats();
  },

  loadUserInfo() {
    const app = getApp();
    const loginInfo = wx.getStorageSync('userLoginInfo');
    this.setData({
      userInfo: loginInfo || app.globalData.userInfo || {},
      role: loginInfo?.role || app.globalData.role,
      hasChanged: false
    });
  },

  /**
   * 微信原生头像选择（底部弹出授权弹窗）
   */
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail;
    this.setData({
      'userInfo.avatarUrl': avatarUrl,
      hasChanged: true
    });
  },

  /**
   * 微信原生昵称输入
   */
  onNicknameInput(e) {
    this.setData({
      'userInfo.nickName': e.detail.value,
      hasChanged: true
    });
  },

  onNicknameBlur(e) {
    if (e.detail.value && e.detail.value !== this.data.userInfo?.nickName) {
      this.setData({
        'userInfo.nickName': e.detail.value,
        hasChanged: true
      });
    }
  },

  /**
   * 保存头像和昵称
   */
  async saveProfile() {
    const { userInfo } = this.data;
    wx.showLoading({ title: '保存中...' });

    try {
      let avatarUrl = userInfo.avatarUrl;

      // 临时文件上传到云存储
      if (avatarUrl && (avatarUrl.startsWith('wxfile://') || avatarUrl.startsWith('http://tmp'))) {
        const app = getApp();
        const openid = app.globalData.openid;
        const uploadRes = await wx.cloud.uploadFile({
          cloudPath: `avatars/${openid}_${Date.now()}.jpg`,
          filePath: avatarUrl
        });
        avatarUrl = uploadRes.fileID;
      }

      // 更新本地存储
      const loginInfo = wx.getStorageSync('userLoginInfo') || {};
      loginInfo.nickName = userInfo.nickName;
      loginInfo.avatarUrl = avatarUrl;
      wx.setStorageSync('userLoginInfo', loginInfo);

      // 更新全局数据
      const app = getApp();
      if (app.globalData.userInfo) {
        app.globalData.userInfo.nickName = userInfo.nickName;
        app.globalData.userInfo.avatarUrl = avatarUrl;
      }

      this.setData({
        'userInfo.avatarUrl': avatarUrl,
        hasChanged: false
      });

      wx.hideLoading();
      wx.showToast({ title: '已保存', icon: 'success' });
    } catch (err) {
      wx.hideLoading();
      console.error('保存失败:', err);
      wx.showToast({ title: '保存失败', icon: 'none' });
    }
  },

  loadStats() {
    const progress = storage.getUserProgress();
    const totalWords = Object.keys(progress).length;

    let masteredWords = 0;
    for (const wordId in progress) {
      if (progress[wordId].correct > progress[wordId].wrong) {
        masteredWords++;
      }
    }

    const checkInStreak = storage.getCheckInStreak();
    this.setData({ stats: { totalWords, masteredWords, checkInStreak } });
  },

  onLogout() {
    wx.showModal({
      title: '确认退出',
      content: '退出登录后需要重新登录，确定要退出吗？',
      success: (res) => {
        if (res.confirm) {
          getApp().logout();
        }
      }
    });
  }
});
