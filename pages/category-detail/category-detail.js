// pages/category-detail/category-detail.js
const { getCategoryStats } = require('../../utils/storage.js');
const { CATEGORY_CONFIG } = require('../../data/category-config.js');

Page({
  data: {
    categoryId: '',
    categoryName: '',
    secondaryCategories: []
  },

  onLoad(options) {
    const categoryId = options.categoryId;
    const primaryCat = CATEGORY_CONFIG.primaryCategories.find(c => c.id === categoryId);

    if (!primaryCat) {
      wx.showToast({ title: '分类不存在', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 1500);
      return;
    }

    const stats = getCategoryStats();
    const secondaryConfig = CATEGORY_CONFIG.secondaryCategories[categoryId] || [];

    const secondaryCategories = secondaryConfig.map(item => {
      let count = 0;

      if (categoryId === 'grade') {
        count = stats.grade[item.value] || 0;
      } else if (categoryId === 'difficulty') {
        count = stats.difficulty[item.value] || 0;
      } else if (categoryId === 'partOfSpeech') {
        count = stats.partOfSpeech[item.value] || 0;
      }

      return { ...item, count: count };
    });

    this.setData({
      categoryId,
      categoryName: primaryCat.name,
      secondaryCategories: secondaryCategories
    });
  },

  selectSecondaryCategory(e) {
    const { value } = e.currentTarget.dataset;
    const { categoryId } = this.data;

    let url = `/pages/study/study?mode=category&categoryType=${categoryId}&categoryValue=${value}`;
    wx.navigateTo({ url });
  },

  onBack() {
    wx.navigateBack();
  }
});
