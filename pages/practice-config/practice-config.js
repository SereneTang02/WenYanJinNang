// pages/practice-config/practice-config.js
const { wordsData } = require('../../data/words.js');
const { CATEGORY_CONFIG } = require('../../data/category-config.js');
const storage = require('../../utils/storage.js');

Page({
  data: {
    // ============ 题型配置 ============
    questionTypes: [
      { id: 'choice', label: '选择题', icon: '✓', desc: '给出例句和4个选项', selected: true },
      { id: 'fillBlank', label: '填空题', icon: '✏', desc: '填写实词的释义', selected: false },
      { id: 'judge', label: '判断题', icon: '?', desc: '判断释义是否匹配', selected: false }
    ],
    selectedTypes: ['choice'], // 默认选中选择题

    // ============ 题目数量 ============
    questionCount: 20,
    minCount: 5,
    maxCount: 50,

    // ============ 实词选择方式 ============
    selectionMode: 'category', // 默认按分类选择
    selectionModes: [
      { id: 'category', label: '按分类', icon: '📂', desc: '选择年级/词性/难度' },
      { id: 'random', label: '随机', icon: '🎲', desc: '随机选择指定数量' },
      { id: 'errorBook', label: '错题本', icon: '📕', desc: '选择答错过的实词' },
      { id: 'manual', label: '手动', icon: '☑', desc: '逐个勾选实词' }
    ],

    // ============ 按分类选择 ============
    primaryCategories: [],
    primaryOptions: [],
    selectedPrimaryIndex: 0,
    selectedPrimaryId: '',
    selectedPrimaryLabel: '请选择分类',
    secondaryCategories: [],
    secondaryOptions: [],
    selectedSecondaryIndex: 0,
    selectedSecondaryValue: '',
    selectedSecondaryLabel: '请选择',
    categoryWordCount: 0,

    // ============ 随机选择 ============
    randomCount: 10,

    // ============ 错题本选择 ============
    errorWords: [],
    errorWordCount: 0,
    selectAllError: false,

    // ============ 手动勾选 ============
    allWords: [],
    selectedWordIds: [],
    searchKey: '',
    showWordSelector: false,
    selectAllManual: false,

    // ============ UI状态 ============
    canStartPractice: false,
    dataReady: false  // 数据是否加载完成
  },

  onLoad(options) {
    // onLoad 中不执行 initData
  },

  onReady() {
    // 在 onReady 中初始化数据，确保页面完全准备好
    this.initData();
  },

  // 初始化数据
  initData() {
    // 初始化所有实词
    const allWords = wordsData.map(word => ({
      ...word,
      selected: false
    }));

    // 加载分类配置
    const primaryCategories = CATEGORY_CONFIG.primaryCategories;
    const primaryOptions = primaryCategories.map(cat => ({
      value: cat.id,
      label: cat.name
    }));

    // 默认加载第一个主分类的数据（如果存在）
    let selectedPrimaryIndex = 0;
    let selectedPrimaryId = '';
    let selectedPrimaryLabel = '请选择分类';
    let secondaryCategories = [];
    let secondaryOptions = [];
    let selectedSecondaryIndex = 0;
    let selectedSecondaryValue = '';
    let selectedSecondaryLabel = '请选择';
    let categoryWordCount = 0;

    if (primaryOptions.length > 0) {
      selectedPrimaryId = primaryOptions[0].value;
      selectedPrimaryLabel = primaryOptions[0].label;
      secondaryCategories = CATEGORY_CONFIG.secondaryCategories[selectedPrimaryId] || [];
      secondaryOptions = secondaryCategories.map(cat => ({
        value: cat.value,
        label: cat.label
      }));

      // 如果有二级分类，默认选中第一个并计算词数
      if (secondaryOptions.length > 0) {
        selectedSecondaryValue = secondaryOptions[0].value;
        selectedSecondaryLabel = secondaryOptions[0].label;

        // 计算第一个二级分类下的实词数量
        categoryWordCount = this.calculateCategoryWordCount(selectedPrimaryId, selectedSecondaryValue);
      }
    }

    // 加载错题本（使用正确的方法名）
    const collectedWords = storage.getCollectedWords();
    const errorWords = collectedWords.map(word => ({
      ...word,
      selected: false
    }));

    // 一次性设置所有数据
    this.setData({
      allWords,
      primaryCategories,
      primaryOptions,
      selectedPrimaryIndex,
      selectedPrimaryId,
      selectedPrimaryLabel,
      secondaryCategories,
      secondaryOptions,
      selectedSecondaryIndex,
      selectedSecondaryValue,
      selectedSecondaryLabel,
      categoryWordCount,
      errorWords,
      errorWordCount: errorWords.length,
      dataReady: true  // 数据加载完成
    });

    this.checkCanStart();
  },

  // 计算分类下的实词数量
  calculateCategoryWordCount(primaryId, secondaryValue) {
    let categoryWords = [];

    if (primaryId === 'grade') {
      // 按年级筛选：使用 word.grade 字段
      categoryWords = wordsData.filter(w => w.grade === secondaryValue);
    } else if (primaryId === 'difficulty') {
      // 按难度筛选：使用 word.difficulty 字段
      categoryWords = wordsData.filter(w => w.difficulty === secondaryValue);
    } else if (primaryId === 'partOfSpeech') {
      // 按词性筛选：检查 meanings 中是否有匹配的词性
      categoryWords = wordsData.filter(w => {
        return w.meanings && w.meanings.some(m => {
          const category = m.category || '';
          return category.includes(secondaryValue);
        });
      });
    }

    return categoryWords.length;
  },

  // ============ 题型选择 ============
  toggleQuestionType(e) {
    const typeId = e.currentTarget.dataset.id;
    let selectedTypes = [...this.data.selectedTypes];

    if (selectedTypes.includes(typeId)) {
      // 至少保留一个题型
      if (selectedTypes.length > 1) {
        selectedTypes = selectedTypes.filter(t => t !== typeId);
      } else {
        wx.showToast({
          title: '至少选择一种题型',
          icon: 'none'
        });
        return;
      }
    } else {
      selectedTypes = [...selectedTypes, typeId];
    }

    // 更新 questionTypes 中的 selected 状态
    const questionTypes = this.data.questionTypes.map(type => ({
      ...type,
      selected: selectedTypes.includes(type.id)
    }));

    this.setData({
      selectedTypes,
      questionTypes
    });
    this.checkCanStart();
  },

  // ============ 题目数量调节 ============
  decreaseCount() {
    if (this.data.questionCount > this.data.minCount) {
      this.setData({
        questionCount: this.data.questionCount - 1
      });
    }
  },

  increaseCount() {
    if (this.data.questionCount < this.data.maxCount) {
      this.setData({
        questionCount: this.data.questionCount + 1
      });
    }
  },

  onCountInput(e) {
    let count = parseInt(e.detail.value);
    if (isNaN(count) || count < this.data.minCount) {
      count = this.data.minCount;
    } else if (count > this.data.maxCount) {
      count = this.data.maxCount;
    }
    this.setData({ questionCount: count });
  },

  // ============ 选词方式切换 ============
  changeSelectionMode(e) {
    const mode = e.currentTarget.dataset.mode;
    this.setData({ selectionMode: mode });
    this.checkCanStart();
  },

  // ============ 按分类选择 ============
  onPrimaryCategoryChange(e) {
    const index = e.detail.value;

    // 边界检查
    if (!this.data.primaryOptions || index >= this.data.primaryOptions.length) {
      console.error('primaryOptions索引越界', index, this.data.primaryOptions);
      return;
    }

    const category = this.data.primaryOptions[index];
    const primaryId = category.value;

    // 加载二级分类
    const secondaryCategories = CATEGORY_CONFIG.secondaryCategories[primaryId] || [];
    const secondaryOptions = secondaryCategories.map(cat => ({
      value: cat.value,
      label: cat.label
    }));

    this.setData({
      selectedPrimaryIndex: index,
      selectedPrimaryId: primaryId,
      selectedPrimaryLabel: category.label,
      secondaryCategories,
      secondaryOptions,
      selectedSecondaryIndex: 0,
      selectedSecondaryValue: '',
      selectedSecondaryLabel: '请选择',
      categoryWordCount: 0
    });

    this.checkCanStart();
  },

  onSecondaryCategoryChange(e) {
    const index = e.detail.value;

    // 边界检查
    if (!this.data.secondaryOptions || index >= this.data.secondaryOptions.length) {
      console.error('secondaryOptions索引越界', index, this.data.secondaryOptions);
      return;
    }

    const category = this.data.secondaryOptions[index];
    const primaryId = this.data.selectedPrimaryId;

    // 计算该分类下的实词数量
    const wordCount = this.calculateCategoryWordCount(primaryId, category.value);

    this.setData({
      selectedSecondaryIndex: index,
      selectedSecondaryValue: category.value,
      selectedSecondaryLabel: category.label,
      categoryWordCount: wordCount
    });

    this.checkCanStart();
  },

  // ============ 随机选择 ============
  onRandomCountInput(e) {
    let count = parseInt(e.detail.value);
    if (isNaN(count) || count < 1) {
      count = 1;
    } else if (count > wordsData.length) {
      count = wordsData.length;
    }
    this.setData({ randomCount: count });
    this.checkCanStart();
  },

  decreaseRandomCount() {
    if (this.data.randomCount > 1) {
      this.setData({ randomCount: this.data.randomCount - 1 });
      this.checkCanStart();
    }
  },

  increaseRandomCount() {
    if (this.data.randomCount < wordsData.length) {
      this.setData({ randomCount: this.data.randomCount + 1 });
      this.checkCanStart();
    }
  },

  // ============ 错题本选择 ============
  toggleErrorWord(e) {
    const index = e.currentTarget.dataset.index;
    const errorWords = this.data.errorWords.map((word, i) => {
      if (i === index) {
        return { ...word, selected: !word.selected };
      }
      return word;
    });

    const allSelected = errorWords.every(w => w.selected);

    this.setData({
      errorWords,
      selectAllError: allSelected
    });

    this.checkCanStart();
  },

  toggleSelectAllError() {
    const selectAll = !this.data.selectAllError;
    const errorWords = this.data.errorWords.map(w => ({
      ...w,
      selected: selectAll
    }));

    this.setData({
      errorWords,
      selectAllError: selectAll
    });

    this.checkCanStart();
  },

  // ============ 手动勾选 ============
  showWordSelectorDialog() {
    this.setData({ showWordSelector: true });
  },

  hideWordSelector() {
    this.setData({ showWordSelector: false });
  },

  onSearchInput(e) {
    const key = e.detail.value.trim();
    this.setData({ searchKey: key });
    this.filterWords();
  },

  filterWords() {
    const key = this.data.searchKey.toLowerCase();
    let allWords = wordsData.map(word => {
      const existingWord = this.data.allWords.find(w => w.id === word.id);
      return {
        ...word,
        selected: existingWord ? existingWord.selected : false
      };
    });

    if (key) {
      allWords = allWords.filter(word => {
        return word.word.includes(key) ||
               (word.meanings && word.meanings.some(m =>
                 (m.pinyin && m.pinyin.toLowerCase().includes(key)) ||
                 (m.gloss && m.gloss.includes(key))
               ));
      });
    }

    this.setData({ allWords });
  },

  toggleManualWord(e) {
    const index = e.currentTarget.dataset.index;
    const allWords = this.data.allWords.map((word, i) => {
      if (i === index) {
        return { ...word, selected: !word.selected };
      }
      return word;
    });

    const selectedWordIds = allWords.filter(w => w.selected).map(w => w.id);
    const allSelected = allWords.length > 0 && allWords.every(w => w.selected);

    this.setData({
      allWords,
      selectedWordIds,
      selectAllManual: allSelected
    });

    this.checkCanStart();
  },

  toggleSelectAllManual() {
    const selectAll = !this.data.selectAllManual;
    const allWords = this.data.allWords.map(w => ({
      ...w,
      selected: selectAll
    }));

    const selectedWordIds = allWords.filter(w => w.selected).map(w => w.id);

    this.setData({
      allWords,
      selectedWordIds,
      selectAllManual: selectAll
    });

    this.checkCanStart();
  },

  confirmWordSelection() {
    this.setData({ showWordSelector: false });
    this.checkCanStart();
  },

  // ============ 检查是否可以开始练习 ============
  checkCanStart() {
    const mode = this.data.selectionMode;
    let canStart = false;

    if (mode === 'category') {
      canStart = this.data.selectedSecondaryValue !== '' && this.data.categoryWordCount > 0;
    } else if (mode === 'random') {
      canStart = this.data.randomCount > 0;
    } else if (mode === 'errorBook') {
      canStart = this.data.errorWords.some(w => w.selected);
    } else if (mode === 'manual') {
      canStart = this.data.selectedWordIds.length > 0;
    }

    this.setData({ canStartPractice: canStart });
  },

  // ============ 开始练习 ============
  startPractice() {
    if (!this.data.canStartPractice) {
      wx.showToast({
        title: '请先选择实词',
        icon: 'none'
      });
      return;
    }

    const mode = this.data.selectionMode;
    let selectedWordIds = [];

    // 根据不同模式获取实词ID列表
    if (mode === 'manual') {
      selectedWordIds = this.data.selectedWordIds;
    } else if (mode === 'category') {
      const primaryId = this.data.selectedPrimaryId;
      const secondaryValue = this.data.selectedSecondaryValue;

      if (primaryId === 'grade') {
        // 按年级筛选
        selectedWordIds = wordsData
          .filter(w => w.grade === secondaryValue)
          .map(w => w.id);
      } else if (primaryId === 'difficulty') {
        // 按难度筛选
        selectedWordIds = wordsData
          .filter(w => w.difficulty === secondaryValue)
          .map(w => w.id);
      } else if (primaryId === 'partOfSpeech') {
        // 按词性筛选
        selectedWordIds = wordsData
          .filter(w => {
            return w.meanings && w.meanings.some(m => {
              const category = m.category || '';
              return category.includes(secondaryValue);
            });
          })
          .map(w => w.id);
      }
    } else if (mode === 'random') {
      const shuffled = [...wordsData].sort(() => Math.random() - 0.5);
      selectedWordIds = shuffled.slice(0, this.data.randomCount).map(w => w.id);
    } else if (mode === 'errorBook') {
      selectedWordIds = this.data.errorWords
        .filter(w => w.selected)
        .map(w => w.id);
    }

    if (selectedWordIds.length === 0) {
      wx.showToast({
        title: '没有可用的实词',
        icon: 'none'
      });
      return;
    }

    // 跳转到练习页面
    wx.navigateTo({
      url: `/pages/practice/practice?` +
           `wordIds=${JSON.stringify(selectedWordIds)}&` +
           `questionTypes=${JSON.stringify(this.data.selectedTypes)}&` +
           `questionCount=${this.data.questionCount}`
    });
  }
});
