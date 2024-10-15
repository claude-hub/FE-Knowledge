/**
  给你一个只包含三种字符的字符串，支持的字符类型分别是 '('、')' 和 '*'。请你检验这个字符串是否为有效字符串，如果是 有效 字符串返回 true 。
  有效 字符串符合如下规则：
  任何左括号 '(' 必须有相应的右括号 ')'。
  任何右括号 ')' 必须有相应的左括号 '(' 。
  左括号 '(' 必须在对应的右括号之前 ')'。
  '*' 可以被视为单个右括号 ')' ，或单个左括号 '(' ，或一个空字符串 ""。
  示例 1：
  输入：s = "()"
  输出：true
  示例 2：
  输入：s = "(*)"
  输出：true
  示例 3：
  输入：s = "(*))"
  输出：true
  提示：
  1 <= s.length <= 100
  s[i] 为 '('、')' 或 '*'
 */

// 栈
var checkValidString = function (s) {
  const leftStack = [];
  const asteriskStack = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (c === '(') {
      leftStack.push(i);
    } else if (c === '*') {
      asteriskStack.push(i);
    } else {
      // 优先从左括号栈中弹出。
      if (leftStack.length) {
        leftStack.pop();
      } else if (asteriskStack.length) {
        // 左括号没得数据的时候，就尝试用星号来匹配。
        asteriskStack.pop();
      } else {
        // 如果左括号和星号都为空，则说明不是有效字符串。
        return false;
      }
    }
  }
  // 遍历结束之后，左括号栈和星号栈可能还有元素。这个时候，就要用星号充当右括号来匹配。
  while (leftStack.length && asteriskStack.length) {
    const leftIndex = leftStack.pop();
    const asteriskIndex = asteriskStack.pop();

    // 且每个左括号必须出现在其匹配的星号之前
    if (leftIndex > asteriskIndex) {
      return false;
    }
  }

  // 如果左括号栈为空，则左括号全部匹配完毕，剩下的星号都可以看成空字符串
  return leftStack.length === 0;
};


// 贪心算法
var checkValidString = function(s) {
  let minCount = 0, maxCount = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
      const c = s[i];
      if (c === '(') {
          minCount++;
          maxCount++;
      } else if (c === ')') {
          minCount = Math.max(minCount - 1, 0);
          maxCount--;
          if (maxCount < 0) {
              return false;
          }
      } else {
          minCount = Math.max(minCount - 1, 0);
          maxCount++;
      }
  }
  return minCount === 0;
};

console.log(checkValidString("(*)****)))))***"));
