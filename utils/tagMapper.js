// 标签映射工具 - 将拼音标签转换为中文显示

/**
 * 标签映射表（拼音 -> 中文）
 */
const TAG_MAP = {
  'yi-ci-duo-yi': '一词多义',
  'zhong-kao-gao-pin': '中考高频',
  'duo-yin-zi': '多音字'
};

/**
 * 将拼音标签转换为中文显示
 * @param {string} tag - 拼音标签，如 "yi-ci-duo-yi"
 * @returns {string} 中文标签，如 "一词多义"；如果没有映射则返回原值
 */
function getTagLabel(tag) {
  return TAG_MAP[tag] || tag;
}

/**
 * 批量转换标签数组
 * @param {Array<string>} tags - 拼音标签数组
 * @returns {Array<string>} 中文标签数组
 */
function getTagLabels(tags) {
  if (!Array.isArray(tags)) {
    return [];
  }
  return tags.map(tag => getTagLabel(tag));
}

module.exports = {
  TAG_MAP,
  getTagLabel,
  getTagLabels
};
