/**
  给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
  你可以对一个单词进行如下三种操作：
  插入一个字符
  删除一个字符
  替换一个字符
  示例 1：
  输入：word1 = "horse", word2 = "ros"
  输出：3
  解释：
  horse -> rorse (将 'h' 替换为 'r')
  rorse -> rose (删除 'r')
  rose -> ros (删除 'e')
  示例 2：
  输入：word1 = "intention", word2 = "execution"
  输出：5
  解释：
  intention -> inention (删除 't')
  inention -> enention (将 'i' 替换为 'e')
  enention -> exention (将 'n' 替换为 'x')
  exention -> exection (将 'n' 替换为 'c')
  exection -> execution (插入 'u')
 */

// DP
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= n; j++) { }
}

console.log(minDistance('horse', 'ros'));
console.log(minDistance('intention', 'execution'));
