// cloudfunctions/syncProgress/index.js
const cloud = require('wx-server-sdk');

// 初始化云开发环境
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

/**
 * 同步学习进度到云端
 */
exports.main = async (event, context) => {
  const { wordProgress } = event;
  const wxContext = cloud.getWXContext();
  const openid = wxContext.OPENID;

  console.log('同步学习进度，openid:', openid);

  if (!wordProgress || typeof wordProgress !== 'object') {
    return {
      success: false,
      error: '无效的学习进度数据'
    };
  }

  try {
    // 查询是否已有进度记录
    const progressRes = await db.collection('user_progress').where({
      _openid: openid
    }).get();

    const now = db.serverDate();

    if (progressRes.data.length === 0) {
      // 新建进度记录
      console.log('创建新的学习进度记录');

      await db.collection('user_progress').add({
        data: {
          _openid: openid,
          wordProgress: wordProgress,
          dailyTasks: {},
          checkInRecords: [],
          totalWords: Object.keys(wordProgress).length,
          masteredWords: 0,
          lastSyncAt: now,
          updatedAt: now
        }
      });
    } else {
      // 更新现有记录（合并数据）
      console.log('更新现有学习进度记录');

      const existingProgress = progressRes.data[0].wordProgress || {};

      // 合并学习进度（以最新数据为准）
      const mergedProgress = { ...existingProgress };

      for (const wordId in wordProgress) {
        const localData = wordProgress[wordId];
        const cloudData = existingProgress[wordId];

        if (!cloudData) {
          // 云端没有，直接使用本地数据
          mergedProgress[wordId] = localData;
        } else {
          // 都有数据，比较时间戳，使用最新的
          const localTime = new Date(localData.lastReviewAt || 0).getTime();
          const cloudTime = new Date(cloudData.lastReviewAt || 0).getTime();

          mergedProgress[wordId] = localTime > cloudTime ? localData : cloudData;
        }
      }

      await db.collection('user_progress').doc(progressRes.data[0]._id).update({
        data: {
          wordProgress: mergedProgress,
          totalWords: Object.keys(mergedProgress).length,
          lastSyncAt: now,
          updatedAt: now
        }
      });
    }

    console.log('学习进度同步成功');

    return {
      success: true,
      message: '同步成功'
    };
  } catch (err) {
    console.error('同步学习进度失败:', err);
    return {
      success: false,
      error: err.message || '同步失败'
    };
  }
};
