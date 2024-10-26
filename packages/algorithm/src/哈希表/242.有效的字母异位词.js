/**
  给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
  示例 1: 输入: s = "anagram", t = "nagaram" 输出: true
  示例 2: 输入: s = "rat", t = "car" 输出: false
  说明: 你可以假设字符串只包含小写字母。
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  for (let i = 0; i < t.length; i++) {
   if (!map.has(t[i])) return false;
  }
  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
