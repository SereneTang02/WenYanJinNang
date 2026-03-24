// pages/records/records.js
const storage = require('../../utils/storage.js');

Page({
  data: {
    errorWordsCount: 0,
    favoriteWordsCount: 0,
    totalStudied: 0
  },

  onLoad() {
    this.loadData();
  },

  onShow() {
    this.loadData();
  },

  loadData() {
    const errorWords = storage.getCollectedWords();
    const favoriteWords = storage.getFavoriteWords();
    const stats = storage.getStudyStats();

    this.setData({
      errorWordsCount: errorWords.length,
      favoriteWordsCount: favoriteWords.length,
      totalStudied: stats.totalStudied
    });
  },

  goToErrorWords() {
    wx.navigateTo({ url: '/pages/error-words/error-words' });
  },

  goToFavorites() {
    wx.navigateTo({ url: '/pages/collection/collection' });
  },

  goToWordList() {
    wx.navigateTo({ url: '/pages/word-list/word-list' });
  }
});
