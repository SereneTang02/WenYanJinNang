// pages/login/login.js
Page({
  data: {
    loading: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile')
  },

  onLoad() {
    // 检查是否已经登录
    const app = getApp();
    if (app.globalData.isLoggedIn) {
      // 已登录，根据角色跳转
      this.navigateToHome(app.globalData.role);
    }
  },

  /**
   * 微信登录
   */
  async onWechatLogin() {
    if (this.data.loading) return;

    this.setData({ loading: true });

    try {
      // 1. 获取用户授权信息（头像、昵称）
      let userProfile = null;
      if (this.data.canIUseGetUserProfile) {
        try {
          const profileRes = await wx.getUserProfile({
            desc: '用于完善用户资料'
          });
          userProfile = profileRes.userInfo;
        } catch (err) {
          console.log('用户拒绝授权', err);
          wx.showToast({
            title: '需要授权才能登录',
            icon: 'none'
          });
          this.setData({ loading: false });
          return;
        }
      }

      // 2. 获取微信登录凭证
      const loginRes = await wx.login();
      if (!loginRes.code) {
        throw new Error('获取登录凭证失败');
      }

      // 3. 调用云函数登录
      wx.showLoading({ title: '登录中...' });

      const cloudRes = await wx.cloud.callFunction({
        name: 'login2',
        data: {
          code: loginRes.code,
          userProfile: userProfile
        }
      });

      wx.hideLoading();

      if (!cloudRes.result) {
        throw new Error('登录失败');
      }

      const { openid, userInfo, studentInfo, teacherInfo } = cloudRes.result;
      // login2 不直接返回 role，从 studentInfo/teacherInfo 推断
      const role = studentInfo ? 'student' : teacherInfo ? 'teacher' : null;

      // 4. 保存 openid 到全局
      const app = getApp();
      app.globalData.openid = openid;

      // 5. 检查用户是否已选择角色
      if (!role) {
        // 未选择角色，跳转到角色选择页
        wx.redirectTo({
          url: '/pages/role-select/role-select'
        });
      } else {
        // 已选择角色，保存用户信息并进入首页
        app.onLoginSuccess({
          openid,
          userInfo,
          role
        });

        // 根据角色跳转到不同首页
        this.navigateToHome(role);
      }
    } catch (err) {
      console.error('登录失败:', err);
      wx.hideLoading();
      wx.showModal({
        title: '登录失败',
        content: err.message || '请检查网络后重试',
        showCancel: false
      });
    } finally {
      this.setData({ loading: false });
    }
  },

  /**
   * 根据角色跳转到首页
   */
  navigateToHome(role) {
    if (role === 'teacher') {
      wx.redirectTo({ url: '/pages/teacher-home/teacher-home' });
    } else {
      // index 是 Tab 页，必须用 switchTab
      wx.switchTab({ url: '/pages/index/index' });
    }
  },

  /**
   * 查看用户协议
   */
  onViewAgreement() {
    wx.showModal({
      title: '用户协议',
      content: '这里是用户协议内容...\n\n1. 用户需遵守相关法律法规\n2. 保护个人信息安全\n3. 合理使用小程序功能',
      showCancel: false
    });
  }
});
