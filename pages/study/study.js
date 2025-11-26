// pages/study/study.js
const { wordsData } = require('../../data/words.js');
const {
  getRandomWords,
  getWordsByDifficulty,
  saveStudyRecord,
  addToCollection,
  removeFromCollection,
  isCollected
} = require('../../utils/storage.js');

Page({
  data: {
    mode: 'random', // random, category, collection
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
    accuracy: 0
  },

  onLoad(options) {
    const mode = options.mode || 'random';
    const category = options.category || '';

    this.setData({
      mode,
      category
    });

    this.loadWords();
  },

  // 加载实词列表
  loadWords() {
    let words = [];

    if (this.data.mode === 'random') {
      // 随机模式：随机抽取10个词
      words = getRandomWords(10);
    } else if (this.data.mode === 'category') {
      // 分类模式：根据分类筛选
      const category = this.data.category;
      if (category === '基础实词') {
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
      // 随机打乱顺序
      words = words.sort(() => Math.random() - 0.5);
    } else if (this.data.mode === 'collection') {
      // 错题本模式
      const app = getApp();
      const collectedIds = wx.getStorageSync('collectedWords') || [];
      words = wordsData.filter(w => collectedIds.includes(w.id));
      if (words.length === 0) {
        wx.showToast({
          title: '错题本为空',
          icon: 'none'
        });
        setTimeout(() => {
          wx.navigateBack();
        }, 1500);
        return;
      }
    }

    this.setData({
      words,
      totalWords: words.length,
      currentWord: words[0],
      isCollected: isCollected(words[0].id)
    });
  },

  // 显示答案
  showAnswerTap() {
    this.setData({
      showAnswer: true
    });
  },

  // 回答正确
  answerCorrect() {
    saveStudyRecord(this.data.currentWord.id, true);
    this.setData({
      correctCount: this.data.correctCount + 1
    });
    this.nextWord();
  },

  // 回答错误
  answerWrong() {
    saveStudyRecord(this.data.currentWord.id, false);
    // 自动添加到错题本
    addToCollection(this.data.currentWord.id);
    this.setData({
      wrongCount: this.data.wrongCount + 1,
      isCollected: true
    });

    wx.showToast({
      title: '已添加到错题本',
      icon: 'none',
      duration: 1500
    });

    this.nextWord();
  },

  // 下一个词
  nextWord() {
    const nextIndex = this.data.currentIndex + 1;

    if (nextIndex >= this.data.totalWords) {
      // 学习完成
      const total = this.data.correctCount + this.data.wrongCount;
      const accuracy = total > 0 ? ((this.data.correctCount / total) * 100).toFixed(0) : 0;

      this.setData({
        isComplete: true,
        accuracy
      });
    } else {
      // 继续下一个
      const nextWord = this.data.words[nextIndex];
      this.setData({
        currentIndex: nextIndex,
        currentWord: nextWord,
        showAnswer: false,
        isCollected: isCollected(nextWord.id)
      });
    }
  },

  // 切换收藏状态
  toggleCollect() {
    const wordId = this.data.currentWord.id;
    const collected = this.data.isCollected;

    if (collected) {
      removeFromCollection(wordId);
      wx.showToast({
        title: '已取消收藏',
        icon: 'none'
      });
    } else {
      addToCollection(wordId);
      wx.showToast({
        title: '已收藏',
        icon: 'none'
      });
    }

    this.setData({
      isCollected: !collected
    });
  },

  // 返回首页
  backToHome() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  // 再来一轮
  studyAgain() {
    this.setData({
      currentIndex: 0,
      showAnswer: false,
      isComplete: false,
      correctCount: 0,
      wrongCount: 0,
      accuracy: 0
    });
    this.loadWords();
  }
});
