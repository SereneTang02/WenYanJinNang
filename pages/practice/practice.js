// pages/practice/practice.js
const { wordsData } = require('../../data/words.js');
const storage = require('../../utils/storage.js');

Page({
  data: {
    wordIds: [], // 要练习的词ID列表
    questions: [], // 生成的题目列表
    currentQuestionIndex: 0, // 当前题目索引
    currentQuestion: null, // 当前题目
    selectedOption: null, // 用户选择的选项索引
    showResult: false, // 是否显示答题结果
    isCorrect: false, // 本题是否答对
    score: 0, // 总得分
    correctCount: 0, // 答对题数
    totalQuestions: 0, // 总题数
    isFinished: false, // 是否完成所有题目
  },

  onLoad(options) {
    let wordIds = [];

    // 从URL参数获取wordIds
    if (options.wordId) {
      // 单个词练习
      wordIds = [parseInt(options.wordId)];
    } else if (options.wordIds) {
      // 多个词练习（今日任务等）
      wordIds = JSON.parse(options.wordIds);
    } else {
      wx.showToast({
        title: '参数错误',
        icon: 'none'
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
      return;
    }

    // 生成题目
    const questions = this.generateQuestions(wordIds);

    if (questions.length === 0) {
      wx.showToast({
        title: '无法生成题目',
        icon: 'none'
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
      return;
    }

    this.setData({
      wordIds: wordIds,
      questions: questions,
      totalQuestions: questions.length,
      currentQuestion: questions[0]
    });
  },

  /**
   * 生成题目
   * 对每个词的义项+例句生成1-2道选择题
   */
  generateQuestions(wordIds) {
    const questions = [];
    let questionId = 1;

    wordIds.forEach(wordId => {
      const word = wordsData.find(w => w.id === wordId);
      if (!word || !word.meanings || word.meanings.length === 0) {
        return;
      }

      // 从每个词的义项中生成题目
      word.meanings.forEach(meaning => {
        if (!meaning.examples || meaning.examples.length === 0) {
          return;
        }

        // 为每个义项随机选择1-2个例句生成题目
        const exampleCount = Math.min(meaning.examples.length, Math.random() > 0.5 ? 2 : 1);
        const selectedExamples = this.shuffleArray([...meaning.examples]).slice(0, exampleCount);

        selectedExamples.forEach(example => {
          // 生成选择题：问这个例句中的词是什么意思
          const question = this.generateChoiceQuestion(
            questionId++,
            word,
            meaning,
            example
          );
          questions.push(question);
        });
      });
    });

    // 打乱题目顺序
    return this.shuffleArray(questions);
  },

  /**
   * 生成单个选择题
   */
  generateChoiceQuestion(id, word, correctMeaning, example) {
    // 正确选项
    const correctOption = {
      label: correctMeaning.gloss,
      isCorrect: true
    };

    // 生成干扰选项：从同一个词的其他义项中选择
    let distractors = word.meanings
      .filter(m => m.id !== correctMeaning.id)
      .map(m => ({
        label: m.gloss,
        isCorrect: false
      }));

    // 如果干扰选项不足3个，从其他词中随机选择义项
    while (distractors.length < 3) {
      const randomWord = wordsData[Math.floor(Math.random() * wordsData.length)];
      if (randomWord.id !== word.id && randomWord.meanings && randomWord.meanings.length > 0) {
        const randomMeaning = randomWord.meanings[Math.floor(Math.random() * randomWord.meanings.length)];
        // 避免重复的干扰项
        if (!distractors.some(d => d.label === randomMeaning.gloss) && randomMeaning.gloss !== correctOption.label) {
          distractors.push({
            label: randomMeaning.gloss,
            isCorrect: false
          });
        }
      }
    }

    // 随机选择3个干扰选项
    distractors = this.shuffleArray(distractors).slice(0, 3);

    // 将正确选项和干扰选项合并并打乱
    const options = this.shuffleArray([correctOption, ...distractors]);

    return {
      id: id,
      wordId: word.id,
      word: word.word,
      pinyin: word.pinyin,
      questionType: 'choice',
      sentence: example.text,
      source: example.source,
      correctMeaning: correctMeaning.gloss,
      usageNote: correctMeaning.usageNote,
      options: options
    };
  },

  /**
   * 数组洗牌算法
   */
  shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  },

  /**
   * 选择选项
   */
  onSelectOption(e) {
    if (this.data.showResult) {
      return; // 已经答题，不能再选择
    }

    const index = e.currentTarget.dataset.index;
    this.setData({
      selectedOption: index
    });
  },

  /**
   * 提交答案
   */
  onSubmitAnswer() {
    if (this.data.selectedOption === null) {
      wx.showToast({
        title: '请先选择答案',
        icon: 'none'
      });
      return;
    }

    const selectedOption = this.data.currentQuestion.options[this.data.selectedOption];
    const isCorrect = selectedOption.isCorrect;

    // 更新学习进度
    storage.updateWordProgress(this.data.currentQuestion.wordId, isCorrect);

    // 更新得分
    const newCorrectCount = this.data.correctCount + (isCorrect ? 1 : 0);
    const newScore = Math.round((newCorrectCount / this.data.totalQuestions) * 100);

    this.setData({
      showResult: true,
      isCorrect: isCorrect,
      correctCount: newCorrectCount,
      score: newScore
    });
  },

  /**
   * 下一题
   */
  onNextQuestion() {
    const nextIndex = this.data.currentQuestionIndex + 1;

    if (nextIndex >= this.data.questions.length) {
      // 所有题目完成
      this.setData({
        isFinished: true
      });
    } else {
      // 进入下一题
      this.setData({
        currentQuestionIndex: nextIndex,
        currentQuestion: this.data.questions[nextIndex],
        selectedOption: null,
        showResult: false,
        isCorrect: false
      });
    }
  },

  /**
   * 完成练习，返回
   */
  onFinishPractice() {
    wx.showModal({
      title: '练习完成',
      content: `本次练习得分：${this.data.score}分\n答对：${this.data.correctCount}/${this.data.totalQuestions}题`,
      showCancel: false,
      success: () => {
        wx.navigateBack();
      }
    });
  },

  /**
   * 查看详情
   */
  onViewDetail() {
    wx.navigateTo({
      url: `/pages/word-detail/word-detail?id=${this.data.currentQuestion.wordId}`
    });
  }
});
