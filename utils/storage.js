// 本地存储工具类
const { wordsData } = require('../data/words.js');

/**
 * 获取随机实词（不重复）
 * @param {number} count 数量
 * @param {array} excludeIds 排除的ID
 */
function getRandomWords(count, excludeIds = []) {
  const availableWords = wordsData.filter(word => !excludeIds.includes(word.id));
  const shuffled = availableWords.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * 根据ID获取实词
 */
function getWordById(id) {
  return wordsData.find(word => word.id === id);
}

/**
 * 根据分类获取实词
 */
function getWordsByCategory(category) {
  return wordsData.filter(word => word.category === category);
}

/**
 * 根据难度获取实词
 */
function getWordsByDifficulty(difficulty) {
  return wordsData.filter(word => word.difficulty === difficulty);
}

/**
 * 获取学习统计
 */
function getStudyStats() {
  const studyRecords = wx.getStorageSync('studyRecords') || [];

  const totalStudied = new Set(studyRecords.map(r => r.wordId)).size;
  const totalWords = wordsData.length;
  const correctCount = studyRecords.filter(r => r.isCorrect).length;
  const totalAttempts = studyRecords.length;
  const accuracy = totalAttempts > 0 ? (correctCount / totalAttempts * 100).toFixed(1) : 0;

  // 获取最近7天的学习记录
  const sevenDaysAgo = new Date().getTime() - 7 * 24 * 60 * 60 * 1000;
  const recentRecords = studyRecords.filter(r => r.timestamp > sevenDaysAgo);

  // 按日期统计
  const dailyStats = {};
  recentRecords.forEach(record => {
    const date = new Date(record.timestamp).toLocaleDateString();
    if (!dailyStats[date]) {
      dailyStats[date] = { total: 0, correct: 0 };
    }
    dailyStats[date].total++;
    if (record.isCorrect) {
      dailyStats[date].correct++;
    }
  });

  return {
    totalWords,
    totalStudied,
    totalAttempts,
    correctCount,
    accuracy,
    progress: (totalStudied / totalWords * 100).toFixed(1),
    recentDays: Object.keys(dailyStats).length,
    dailyStats
  };
}

/**
 * 获取错题本
 */
function getCollectedWords() {
  const collectedIds = wx.getStorageSync('collectedWords') || [];
  return wordsData.filter(word => collectedIds.includes(word.id));
}

/**
 * 添加到错题本
 */
function addToCollection(wordId) {
  let collected = wx.getStorageSync('collectedWords') || [];
  if (!collected.includes(wordId)) {
    collected.push(wordId);
    wx.setStorageSync('collectedWords', collected);
    return true;
  }
  return false;
}

/**
 * 从错题本移除
 */
function removeFromCollection(wordId) {
  let collected = wx.getStorageSync('collectedWords') || [];
  const index = collected.indexOf(wordId);
  if (index > -1) {
    collected.splice(index, 1);
    wx.setStorageSync('collectedWords', collected);
    return true;
  }
  return false;
}

/**
 * 检查是否已收藏
 */
function isCollected(wordId) {
  const collected = wx.getStorageSync('collectedWords') || [];
  return collected.includes(wordId);
}

/**
 * 保存学习记录
 */
function saveStudyRecord(wordId, isCorrect) {
  let records = wx.getStorageSync('studyRecords') || [];
  records.push({
    wordId,
    isCorrect,
    timestamp: new Date().getTime()
  });
  wx.setStorageSync('studyRecords', records);
}

/**
 * 获取某个词的学习记录
 */
function getWordRecords(wordId) {
  const records = wx.getStorageSync('studyRecords') || [];
  return records.filter(r => r.wordId === wordId);
}

/**
 * 获取用户学习进度（新结构）
 * @returns {Object} userWordProgress 对象
 */
function getUserProgress() {
  try {
    return wx.getStorageSync('userWordProgress') || {};
  } catch (e) {
    console.error('读取学习进度失败:', e);
    return {};
  }
}

/**
 * 保存用户学习进度
 * @param {Object} progress - 学习进度对象
 */
function saveUserProgress(progress) {
  try {
    wx.setStorageSync('userWordProgress', progress);
  } catch (e) {
    console.error('保存学习进度失败:', e);
  }
}

/**
 * 更新单个词的学习进度
 * @param {number} wordId - 词ID
 * @param {boolean} isCorrect - 是否答对
 */
function updateWordProgress(wordId, isCorrect) {
  const progress = getUserProgress();

  if (!progress[wordId]) {
    progress[wordId] = {
      correct: 0,
      wrong: 0,
      lastReviewAt: new Date().toISOString(),
      nextReviewAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };
  }

  if (isCorrect) {
    progress[wordId].correct += 1;
  } else {
    progress[wordId].wrong += 1;
  }

  progress[wordId].lastReviewAt = new Date().toISOString();

  saveUserProgress(progress);
  return progress[wordId];
}

/**
 * 获取词卡的颜色等级（基于错题情况）
 * @param {number} wordId - 词ID
 * @returns {string} 颜色类名
 */
function getWordColorLevel(wordId) {
  const progress = getUserProgress();
  const wordProgress = progress[wordId];

  if (!wordProgress || wordProgress.wrong === 0) {
    return 'white'; // 未做错或未练习
  }

  const diff = wordProgress.wrong - wordProgress.correct;

  if (diff <= 0) {
    return 'white';
  } else if (diff <= 2) {
    return 'yellow'; // 浅黄
  } else {
    return 'orange'; // 橙/红
  }
}

/**
 * 获取用户年级
 * @returns {string} 用户年级，如 "七上"
 */
function getUserGrade() {
  try {
    return wx.getStorageSync('userGrade') || '';
  } catch (e) {
    console.error('读取用户年级失败:', e);
    return '';
  }
}

/**
 * 设置用户年级
 * @param {string} grade - 年级，如 "七上"
 */
function setUserGrade(grade) {
  try {
    wx.setStorageSync('userGrade', grade);
  } catch (e) {
    console.error('保存用户年级失败:', e);
  }
}

/**
 * 获取错题词列表（基于新的学习进度结构）
 * @returns {Array} 错题词ID数组
 */
function getWrongWords() {
  const progress = getUserProgress();
  const wrongWords = [];

  for (const wordId in progress) {
    const diff = progress[wordId].wrong - progress[wordId].correct;
    if (diff > 0) {
      wrongWords.push({
        wordId: parseInt(wordId),
        diff: diff,
        ...progress[wordId]
      });
    }
  }

  // 按错误差值降序排序
  wrongWords.sort((a, b) => b.diff - a.diff);
  return wrongWords;
}

/**
 * 获取今天的日期字符串（YYYY-MM-DD）
 */
function getTodayDateString() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

/**
 * 生成每日任务
 * @param {number} oldCount - 旧词（需要复习的）数量，默认6
 * @param {number} newCount - 新词数量，默认4
 * @returns {Object} 每日任务对象
 */
function generateDailyTask(oldCount = 6, newCount = 4) {
  const today = getTodayDateString();
  const progress = getUserProgress();
  const userGrade = getUserGrade();

  // 1. 从进度中筛选需要复习的旧词（nextReviewAt <= today）
  const oldWordIds = [];
  const todayTime = new Date(today).getTime();

  for (const wordId in progress) {
    const wordProgress = progress[wordId];
    const nextReviewTime = new Date(wordProgress.nextReviewAt).getTime();

    if (nextReviewTime <= todayTime) {
      oldWordIds.push(parseInt(wordId));
    }
  }

  // 按优先级排序（错误多的优先）
  oldWordIds.sort((a, b) => {
    const diffA = (progress[a].wrong || 0) - (progress[a].correct || 0);
    const diffB = (progress[b].wrong || 0) - (progress[b].correct || 0);
    return diffB - diffA;
  });

  // 取前X个
  const selectedOldWords = oldWordIds.slice(0, oldCount);

  // 2. 从词库中筛选新词（未练习过的，优先选择用户年级的词）
  const practicedIds = Object.keys(progress).map(id => parseInt(id));
  let availableNewWords = wordsData.filter(w => !practicedIds.includes(w.id));

  // 优先选择本年级的词
  if (userGrade) {
    const gradeWords = availableNewWords.filter(w => w.grade === userGrade);
    if (gradeWords.length >= newCount) {
      availableNewWords = gradeWords;
    }
  }

  // 优先选择高频词和核心词
  availableNewWords.sort((a, b) => {
    const scoreA = (a.frequencyLevel || 0) + (a.tags?.includes('zhong-kao-gao-pin') ? 10 : 0);
    const scoreB = (b.frequencyLevel || 0) + (b.tags?.includes('zhong-kao-gao-pin') ? 10 : 0);
    return scoreB - scoreA;
  });

  // 随机选择newCount个新词
  const shuffled = availableNewWords.sort(() => Math.random() - 0.5);
  const selectedNewWords = shuffled.slice(0, newCount).map(w => w.id);

  // 3. 合并成今日任务
  const dailyWordIds = [...selectedOldWords, ...selectedNewWords];

  // 4. 保存到本地存储
  const dailyTask = {
    date: today,
    wordIds: dailyWordIds,
    oldWordCount: selectedOldWords.length,
    newWordCount: selectedNewWords.length,
    totalCount: dailyWordIds.length,
    finishedCount: 0,
    isCompleted: false,
    createdAt: new Date().toISOString()
  };

  setStorage('dailyTask', dailyTask);
  setStorage('dailyTaskDate', today);

  return dailyTask;
}

/**
 * 获取今日任务
 * @param {boolean} autoGenerate - 如果今日任务不存在，是否自动生成，默认true
 * @returns {Object|null} 今日任务对象
 */
function getDailyTask(autoGenerate = true) {
  const today = getTodayDateString();
  const savedDate = getStorage('dailyTaskDate');

  // 检查是否是今天的任务
  if (savedDate === today) {
    const dailyTask = getStorage('dailyTask');
    if (dailyTask) {
      return dailyTask;
    }
  }

  // 如果不是今天的任务，且需要自动生成
  if (autoGenerate) {
    return generateDailyTask();
  }

  return null;
}

/**
 * 更新每日任务进度
 * @param {number} finishedCount - 已完成题数
 */
function updateDailyTaskProgress(finishedCount) {
  const dailyTask = getDailyTask(false);
  if (!dailyTask) {
    return;
  }

  dailyTask.finishedCount = finishedCount;
  dailyTask.isCompleted = finishedCount >= dailyTask.totalCount;

  if (dailyTask.isCompleted) {
    dailyTask.completedAt = new Date().toISOString();
    // 更新打卡记录
    updateCheckInRecord();
  }

  setStorage('dailyTask', dailyTask);
}

/**
 * 获取每日任务完成进度
 * @returns {Object} 进度信息
 */
function getDailyTaskProgress() {
  const dailyTask = getDailyTask(false);

  if (!dailyTask) {
    return {
      hasTask: false,
      finishedCount: 0,
      totalCount: 0,
      progress: 0,
      isCompleted: false
    };
  }

  return {
    hasTask: true,
    finishedCount: dailyTask.finishedCount,
    totalCount: dailyTask.totalCount,
    progress: dailyTask.totalCount > 0
      ? Math.round((dailyTask.finishedCount / dailyTask.totalCount) * 100)
      : 0,
    isCompleted: dailyTask.isCompleted,
    wordIds: dailyTask.wordIds
  };
}

/**
 * 更新打卡记录（连续打卡天数）
 */
function updateCheckInRecord() {
  const today = getTodayDateString();
  let checkInRecords = getStorage('checkInRecords') || [];

  // 如果今天还没有打卡记录，添加
  if (!checkInRecords.includes(today)) {
    checkInRecords.push(today);
    checkInRecords.sort(); // 按日期排序
    setStorage('checkInRecords', checkInRecords);
  }
}

/**
 * 获取连续打卡天数
 * @returns {number} 连续打卡天数
 */
function getCheckInStreak() {
  const checkInRecords = getStorage('checkInRecords') || [];

  if (checkInRecords.length === 0) {
    return 0;
  }

  // 从今天开始往前数，看连续了几天
  let streak = 0;
  const today = new Date();

  for (let i = 0; i < 365; i++) { // 最多查365天
    const checkDate = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
    const dateString = checkDate.toISOString().split('T')[0];

    if (checkInRecords.includes(dateString)) {
      streak++;
    } else {
      break; // 遇到未打卡的日期，中断
    }
  }

  return streak;
}

/**
 * 通用存储方法
 */
function getStorage(key) {
  try {
    return wx.getStorageSync(key);
  } catch (e) {
    console.error('读取存储失败:', key, e);
    return null;
  }
}

function setStorage(key, value) {
  try {
    wx.setStorageSync(key, value);
  } catch (e) {
    console.error('保存存储失败:', key, e);
  }
}

module.exports = {
  getRandomWords,
  getWordById,
  getWordsByCategory,
  getWordsByDifficulty,
  getStudyStats,
  getCollectedWords,
  addToCollection,
  removeFromCollection,
  isCollected,
  saveStudyRecord,
  getWordRecords,
  // 新增功能
  getUserProgress,
  saveUserProgress,
  updateWordProgress,
  getWordColorLevel,
  getUserGrade,
  setUserGrade,
  getWrongWords,
  // 每日任务功能
  generateDailyTask,
  getDailyTask,
  updateDailyTaskProgress,
  getDailyTaskProgress,
  getCheckInStreak,
  getStorage,
  setStorage
};
