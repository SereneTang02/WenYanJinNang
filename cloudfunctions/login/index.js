// cloudfunctions/login/index.js
const cloud = require('wx-server-sdk');

// 初始化云开发环境
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

/**
 * 微信登录云函数
 * 获取用户 openid，创建或更新用户记录
 */
exports.main = async (event, context) => {
  const { code, userProfile } = event;
  const wxContext = cloud.getWXContext();
  const openid = wxContext.OPENID;

  console.log('用户登录，openid:', openid);

  try {
    // 查询用户是否已存在
    const userRes = await db.collection('users').where({
      _openid: openid
    }).get();

    let userData;

    if (userRes.data.length === 0) {
      // 新用户，创建记录
      console.log('新用户注册');

      const createRes = await db.collection('users').add({
        data: {
          _openid: openid,
          userInfo: {
            nickName: userProfile?.nickName || '',
            avatarUrl: userProfile?.avatarUrl || ''
          },
          role: null,  // 待选择角色
          stats: {
            totalPracticeCount: 0,
            totalCheckInDays: 0,
            checkInStreak: 0,
            joinedClassCount: 0,
            createdClassCount: 0
          },
          createdAt: db.serverDate(),
          lastLoginAt: db.serverDate()
        }
      });

      userData = {
        _id: createRes._id,
        _openid: openid,
        userInfo: {
          nickName: userProfile?.nickName || '',
          avatarUrl: userProfile?.avatarUrl || ''
        },
        role: null
      };
    } else {
      // 老用户，更新最后登录时间和用户信息
      console.log('老用户登录');
      userData = userRes.data[0];

      // 如果有新的用户信息，更新
      const updateData = {
        lastLoginAt: db.serverDate()
      };

      if (userProfile) {
        updateData['userInfo.nickName'] = userProfile.nickName;
        updateData['userInfo.avatarUrl'] = userProfile.avatarUrl;
        userData.userInfo = {
          nickName: userProfile.nickName,
          avatarUrl: userProfile.avatarUrl
        };
      }

      await db.collection('users').doc(userData._id).update({
        data: updateData
      });
    }

    return {
      success: true,
      openid: openid,
      userInfo: userData.userInfo || {},
      role: userData.role
    };
  } catch (err) {
    console.error('登录失败:', err);
    return {
      success: false,
      error: err.message || '登录失败'
    };
  }
};
