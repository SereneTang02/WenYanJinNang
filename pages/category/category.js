// pages/category/category.js
const { wordsData } = require('../../data/words.js');

Page({
  data: {
    categories: [
      {
        id: 1,
        name: '基础实词',
        icon: '📚',
        description: '适合初学者的常见实词',
        count: 9
      },
      {
        id: 2,
        name: '进阶实词',
        icon: '🎓',
        description: '难度较高的实词',
        count: 6
      },
      {
        id: 3,
        name: '动词类',
        icon: '⚡',
        description: '表示动作的实词',
        count: 3
      },
      {
        id: 4,
        name: '多义词',
        icon: '🌟',
        description: '具有多个含义的实词',
        count: 8
      }
    ]
  },

  selectCategory(e) {
    const category = e.currentTarget.dataset.category;
    wx.navigateTo({
      url: `/pages/study/study?mode=category&category=${category}`
    });
  }
});
