// pages/role-select/role-select.js
Page({
  data: {
    gradeOptions: ['七上', '七下', '八上', '八下', '九上', '九下'],
    selectedRole: null,
    loading: false
  },

  /**
   * 选择学生角色
   */
  async onSelectStudent() {
    if (this.data.loading) return;

    // 显示年级选择器
    try {
      const res = await wx.showActionSheet({
        itemList: this.data.gradeOptions
      });

      const grade = this.data.gradeOptions[res.tapIndex];

      // 跳转到学生信息填写页，携带年级参数
      wx.navigateTo({
        url: `/pages/student-info/student-info?grade=${grade}`
      });
    } catch (err) {
      // 用户取消选择
      console.log('用户取消选择年级');
    }
  },

  /**
   * 选择教师角色
   */
  onSelectTeacher() {
    if (this.data.loading) return;

    // 跳转到教师信息填写页
    wx.navigateTo({
      url: '/pages/teacher-info/teacher-info'
    });
  }
});
