// pages/error-words/error-words.js
const { wordsData } = require('../../data/words.js');
const storage = require('../../utils/storage.js');
const { getTagLabel } = require('../../utils/tagMapper.js');

Page({
  data: {
    errorWords: [], // 错题列表
    sortedErrorWords: [], // 排序后的错题
    totalErrorCount: 0, // 总错题数
  },

  onLoad() {
    this.loadErrorWords();
  },

  onShow() {
    // 每次显示时刷新错题列表（练习后可能有变化）
    this.loadErrorWords();
  },

  /**
   * 加载错题列表
   */
  loadErrorWords() {
    const progress = storage.getUserProgress();
    const errorWords = [];
    let totalErrorCount = 0;

    // 筛选出有错误的词
    Object.keys(progress).forEach(wordId => {
      const wordProgress = progress[wordId];
      if (wordProgress.wrong > 0) {
        const word = wordsData.find(w => w.id === parseInt(wordId));
        if (word) {
          const diff = wordProgress.wrong - wordProgress.correct;
          const colorLevel = storage.getWordColorLevel(parseInt(wordId));

          // 将标签转换为中文显示
          const displayTags = word.tags ? word.tags.map(tag => ({
            key: tag, // 拼音标签用于 class
            label: getTagLabel(tag) // 中文标签用于显示
          })) : [];

          errorWords.push({
            ...word,
            displayTags: displayTags, // 添加转换后的标签
            progress: wordProgress,
            diff: diff,
            colorLevel: colorLevel
          });

          totalErrorCount += wordProgress.wrong;
        }
      }
    });

    // 按错误差值倒序排序（错得最多的排在前面）
    errorWords.sort((a, b) => b.diff - a.diff);

    this.setData({
      errorWords: errorWords,
      sortedErrorWords: errorWords,
      totalErrorCount: totalErrorCount
    });
  },

  /**
   * 点击错题卡片，开始专项纠错练习
   */
  onWordTap(e) {
    const wordId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/practice/practice?wordId=${wordId}`
    });
  },

  /**
   * 查看词详情
   */
  onViewDetail(e) {
    const wordId = e.currentTarget.dataset.id;
    wx.stopPropagation(); // 阻止事件冒泡
    wx.navigateTo({
      url: `/pages/word-detail/word-detail?id=${wordId}`
    });
  },

  /**
   * 全部纠错练习
   */
  onPracticeAll() {
    if (this.data.errorWords.length === 0) {
      wx.showToast({
        title: '暂无错题',
        icon: 'none'
      });
      return;
    }

    const wordIds = this.data.errorWords.map(w => w.id);
    wx.navigateTo({
      url: `/pages/practice/practice?wordIds=${JSON.stringify(wordIds)}`
    });
  },

  /**
   * 重点纠错（只练习错误次数>=3的）
   */
  onPracticeFocus() {
    const focusWords = this.data.errorWords.filter(w => w.progress.wrong >= 3);

    if (focusWords.length === 0) {
      wx.showToast({
        title: '暂无重点错题',
        icon: 'none'
      });
      return;
    }

    const wordIds = focusWords.map(w => w.id);
    wx.navigateTo({
      url: `/pages/practice/practice?wordIds=${JSON.stringify(wordIds)}`
    });
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh() {
    this.loadErrorWords();
    wx.stopPullDownRefresh();
  }
});
