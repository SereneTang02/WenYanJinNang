// pages/word-list/word-list.js
const { wordsData } = require('../../data/words.js');
const storage = require('../../utils/storage.js');
const { getTagLabel } = require('../../utils/tagMapper.js');

Page({
  data: {
    originalWords: [], // 原始数据
    filteredWords: [], // 过滤后的数据
    searchKey: '', // 搜索关键字
    selectedGrade: '全部', // 选中的年级
    selectedDifficulty: '全部', // 选中的难度
    gradeOptions: ['全部', '七上', '七下', '八上', '八下', '九上', '九下'],
    difficultyOptions: ['全部', '基础', '进阶', '提高'],
    userGrade: '', // 用户年级
  },

  onLoad() {
    // 获取用户年级
    const userGrade = storage.getUserGrade();

    // 如果没有设置年级，提示用户选择
    if (!userGrade) {
      this.showGradePicker();
    }

    this.setData({
      userGrade: userGrade,
      originalWords: wordsData,
      filteredWords: wordsData,
      selectedGrade: userGrade || '全部'
    });

    // 如果有用户年级，默认筛选本年级词
    if (userGrade) {
      this.filterWords();
    }
  },

  onShow() {
    // 每次显示页面时刷新词卡颜色（可能在练习后改变）
    this.updateWordsColor();
  },

  /**
   * 显示年级选择器
   */
  showGradePicker() {
    wx.showActionSheet({
      itemList: ['七上', '七下', '八上', '八下', '九上', '九下'],
      success: (res) => {
        const grade = ['七上', '七下', '八上', '八下', '九上', '九下'][res.tapIndex];
        storage.setUserGrade(grade);
        this.setData({
          userGrade: grade,
          selectedGrade: grade
        });
        this.filterWords();
      }
    });
  },

  /**
   * 更新词卡颜色
   */
  updateWordsColor() {
    const filteredWords = this.data.filteredWords.map(word => {
      return {
        ...word,
        colorLevel: storage.getWordColorLevel(word.id)
      };
    });
    this.setData({ filteredWords });
  },

  /**
   * 搜索框输入
   */
  onSearchInput(e) {
    this.setData({
      searchKey: e.detail.value
    });
    this.filterWords();
  },

  /**
   * 年级筛选
   */
  onGradeChange(e) {
    const grade = this.data.gradeOptions[e.detail.value];
    this.setData({
      selectedGrade: grade
    });
    this.filterWords();
  },

  /**
   * 难度筛选
   */
  onDifficultyChange(e) {
    const difficulty = this.data.difficultyOptions[e.detail.value];
    this.setData({
      selectedDifficulty: difficulty
    });
    this.filterWords();
  },

  /**
   * 过滤词列表
   */
  filterWords() {
    let words = [...this.data.originalWords];

    // 搜索关键字过滤
    if (this.data.searchKey) {
      const key = this.data.searchKey.toLowerCase();
      words = words.filter(word => {
        // 搜索词本身
        if (word.word.toLowerCase().includes(key)) {
          return true;
        }
        // 搜索拼音
        if (word.pinyin && word.pinyin.toLowerCase().includes(key)) {
          return true;
        }
        // 搜索义项
        if (word.meanings && word.meanings.some(m =>
          m.gloss && m.gloss.includes(key)
        )) {
          return true;
        }
        return false;
      });
    }

    // 年级过滤
    if (this.data.selectedGrade && this.data.selectedGrade !== '全部') {
      words = words.filter(word => word.grade === this.data.selectedGrade);
    }

    // 难度过滤
    if (this.data.selectedDifficulty && this.data.selectedDifficulty !== '全部') {
      words = words.filter(word => word.difficulty === this.data.selectedDifficulty);
    }

    // 添加颜色等级和标签转换
    words = words.map(word => {
      const displayTags = word.tags ? word.tags.map(tag => ({
        key: tag, // 拼音标签用于 class
        label: getTagLabel(tag) // 中文标签用于显示
      })) : [];

      return {
        ...word,
        displayTags: displayTags,
        colorLevel: storage.getWordColorLevel(word.id)
      };
    });

    this.setData({
      filteredWords: words
    });
  },

  /**
   * 点击词卡，跳转到详情页
   */
  onWordTap(e) {
    const wordId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/word-detail/word-detail?id=${wordId}`
    });
  },

  /**
   * 切换年级按钮点击
   */
  onChangeGrade() {
    this.showGradePicker();
  },

  /**
   * 重置筛选
   */
  onResetFilter() {
    this.setData({
      searchKey: '',
      selectedGrade: this.data.userGrade || '全部',
      selectedDifficulty: '全部'
    });
    this.filterWords();
  }
});
