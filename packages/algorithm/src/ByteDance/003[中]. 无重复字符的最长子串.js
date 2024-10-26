/**
给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串的长度。
示例 1:
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
提示：
0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成
 */

// 滑动窗口
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let left = 0;
  const window = new Set(); // 维护从下标 left 到下标 right 的字符
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    // 如果窗口内已经包含 c，那么再加入一个 c 会导致窗口内有重复元素
    // 所以要在加入 c 之前，先移出窗口内的 c
    while (window.has(c)) { // 窗口内有 c
      window.delete(s[left++]); // 缩小窗口
    }
    window.add(c); // 加入 c
    ans = Math.max(ans, right - left + 1); // 更新窗口长度最大值
  }
  return ans;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));