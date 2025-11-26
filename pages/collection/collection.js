// pages/collection/collection.js
const { wordsData } = require('../../data/words.js');
const { removeFromCollection } = require('../../utils/storage.js');

Page({
  data: {
    collectedWords: []
  },

  onLoad() {
    this.loadCollection();
  },

  onShow() {
    this.loadCollection();
  },

  // 加载收藏的实词
  loadCollection() {
    const collectedIds = wx.getStorageSync('collectedWords') || [];
    const collectedWords = wordsData.filter(word => collectedIds.includes(word.id));

    this.setData({
      collectedWords
    });
  },

  // 开始复习收藏的实词
  studyCollection() {
    wx.navigateTo({
      url: '/pages/study/study?mode=collection'
    });
  },

  // 查看实词详情
  showDetail(e) {
    const word = e.currentTarget.dataset.word;

    let detailText = `${word.word} (${word.pinyin})\n\n`;
    detailText += `词性：${word.category}\n\n`;
    detailText += `义项：\n`;
    word.meanings.forEach((m, index) => {
      detailText += `${index + 1}. ${m.meaning}\n`;
      detailText += `   例：${m.example}\n\n`;
    });

    wx.showModal({
      title: word.word,
      content: detailText,
      showCancel: false,
      confirmText: '知道了'
    });
  },

  // 移除收藏
  removeWord(e) {
    const wordId = e.currentTarget.dataset.id;

    wx.showModal({
      title: '确认移除',
      content: '确定要从错题本中移除这个实词吗？',
      success: (res) => {
        if (res.confirm) {
          removeFromCollection(wordId);
          this.loadCollection();
          wx.showToast({
            title: '已移除',
            icon: 'success'
          });
        }
      }
    });
  }
});
