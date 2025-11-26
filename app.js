// app.js
App({
  globalData: {
    userInfo: null,
    openid: null,           // 用户openid
    role: null,             // 用户角色：student | teacher
    isLoggedIn: false,      // 是否已登录
    studyRecords: [],       // 学习记录
    collectedWords: []      // 收藏的错题
  },

  onLaunch() {
    // 初始化云开发环境
    if (wx.cloud) {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'cloud1-9gbrpf52dc553fa7',  // 请替换为你的云开发环境ID
        traceUser: true
      });
    }

    // 初始化本地存储数据
    this.initStorage();

    // 检查登录状态
    this.checkLoginStatus();
  },

  initStorage() {
    // 获取学习记录
    const studyRecords = wx.getStorageSync('studyRecords');
    if (studyRecords) {
      this.globalData.studyRecords = studyRecords;
    }

    // 获取收藏的错题
    const collectedWords = wx.getStorageSync('collectedWords');
    if (collectedWords) {
      this.globalData.collectedWords = collectedWords;
    }
  },

  // 保存学习记录
  saveStudyRecord(wordId, isCorrect) {
    const record = {
      wordId: wordId,
      isCorrect: isCorrect,
      timestamp: new Date().getTime()
    };

    this.globalData.studyRecords.push(record);
    wx.setStorageSync('studyRecords', this.globalData.studyRecords);
  },

  // 添加到错题本
  addToCollection(word) {
    const exists = this.globalData.collectedWords.find(w => w.id === word.id);
    if (!exists) {
      this.globalData.collectedWords.push(word);
      wx.setStorageSync('collectedWords', this.globalData.collectedWords);
    }
  },

  // 从错题本移除
  removeFromCollection(wordId) {
    this.globalData.collectedWords = this.globalData.collectedWords.filter(w => w.id !== wordId);
    wx.setStorageSync('collectedWords', this.globalData.collectedWords);
  },

  /**
   * 检查登录状态
   */
  checkLoginStatus() {
    const loginInfo = wx.getStorageSync('userLoginInfo');

    if (loginInfo && loginInfo.openid) {
      // 有登录信息，自动登录
      console.log('检测到登录信息，自动登录');
      this.globalData.userInfo = loginInfo;
      this.globalData.openid = loginInfo.openid;
      this.globalData.role = loginInfo.role;
      this.globalData.isLoggedIn = true;
    } else {
      // 没有登录信息，需要登录
      console.log('未登录，跳转到登录页');
      this.globalData.isLoggedIn = false;
      // 注意：不要在 onLaunch 中直接跳转，应该在页面的 onLoad 中检测并跳转
    }
  },

  /**
   * 登录成功后保存用户信息
   */
  onLoginSuccess(userInfo) {
    this.globalData.userInfo = userInfo;
    this.globalData.openid = userInfo.openid || userInfo._openid;
    this.globalData.role = userInfo.role;
    this.globalData.isLoggedIn = true;

    // 保存到本地存储
    wx.setStorageSync('userLoginInfo', {
      openid: userInfo.openid || userInfo._openid,
      role: userInfo.role,
      nickName: userInfo.userInfo?.nickName || '',
      avatarUrl: userInfo.userInfo?.avatarUrl || '',
      lastLoginAt: new Date().toISOString()
    });

    console.log('登录成功，用户角色:', userInfo.role);
  },

  /**
   * 退出登录
   */
  logout() {
    this.globalData.userInfo = null;
    this.globalData.openid = null;
    this.globalData.role = null;
    this.globalData.isLoggedIn = false;

    wx.removeStorageSync('userLoginInfo');

    console.log('已退出登录');

    // 跳转到登录页
    wx.redirectTo({
      url: '/pages/login/login'
    });
  }
})
