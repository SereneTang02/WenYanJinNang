// pages/category/category.js
const { wordsData } = require('../../data/words.js');

Page({
  data: {
    categories: []
  },

  onLoad() {
    this.buildCategories();
  },

  buildCategories() {
    const gradeMap = [
      { grade: '七上', name: '七年级上册' },
      { grade: '七下', name: '七年级下册' },
      { grade: '八上', name: '八年级上册' },
      { grade: '八下', name: '八年级下册' },
      { grade: '九上', name: '九年级上册' },
      { grade: '九下', name: '九年级下册' }
    ];

    const categories = gradeMap.map(item => {
      const count = wordsData.filter(w => w.grade === item.grade).length;
      return {
        grade: item.grade,
        name: item.name,
        count
      };
    });

    this.setData({ categories });
  },

  selectCategory(e) {
    const grade = e.currentTarget.dataset.grade;
    wx.navigateTo({
      url: `/pages/study/study?mode=category&category=${grade}`
    });
  }
});
