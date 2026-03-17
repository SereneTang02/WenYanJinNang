// pages/records/records.js
const storage = require('../../utils/storage.js');

Page({
  data: {
    errorWordsCount: 0,
    favoriteWordsCount: 0
  },

  onLoad() {
    this.loadCounts();
  },

  onShow() {
    this.loadCounts();
  },

  // 加载统计数据
  loadCounts() {
    const errorWords = storage.getCollectedWords();
    const favoriteWords = storage.getFavoriteWords();

    this.setData({
      errorWordsCount: errorWords.length,
      favoriteWordsCount: favoriteWords.length
    });
  },

  // 前往错题本
  goToErrorWords() {
    wx.navigateTo({
      url: '/pages/error-words/error-words'
    });
  },

  // 前往收藏本
  goToFavorites() {
    wx.navigateTo({
      url: '/pages/collection/collection'
    });
  }
});
