// 重构 words.js 数据结构的脚本
// 将词条级别的 pinyin 移动到每个义项中，并添加 category

const fs = require('fs');
const path = require('path');

// 读取原始数据
const wordsPath = path.join(__dirname, '../data/words.js');
const wordsContent = fs.readFileSync(wordsPath, 'utf-8');

// 执行模块以获取数据
const { wordsData } = require(wordsPath);

// 多音字映射表 - 手动指定不同义项的读音
const polyphones = {
  11: { // 得
    1: 'dé',  2: 'dé',  3: 'de'
  },
  18: { // 更
    1: 'gēng',  2: 'gēng',  3: 'gèng',  4: 'gēng'
  },
  25: { // 好
    1: 'hǎo', 2: 'hǎo', 3: 'hào'
  },
  26: { // 号
    1: 'háo', 2: 'hào'
  },
  27: { // 还
    1: 'huán', 2: 'huán'
  },
  72: { // 少
    1: 'shǎo', 2: 'shǎo', 3: 'shào'
  },
  73: { // 舍
    1: 'shè', 2: 'shě', 3: 'shě'
  },
  85: { // 数
    1: 'shù', 2: 'shǔ'
  },
  86: { // 属
    1: 'zhǔ', 2: 'shǔ', 3: 'shǔ', 4: 'zhǔ'
  },
  92: { // 为
    1: 'wéi', 2: 'wéi', 3: 'wéi', 4: 'wéi', 5: 'wèi', 6: 'wéi'
  }
};

// 处理词条
const processedWords = wordsData.map((word, index) => {
  // 如果词条已经正确格式化（第一个义项有 category 和 pinyin），跳过
  if (word.meanings[0].category && word.meanings[0].pinyin) {
    console.log(`词条 ${word.id}【${word.word}】已经是正确格式，跳过`);
    return word;
  }

  console.log(`处理词条 ${word.id}【${word.word}】`);

  // 获取词条级别的拼音（如果有）
  const wordPinyin = word.pinyin || '';

  // 创建新的 meanings 数组
  const newMeanings = word.meanings.map((meaning) => {
    // 如果义项已经有 category 和 pinyin，保留
    if (meaning.category && meaning.pinyin) {
      return meaning;
    }

    // 推断 category
    let category = meaning.category;
    if (!category) {
      // 从词条的 category 推断
      const categories = word.category ? word.category.split('/') : ['未知'];

      if (categories.length === 1) {
        category = categories[0];
      } else {
        // 如果有多个词性，尝试从 gloss 推断
        const gloss = meaning.gloss.toLowerCase();

        // 根据释义关键词推断词性
        if (gloss.includes('坐') || gloss.includes('做') || gloss.includes('走') || gloss.includes('来') || gloss.includes('去')) {
          category = '动词';
        } else if (gloss.includes('…的') || gloss.includes('形容')) {
          category = '形容词';
        } else if (gloss.includes('与') || gloss.includes('和') || gloss.includes('及') || gloss.includes('并')) {
          category = '连词';
        } else if (gloss.includes('在') || gloss.includes('于') || gloss.includes('自') || gloss.includes('从')) {
          category = '介词';
        } else if (gloss.includes('吗') || gloss.includes('呢') || gloss.includes('啊')) {
          category = '助词';
        } else if (gloss.includes('我') || gloss.includes('你') || gloss.includes('他') || gloss.includes('这') || gloss.includes('那')) {
          category = '代词';
        } else if (gloss.includes('很') || gloss.includes('非常') || gloss.includes('极')) {
          category = '副词';
        } else {
          // 默认使用第一个词性
          category = categories[0];
          console.warn(`  义项 ${meaning.id} 无法精确推断词性，使用默认: ${category}`);
        }
      }
    }

    // 推断 pinyin
    let pinyin = meaning.pinyin;
    if (!pinyin) {
      // 检查是否是多音字
      if (polyphones[word.id] && polyphones[word.id][meaning.id]) {
        pinyin = polyphones[word.id][meaning.id];
        console.log(`  义项 ${meaning.id} 使用多音字映射: ${pinyin}`);
      } else if (wordPinyin) {
        // 使用词条级别的拼音
        // 如果有多个拼音（用/分隔），取第一个
        pinyin = wordPinyin.split('/')[0];
      } else {
        console.warn(`  警告：词条 ${word.id}【${word.word}】义项 ${meaning.id} 无法确定拼音`);
        pinyin = '未知';
      }
    }

    return {
      ...meaning,
      category,
      pinyin
    };
  });

  // 创建新的词条对象（移除词条级别的 pinyin）
  const { pinyin: removedPinyin, ...restWord } = word;

  return {
    ...restWord,
    meanings: newMeanings
  };
});

console.log('\n处理完成！');
console.log(`总共处理了 ${processedWords.length} 个词条`);

// 生成新的 words.js 文件内容
const newContent = `// 古文实词数据库

// 类型定义
/**
 * @typedef {Object} WordExample
 * @property {string} text - 例句正文
 * @property {string} [source] - 文章名
 * @property {string} [grade] - 课文所在年级
 * @property {number} [difficultyLevel] - 句子难度 (1-5)
 */

/**
 * @typedef {Object} WordMeaning
 * @property {number} id - 义项编号
 * @property {string} category - 该义项的具体词性（如"动词"、"名词"）
 * @property {string} pinyin - 该义项的读音（多音字需区分）
 * @property {string} gloss - 义项解释
 * @property {string} [usageNote] - 用法说明或考点提示
 * @property {boolean} isCore - 是否为中考/考试核心义项
 * @property {WordExample[]} examples - 例句列表
 */

/**
 * @typedef {Object} Word
 * @property {number} id - 词ID
 * @property {string} word - 实词
 * @property {string} [category] - 词性概览（如"动词/介词"），用于快速了解该词的词性范围
 * @property {WordMeaning[]} meanings - 义项列表
 * @property {string} difficulty - 难度等级
 * @property {string[]} tags - 标签
 * @property {string} grade - 主要所在年级
 * @property {string} textbookVersion - 教材版本
 * @property {number} frequencyLevel - 频率/重要程度 (1-5)
 * @property {string[]} sourceLessons - 常见课文名列表
 */

/** @type {Word[]} */
const wordsData = ${JSON.stringify(processedWords, null, 2)};

module.exports = {
  wordsData
};
`;

// 备份原文件
const backupPath = wordsPath + '.backup';
fs.copyFileSync(wordsPath, backupPath);
console.log(`\n原文件已备份到: ${backupPath}`);

// 写入新文件
fs.writeFileSync(wordsPath, newContent, 'utf-8');
console.log(`新文件已写入: ${wordsPath}`);
console.log('\n重构完成！');
