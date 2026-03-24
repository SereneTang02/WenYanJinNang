// pages/study/study.js
const { wordsData } = require('../../data/words.js');
const {
  getRandomWords,
  getWordsByDifficulty,
  saveStudyRecord,
  addToCollection,
  removeFromCollection,
  isCollected,
  getDailyTask,
  updateWordProgress,
  updateDailyTaskProgress,
  getWordById
} = require('../../utils/storage.js');

Page({
  data: {
    mode: 'random', // random, category, collection, daily
    category: '',
    words: [],
    currentIndex: 0,
    currentWord: null,
    totalWords: 0,
    showAnswer: false,
    isCollected: false,
    isComplete: false,
    correctCount: 0,
    wrongCount: 0,
    accuracy: 0,
    // daily 模式专用
    dailyTask: null,
    currentTaskType: '' // current / review / preview
  },

  onLoad(options) {
    const mode = options.mode || 'random';
    const category = options.category || '';

    this.setData({ mode, category });
    this.loadWords();
  },

  // 加载实词列表
  loadWords() {
    let words = [];

    if (this.data.mode === 'random') {
      words = getRandomWords(10);

    } else if (this.data.mode === 'category') {
      const category = this.data.category;
      // 按年级筛选
      const gradeWords = wordsData.filter(w => w.grade === category);
      if (gradeWords.length > 0) {
        words = gradeWords;
      } else if (category === '基础实词') {
        words = getWordsByDifficulty('基础');
      } else if (category === '进阶实词') {
        words = getWordsByDifficulty('进阶');
      } else if (category === '动词类') {
        words = wordsData.filter(w => w.category.includes('动词'));
      } else if (category === '多义词') {
        words = wordsData.filter(w => w.meanings.length >= 3);
      } else {
        words = wordsData;
      }
      words = words.sort(() => Math.random() - 0.5);

    } else if (this.data.mode === 'collection') {
      const collectedIds = wx.getStorageSync('collectedWords') || [];
      words = wordsData.filter(w => collectedIds.includes(w.id));
      if (words.length === 0) {
        wx.showToast({ title: '错题本为空', icon: 'none' });
        setTimeout(() => wx.navigateBack(), 1500);
        return;
      }

    } else if (this.data.mode === 'daily') {
      const dailyTask = getDailyTask(true);
      if (!dailyTask || !dailyTask.words || dailyTask.words.length === 0) {
        wx.showToast({ title: '暂无可学习的词汇', icon: 'none' });
        setTimeout(() => wx.navigateBack(), 1500);
        return;
      }
      this.setData({ dailyTask });

      // 按 dailyTask.words 顺序加载词，同时保留 taskType
      words = dailyTask.words.map(item => {
        const word = wordsData.find(w => w.id === item.wordId);
        if (word) {
          return { ...word, taskType: item.taskType };
        }
        return null;
      }).filter(Boolean);

      // 跳过已完成的
      const startIndex = dailyTask.finishedCount || 0;
      if (startIndex > 0 && startIndex < words.length) {
        words = words.slice(startIndex);
      } else if (startIndex >= words.length) {
        this.setData({ isComplete: true });
        return;
      }
    }

    if (words.length === 0) {
      wx.showToast({ title: '没有找到词汇', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 1500);
      return;
    }

    this.setData({
      words,
      totalWords: words.length,
      currentWord: words[0],
      isCollected: isCollected(words[0].id),
      currentTaskType: words[0].taskType || ''
    });
  },

  showAnswerTap() {
    this.setData({ showAnswer: true });
  },

  answerCorrect() {
    const wordId = this.data.currentWord.id;
    saveStudyRecord(wordId, true);
    updateWordProgress(wordId, true);

    if (this.data.mode === 'daily' && this.data.dailyTask) {
      const finished = (this.data.dailyTask.finishedCount || 0) + this.data.correctCount + this.data.wrongCount + 1;
      updateDailyTaskProgress(finished);
    }

    this.setData({ correctCount: this.data.correctCount + 1 });
    this.nextWord();
  },

  answerWrong() {
    const wordId = this.data.currentWord.id;
    saveStudyRecord(wordId, false);
    updateWordProgress(wordId, false);
    addToCollection(wordId);

    if (this.data.mode === 'daily' && this.data.dailyTask) {
      const finished = (this.data.dailyTask.finishedCount || 0) + this.data.correctCount + this.data.wrongCount + 1;
      updateDailyTaskProgress(finished);
    }

    this.setData({
      wrongCount: this.data.wrongCount + 1,
      isCollected: true
    });

    wx.showToast({ title: '已添加到错题本', icon: 'none', duration: 1000 });
    this.nextWord();
  },

  nextWord() {
    const nextIndex = this.data.currentIndex + 1;

    if (nextIndex >= this.data.totalWords) {
      const total = this.data.correctCount + this.data.wrongCount;
      const accuracy = total > 0 ? ((this.data.correctCount / total) * 100).toFixed(0) : 0;
      this.setData({ isComplete: true, accuracy });
    } else {
      const nextWord = this.data.words[nextIndex];
      this.setData({
        currentIndex: nextIndex,
        currentWord: nextWord,
        showAnswer: false,
        isCollected: isCollected(nextWord.id),
        currentTaskType: nextWord.taskType || ''
      });
    }
  },

  toggleCollect() {
    const wordId = this.data.currentWord.id;
    const collected = this.data.isCollected;

    if (collected) {
      removeFromCollection(wordId);
      wx.showToast({ title: '已取消收藏', icon: 'none' });
    } else {
      addToCollection(wordId);
      wx.showToast({ title: '已收藏', icon: 'none' });
    }

    this.setData({ isCollected: !collected });
  },

  backToHome() {
    wx.switchTab({ url: '/pages/index/index' });
  },

  studyAgain() {
    this.setData({
      currentIndex: 0,
      showAnswer: false,
      isComplete: false,
      correctCount: 0,
      wrongCount: 0,
      accuracy: 0,
      currentTaskType: ''
    });
    this.loadWords();
  }
});
