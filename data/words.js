// 古文实词数据库

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
 * @property {string} gloss - 义项解释
 * @property {string} [usageNote] - 用法说明或考点提示
 * @property {boolean} isCore - 是否为中考/考试核心义项
 * @property {WordExample[]} examples - 例句列表
 */

/**
 * @typedef {Object} Word
 * @property {number} id - 词ID
 * @property {string} word - 实词
 * @property {string} pinyin - 拼音
 * @property {string} category - 词性
 * @property {WordMeaning[]} meanings - 义项列表
 * @property {string} difficulty - 难度等级
 * @property {string[]} tags - 标签
 * @property {string} grade - 主要所在年级
 * @property {string} textbookVersion - 教材版本
 * @property {number} frequencyLevel - 频率/重要程度 (1-5)
 * @property {string[]} sourceLessons - 常见课文名列表
 */

/** @type {Word[]} */
const wordsData = [
  {
    id: 1,
    word: "比",
    pinyin: "bǐ",
    category: "动词/介词",
    meanings: [
      {
        id: 1,
        gloss: "靠近",
        usageNote: "常用于描述物体位置关系",
        isCore: true,
        examples: [
          {
            text: "其两膝相比者，各隐卷底衣褶中",
            source: "核舟记",
            grade: "八下",
            difficultyLevel: 3
          }
        ]
      },
      {
        id: 2,
        gloss: "及，等到",
        usageNote: "表示时间上的到达",
        isCore: true,
        examples: [
          {
            text: "比至陈，车六七百乘",
            source: "陈涉世家",
            grade: "九上",
            difficultyLevel: 4
          }
        ]
      },
      {
        id: 3,
        gloss: "比较",
        isCore: false,
        examples: [
          {
            text: "心却比，男儿烈",
            source: "满江红·小住京华",
            difficultyLevel: 3
          }
        ]
      }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin", "介词"],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["核舟记", "陈涉世家", "满江红·小住京华"]
  },
  {
    id: 2,
    word: "鄙",
    pinyin: "bǐ",
    category: "形容词",
    meanings: [
      {
        id: 1,
        gloss: "浅陋无知，目光短浅",
        usageNote: "用于形容人见识短浅",
        isCore: true,
        examples: [
          {
            text: "肉食者鄙，未能远谋",
            source: "曹刿论战",
            grade: "九下",
            difficultyLevel: 3
          },
          {
            text: "先帝不以臣卑鄙",
            source: "出师表",
            grade: "九下",
            difficultyLevel: 3
          }
        ]
      }
    ],
    difficulty: "基础",
    tags: ["zhong-kao-gao-pin"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["曹刿论战", "出师表"]
  },
  {
    id: 3,
    word: "兵",
    pinyin: "bīng",
    category: "名词",
    meanings: [
      {
        id: 1,
        gloss: "兵器，武器",
        usageNote: "古代泛指各类武器装备",
        isCore: true,
        examples: [
          {
            text: "兵革非不坚利也",
            source: "得道多助，失道寡助",
            grade: "九下",
            difficultyLevel: 3
          }
        ]
      },
      {
        id: 2,
        gloss: "军队",
        usageNote: "指整体军事力量",
        isCore: true,
        examples: [
          {
            text: "今南方已定，兵甲已足",
            source: "出师表",
            grade: "九下",
            difficultyLevel: 2
          }
        ]
      },
      {
        id: 3,
        gloss: "士兵",
        isCore: true,
        examples: [
          {
            text: "可汗大点兵",
            source: "木兰诗",
            grade: "七下",
            difficultyLevel: 2
          }
        ]
      },
      {
        id: 4,
        gloss: "战争",
        isCore: false,
        examples: [
          {
            text: "一老河兵闻之",
            source: "河中石兽",
            difficultyLevel: 3
          }
        ]
      }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["得道多助，失道寡助", "出师表", "木兰诗", "河中石兽"]
  },
  {
    id: 4,
    word: "病",
    pinyin: "bìng",
    category: "名词/动词",
    meanings: [
      {
        id: 1,
        gloss: "生病",
        isCore: true,
        examples: [
          {
            text: "未果，寻病终",
            source: "桃花源记",
            grade: "八上",
            difficultyLevel: 2
          }
        ]
      },
      {
        id: 2,
        gloss: "枯萎",
        isCore: false,
        examples: [
          {
            text: "病树前头万木春",
            source: "酬乐天扬州初逢席上见赠",
            difficultyLevel: 3
          }
        ]
      }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["桃花源记", "酬乐天扬州初逢席上见赠"]
  },
  {
    id: 5,
    word: "乘",
    pinyin: "chéng/shèng",
    category: "动词/量词",
    meanings: [
      {
        id: 1,
        gloss: "坐、驾",
        isCore: true,
        examples: [
          {
            text: "公与之乘",
            source: "曹刿论战",
            grade: "九下",
            difficultyLevel: 2
          }
        ]
      },
      {
        id: 2,
        gloss: "趁着，冒着",
        isCore: false,
        examples: [
          {
            text: "从今若许闲乘月",
            source: "游山西村",
            difficultyLevel: 3
          }
        ]
      },
      {
        id: 3,
        gloss: "辆（用以计算车子）",
        usageNote: "量词用法",
        isCore: true,
        examples: [
          {
            text: "车六七百乘",
            source: "陈涉世家",
            grade: "九上",
            difficultyLevel: 3
          }
        ]
      }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["曹刿论战", "游山西村", "陈涉世家"]
  },
  {
    id: 6,
    word: "持",
    pinyin: "chí",
    category: "动词",
    meanings: [
      {
        id: 1,
        gloss: "拉",
        isCore: false,
        examples: [
          {
            text: "锐兵刃，彀弓弩，持满",
            source: "周亚夫军细柳",
            difficultyLevel: 4
          }
        ]
      },
      {
        id: 2,
        gloss: "拿着",
        isCore: true,
        examples: [
          {
            text: "屠乃奔倚其下，弛担持刀",
            source: "狼",
            grade: "七上",
            difficultyLevel: 2
          }
        ]
      }
    ],
    difficulty: "基础",
    tags: [],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["周亚夫军细柳", "狼"]
  },
  {
    id: 7,
    word: "从",
    pinyin: "cóng",
    category: "动词/介词",
    meanings: [
      {
        id: 1,
        gloss: "跟从，跟随",
        isCore: true,
        examples: [
          {
            text: "七十而从心所欲",
            source: "《论语》十二章",
            grade: "七上",
            difficultyLevel: 2
          }
        ]
      },
      {
        id: 2,
        gloss: "听从，顺从",
        isCore: true,
        examples: [
          {
            text: "择其善者而从之",
            source: "《论语》十二章",
            grade: "七上",
            difficultyLevel: 2
          }
        ]
      },
      {
        id: 3,
        gloss: "采取某一种办法",
        isCore: false,
        examples: [
          {
            text: "无从致书以观",
            source: "送东阳马生序",
            grade: "九下",
            difficultyLevel: 3
          }
        ]
      },
      {
        id: 4,
        gloss: "自、由",
        usageNote: "介词用法，表示起点",
        isCore: true,
        examples: [
          {
            text: "从小丘西行百二十步",
            source: "小石潭记",
            grade: "八下",
            difficultyLevel: 2
          }
        ]
      },
      {
        id: 5,
        gloss: "与'容'连用；舒缓安闲",
        isCore: false,
        examples: [
          {
            text: "鲦鱼出游从容",
            source: "庄子与惠子游于濠梁之上",
            difficultyLevel: 4
          }
        ]
      }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["《论语》十二章", "送东阳马生序", "小石潭记", "庄子与惠子游于濠梁之上"]
  },
  {
    id: 8,
    word: "达",
    pinyin: "dá",
    category: "动词/形容词",
    meanings: [
      {
        id: 1,
        gloss: "到达",
        isCore: true,
        examples: [
          {
            text: "指通豫南，达于汉阴",
            source: "愚公移山",
            grade: "八上",
            difficultyLevel: 2
          }
        ]
      },
      {
        id: 2,
        gloss: "得志，显贵",
        usageNote: "特指在仕途上有所成就",
        isCore: true,
        examples: [
          {
            text: "不求闻达于诸侯",
            source: "出师表",
            grade: "九下",
            difficultyLevel: 3
          }
        ]
      },
      {
        id: 3,
        gloss: "有道德，有学问",
        isCore: false,
        examples: [
          {
            text: "从乡之先达执经叩问",
            source: "送东阳马生序",
            grade: "九下",
            difficultyLevel: 3
          }
        ]
      },
      {
        id: 4,
        gloss: "通顺，通畅",
        isCore: false,
        examples: [
          {
            text: "辞甚畅达",
            source: "送东阳马生序",
            grade: "九下",
            difficultyLevel: 2
          }
        ]
      }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["愚公移山", "出师表", "送东阳马生序"]
  },
  {
    id: 9,
    word: "当",
    pinyin: "dāng",
    category: "动词/介词",
    meanings: [
      {
        id: 1,
        gloss: "在（某时、某处）",
        isCore: true,
        examples: [
          {
            text: "陈康肃公尧咨善射，当世无双",
            source: "卖油翁",
            grade: "七下",
            difficultyLevel: 2
          }
        ]
      },
      {
        id: 2,
        gloss: "应当，应该",
        usageNote: "表示义务或建议",
        isCore: true,
        examples: [
          {
            text: "但当涉猎，见往事耳",
            source: "孙权劝学",
            grade: "七下",
            difficultyLevel: 2
          }
        ]
      },
      {
        id: 3,
        gloss: "将要，就要",
        isCore: true,
        examples: [
          {
            text: "今当远离",
            source: "出师表",
            grade: "九下",
            difficultyLevel: 2
          }
        ]
      },
      {
        id: 4,
        gloss: "对着，面对",
        isCore: true,
        examples: [
          {
            text: "木兰当户织",
            source: "木兰诗",
            grade: "七下",
            difficultyLevel: 2
          }
        ]
      },
      {
        id: 5,
        gloss: "掌管，主持",
        isCore: false,
        examples: [
          {
            text: "卿今当涂掌事",
            source: "孙权劝学",
            grade: "七下",
            difficultyLevel: 3
          }
        ]
      }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["卖油翁", "孙权劝学", "出师表", "木兰诗"]
  },
  {
    id: 10,
    word: "道",
    pinyin: "dào",
    category: "名词/动词",
    meanings: [
      {
        id: 1,
        gloss: "路；途",
        isCore: true,
        examples: [
          {
            text: "伐竹取道，下见小潭",
            source: "小石潭记",
            grade: "八下",
            difficultyLevel: 2
          }
        ]
      },
      {
        id: 2,
        gloss: "道理，规律，方法",
        isCore: true,
        examples: [
          {
            text: "先帝创业未半，而中道崩殂",
            source: "出师表",
            grade: "九下",
            difficultyLevel: 3
          }
        ]
      },
      {
        id: 3,
        gloss: "正道",
        usageNote: "指正确的政治主张或道德准则",
        isCore: true,
        examples: [
          {
            text: "得道者多助，失道者寡助",
            source: "得道多助，失道寡助",
            grade: "九下",
            difficultyLevel: 3
          }
        ]
      },
      {
        id: 4,
        gloss: "说，讲",
        isCore: true,
        examples: [
          {
            text: "不足为外人道也",
            source: "桃花源记",
            grade: "八上",
            difficultyLevel: 2
          }
        ]
      }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["小石潭记", "出师表", "得道多助，失道寡助", "桃花源记"]
  },
  {
    id: 11,
    word: "得",
    pinyin: "dé/de",
    category: "动词/助词",
    meanings: [
      { id: 1, gloss: "得到，获得", isCore: true, examples: [{ text: "一狼得骨止", source: "狼", grade: "七上", difficultyLevel: 2 }] },
      { id: 2, gloss: "能够、可以", usageNote: "用于否定句表示不能", isCore: true, examples: [{ text: "天子先驱至，不得入", source: "周亚夫军细柳", difficultyLevel: 3 }] },
      { id: 3, gloss: "同'德'，感恩", isCore: false, examples: [{ text: "所识穷乏者得我与", source: "鱼我所欲也", grade: "九下", difficultyLevel: 4 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["狼", "周亚夫军细柳", "鱼我所欲也"]
  },
  {
    id: 12,
    word: "尔",
    pinyin: "ěr",
    category: "助词/代词",
    meanings: [
      { id: 1, gloss: "与'耳'连用，相当于'而已''罢了'", usageNote: "表示限制语气", isCore: true, examples: [{ text: "无他，但手熟尔", source: "卖油翁", grade: "七下", difficultyLevel: 2 }] },
      { id: 2, gloss: "附在形容词、动词后", isCore: false, examples: [{ text: "呼尔而与之", source: "鱼我所欲也", grade: "九下", difficultyLevel: 3 }] },
      { id: 3, gloss: "词尾，相当于'地''然'", isCore: false, examples: [{ text: "俶尔远逝", source: "小石潭记", grade: "八下", difficultyLevel: 3 }] },
      { id: 4, gloss: "代词，你", isCore: true, examples: [{ text: "尔安敢轻吾射", source: "卖油翁", grade: "七下", difficultyLevel: 2 }] },
      { id: 5, gloss: "指示代词，这，那", isCore: false, examples: [{ text: "尔来二十有一年矣", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["卖油翁", "鱼我所欲也", "小石潭记", "出师表"]
  },
  {
    id: 13,
    word: "伐",
    pinyin: "fá",
    category: "动词",
    meanings: [
      { id: 1, gloss: "砍伐", isCore: true, examples: [{ text: "伐竹取道，下见小潭", source: "小石潭记", grade: "八下", difficultyLevel: 2 }] },
      { id: 2, gloss: "攻打，讨伐", isCore: true, examples: [{ text: "十年春，齐师伐我", source: "曹刿论战", grade: "九下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["小石潭记", "曹刿论战"]
  },
  {
    id: 14,
    word: "犯",
    pinyin: "fàn",
    category: "动词",
    meanings: [
      { id: 1, gloss: "侵害，危害", isCore: false, examples: [{ text: "至于亚夫，可得而犯邪", source: "周亚夫军细柳", difficultyLevel: 3 }] },
      { id: 2, gloss: "触犯，违犯", isCore: true, examples: [{ text: "若有作奸犯科及为忠善者", source: "出师表", grade: "九下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["周亚夫军细柳", "出师表"]
  },
  {
    id: 15,
    word: "方",
    pinyin: "fāng",
    category: "名词/副词",
    meanings: [
      { id: 1, gloss: "方圆，周围", isCore: true, examples: [{ text: "太行、王屋二山，方七百里", source: "愚公移山", grade: "八上", difficultyLevel: 2 }] },
      { id: 2, gloss: "区域，地方", isCore: true, examples: [{ text: "今齐地方千里", source: "邹忌讽齐王纳谏", difficultyLevel: 3 }] },
      { id: 3, gloss: "将，将要", isCore: false, examples: [{ text: "今南方已定", source: "出师表", grade: "九下", difficultyLevel: 2 }] },
      { id: 4, gloss: "表示时间、相当于'始''才'", isCore: true, examples: [{ text: "方欲行，转视积薪后", source: "狼", grade: "七上", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["愚公移山", "邹忌讽齐王纳谏", "出师表", "狼"]
  },
  {
    id: 16,
    word: "负",
    pinyin: "fù",
    category: "动词",
    meanings: [
      { id: 1, gloss: "背，以背载物", isCore: true, examples: [{ text: "帝感其诚，命夸娥氏二子负二山", source: "愚公移山", grade: "八上", difficultyLevel: 2 }] },
      { id: 2, gloss: "凭借，依仗，倚靠", isCore: true, examples: [{ text: "皆生寒树，负势竞上", source: "与朱元思书", grade: "八上", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["愚公移山", "与朱元思书"]
  },
  {
    id: 17,
    word: "赋",
    pinyin: "fù",
    category: "名词/动词",
    meanings: [
      { id: 1, gloss: "一种文体", isCore: true, examples: [{ text: "刻唐贤今人诗赋于其上", source: "岳阳楼记", grade: "九下", difficultyLevel: 2 }] },
      { id: 2, gloss: "写作", isCore: false, examples: [{ text: "为陈同赋壮词以寄之", source: "破阵子", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["岳阳楼记", "破阵子"]
  },
  {
    id: 18,
    word: "更",
    pinyin: "gēng/gèng",
    category: "副词/名词",
    meanings: [
      { id: 1, gloss: "另，另外", isCore: true, examples: [{ text: "士别三日，即更刮目相待", source: "孙权劝学", grade: "七下", difficultyLevel: 2 }] },
      { id: 2, gloss: "再", isCore: true, examples: [{ text: "室中更无人", source: "石壕吏", difficultyLevel: 2 }] },
      { id: 3, gloss: "又，还", isCore: false, examples: [{ text: "湖中焉得更有此人", source: "湖心亭看雪", difficultyLevel: 3 }] },
      { id: 4, gloss: "夜间计时的单位", isCore: false, examples: [{ text: "是日更定矣", source: "湖心亭看雪", difficultyLevel: 4 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["孙权劝学", "石壕吏", "湖心亭看雪"]
  },
  {
    id: 19,
    word: "苟",
    pinyin: "gǒu",
    category: "副词",
    meanings: [
      { id: 1, gloss: "随便，苟且", isCore: true, examples: [{ text: "苟全性命于乱世", source: "出师表", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "勉强，不正当", isCore: false, examples: [{ text: "故不为苟得也", source: "鱼我所欲也", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["出师表", "鱼我所欲也"]
  },
  {
    id: 20,
    word: "故",
    pinyin: "gù",
    category: "名词/副词/形容词",
    meanings: [
      { id: 1, gloss: "过去，原来，照旧", isCore: true, examples: [{ text: "温故而知新", source: "《论语》十二章", grade: "七上", difficultyLevel: 2 }] },
      { id: 2, gloss: "原因，缘故", isCore: true, examples: [{ text: "既克，公问其故", source: "曹刿论战", grade: "九下", difficultyLevel: 2 }] },
      { id: 3, gloss: "所以，因此", usageNote: "连词用法", isCore: true, examples: [{ text: "故天将降大任于是人也", source: "生于忧患，死于安乐", grade: "九下", difficultyLevel: 3 }] },
      { id: 4, gloss: "特意", isCore: false, examples: [{ text: "故遣将守关者", source: "鸿门宴", difficultyLevel: 4 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["《论语》十二章", "曹刿论战", "生于忧患，死于安乐", "鸿门宴"]
  },
  {
    id: 21,
    word: "顾",
    pinyin: "gù",
    category: "动词",
    meanings: [
      { id: 1, gloss: "回头看，看，看见", isCore: true, examples: [{ text: "元方入门不顾", source: "陈太丘与友期行", grade: "七上", difficultyLevel: 2 }] },
      { id: 2, gloss: "拜访", usageNote: "常用于拜访贤人", isCore: true, examples: [{ text: "三顾臣于草庐之中", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["zhong-kao-gao-pin"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["陈太丘与友期行", "出师表"]
  },
  {
    id: 22,
    word: "观",
    pinyin: "guān",
    category: "动词/名词",
    meanings: [
      { id: 1, gloss: "看，仔细看", isCore: true, examples: [{ text: "启窗而观", source: "核舟记", grade: "八下", difficultyLevel: 2 }] },
      { id: 2, gloss: "景象", isCore: true, examples: [{ text: "予观夫巴陵胜状", source: "岳阳楼记", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["核舟记", "岳阳楼记"]
  },
  {
    id: 23,
    word: "归",
    pinyin: "guī",
    category: "动词",
    meanings: [
      { id: 1, gloss: "归来，返回", isCore: true, examples: [{ text: "一屠晚归", source: "狼", grade: "七上", difficultyLevel: 1 }] },
      { id: 2, gloss: "归属，归依", isCore: true, examples: [{ text: "微斯人，吾谁与归", source: "岳阳楼记", grade: "九下", difficultyLevel: 4 }] },
      { id: 3, gloss: "女子出嫁", usageNote: "古代女性专用", isCore: false, examples: [{ text: "男有分，女有归", source: "大道之行也", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["狼", "岳阳楼记", "大道之行也"]
  },
  {
    id: 24,
    word: "过",
    pinyin: "guò",
    category: "动词/形容词",
    meanings: [
      { id: 1, gloss: "犯错", isCore: true, examples: [{ text: "人恒过，然后能改", source: "生于忧患，死于安乐", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "过分，过于", isCore: true, examples: [{ text: "以其境过清", source: "小石潭记", grade: "八下", difficultyLevel: 3 }] },
      { id: 3, gloss: "过了，超过", isCore: true, examples: [{ text: "过中不至，太丘舍去", source: "陈太丘与友期行", grade: "七上", difficultyLevel: 2 }] },
      { id: 4, gloss: "经过", isCore: true, examples: [{ text: "及鲁肃过寻阳", source: "孙权劝学", grade: "七下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["生于忧患，死于安乐", "小石潭记", "陈太丘与友期行", "孙权劝学"]
  },
  {
    id: 25,
    word: "好",
    pinyin: "hǎo/hào",
    category: "形容词/动词",
    meanings: [
      { id: 1, gloss: "美丽的", isCore: true, examples: [{ text: "好鸟相鸣", source: "与朱元思书", grade: "八上", difficultyLevel: 2 }] },
      { id: 2, gloss: "使人满意，与'坏'相对", isCore: true, examples: [{ text: "窈窕淑女，君子好逑", source: "关雎", difficultyLevel: 3 }] },
      { id: 3, gloss: "爱好", isCore: true, examples: [{ text: "蜀中有杜处士，好书画", source: "书戴嵩画牛", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "duo-yin-zi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["与朱元思书", "关雎", "书戴嵩画牛"]
  },
  {
    id: 26,
    word: "号",
    pinyin: "hào/háo",
    category: "动词/名词",
    meanings: [
      { id: 1, gloss: "大叫，呼啸", isCore: true, examples: [{ text: "阴风怒号", source: "岳阳楼记", grade: "九下", difficultyLevel: 2 }] },
      { id: 2, gloss: "取名号", isCore: true, examples: [{ text: "故自号曰醉翁也", source: "醉翁亭记", grade: "九上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "duo-yin-zi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["岳阳楼记", "醉翁亭记"]
  },
  {
    id: 27,
    word: "还",
    pinyin: "huán/hái",
    category: "动词",
    meanings: [
      { id: 1, gloss: "返回，回到", isCore: true, examples: [{ text: "愿驰千里足，送儿还故乡", source: "木兰诗", grade: "七下", difficultyLevel: 2 }] },
      { id: 2, gloss: "交还，归还", isCore: true, examples: [{ text: "便要还家，设酒杀鸡作食", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["duo-yin-zi"],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["木兰诗", "桃花源记"]
  },
  {
    id: 28,
    word: "会",
    pinyin: "huì",
    category: "动词/副词",
    meanings: [
      { id: 1, gloss: "会合，聚会，集会", isCore: true, examples: [{ text: "迁客骚人，多会于此", source: "岳阳楼记", grade: "九下", difficultyLevel: 2 }] },
      { id: 2, gloss: "适逢，恰巧遇到", isCore: true, examples: [{ text: "会天大雨", source: "陈涉世家", grade: "九上", difficultyLevel: 2 }] },
      { id: 3, gloss: "终将", isCore: false, examples: [{ text: "会当凌绝顶", source: "望岳", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["岳阳楼记", "陈涉世家", "望岳"]
  },
  {
    id: 29,
    word: "惠",
    pinyin: "huì",
    category: "名词/形容词",
    meanings: [
      { id: 1, gloss: "恩惠，好处", isCore: true, examples: [{ text: "小惠未遍，民弗从也", source: "曹刿论战", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "与'慧'连用，聪明", usageNote: "通假字用法", isCore: false, examples: [{ text: "甚矣，汝之不惠", source: "愚公移山", grade: "八上", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["曹刿论战", "愚公移山"]
  },
  {
    id: 30,
    word: "及",
    pinyin: "jí",
    category: "动词/连词/介词",
    meanings: [
      { id: 1, gloss: "到，到了，待，等到", isCore: true, examples: [{ text: "及日中则如盘盂", source: "两小儿辩日", difficultyLevel: 2 }] },
      { id: 2, gloss: "比得上，来得及", isCore: true, examples: [{ text: "悲守穷庐，将复何及", source: "诫子书", grade: "八上", difficultyLevel: 3 }] },
      { id: 3, gloss: "以及，和，与", usageNote: "连词用法", isCore: true, examples: [{ text: "若有作奸犯科及为忠善者", source: "出师表", grade: "九下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["两小儿辩日", "诫子书", "出师表"]
  },
  {
    id: 31,
    word: "极",
    pinyin: "jí",
    category: "名词/形容词/副词",
    meanings: [
      { id: 1, gloss: "尽头，穷尽", isCore: true, examples: [{ text: "其远而无所至极耶", source: "北冥有鱼", difficultyLevel: 4 }] },
      { id: 2, gloss: "到极点，达到极限", isCore: true, examples: [{ text: "感极而悲者矣", source: "岳阳楼记", grade: "九下", difficultyLevel: 3 }] },
      { id: 3, gloss: "很，非常", isCore: false, examples: [{ text: "初极狭，才通人", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["北冥有鱼", "岳阳楼记", "桃花源记"]
  },
  {
    id: 32,
    word: "计",
    pinyin: "jì",
    category: "动词",
    meanings: [
      { id: 1, gloss: "计算，计量，总计", isCore: true, examples: [{ text: "通计一舟，为人五", source: "核舟记", grade: "八下", difficultyLevel: 3 }] },
      { id: 2, gloss: "计划，策划", isCore: true, examples: [{ text: "而计其长曾不盈寸", source: "核舟记", grade: "八下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["核舟记"]
  },
  {
    id: 33,
    word: "济",
    pinyin: "jì",
    category: "动词",
    meanings: [
      { id: 1, gloss: "渡，渡过", isCore: true, examples: [{ text: "欲济无舟楫", source: "望洞庭湖赠张丞相", difficultyLevel: 3 }] },
      { id: 2, gloss: "帮助，救济", isCore: false, examples: [{ text: "直挂云帆济沧海", source: "行路难", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["望洞庭湖赠张丞相", "行路难"]
  },
  {
    id: 34,
    word: "假",
    pinyin: "jiǎ",
    category: "形容词/动词",
    meanings: [
      { id: 1, gloss: "不真实的，假装", isCore: true, examples: [{ text: "乃悟前狼假寐", source: "狼", grade: "七上", difficultyLevel: 2 }] },
      { id: 2, gloss: "借，借用", isCore: true, examples: [{ text: "以是人多以书假余", source: "送东阳马生序", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["狼", "送东阳马生序"]
  },
  {
    id: 35,
    word: "间",
    pinyin: "jiān",
    category: "名词/动词",
    meanings: [
      { id: 1, gloss: "中间，其间", isCore: true, examples: [{ text: "傅说举于版筑之间", source: "生于忧患，死于安乐", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "期间，时间", isCore: true, examples: [{ text: "少选之间而志在流水", source: "伯牙鼓琴", difficultyLevel: 3 }] },
      { id: 3, gloss: "参与，涉及", isCore: false, examples: [{ text: "肉食者谋之，又何间焉", source: "曹刿论战", grade: "九下", difficultyLevel: 3 }] },
      { id: 4, gloss: "隔开，分开", isCore: false, examples: [{ text: "遂与外人间隔", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["生于忧患，死于安乐", "伯牙鼓琴", "曹刿论战", "桃花源记"]
  },
  {
    id: 36,
    word: "简",
    pinyin: "jiǎn",
    category: "动词",
    meanings: [
      { id: 1, gloss: "挑选，选拔", isCore: true, examples: [{ text: "盖简桃核修狭者为之", source: "核舟记", grade: "八下", difficultyLevel: 2 }] },
      { id: 2, gloss: "选拔，推荐", isCore: true, examples: [{ text: "是以先帝简拔以遗陛下", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["zhong-kao-gao-pin"],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["核舟记", "出师表"]
  },
  {
    id: 37,
    word: "见",
    pinyin: "jiàn",
    category: "动词",
    meanings: [
      { id: 1, gloss: "看见，看到", isCore: true, examples: [{ text: "孔子东游，见两小儿辩斗", source: "两小儿辩日", difficultyLevel: 2 }] },
      { id: 2, gloss: "拜见，谒见", isCore: true, examples: [{ text: "曹刿请见", source: "曹刿论战", grade: "九下", difficultyLevel: 2 }] },
      { id: 3, gloss: "表现，显露", isCore: false, examples: [{ text: "食不饱，力不足，才美不外现", source: "马说", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["两小儿辩日", "曹刿论战", "马说"]
  },
  {
    id: 38,
    word: "竭",
    pinyin: "jié",
    category: "动词",
    meanings: [
      { id: 1, gloss: "穷尽，完结", isCore: true, examples: [{ text: "一鼓作气，再而衰，三而竭", source: "曹刿论战", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "尽力，竭力", isCore: true, examples: [{ text: "庶竭驽钝，攘除奸凶", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["曹刿论战", "出师表"]
  },
  {
    id: 39,
    word: "尽",
    pinyin: "jìn",
    category: "动词/副词",
    meanings: [
      { id: 1, gloss: "完，消尽，没有了", isCore: true, examples: [{ text: "担中肉尽，止有剩骨", source: "狼", grade: "七上", difficultyLevel: 2 }] },
      { id: 2, gloss: "全部，都，用尽", isCore: true, examples: [{ text: "策之不以其道，食之不能尽其材", source: "马说", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["狼", "马说"]
  },
  {
    id: 40,
    word: "进",
    pinyin: "jìn",
    category: "动词",
    meanings: [
      { id: 1, gloss: "在朝廷做官", isCore: true, examples: [{ text: "是进亦忧，退亦忧", source: "岳阳楼记", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "进献，奉献", isCore: false, examples: [{ text: "进尽忠言", source: "出师表", grade: "九下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["岳阳楼记", "出师表"]
  },
  {
    id: 41,
    word: "居",
    pinyin: "jū",
    category: "动词",
    meanings: [
      { id: 1, gloss: "停留，住", isCore: true, examples: [{ text: "以其境过清，不可久居", source: "小石潭记", grade: "八下", difficultyLevel: 2 }] },
      { id: 2, gloss: "居住，安居", isCore: true, examples: [{ text: "面山而居", source: "愚公移山", grade: "八上", difficultyLevel: 2 }] },
      { id: 3, gloss: "处在，处于", isCore: false, examples: [{ text: "居庙堂之高则忧其民", source: "岳阳楼记", grade: "九下", difficultyLevel: 3 }] },
      { id: 4, gloss: "经过，相隔一段时间", isCore: false, examples: [{ text: "居无何，上至", source: "周亚夫军细柳", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["小石潭记", "愚公移山", "岳阳楼记", "周亚夫军细柳"]
  },
  {
    id: 42,
    word: "举",
    pinyin: "jǔ",
    category: "动词",
    meanings: [
      { id: 1, gloss: "举荐，推举，选拔", isCore: true, examples: [{ text: "胶鬲举于鱼盐之中", source: "生于忧患，死于安乐", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "赞成，拥护", isCore: false, examples: [{ text: "是以众议举宠为督", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["zhong-kao-gao-pin"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["生于忧患，死于安乐", "出师表"]
  },
  {
    id: 43,
    word: "具",
    pinyin: "jù",
    category: "动词/副词",
    meanings: [
      { id: 1, gloss: "具备，具有", isCore: true, examples: [{ text: "罔不因势象形，各具情态", source: "核舟记", grade: "八下", difficultyLevel: 3 }] },
      { id: 2, gloss: "通'俱'，全部，详细地", isCore: true, examples: [{ text: "此人一一为具言所闻", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["核舟记", "桃花源记"]
  },
  {
    id: 44,
    word: "俱",
    pinyin: "jù",
    category: "副词",
    meanings: [
      { id: 1, gloss: "全，都", isCore: true, examples: [{ text: "青林翠竹，四时俱备", source: "答谢中书书", difficultyLevel: 2 }] },
      { id: 2, gloss: "一起，同时", isCore: false, examples: [{ text: "宫中府中，俱为一体", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["答谢中书书", "出师表"]
  },
  {
    id: 45,
    word: "聚",
    pinyin: "jù",
    category: "动词",
    meanings: [
      { id: 1, gloss: "集合，聚合", isCore: true, examples: [{ text: "聚室而谋曰", source: "愚公移山", grade: "八上", difficultyLevel: 2 }] },
      { id: 2, gloss: "聚拢，高耸", isCore: false, examples: [{ text: "峰峦如聚", source: "山坡羊·潼关怀古", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["愚公移山", "山坡羊·潼关怀古"]
  },
  {
    id: 46,
    word: "遽",
    pinyin: "jù",
    category: "副词",
    meanings: [
      { id: 1, gloss: "就，立刻，忽然", isCore: true, examples: [{ text: "其父虽善游，其子岂遽善游哉", source: "吕氏春秋", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["吕氏春秋"]
  },
  {
    id: 47,
    word: "决",
    pinyin: "jué",
    category: "动词",
    meanings: [
      { id: 1, gloss: "分辨，判断，解决", isCore: true, examples: [{ text: "孔子不能决也", source: "两小儿辩日", difficultyLevel: 2 }] },
      { id: 2, gloss: "裂开，决口", isCore: false, examples: [{ text: "决眦入归鸟", source: "望岳", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["两小儿辩日", "望岳"]
  },
  {
    id: 48,
    word: "绝",
    pinyin: "jué",
    category: "动词/形容词/副词",
    meanings: [
      { id: 1, gloss: "断，割断", isCore: true, examples: [{ text: "伯牙破琴绝弦", source: "伯牙鼓琴", difficultyLevel: 3 }] },
      { id: 2, gloss: "与世隔绝的，孤立的", isCore: true, examples: [{ text: "率妻子邑人来此绝境", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] },
      { id: 3, gloss: "独一无二的，独特的", isCore: false, examples: [{ text: "奇山异水，天下独绝", source: "与朱元思书", grade: "八上", difficultyLevel: 3 }] },
      { id: 4, gloss: "极，非常", isCore: false, examples: [{ text: "佛印绝类弥勒", source: "核舟记", grade: "八下", difficultyLevel: 2 }] },
      { id: 5, gloss: "停止，消失", isCore: false, examples: [{ text: "空谷传响，哀转久绝", source: "三峡", difficultyLevel: 4 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["伯牙鼓琴", "桃花源记", "与朱元思书", "核舟记", "三峡"]
  },
  {
    id: 49,
    word: "类",
    pinyin: "lèi",
    category: "动词",
    meanings: [
      { id: 1, gloss: "类似，像，相似", isCore: true, examples: [{ text: "佛印绝类弥勒", source: "核舟记", grade: "八下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["核舟记"]
  },
  {
    id: 50,
    word: "临",
    pinyin: "lín",
    category: "动词",
    meanings: [
      { id: 1, gloss: "靠近，面对", isCore: true, examples: [{ text: "有亭翼然临于泉上者", source: "醉翁亭记", grade: "九上", difficultyLevel: 3 }] },
      { id: 2, gloss: "来到，到达", isCore: true, examples: [{ text: "临溪而渔", source: "醉翁亭记", grade: "九上", difficultyLevel: 2 }] },
      { id: 3, gloss: "对着，面对", isCore: false, examples: [{ text: "把酒临风", source: "岳阳楼记", grade: "九下", difficultyLevel: 3 }] },
      { id: 4, gloss: "正当，将要", isCore: false, examples: [{ text: "今当远离，临表涕零", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["醉翁亭记", "岳阳楼记", "出师表"]
  },
  {
    id: 51,
    word: "虑",
    pinyin: "lǜ",
    category: "名词",
    meanings: [
      { id: 1, gloss: "思虑，思绪，心思", isCore: true, examples: [{ text: "困于心，衡于虑，而后作", source: "生于忧患，死于安乐", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "思想品质，心志", isCore: false, examples: [{ text: "此皆良实，志虑忠纯", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["生于忧患，死于安乐", "出师表"]
  },
  {
    id: 52,
    word: "论",
    pinyin: "lùn",
    category: "动词/名词",
    meanings: [
      { id: 1, gloss: "议论，谈论，讨论", isCore: true, examples: [{ text: "及鲁肃过寻阳，与蒙论议", source: "孙权劝学", grade: "七下", difficultyLevel: 2 }] },
      { id: 2, gloss: "评定，判定，按照", isCore: false, examples: [{ text: "宜付有司论其刑赏", source: "出师表", grade: "九下", difficultyLevel: 3 }] },
      { id: 3, gloss: "言论，论文", isCore: false, examples: [{ text: "众服为确论", source: "河中石兽", difficultyLevel: 4 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["孙权劝学", "出师表", "河中石兽"]
  },
  {
    id: 53,
    word: "漫",
    pinyin: "màn",
    category: "形容词",
    meanings: [
      { id: 1, gloss: "遍，到处都是", isCore: true, examples: [{ text: "惟解漫天作雪飞", source: "晚春", difficultyLevel: 3 }] },
      { id: 2, gloss: "长，延伸很远", isCore: false, examples: [{ text: "故园东望路漫漫", source: "逢入京使", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["晚春", "逢入京使"]
  },
  {
    id: 54,
    word: "明",
    pinyin: "míng",
    category: "形容词/名词",
    meanings: [
      { id: 1, gloss: "明亮，光明", isCore: true, examples: [{ text: "斗折蛇行，明灭可见", source: "小石潭记", grade: "八下", difficultyLevel: 2 }] },
      { id: 2, gloss: "英明，聪慧", isCore: true, examples: [{ text: "以昭陛下平明之理", source: "出师表", grade: "九下", difficultyLevel: 3 }] },
      { id: 3, gloss: "第二天，次年", isCore: false, examples: [{ text: "越明年，政通人和", source: "岳阳楼记", grade: "九下", difficultyLevel: 2 }] },
      { id: 4, gloss: "聪慧，明智的", isCore: false, examples: [{ text: "非淡泊无以明志", source: "诫子书", grade: "八上", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["小石潭记", "出师表", "岳阳楼记", "诫子书"]
  },
  {
    id: 55,
    word: "名",
    pinyin: "míng",
    category: "名词/动词/形容词",
    meanings: [
      { id: 1, gloss: "名字，名称", isCore: true, examples: [{ text: "卷卷有爷名", source: "木兰诗", grade: "七下", difficultyLevel: 2 }] },
      { id: 2, gloss: "命名，给…取名", isCore: true, examples: [{ text: "名之者谁", source: "醉翁亭记", grade: "九上", difficultyLevel: 2 }] },
      { id: 3, gloss: "有名，出名，著名", isCore: false, examples: [{ text: "山不在高，有仙则名", source: "陋室铭", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["木兰诗", "醉翁亭记", "陋室铭"]
  },
  {
    id: 56,
    word: "命",
    pinyin: "mìng",
    category: "动词/名词",
    meanings: [
      { id: 1, gloss: "命令，号令", isCore: true, examples: [{ text: "命夸娥氏二子负二山", source: "愚公移山", grade: "八上", difficultyLevel: 2 }] },
      { id: 2, gloss: "任命，委派", isCore: true, examples: [{ text: "受命以来，夙夜忧叹", source: "出师表", grade: "九下", difficultyLevel: 3 }] },
      { id: 3, gloss: "生命，性命", isCore: false, examples: [{ text: "苟全性命于乱世", source: "出师表", grade: "九下", difficultyLevel: 2 }] },
      { id: 4, gloss: "古代一种文体", isCore: false, examples: [{ text: "兑命曰学学半", source: "虽有佳肴", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["愚公移山", "出师表", "虽有佳肴"]
  },
  {
    id: 57,
    word: "难",
    pinyin: "nán",
    category: "形容词/名词",
    meanings: [
      { id: 1, gloss: "不容易，困难", isCore: true, examples: [{ text: "夫大国，难测也", source: "曹刿论战", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "灾难，危险", isCore: false, examples: [{ text: "奉命于危难之间", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["曹刿论战", "出师表"]
  },
  {
    id: 58,
    word: "平",
    pinyin: "píng",
    category: "形容词/动词",
    meanings: [
      { id: 1, gloss: "平坦，平整", isCore: true, examples: [{ text: "土地平旷，屋舍俨然", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] },
      { id: 2, gloss: "填平，铲平，平复", isCore: false, examples: [{ text: "吾与汝毕力平险", source: "愚公移山", grade: "八上", difficultyLevel: 3 }] },
      { id: 3, gloss: "公平，公正", isCore: false, examples: [{ text: "以昭陛下平明之理", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["桃花源记", "愚公移山", "出师表"]
  },
  {
    id: 59,
    word: "戚",
    pinyin: "qī",
    category: "名词",
    meanings: [
      { id: 1, gloss: "亲属，亲戚", isCore: true, examples: [{ text: "寡助之至，亲戚畔之", source: "得道多助，失道寡助", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["得道多助，失道寡助"]
  },
  {
    id: 60,
    word: "强",
    pinyin: "qiáng",
    category: "形容词/副词",
    meanings: [
      { id: 1, gloss: "强悍，强大，坚强", isCore: true, examples: [{ text: "知困，然后能自强也", source: "虽有佳肴", difficultyLevel: 3 }] },
      { id: 2, gloss: "竭力，尽力，勉强", isCore: false, examples: [{ text: "余强饮三大白而别", source: "湖心亭看雪", difficultyLevel: 2 }] },
      { id: 3, gloss: "有余，超过", isCore: false, examples: [{ text: "赏赐百千强", source: "木兰诗", grade: "七下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["虽有佳肴", "湖心亭看雪", "木兰诗"]
  },
  {
    id: 61,
    word: "窃",
    pinyin: "qiè",
    category: "动词",
    meanings: [
      { id: 1, gloss: "偷取，盗取", isCore: true, examples: [{ text: "盗窃乱贼而不作", source: "大道之行也", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["大道之行也"]
  },
  {
    id: 62,
    word: "请",
    pinyin: "qǐng",
    category: "动词",
    meanings: [
      { id: 1, gloss: "请求，恳求", isCore: true, examples: [{ text: "曹刿请见", source: "曹刿论战", grade: "九下", difficultyLevel: 2 }] },
      { id: 2, gloss: "请允许我", isCore: false, examples: [{ text: "战则请从", source: "曹刿论战", grade: "九下", difficultyLevel: 2 }] },
      { id: 3, gloss: "请你，邀请", isCore: false, examples: [{ text: "请循其本", source: "庄子与惠子游于濠梁之上", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["曹刿论战", "庄子与惠子游于濠梁之上"]
  },
  {
    id: 63,
    word: "穷",
    pinyin: "qióng",
    category: "形容词/动词",
    meanings: [
      { id: 1, gloss: "穷困，贫困", isCore: true, examples: [{ text: "所识穷乏者得我与", source: "鱼我所欲也", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "穷尽，完结，无尽", isCore: true, examples: [{ text: "子子孙孙无穷匮也", source: "愚公移山", grade: "八上", difficultyLevel: 2 }] },
      { id: 3, gloss: "极，最", isCore: false, examples: [{ text: "穷冬烈风", source: "送东阳马生序", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["鱼我所欲也", "愚公移山", "送东阳马生序"]
  },
  {
    id: 64,
    word: "求",
    pinyin: "qiú",
    category: "动词",
    meanings: [
      { id: 1, gloss: "寻找，寻求，寻觅", isCore: true, examples: [{ text: "求二石兽于水中", source: "河中石兽", difficultyLevel: 3 }] },
      { id: 2, gloss: "探求，追求，想得到", isCore: true, examples: [{ text: "予尝求古仁人之心", source: "岳阳楼记", grade: "九下", difficultyLevel: 3 }] },
      { id: 3, gloss: "索取，要求，请求", isCore: false, examples: [{ text: "安求其能千里也", source: "马说", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["河中石兽", "岳阳楼记", "马说"]
  },
  {
    id: 65,
    word: "取",
    pinyin: "qǔ",
    category: "动词",
    meanings: [
      { id: 1, gloss: "拿，取得", isCore: true, examples: [{ text: "乃取一葫芦置于地", source: "卖油翁", grade: "七下", difficultyLevel: 2 }] },
      { id: 2, gloss: "获得，讨取，开辟", isCore: true, examples: [{ text: "伐竹取道", source: "小石潭记", grade: "八下", difficultyLevel: 2 }] },
      { id: 3, gloss: "选取，采用，选择", isCore: false, examples: [{ text: "舍鱼而取熊掌者也", source: "鱼我所欲也", grade: "九下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["卖油翁", "小石潭记", "鱼我所欲也"]
  },
  {
    id: 66,
    word: "去",
    pinyin: "qù",
    category: "动词",
    meanings: [
      { id: 1, gloss: "离开，离去", isCore: true, examples: [{ text: "一狼径去", source: "狼", grade: "七上", difficultyLevel: 1 }] },
      { id: 2, gloss: "距，距离", isCore: false, examples: [{ text: "我以日始出时去人近", source: "两小儿辩日", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["狼", "两小儿辩日"]
  },
  {
    id: 67,
    word: "全",
    pinyin: "quán",
    category: "形容词/动词",
    meanings: [
      { id: 1, gloss: "完整，整个，全部", isCore: true, examples: [{ text: "全石以为底", source: "小石潭记", grade: "八下", difficultyLevel: 2 }] },
      { id: 2, gloss: "完全，完备，齐全", isCore: false, examples: [{ text: "子之不知鱼之乐，全矣", source: "庄子与惠子游于濠梁之上", difficultyLevel: 3 }] },
      { id: 3, gloss: "保全，保护", isCore: true, examples: [{ text: "苟全性命于乱世", source: "出师表", grade: "九下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["小石潭记", "庄子与惠子游于濠梁之上", "出师表"]
  },
  {
    id: 68,
    word: "任",
    pinyin: "rèn",
    category: "名词/动词",
    meanings: [
      { id: 1, gloss: "责任，职责，使命", isCore: true, examples: [{ text: "故天将降大任于是人也", source: "生于忧患，死于安乐", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "委任，任用，委派", isCore: true, examples: [{ text: "受任于败军之际", source: "出师表", grade: "九下", difficultyLevel: 3 }] },
      { id: 3, gloss: "听凭，任凭，放纵", isCore: false, examples: [{ text: "从流飘荡，任意东西", source: "与朱元思书", grade: "八上", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["生于忧患，死于安乐", "出师表", "与朱元思书"]
  },
  {
    id: 69,
    word: "入",
    pinyin: "rù",
    category: "动词",
    meanings: [
      { id: 1, gloss: "进入，进去", isCore: true, examples: [{ text: "元方入门不顾", source: "陈太丘与友期行", grade: "七上", difficultyLevel: 2 }] },
      { id: 2, gloss: "注入，流入", isCore: false, examples: [{ text: "自钱孔入，而钱不湿", source: "卖油翁", grade: "七下", difficultyLevel: 2 }] },
      { id: 3, gloss: "进入朝廷，在国内任职", isCore: false, examples: [{ text: "入则无法家拂士", source: "生于忧患，死于安乐", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["陈太丘与友期行", "卖油翁", "生于忧患，死于安乐"]
  },
  {
    id: 70,
    word: "若",
    pinyin: "ruò",
    category: "动词/连词/代词",
    meanings: [
      { id: 1, gloss: "如，似，像", isCore: true, examples: [{ text: "巍巍乎若泰山", source: "伯牙鼓琴", difficultyLevel: 3 }] },
      { id: 2, gloss: "假如，如果", isCore: true, examples: [{ text: "若有作奸犯科及为忠善者", source: "出师表", grade: "九下", difficultyLevel: 2 }] },
      { id: 3, gloss: "你，你的", isCore: false, examples: [{ text: "若屈伸呼吸，终日在天中行止", source: "杞人忧天", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["伯牙鼓琴", "出师表", "杞人忧天"]
  },
  {
    id: 71,
    word: "善",
    pinyin: "shàn",
    category: "形容词/动词",
    meanings: [
      { id: 1, gloss: "好，好的，善良的", isCore: true, examples: [{ text: "择其善者而从之", source: "《论语》十二章", grade: "七上", difficultyLevel: 2 }] },
      { id: 2, gloss: "善于，擅长，熟悉", isCore: true, examples: [{ text: "陈康肃尧咨善射", source: "卖油翁", grade: "七下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["《论语》十二章", "卖油翁"]
  },
  {
    id: 72,
    word: "少",
    pinyin: "shǎo",
    category: "形容词/副词",
    meanings: [
      { id: 1, gloss: "不多，数量小，稀少", isCore: true, examples: [{ text: "饮少辄醉", source: "醉翁亭记", grade: "九上", difficultyLevel: 2 }] },
      { id: 2, gloss: "缺少，缺乏", isCore: false, examples: [{ text: "但少闲人如吾两人者耳", source: "记承天夜游", difficultyLevel: 2 }] },
      { id: 3, gloss: "年轻，少年", isCore: true, examples: [{ text: "陈涉少时，尝与人佣耕", source: "陈涉世家", grade: "九上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["醉翁亭记", "记承天夜游", "陈涉世家"]
  },
  {
    id: 73,
    word: "舍",
    pinyin: "shě",
    category: "名词/动词",
    meanings: [
      { id: 1, gloss: "房屋，房舍，住所", isCore: true, examples: [{ text: "土地平旷，屋舍俨然", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] },
      { id: 2, gloss: "舍弃，丢弃，放弃", isCore: true, examples: [{ text: "舍鱼而取熊掌者也", source: "鱼我所欲也", grade: "九下", difficultyLevel: 2 }] },
      { id: 3, gloss: "同'���'，解除，消除", isCore: false, examples: [{ text: "其人舍然大喜", source: "杞人忧天", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["桃花源记", "鱼我所欲也", "杞人忧天"]
  },
  {
    id: 74,
    word: "涉",
    pinyin: "shè",
    category: "动词",
    meanings: [
      { id: 1, gloss: "浏览，阅览，翻阅", isCore: true, examples: [{ text: "但当涉猎，见往事耳", source: "孙权劝学", grade: "七下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["孙权劝学"]
  },
  {
    id: 75,
    word: "生",
    pinyin: "shēng",
    category: "动词/名词",
    meanings: [
      { id: 1, gloss: "生长，出生，产生", isCore: true, examples: [{ text: "夹岸高山，皆生寒树", source: "与朱元思书", grade: "八上", difficultyLevel: 2 }] },
      { id: 2, gloss: "生存，活着", isCore: true, examples: [{ text: "然后知生于忧患而死于安乐也", source: "生于忧患，死于安乐", grade: "九下", difficultyLevel: 3 }] },
      { id: 3, gloss: "生命，生者", isCore: false, examples: [{ text: "生，亦我所欲也", source: "鱼我所欲也", grade: "九下", difficultyLevel: 2 }] },
      { id: 4, gloss: "后生，晚辈，年轻人", isCore: false, examples: [{ text: "隶而从者，崔氏二小生", source: "小石潭记", grade: "八下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["与朱元思书", "生于忧患，死于安乐", "鱼我所欲也", "小石潭记"]
  },
  {
    id: 76,
    word: "胜",
    pinyin: "shèng",
    category: "动词/形容词",
    meanings: [
      { id: 1, gloss: "胜利，获胜，战胜", isCore: true, examples: [{ text: "然而不胜者，是天时不如地利也", source: "得道多助，失道寡助", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "尽，完，承受", isCore: false, examples: [{ text: "臣不胜受恩感激", source: "出师表", grade: "九下", difficultyLevel: 3 }] },
      { id: 3, gloss: "优美的，胜景", isCore: false, examples: [{ text: "予观夫巴陵胜状", source: "岳阳楼记", grade: "九下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["得道多助，失道寡助", "出师表", "岳阳楼记"]
  },
  {
    id: 77,
    word: "师",
    pinyin: "shī",
    category: "名词",
    meanings: [
      { id: 1, gloss: "军队，兵力", isCore: true, examples: [{ text: "十年春，齐师伐我", source: "曹刿论战", grade: "九下", difficultyLevel: 2 }] },
      { id: 2, gloss: "老师，师傅", isCore: true, examples: [{ text: "温故而知新，可以为师矣", source: "《论语》十二章", grade: "七上", difficultyLevel: 2 }] },
      { id: 3, gloss: "首都，京城", isCore: false, examples: [{ text: "余朝京师", source: "送东阳马生序", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["曹刿论战", "《论语》十二章", "送东阳马生序"]
  },
  {
    id: 78,
    word: "施",
    pinyin: "shī",
    category: "动词",
    meanings: [
      { id: 1, gloss: "实施，实行，施行", isCore: true, examples: [{ text: "悉以咨之，然后施行", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["出师表"]
  },
  {
    id: 79,
    word: "实",
    pinyin: "shí",
    category: "名词/形容词",
    meanings: [
      { id: 1, gloss: "实际，事实，真实", isCore: true, examples: [{ text: "实是欲界之仙都", source: "答谢中书书", difficultyLevel: 2 }] },
      { id: 2, gloss: "诚实，真实，忠实", isCore: true, examples: [{ text: "此皆良实", source: "出师表", grade: "九下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["答谢中书书", "出师表"]
  },
  {
    id: 80,
    word: "食",
    pinyin: "shí",
    category: "动词/名词",
    meanings: [
      { id: 1, gloss: "吃，吃饭，饮食", isCore: true, examples: [{ text: "弗食，不知其旨也", source: "虽有佳肴", difficultyLevel: 2 }] },
      { id: 2, gloss: "粮食，食物，东西", isCore: true, examples: [{ text: "一箪食，一瓢饮", source: "《论语》十二章", grade: "七上", difficultyLevel: 2 }] },
      { id: 3, gloss: "供养，给…吃，饲养", isCore: false, examples: [{ text: "食之不能尽其材", source: "马说", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["虽有佳肴", "《论语》十二章", "马说"]
  },
  {
    id: 81,
    word: "使",
    pinyin: "shǐ",
    category: "动词/名词",
    meanings: [
      { id: 1, gloss: "使唤，派遣，驱使", isCore: true, examples: [{ text: "于是上乃使使持节诏将军", source: "周亚夫军细柳", difficultyLevel: 3 }] },
      { id: 2, gloss: "让，叫，令", isCore: true, examples: [{ text: "必能使行阵和睦", source: "出师表", grade: "九下", difficultyLevel: 2 }] },
      { id: 3, gloss: "出使，派遣使节", isCore: false, examples: [{ text: "安陵君因使唐雎使于秦", source: "唐雎不辱使命", difficultyLevel: 3 }] },
      { id: 4, gloss: "假使，即使", isCore: false, examples: [{ text: "使人之所恶莫甚于死者", source: "鱼我所欲也", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["周亚夫军细柳", "出师表", "唐雎不辱使命", "鱼我所欲也"]
  },
  {
    id: 82,
    word: "释",
    pinyin: "shì",
    category: "动词",
    meanings: [
      { id: 1, gloss: "放下，放弃，解除", isCore: true, examples: [{ text: "有卖油翁释担而立", source: "卖油翁", grade: "七下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["卖油翁"]
  },
  {
    id: 83,
    word: "市",
    pinyin: "shì",
    category: "名词/动词",
    meanings: [
      { id: 1, gloss: "市场，集市，街市", isCore: true, examples: [{ text: "东市买骏马", source: "木兰诗", grade: "七下", difficultyLevel: 1 }] },
      { id: 2, gloss: "买，购买", isCore: true, examples: [{ text: "愿为市鞍马", source: "木兰诗", grade: "七下", difficultyLevel: 1 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["木兰诗"]
  },
  {
    id: 84,
    word: "恃",
    pinyin: "shì",
    category: "动词",
    meanings: [
      { id: 1, gloss: "依赖，倚仗，凭借", isCore: true, examples: [{ text: "子何恃而往", source: "为学", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["为学"]
  },
  {
    id: 85,
    word: "数",
    pinyin: "shuò",
    category: "数词/动词",
    meanings: [
      { id: 1, gloss: "几，几个", isCore: true, examples: [{ text: "以刀劈狼首，又数刀毙之", source: "狼", grade: "七上", difficultyLevel: 2 }] },
      { id: 2, gloss: "计算，点数，数数", isCore: true, examples: [{ text: "珠可历历数也", source: "核舟记", grade: "八下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["狼", "核舟记"]
  },
  {
    id: 86,
    word: "属",
    pinyin: "zhǔ",
    category: "动词/名词",
    meanings: [
      { id: 1, gloss: "同'嘱'，嘱托，委托", isCore: true, examples: [{ text: "属予作文以记之", source: "岳阳楼记", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "部属，隶属，附属", isCore: false, examples: [{ text: "壁门士吏谓从属车骑曰", source: "周亚夫军细柳", difficultyLevel: 3 }] },
      { id: 3, gloss: "类，一类，等等", isCore: true, examples: [{ text: "有良田、美池、桑竹之属", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] },
      { id: 4, gloss: "连接，联系", isCore: false, examples: [{ text: "属引凄异", source: "三峡", difficultyLevel: 4 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["岳阳楼记", "周亚夫军细柳", "桃花源记", "三峡"]
  },
  {
    id: 87,
    word: "说",
    pinyin: "shuō",
    category: "动词/名词",
    meanings: [
      { id: 1, gloss: "陈述，解说，讲述", isCore: true, examples: [{ text: "及郡下，诣太守，说如此", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] },
      { id: 2, gloss: "古代的一种文体", isCore: false, examples: [{ text: "爱莲说", source: "爱莲说", difficultyLevel: 2 }] },
      { id: 3, gloss: "同'悦'，愉快，高兴", isCore: false, examples: [{ text: "学而时习之，不亦说乎", source: "《论语》十二章", grade: "七上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["桃花源记", "爱莲说", "《论语》十二章"]
  },
  {
    id: 88,
    word: "素",
    pinyin: "sù",
    category: "形容词",
    meanings: [
      { id: 1, gloss: "白的，白色的，素色", isCore: true, examples: [{ text: "春冬之时，则素湍绿谭", source: "三峡", difficultyLevel: 3 }] },
      { id: 2, gloss: "朴素，不加装饰的，素雅", isCore: false, examples: [{ text: "可以调素琴，阅金经", source: "陋室铭", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["三峡", "陋室铭"]
  },
  {
    id: 89,
    word: "汤",
    pinyin: "tāng",
    category: "名词",
    meanings: [
      { id: 1, gloss: "热水，开水，沸水", isCore: true, examples: [{ text: "日初出沧沧凉凉，及日中如探汤", source: "两小儿辩日", difficultyLevel: 2 }] },
      { id: 2, gloss: "水流大而急的样子", isCore: false, examples: [{ text: "浩浩汤汤，横无际涯", source: "岳阳楼记", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["两小儿辩日", "岳阳楼记"]
  },
  {
    id: 90,
    word: "徒",
    pinyin: "tú",
    category: "形容词",
    meanings: [
      { id: 1, gloss: "空，光脚，赤足", isCore: true, examples: [{ text: "亦免冠徒跣，以头抢地尔", source: "唐雎不辱使命", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["唐雎不辱使命"]
  },
  {
    id: 91,
    word: "亡",
    pinyin: "wáng",
    category: "动词",
    meanings: [
      { id: 1, gloss: "灭亡，死亡，消亡", isCore: true, examples: [{ text: "出则无敌国外患者，国恒亡", source: "生于忧患，死于安乐", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "通'无'，没有", isCore: false, examples: [{ text: "天，积气耳，亡处亡气", source: "杞人忧天", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["生于忧患，死于安乐", "杞人忧天"]
  },
  {
    id: 92,
    word: "为",
    pinyin: "wéi",
    category: "动词/介词",
    meanings: [
      { id: 1, gloss: "做，干，制造", isCore: true, examples: [{ text: "行拂乱其所为", source: "生于忧患，死于安乐", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "作为，当作", isCore: true, examples: [{ text: "全石以为底", source: "小石潭记", grade: "八下", difficultyLevel: 2 }] },
      { id: 3, gloss: "是", isCore: false, examples: [{ text: "中峨冠而多髯者为东坡", source: "核舟记", grade: "八下", difficultyLevel: 2 }] },
      { id: 4, gloss: "变成，成为", isCore: false, examples: [{ text: "化而为鸟", source: "北冥有鱼", difficultyLevel: 4 }] },
      { id: 5, gloss: "为了，给，替", isCore: true, examples: [{ text: "为人谋而不忠乎", source: "《论语》十二章", grade: "七上", difficultyLevel: 2 }] },
      { id: 6, gloss: "被", isCore: false, examples: [{ text: "岂能为暴涨携之去", source: "河中石兽", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["生于忧患，死于安乐", "小石潭记", "核舟记", "北冥有鱼", "《论语》十二章", "河中石兽"]
  },
  {
    id: 93,
    word: "委",
    pinyin: "wěi",
    category: "动词",
    meanings: [
      { id: 1, gloss: "抛弃，舍弃，放弃", isCore: true, examples: [{ text: "委而去之", source: "得道多助，失道寡助", grade: "九下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["得道多助，失道寡助"]
  },
  {
    id: 94,
    word: "务",
    pinyin: "wù",
    category: "名词",
    meanings: [
      { id: 1, gloss: "事务，事情，业务", isCore: true, examples: [{ text: "蒙辞以军中多务", source: "孙权劝学", grade: "七下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["孙权劝学"]
  },
  {
    id: 95,
    word: "鲜",
    pinyin: "xiān",
    category: "形容词",
    meanings: [
      { id: 1, gloss: "鲜艳，鲜明，艳丽", isCore: true, examples: [{ text: "芳草鲜美，落英缤纷", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] },
      { id: 2, gloss: "滋味鲜美，新鲜", isCore: false, examples: [{ text: "无鲜肥滋味之享", source: "送东阳马生序", grade: "九下", difficultyLevel: 3 }] },
      { id: 3, gloss: "少，很少", isCore: false, examples: [{ text: "菊之爱，陶后鲜有闻", source: "爱莲说", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["桃花源记", "送东阳马生序", "爱莲说"]
  },
  {
    id: 96,
    word: "向",
    pinyin: "xiàng",
    category: "介词/副词",
    meanings: [
      { id: 1, gloss: "对着，朝着，面向", isCore: true, examples: [{ text: "狼不敢前，眈眈相向", source: "狼", grade: "七上", difficultyLevel: 2 }] },
      { id: 2, gloss: "过去，从前，原来", isCore: false, examples: [{ text: "便扶向路，处处志之", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["狼", "桃花源记"]
  },
  {
    id: 97,
    word: "效",
    pinyin: "xiào",
    category: "名词/动词",
    meanings: [
      { id: 1, gloss: "任务，重任，建功", isCore: true, examples: [{ text: "愿陛下托臣以讨贼兴复之效", source: "出师表", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "效果，见效，奏效", isCore: false, examples: [{ text: "夙夜忧叹，恐托付不效", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["出师表"]
  },
  {
    id: 98,
    word: "谢",
    pinyin: "xiè",
    category: "动词",
    meanings: [
      { id: 1, gloss: "道谢，感谢，谢谢", isCore: true, examples: [{ text: "使人称谢", source: "周亚夫军细柳", difficultyLevel: 3 }] },
      { id: 2, gloss: "道歉，认错", isCore: false, examples: [{ text: "秦王色绕，长跪而谢之曰", source: "唐雎不辱使命", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["周亚夫军细柳", "唐雎不辱使命"]
  },
  {
    id: 99,
    word: "信",
    pinyin: "xìn",
    category: "名词/动词",
    meanings: [
      { id: 1, gloss: "信用，诚信，守信", isCore: true, examples: [{ text: "日中不至，则是无信", source: "陈太丘与友期行", grade: "七上", difficultyLevel: 2 }] },
      { id: 2, gloss: "相信，信任，信赖", isCore: true, examples: [{ text: "愿陛下亲之信之", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["陈太丘与友期行", "出师表"]
  },
  {
    id: 100,
    word: "行",
    pinyin: "xíng",
    category: "动词/名词",
    meanings: [
      { id: 1, gloss: "行走，走路", isCore: true, examples: [{ text: "三人行，必有我师焉", source: "《论语》十二章", grade: "七上", difficultyLevel: 2 }] },
      { id: 2, gloss: "做，实行，实施，进行", isCore: true, examples: [{ text: "悉以咨之，然后施行", source: "出师表", grade: "九下", difficultyLevel: 2 }] },
      { id: 3, gloss: "品德，品行，操行", isCore: false, examples: [{ text: "夫君子之行，静以修身", source: "诫子书", grade: "八上", difficultyLevel: 3 }] },
      { id: 4, gloss: "行列，阵列，队伍", isCore: false, examples: [{ text: "必能使行阵和睦", source: "出师表", grade: "九下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi", "zhong-kao-gao-pin"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["《论语》十二章", "出师表", "诫子书"]
  },
  {
    id: 101,
    word: "形",
    pinyin: "xíng",
    category: "名词",
    meanings: [
      { id: 1, gloss: "身体，形体，躯体", isCore: true, examples: [{ text: "无案牍之劳形", source: "陋室铭", difficultyLevel: 2 }] },
      { id: 2, gloss: "形状，样子，形态", isCore: true, examples: [{ text: "罔不因势象形", source: "核舟记", grade: "八下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["陋室铭", "核舟记"]
  },
  {
    id: 102,
    word: "兴",
    pinyin: "xīng",
    category: "动词",
    meanings: [
      { id: 1, gloss: "起，兴起，产生", isCore: true, examples: [{ text: "清风徐来，水波不兴", source: "核舟记", grade: "八下", difficultyLevel: 2 }] },
      { id: 2, gloss: "兴办，创办，建立", isCore: true, examples: [{ text: "越明年，政通人和，百废具兴", source: "岳阳楼记", grade: "九下", difficultyLevel: 3 }] },
      { id: 3, gloss: "兴盛，振兴，复兴", isCore: false, examples: [{ text: "此先汉所以兴隆也", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["核舟记", "岳阳楼记", "出师表"]
  },
  {
    id: 103,
    word: "修",
    pinyin: "xiū",
    category: "动词/形容词",
    meanings: [
      { id: 1, gloss: "修建，建造，修缮", isCore: true, examples: [{ text: "乃重修岳阳楼", source: "岳阳楼记", grade: "九下", difficultyLevel: 2 }] },
      { id: 2, gloss: "长，高，修长", isCore: false, examples: [{ text: "盖简桃核修狭者为之", source: "核舟记", grade: "八下", difficultyLevel: 2 }] },
      { id: 3, gloss: "培养，修养，修为", isCore: true, examples: [{ text: "静以修身", source: "诫子书", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["岳阳楼记", "核舟记", "诫子书"]
  },
  {
    id: 104,
    word: "徐",
    pinyin: "xú",
    category: "副词",
    meanings: [
      { id: 1, gloss: "缓慢，缓缓地，徐徐地", isCore: true, examples: [{ text: "徐以杓酌油沥之", source: "卖油翁", grade: "七下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["卖油翁"]
  },
  {
    id: 105,
    word: "许",
    pinyin: "xǔ",
    category: "副词/动词",
    meanings: [
      { id: 1, gloss: "表约数，上下，光景，左右", isCore: true, examples: [{ text: "高可二黍许", source: "核舟记", grade: "八下", difficultyLevel: 2 }] },
      { id: 2, gloss: "赞同，答应，应允，同意", isCore: true, examples: [{ text: "遂许先帝以驱驰", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["核舟记", "出师表"]
  },
  {
    id: 106,
    word: "寻",
    pinyin: "xún",
    category: "动词/副词",
    meanings: [
      { id: 1, gloss: "找寻，寻求，探求，查找", isCore: true, examples: [{ text: "寻向所志，遂迷", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] },
      { id: 2, gloss: "不久，随即，旋即", isCore: false, examples: [{ text: "未果，寻病终", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["桃花源记"]
  },
  {
    id: 107,
    word: "业",
    pinyin: "yè",
    category: "名词",
    meanings: [
      { id: 1, gloss: "事业，功业，事迹", isCore: true, examples: [{ text: "先帝创业未半", source: "出师表", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "职业，行业", isCore: true, examples: [{ text: "晋太元中，武陵人捕鱼为业", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["出师表", "桃花源记"]
  },
  {
    id: 108,
    word: "遗",
    pinyin: "yí",
    category: "动词",
    meanings: [
      { id: 1, gloss: "遗留，留下，保留", isCore: true, examples: [{ text: "以光先帝遗德", source: "出师表", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "留给，送给，馈赠", isCore: true, examples: [{ text: "是以先帝简拔以遗陛下", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["出师表"]
  },
  {
    id: 109,
    word: "贻",
    pinyin: "yí",
    category: "动词",
    meanings: [
      { id: 1, gloss: "赠给，馈赠，送给", isCore: true, examples: [{ text: "尝贻余核舟一", source: "核舟记", grade: "八下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["核舟记"]
  },
  {
    id: 110,
    word: "夷",
    pinyin: "yí",
    category: "形容词",
    meanings: [
      { id: 1, gloss: "平坦，平行", isCore: true, examples: [{ text: "其船背稍夷", source: "核舟记", grade: "八下", difficultyLevel: 2 }] },
      { id: 2, gloss: "平易，坦白，温和", isCore: false, examples: [{ text: "言和而色夷", source: "送东阳马生序", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["核舟记", "送东阳马生序"]
  },
  {
    id: 111,
    word: "异",
    pinyin: "yì",
    category: "形容词/动词",
    meanings: [
      { id: 1, gloss: "不同，不同的，差异", isCore: true, examples: [{ text: "览物之情，得无异乎", source: "岳阳楼记", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "惊异，惊奇，奇怪", isCore: true, examples: [{ text: "渔人甚异之", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["岳阳楼记", "桃花源记"]
  },
  {
    id: 112,
    word: "易",
    pinyin: "yì",
    category: "动词",
    meanings: [
      { id: 1, gloss: "更换，改变，交替", isCore: true, examples: [{ text: "寒暑易节，始一反焉", source: "愚公移山", grade: "八上", difficultyLevel: 2 }] },
      { id: 2, gloss: "交换，互换", isCore: true, examples: [{ text: "寡人欲以五百里之地易安陵", source: "唐雎不辱使命", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["愚公移山", "唐雎不辱使命"]
  },
  {
    id: 113,
    word: "诣",
    pinyin: "yì",
    category: "动词",
    meanings: [
      { id: 1, gloss: "到，到达，到…去，拜访", isCore: true, examples: [{ text: "及郡下，诣太守，说如此", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["桃花源记"]
  },
  {
    id: 114,
    word: "益",
    pinyin: "yì",
    category: "动词/名词/副词",
    meanings: [
      { id: 1, gloss: "增长，增加，增多", isCore: true, examples: [{ text: "所以动心忍性，曾益其所不能", source: "生于忧患，死于安乐", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "好处，利益，益处", isCore: true, examples: [{ text: "孤常读书，自以为大有所益", source: "孙权劝学", grade: "七下", difficultyLevel: 2 }] },
      { id: 3, gloss: "更，更加，益发", isCore: false, examples: [{ text: "香远益清", source: "爱莲说", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["生于忧患，死于安乐", "孙权劝学", "爱莲说"]
  },
  {
    id: 115,
    word: "阴",
    pinyin: "yīn",
    category: "名词",
    meanings: [
      { id: 1, gloss: "山之北，水之南", isCore: false, examples: [{ text: "达于汉阴", source: "愚公移山", grade: "八上", difficultyLevel: 2 }] },
      { id: 2, gloss: "阴沉，阴冷，昏暗", isCore: true, examples: [{ text: "朝晖夕阴，气象万千", source: "岳阳楼记", grade: "九下", difficultyLevel: 3 }] },
      { id: 3, gloss: "树阴，阴影，阴翳", isCore: false, examples: [{ text: "树林阴翳", source: "醉翁亭记", grade: "九上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["愚公移山", "岳阳楼记", "醉翁亭记"]
  },
  {
    id: 116,
    word: "引",
    pinyin: "yǐn",
    category: "动词",
    meanings: [
      { id: 1, gloss: "称引，譬喻，引用", isCore: true, examples: [{ text: "不宜妄自菲薄，引喻失义", source: "出师表", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "牵，拉，拖", isCore: false, examples: [{ text: "友人惭，下车引之", source: "陈太丘与友期", grade: "七上", difficultyLevel: 2 }] },
      { id: 3, gloss: "延长，延伸", isCore: false, examples: [{ text: "属引凄异", source: "三峡", difficultyLevel: 4 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["出师表", "陈太丘与友期", "三峡"]
  },
  {
    id: 117,
    word: "盈",
    pinyin: "yíng",
    category: "动词",
    meanings: [
      { id: 1, gloss: "满，充满，充盈", isCore: true, examples: [{ text: "而计其长，曾不盈寸", source: "核舟记", grade: "八下", difficultyLevel: 2 }] },
      { id: 2, gloss: "增长，旺盛，强盛", isCore: false, examples: [{ text: "彼竭我盈，故克之", source: "曹刿论战", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["核舟记", "曹刿论战"]
  },
  {
    id: 118,
    word: "余",
    pinyin: "yú",
    category: "代词/形容词/数词",
    meanings: [
      { id: 1, gloss: "我，我的", isCore: true, examples: [{ text: "尝贻余核舟一", source: "核舟记", grade: "八下", difficultyLevel: 2 }] },
      { id: 2, gloss: "剩下，多余的，余下", isCore: true, examples: [{ text: "以残年余力", source: "愚公移山", grade: "八上", difficultyLevel: 2 }] },
      { id: 3, gloss: "多，表示整数后不定的零数", isCore: false, examples: [{ text: "阅十余岁", source: "河中石兽", difficultyLevel: 2 }] },
      { id: 4, gloss: "以外，以后，其他", isCore: false, examples: [{ text: "余人各复延至其家", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["核舟记", "愚公移山", "河中石兽", "桃花源记"]
  },
  {
    id: 119,
    word: "狱",
    pinyin: "yù",
    category: "名词",
    meanings: [
      { id: 1, gloss: "诉讼案件，讼案", isCore: true, examples: [{ text: "小大之狱", source: "曹刿论战", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["曹刿论战"]
  },
  {
    id: 120,
    word: "御",
    pinyin: "yù",
    category: "动词",
    meanings: [
      { id: 1, gloss: "驾驭，驾驭驱使", isCore: true, examples: [{ text: "虽乘奔御风，不以疾也", source: "三峡", difficultyLevel: 4 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["三峡"]
  },
  {
    id: 121,
    word: "缘",
    pinyin: "yuán",
    category: "动词",
    meanings: [
      { id: 1, gloss: "沿着，顺着，沿", isCore: true, examples: [{ text: "缘溪行，忘路之远近", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["桃花源记"]
  },
  {
    id: 122,
    word: "远",
    pinyin: "yuǎn",
    category: "形容词/动词",
    meanings: [
      { id: 1, gloss: "遥远，距离远", isCore: true, examples: [{ text: "途中两狼，缀行甚远", source: "狼", grade: "七上", difficultyLevel: 2 }] },
      { id: 2, gloss: "深远，深刻", isCore: false, examples: [{ text: "肉食者鄙，未能远谋", source: "曹刿论战", grade: "九下", difficultyLevel: 3 }] },
      { id: 3, gloss: "疏远，不亲近", isCore: true, examples: [{ text: "亲贤臣，远小人", source: "出师表", grade: "九下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["狼", "曹刿论战", "出师表"]
  },
  {
    id: 123,
    word: "云",
    pinyin: "yún",
    category: "动词/名词",
    meanings: [
      { id: 1, gloss: "说，讲述", isCore: true, examples: [{ text: "古语有云", source: "书戴嵩画牛", difficultyLevel: 2 }] },
      { id: 2, gloss: "句末语气词，无实义", isCore: false, examples: [{ text: "盖大苏泛赤壁云", source: "核舟记", grade: "八下", difficultyLevel: 2 }] },
      { id: 3, gloss: "天空里的云，云彩", isCore: false, examples: [{ text: "高峰入云，清流见底", source: "答谢中书书", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["书戴嵩画牛", "核舟记", "答谢中书书"]
  },
  {
    id: 124,
    word: "章",
    pinyin: "zhāng",
    category: "名词",
    meanings: [
      { id: 1, gloss: "印章，印鉴", isCore: true, examples: [{ text: "又用篆章一", source: "核舟记", grade: "八下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["核舟记"]
  },
  {
    id: 125,
    word: "知",
    pinyin: "zhī",
    category: "动词/名词",
    meanings: [
      { id: 1, gloss: "知道，了解，认识", isCore: true, examples: [{ text: "然后知生于忧患而死于安乐也", source: "生于忧患，死于安乐", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "通'智'，智慧，聪慧", isCore: false, examples: [{ text: "孰为汝多知乎", source: "两小儿辩日", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["生于忧患，死于安乐", "两小儿辩日"]
  },
  {
    id: 126,
    word: "止",
    pinyin: "zhǐ",
    category: "动词/副词",
    meanings: [
      { id: 1, gloss: "停止，停留", isCore: true, examples: [{ text: "一狼得骨止", source: "狼", grade: "七上", difficultyLevel: 1 }] },
      { id: 2, gloss: "制止，阻止，阻挡", isCore: false, examples: [{ text: "河曲智叟笑而止之曰", source: "愚公移山", grade: "八上", difficultyLevel: 2 }] },
      { id: 3, gloss: "仅，只是，仅仅", isCore: true, examples: [{ text: "担中肉尽，止有剩骨", source: "狼", grade: "七上", difficultyLevel: 1 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["狼", "愚公移山"]
  },
  {
    id: 127,
    word: "志",
    pinyin: "zhì",
    category: "名词/动词",
    meanings: [
      { id: 1, gloss: "标记，记号，符号", isCore: false, examples: [{ text: "寻向所志，遂迷", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] },
      { id: 2, gloss: "做标记，做记号", isCore: false, examples: [{ text: "便扶向路，处处志之", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] },
      { id: 3, gloss: "记载，记录", isCore: false, examples: [{ text: "《齐谐》者，志怪者也", source: "北冥有鱼", difficultyLevel: 4 }] },
      { id: 4, gloss: "心志，情志，志向", isCore: true, examples: [{ text: "吾十有五而志于学", source: "《论语》十二章", grade: "七上", difficultyLevel: 2 }] },
      { id: 5, gloss: "志气，意志，毅力", isCore: true, examples: [{ text: "必先苦其心志", source: "生于忧患，死于安乐", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七上",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["桃花源记", "北冥有鱼", "《论语》十二章", "生于忧患，死于安乐"]
  },
  {
    id: 128,
    word: "致",
    pinyin: "zhì",
    category: "动词",
    meanings: [
      { id: 1, gloss: "取得，得到，获得", isCore: true, examples: [{ text: "家贫，无从致书以观", source: "送东阳马生序", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "达到，实现，做到", isCore: true, examples: [{ text: "非宁静无以致远", source: "诫子书", grade: "八上", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["送东阳马生序", "诫子书"]
  },
  {
    id: 129,
    word: "质",
    pinyin: "zhì",
    category: "动词/名词",
    meanings: [
      { id: 1, gloss: "询问，质疑，追问", isCore: true, examples: [{ text: "余立侍左右，援疑质理", source: "送东阳马生序", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "资质，天赋，禀赋", isCore: true, examples: [{ text: "德有不成者，非天质之卑", source: "送东阳马生序", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["送东阳马生序"]
  },
  {
    id: 130,
    word: "专",
    pinyin: "zhuān",
    category: "动词/形容词",
    meanings: [
      { id: 1, gloss: "独有，独占，专享", isCore: true, examples: [{ text: "衣食所安，弗敢专也", source: "曹刿论战", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "专门，专一，一心", isCore: true, examples: [{ text: "心不若余之专耳", source: "送东阳马生序", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["曹刿论战", "送东阳马生序"]
  },
  {
    id: 131,
    word: "走",
    pinyin: "zǒu",
    category: "动词",
    meanings: [
      { id: 1, gloss: "跑，逃跑，奔跑", isCore: true, examples: [{ text: "双兔傍地走", source: "木兰诗", grade: "七下", difficultyLevel: 1 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["木兰诗"]
  },
  {
    id: 132,
    word: "足",
    pinyin: "zú",
    category: "名词/形容词/动词",
    meanings: [
      { id: 1, gloss: "脚，足", isCore: true, examples: [{ text: "愿驰千里足", source: "木兰诗", grade: "七下", difficultyLevel: 1 }] },
      { id: 2, gloss: "足够，充足，够了", isCore: true, examples: [{ text: "今南方已定，兵甲已足", source: "出师表", grade: "九下", difficultyLevel: 2 }] },
      { id: 3, gloss: "值得，够得上，能够", isCore: false, examples: [{ text: "不足为外人道也", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "七下",
    textbookVersion: "人教版",
    frequencyLevel: 4,
    sourceLessons: ["木兰诗", "出师表", "桃花源记"]
  },
  {
    id: 133,
    word: "卒",
    pinyin: "zú",
    category: "副词",
    meanings: [
      { id: 1, gloss: "最后，终于，到底", isCore: true, examples: [{ text: "故余虽愚，卒获有所闻", source: "送东阳马生序", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["送东阳马生序"]
  },
  {
    id: 134,
    word: "作",
    pinyin: "zuò",
    category: "动词",
    meanings: [
      { id: 1, gloss: "振作，奋发，奋起", isCore: true, examples: [{ text: "困于心，衡于虑，而后作", source: "生于忧患，死于安乐", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "发出，出现，产生", isCore: false, examples: [{ text: "一鼓作气，再而衰，三而竭", source: "曹刿论战", grade: "九下", difficultyLevel: 3 }] },
      { id: 3, gloss: "写作，创作，著作", isCore: true, examples: [{ text: "属予作文以记之", source: "岳阳楼记", grade: "九下", difficultyLevel: 3 }] },
      { id: 4, gloss: "建造，建筑，修建", isCore: false, examples: [{ text: "作亭者谁", source: "醉翁亭记", grade: "九上", difficultyLevel: 2 }] },
      { id: 5, gloss: "做，制作，烹饪", isCore: true, examples: [{ text: "便要还家，设酒杀鸡作食", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] },
      { id: 6, gloss: "兴起，发生", isCore: false, examples: [{ text: "盗窃乱贼而不作", source: "大道之行也", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 5,
    sourceLessons: ["生于忧患，死于安乐", "曹刿论战", "岳阳楼记", "醉翁亭记", "桃花源记", "大道之行也"]
  },
  {
    id: 135,
    word: "坐",
    pinyin: "zuò",
    category: "动词",
    meanings: [
      { id: 1, gloss: "坐着，坐下，端坐", isCore: true, examples: [{ text: "船头坐三人", source: "核舟记", grade: "八下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["核舟记"]
  },
  {
    id: 136,
    word: "卑鄙",
    pinyin: "bǐ bǐ",
    category: "形容词",
    meanings: [
      { id: 1, gloss: "社会地位低微，见识短浅", isCore: true, examples: [{ text: "先帝不以臣卑鄙", source: "出师表", grade: "九下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["出师表"]
  },
  {
    id: 137,
    word: "布衣",
    pinyin: "bù yī",
    category: "名词",
    meanings: [
      { id: 1, gloss: "平民百姓，平民", isCore: true, examples: [{ text: "臣本布衣，躬耕于南阳", source: "出师表", grade: "九下", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["出师表"]
  },
  {
    id: 138,
    word: "菲薄",
    pinyin: "fěi báo",
    category: "动词",
    meanings: [
      { id: 1, gloss: "轻视，小看，贬低", isCore: true, examples: [{ text: "不宜妄自菲薄，引喻失义", source: "出师表", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["出师表"]
  },
  {
    id: 139,
    word: "其实",
    pinyin: "qī shí",
    category: "代词",
    meanings: [
      { id: 1, gloss: "其（它的）实（果实）", isCore: true, examples: [{ text: "叶徒相似，其实味不同", source: "橘逾淮为枳", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "八下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["橘逾淮为枳"]
  },
  {
    id: 140,
    word: "亲戚",
    pinyin: "qīn qī",
    category: "名词",
    meanings: [
      { id: 1, gloss: "内外亲属，亲属", isCore: true, examples: [{ text: "寡助之至，亲戚畔之", source: "得道多助，失道寡助", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["得道多助，失道寡助"]
  },
  {
    id: 141,
    word: "驱驰",
    pinyin: "qū chí",
    category: "动词",
    meanings: [
      { id: 1, gloss: "奔走效劳，出力", isCore: true, examples: [{ text: "由是感激，遂许先帝以驱驰", source: "出师表", grade: "九下", difficultyLevel: 3 }] },
      { id: 2, gloss: "策马快奔，驰骋", isCore: false, examples: [{ text: "将军约，军中不得驱驰", source: "周亚夫军细柳", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: ["yi-ci-duo-yi"],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["出师表", "周亚夫军细柳"]
  },
  {
    id: 142,
    word: "无论",
    pinyin: "wú lùn",
    category: "连词",
    meanings: [
      { id: 1, gloss: "不要说，更不必说，更何况", isCore: true, examples: [{ text: "乃不知有汉，无论魏晋", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["桃花源记"]
  },
  {
    id: 143,
    word: "牺牲",
    pinyin: "xī shēng",
    category: "名词",
    meanings: [
      { id: 1, gloss: "祭祀用的纯色全体牲畜", isCore: true, examples: [{ text: "牺牲玉帛，弗敢加也", source: "曹刿论战", grade: "九下", difficultyLevel: 3 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["曹刿论战"]
  },
  {
    id: 144,
    word: "鸿儒",
    pinyin: "hóng rú",
    category: "名词",
    meanings: [
      { id: 1, gloss: "博学的人，儒学家", isCore: true, examples: [{ text: "谈笑有鸿儒，往来无白丁", source: "陋室铭", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["陋室铭"]
  },
  {
    id: 145,
    word: "白丁",
    pinyin: "bái dīng",
    category: "名词",
    meanings: [
      { id: 1, gloss: "平民，没有功名的人", isCore: true, examples: [{ text: "谈笑有鸿儒，往来无白丁", source: "陋室铭", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "九下",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["陋室铭"]
  },
  {
    id: 146,
    word: "阡陌",
    pinyin: "qiān mò",
    category: "名词",
    meanings: [
      { id: 1, gloss: "田间小路，农田道路", isCore: true, examples: [{ text: "阡陌交通，鸡犬相闻", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["桃花源记"]
  },
  {
    id: 147,
    word: "交通",
    pinyin: "jiāo tōng",
    category: "动词",
    meanings: [
      { id: 1, gloss: "交错相通，互相通连", isCore: true, examples: [{ text: "阡陌交通，鸡犬相闻", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 3,
    sourceLessons: ["桃花源记"]
  },
  {
    id: 148,
    word: "问津",
    pinyin: "wèn jīn",
    category: "动词",
    meanings: [
      { id: 1, gloss: "询问渡口，探求，访求，了解", isCore: true, examples: [{ text: "后遂无问津者", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["桃花源记"]
  },
  {
    id: 149,
    word: "绝境",
    pinyin: "jué jìng",
    category: "名词",
    meanings: [
      { id: 1, gloss: "与人世隔绝的地方，世外之地", isCore: true, examples: [{ text: "率妻子邑人来此绝境", source: "桃花源记", grade: "八上", difficultyLevel: 2 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["桃花源记"]
  },
  {
    id: 150,
    word: "妻子",
    pinyin: "qī zi",
    category: "名词",
    meanings: [
      { id: 1, gloss: "妻子儿女，家属", isCore: true, examples: [{ text: "率妻子邑人来此绝境", source: "桃花源记", grade: "八上", difficultyLevel: 1 }] }
    ],
    difficulty: "基础",
    tags: [],
    grade: "八上",
    textbookVersion: "人教版",
    frequencyLevel: 2,
    sourceLessons: ["桃花源记"]
  }
];

module.exports = {
  wordsData
};
