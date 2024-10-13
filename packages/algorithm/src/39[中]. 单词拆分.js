/**
  给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。
  注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
  示例 1：
  输入: s = "leetcode", wordDict = ["leet", "code"]
  输出: true
  解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
  示例 2：
  输入: s = "applepenapple", wordDict = ["apple", "pen"]
  输出: true
  解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
      注意，你可以重复使用字典中的单词。
  示例 3：
  输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
  输出: false
  提示：
  1 <= s.length <= 300
  1 <= wordDict.length <= 1000
  1 <= wordDict[i].length <= 20
  s 和 wordDict[i] 仅由小写英文字母组成
  wordDict 中的所有字符串 互不相同
 */
// https://leetcode.cn/problems/word-break/solutions/302779/shou-hui-tu-jie-san-chong-fang-fa-dfs-bfs-dong-tai
// DFS 方案
var wordBreak = function (s, wordDict) {
  const len = s.length;
  const wordSet = new Set(wordDict);
  // 利用缓存，避免重复计算问题
  const memo = new Array(len);
  const canBreak = (start) => {
    // 指针越界，s一步步成功划分为单词，才走到越界这步，现在没有剩余子串
    if (start == len) return true;
    if (memo[start] !== undefined) return memo[start]; // memo中有，就用memo中的

    // 指针i去划分两部分，for枚举出当前所有的选项i
    for (let i = start + 1; i <= len; i++) {
      // 切出的前缀部分
      const prefix = s.slice(start, i);
      // 前缀部分是单词，且剩余子串能break，返回真
      if (wordSet.has(prefix) && canBreak(i)) {
        memo[start] = true; // 当前递归的结果存一下
        return true;
      }
      // 如果前缀部分不是单词，就不会执行canBreak(i)。进入下一轮迭代，再切出一个前缀串，再试
    }
    memo[start] = false; // 当前递归的结果存一下
    // 指针i怎么划分，都没有返回true，则返回false
    return false;
  };
  return canBreak(0);
};

// 动态规划
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      // 思路：
      // i = 1;
      // j = [0, 1]
      // j = 2;
      // j = [0, 1, 2]。 然后去判断当前的j里面在子串是否是在 word 列表里面

      // 左侧的子串，从 [0] 开始
      if (dp[j]) {
        // 后缀是单词，且左侧子串[0,j-1]的dp[j]为真
        if(wordSet.has(s.substr(j, i - j))) {
          dp[i] = true;
          break;
        }
      }
    }
  }
  return dp[len];
};



console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreak(
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
  ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]
))