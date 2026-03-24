// pages/student-info/student-info.js
Page({
  data: {
    grade: '',
    gradeOptions: ['七上', '七下', '八上', '八下', '九上', '九下'],
    gradeIndex: 0,
    school: '',
    realName: '',
    studentId: '',
    loading: false
  },

  onLoad(options) {
    // 从URL参数获取预选的年级
    if (options.grade) {
      const gradeIndex = this.data.gradeOptions.indexOf(options.grade);
      this.setData({
        grade: options.grade,
        gradeIndex: gradeIndex >= 0 ? gradeIndex : 0
      });
    }
  },

  /**
   * 年级选择
   */
  onGradeChange(e) {
    const index = parseInt(e.detail.value);
    this.setData({
      gradeIndex: index,
      grade: this.data.gradeOptions[index]
    });
  },

  /**
   * 输入学校
   */
  onSchoolInput(e) {
    this.setData({
      school: e.detail.value
    });
  },

  /**
   * 输入真实姓名
   */
  onRealNameInput(e) {
    this.setData({
      realName: e.detail.value
    });
  },

  /**
   * 输入学号
   */
  onStudentIdInput(e) {
    this.setData({
      studentId: e.detail.value
    });
  },

  /**
   * 提交信息
   */
  async onSubmit() {
    if (this.data.loading) return;

    // 验证必填项
    if (!this.data.grade) {
      wx.showToast({
        title: '请选择年级',
        icon: 'none'
      });
      return;
    }

    this.setData({ loading: true });
    wx.showLoading({ title: '提交中...' });

    try {
      // 调用云函数更新用户角色
      const res = await wx.cloud.callFunction({
        name: 'updateUserRole2',
        data: {
          role: 'student',
          roleInfo: {
            grade: this.data.grade,
            school: this.data.school,
            realName: this.data.realName,
            studentId: this.data.studentId
          }
        }
      });

      wx.hideLoading();

      if (!res.result) {
        throw new Error('提交失败');
      }

      const userInfo = res.result;

      // 保存用户信息到全局
      const app = getApp();
      app.onLoginSuccess(userInfo);

      // 保存年级到本地存储
      const storage = require('../../utils/storage.js');
      storage.setUserGrade(this.data.grade);

      // 检测本地是否有学习进度数据
      const hasLocalProgress = this.checkLocalProgress();

      if (hasLocalProgress) {
        // 提示用户是否上传
        wx.showModal({
          title: '检测到本地学习记录',
          content: '是否上传到云端保存？',
          confirmText: '上传',
          cancelText: '跳过',
          success: async (modalRes) => {
            if (modalRes.confirm) {
              await this.syncLocalProgress();
            }
            this.navigateToHome();
          }
        });
      } else {
        this.navigateToHome();
      }
    } catch (err) {
      console.error('提交失败:', err);
      wx.hideLoading();
      wx.showToast({
        title: err.message || '提交失败，请重试',
        icon: 'none'
      });
    } finally {
      this.setData({ loading: false });
    }
  },

  /**
   * 检查本地是否有学习进度数据
   */
  checkLocalProgress() {
    const storage = require('../../utils/storage.js');
    const progress = storage.getUserProgress();
    return Object.keys(progress).length > 0;
  },

  /**
   * 同步本地进度到云端
   */
  async syncLocalProgress() {
    try {
      wx.showLoading({ title: '上传中...' });

      const storage = require('../../utils/storage.js');
      const progress = storage.getUserProgress();

      await wx.cloud.callFunction({
        name: 'syncProgress2',
        data: {
          wordProgress: progress
        }
      });

      wx.hideLoading();
      wx.showToast({
        title: '上传成功',
        icon: 'success'
      });
    } catch (err) {
      console.error('上传失败:', err);
      wx.hideLoading();
    }
  },

  /**
   * 跳转到首页
   */
  navigateToHome() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  }
});
