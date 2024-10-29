/**
  给你两个 版本号字符串 version1 和 version2 ，请你比较它们。版本号由被点 '.' 分开的修订号组成。修订号的值 是它 转换为整数 并忽略前导零。
  比较版本号时，请按 从左到右的顺序 依次比较它们的修订号。如果其中一个版本字符串的修订号较少，则将缺失的修订号视为 0。
  返回规则如下：
  如果 version1 < version2 返回 -1，
  如果 version1 > version2 返回 1，
  除此之外返回 0
  示例 1：
  输入：version1 = "1.2", version2 = "1.10"
  输出：-1
  解释：
  version1 的第二个修订号为 "2"，version2 的第二个修订号为 "10"：2 < 10，所以 version1 < version2。
  示例 2：
  输入：version1 = "1.01", version2 = "1.001"
  输出：0
  解释：
  忽略前导零，"01" 和 "001" 都代表相同的整数 "1"。
  示例 3：
  输入：version1 = "1.0", version2 = "1.0.0.0"
  输出：0
  解释：
  version1 有更少的修订号，每个缺失的修订号按 "0" 处理。
 */
var compareVersion = function (version1 = '', version2 = '') {
  const v1 = version1.split('.').map(item => parseInt(item));
  const v2 = version2.split('.').map(item => parseInt(item));
  const maxLen = Math.max(v1.length, v2.length);
  let res = 0;
  for (let i = 0; i < maxLen; i++) {
    if ((v1[i] || 0) > (v2[i] || 0)) {
      res = 1;
      break;
    };
    if ((v1[i] || 0) < (v2[i] || 0)) {
      res = -1;
      break;
    }
  }
  return res;
}

console.log(compareVersion('1.2', '1.10'))
console.log(compareVersion('1.01', '1.001'))
console.log(compareVersion('1.0', '1.0.0.0'))

console.log(
  ['1.0.2', '1.02.1', '1.1.2', '2.33', '6', '3.3.3.3', '0.0.1'].sort(compareVersion)
)
