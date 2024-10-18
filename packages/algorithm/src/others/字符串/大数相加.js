function addLargeNumbers(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  let result = '';
  let carry = 0;
  let maxLength = Math.max(num1.length, num2.length);
  for (let i = 1; i <= maxLength; i++) {
    const digit1 = parseInt(num1[num1.length - i] || 0);
    const digit2 = parseInt(num2[num2.length - i] || 0);
    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }
  if (carry > 0) {
    result = carry + result;
  }
  return result;
}

const largeNumber = '9999999999999999999999999999999999999999999999999999999999999999999';
console.log(addLargeNumbers(largeNumber, '12')); 
// 输出：'10000000000000000000000000000000000000000000000000000000000000011'