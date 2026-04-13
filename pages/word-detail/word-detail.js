// pages/word-detail/word-detail.js
const { wordsData } = require('../../data/words.js');
const storage = require('../../utils/storage.js');
const { getTagLabel } = require('../../utils/tagMapper.js');

Page({
  data: {
    currentWord: null, // 当前词条
    wordId: 0,
    colorLevel: 'white', // 词卡颜色等级
    progress: null, // 学习进度
  },

  onLoad(options) {
    const wordId = parseInt(options.id);

    if (!wordId) {
      wx.showToast({
        title: '参数错误',
        icon: 'none'
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
      return;
    }

    // 查找词条
    const word = wordsData.find(w => w.id === wordId);

    if (!word) {
      wx.showToast({
        title: '未找到该词',
        icon: 'none'
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
      return;
    }

    // 获取学习进度
    const allProgress = storage.getUserProgress();
    const progress = allProgress[wordId] || {
      correct: 0,
      wrong: 0
    };

    // 计算正确率
    const total = progress.correct + progress.wrong;
    progress.rate = total > 0 ? Math.round((progress.correct / total) * 100) : 0;

    // 获取颜色等级
    const colorLevel = storage.getWordColorLevel(wordId);

    // 将标签转换为中文显示
    const displayTags = word.tags ? word.tags.map(tag => ({
      key: tag, // 拼音标签用于 class
      label: getTagLabel(tag) // 中文标签用于显示
    })) : [];

    this.setData({
      currentWord: {
        ...word,
        displayTags: displayTags
      },
      wordId: wordId,
      progress: progress,
      colorLevel: colorLevel
    });
  },

  /**
   * 用这个词开始练习
   */
  onStartPractice() {
    wx.navigateTo({
      url: `/pages/practice/practice?wordId=${this.data.wordId}`
    });
  },

  /**
   * 加入今日任务
   */
  onAddToDaily() {
    const today = new Date().toISOString().split('T')[0];
    let dailyWords = storage.getStorage('dailyWords_' + today) || [];

    if (dailyWords.includes(this.data.wordId)) {
      wx.showToast({
        title: '已在今日任务中',
        icon: 'none'
      });
      return;
    }

    dailyWords.push(this.data.wordId);
    storage.setStorage('dailyWords_' + today, dailyWords);

    wx.showToast({
      title: '已加入今日任务',
      icon: 'success'
    });
  },

  /**
   * 分享
   */
  onShareAppMessage() {
    return {
      title: `文言实词：${this.data.currentWord.word}`,
      path: `/pages/word-detail/word-detail?id=${this.data.wordId}`
    };
  },

  /**
   * 预览例句来源
   */
  onPreviewSource(e) {
    const source = e.currentTarget.dataset.source;
    if (!source) return;

    wx.showModal({
      title: '课文出处',
      content: source,
      showCancel: false
    });
  }
});
