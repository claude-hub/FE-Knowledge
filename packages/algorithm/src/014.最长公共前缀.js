/**
  编写一个函数来查找字符串数组中的最长公共前缀。
  如果不存在公共前缀，返回空字符串 ""。
  示例 1：
  输入：strs = ["flower","flow","flight"]
  输出："fl"
  示例 2：
  输入：strs = ["dog","racecar","car"]
  输出：""
  解释：输入不存在公共前缀。
 */

/**
 * 思路：最长公共前缀，因为只比较前缀
 * 1. 用第一个字符串初始化，作为被比较的对象
 * 2. 第二个字符串和第一个字符串一个字符一个字符的比较
 *    如果某一个字符匹配不上，则公共的前缀就更新为已经匹配上的字符。
 * 3. 第三个及以后的，就和更新后的公共前缀比较。
 * 4. 最终得出答案
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';

  // 公共的长度，初始为第一个字符串
  let common = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    let index = 0;
    for (; index < common.length; index++) {
      if (common[index] !== str[index]) {
        break;
      }
    }
    common = common.substr(0, index);
    if (common === '')
      return common;

  }
  return common;


};

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs) === 'fl');

const strs1 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs1) === '');