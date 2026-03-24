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
  onSelectStudent() {
    if (this.data.loading) return;

    wx.navigateTo({
      url: '/pages/student-info/student-info'
    });
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
