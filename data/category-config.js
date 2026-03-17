// 两级分类配置文件
const CATEGORY_CONFIG = {
  // 一级分类配置
  primaryCategories: [
    {
      id: 'grade',
      name: '年级',
      icon: '📚',
      description: '按年级学习实词',
      color: '#4CAF50'
    },
    {
      id: 'difficulty',
      name: '难度',
      icon: '🎯',
      description: '按难度学习实词',
      color: '#FF9800'
    },
    {
      id: 'partOfSpeech',
      name: '词性',
      icon: '📝',
      description: '按词性学习实词',
      color: '#2196F3'
    }
  ],

  // 二级分类配置
  secondaryCategories: {
    // 年级分类
    grade: [
      { value: '七上', label: '七年级上册' },
      { value: '七下', label: '七年级下册' },
      { value: '八上', label: '八年级上册' },
      { value: '八下', label: '八年级下册' },
      { value: '九上', label: '九年级上册' },
      { value: '九下', label: '九年级下册' }
    ],

    // 难度分类
    difficulty: [
      { value: '基础', label: '基础', description: '适合初学者' },
      { value: '进阶', label: '进阶', description: '有一定基础' },
      { value: '提高', label: '提高', description: '高难度词汇' }
    ],

    // 词性分类
    partOfSpeech: [
      { value: '动词', label: '动词', description: '表示动作、行为' },
      { value: '名词', label: '名词', description: '表示人、事物' },
      { value: '形容词', label: '形容词', description: '表示性质、状态' },
      { value: '副词', label: '副词', description: '修饰动词、形容词' },
      { value: '介词', label: '介词', description: '引进对象、时间等' },
      { value: '连词', label: '连词', description: '连接词语、句子' },
      { value: '代词', label: '代词', description: '代替名词' },
      { value: '助词', label: '助词', description: '辅助表达语气' },
      { value: '量词', label: '量词', description: '表示数量单位' }
    ]
  }
};

module.exports = {
  CATEGORY_CONFIG
};
