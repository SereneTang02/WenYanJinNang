// pages/teacher-info/teacher-info.js
Page({
  data: {
    school: '',
    realName: '',
    subject: '语文',
    subjectOptions: ['语文', '数学', '英语', '其他'],
    subjectIndex: 0,
    phone: '',
    certificationImages: [],
    loading: false
  },

  /**
   * 科目选择
   */
  onSubjectChange(e) {
    const index = parseInt(e.detail.value);
    this.setData({
      subjectIndex: index,
      subject: this.data.subjectOptions[index]
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
   * 输入手机号
   */
  onPhoneInput(e) {
    this.setData({
      phone: e.detail.value
    });
  },

  /**
   * 上传教师资格证
   */
  async onUploadCertification() {
    try {
      const res = await wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera']
      });

      const tempFilePath = res.tempFilePaths[0];

      // 上传到云存储
      wx.showLoading({ title: '上传中...' });

      const cloudPath = `certifications/${Date.now()}-${Math.random().toString(36).substr(2)}.jpg`;
      const uploadRes = await wx.cloud.uploadFile({
        cloudPath: cloudPath,
        filePath: tempFilePath
      });

      wx.hideLoading();

      // 保存文件ID
      const images = [...this.data.certificationImages, uploadRes.fileID];
      this.setData({
        certificationImages: images
      });

      wx.showToast({
        title: '上传成功',
        icon: 'success'
      });
    } catch (err) {
      console.error('上传失败:', err);
      wx.hideLoading();
      wx.showToast({
        title: '上传失败',
        icon: 'none'
      });
    }
  },

  /**
   * 删除已上传的图片
   */
  onDeleteImage(e) {
    const index = e.currentTarget.dataset.index;
    const images = this.data.certificationImages.filter((_, i) => i !== index);
    this.setData({
      certificationImages: images
    });
  },

  /**
   * 预览图片
   */
  onPreviewImage(e) {
    const index = e.currentTarget.dataset.index;
    wx.previewImage({
      urls: this.data.certificationImages,
      current: this.data.certificationImages[index]
    });
  },

  /**
   * 提交信息
   */
  async onSubmit() {
    if (this.data.loading) return;

    // 验证必填项
    if (!this.data.school || !this.data.school.trim()) {
      wx.showToast({
        title: '请输入学校名称',
        icon: 'none'
      });
      return;
    }

    if (!this.data.realName || !this.data.realName.trim()) {
      wx.showToast({
        title: '请输入真实姓名',
        icon: 'none'
      });
      return;
    }

    // 验证手机号（如果填写了）
    if (this.data.phone && !/^1[3-9]\d{9}$/.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      });
      return;
    }

    this.setData({ loading: true });
    wx.showLoading({ title: '提交中...' });

    try {
      // 调用云函数更新用户角色
      const res = await wx.cloud.callFunction({
        name: 'updateUserRole',
        data: {
          role: 'teacher',
          roleInfo: {
            school: this.data.school.trim(),
            subject: this.data.subject,
            realName: this.data.realName.trim(),
            phone: this.data.phone,
            certificationImages: this.data.certificationImages
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

      // 显示成功提示
      wx.showModal({
        title: '提交成功',
        content: '欢迎使用教师端功能！',
        showCancel: false,
        success: () => {
          // 跳转到教师端首页（暂时跳转到普通首页）
          wx.redirectTo({
            url: '/pages/index/index'
          });
        }
      });
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
  }
});
