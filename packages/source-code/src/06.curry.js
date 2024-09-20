/**
  柯里化，它将一个接受多个参数的函数转换成一系列接受单个参数的函数的过程。
  每个返回的函数都接收下一个参数，直到所有参数都被接收完毕，最终返回结果。
 */

// 柯里化之前
function add(x, y) {
  return x + y;
}
add(1, 2) // 3
// 柯里化之后
function addX(y) {
  return function (x) {
    return x + y;
  };
}
addX(2)(1) // 3