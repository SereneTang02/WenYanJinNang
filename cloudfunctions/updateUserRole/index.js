// cloudfunctions/updateUserRole/index.js
const cloud = require('wx-server-sdk');

// 初始化云开发环境
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

/**
 * 更新用户角色和信息
 */
exports.main = async (event, context) => {
  const { role, roleInfo } = event;
  const wxContext = cloud.getWXContext();
  const openid = wxContext.OPENID;

  console.log('更新用户角色，openid:', openid, 'role:', role);

  // 验证参数
  if (!role || (role !== 'student' && role !== 'teacher')) {
    return {
      success: false,
      error: '无效的角色类型'
    };
  }

  try {
    // 构造更新数据
    const updateData = {
      role: role,
      updatedAt: db.serverDate()
    };

    if (role === 'student') {
      // 学生信息
      updateData.studentInfo = {
        grade: roleInfo.grade || '',
        school: roleInfo.school || '',
        realName: roleInfo.realName || '',
        studentId: roleInfo.studentId || ''
      };
    } else if (role === 'teacher') {
      // 教师信息
      updateData.teacherInfo = {
        school: roleInfo.school || '',
        subject: roleInfo.subject || '语文',
        realName: roleInfo.realName || '',
        phone: roleInfo.phone || '',
        certificationStatus: 'approved',  // 暂时自动通过认证
        certificationImages: roleInfo.certificationImages || [],
        certifiedAt: db.serverDate()
      };
    }

    // 更新用户记录
    await db.collection('users').where({
      _openid: openid
    }).update({
      data: updateData
    });

    // 查询更新后的用户信息
    const userRes = await db.collection('users').where({
      _openid: openid
    }).get();

    if (userRes.data.length === 0) {
      throw new Error('用户不存在');
    }

    const userData = userRes.data[0];

    console.log('用户角色更新成功');

    return {
      success: true,
      ...userData
    };
  } catch (err) {
    console.error('更新用户角色失败:', err);
    return {
      success: false,
      error: err.message || '更新失败'
    };
  }
};
