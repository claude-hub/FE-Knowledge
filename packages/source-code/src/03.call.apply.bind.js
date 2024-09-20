/**
call, apply 区别
call 和 apply 都是为了解决改变 this 的指向。作用都是相同的，只是传参的方式不同。
除了第一个参数外，call 可以接收一个参数列表，apply 只接受一个参数数组。

bind 方法 与 apply 和 call 比较类似，也能改变函数体内的 this 指向。
不同的是，bind 方法的返回值是函数，并且需要稍后调用，才会执行。而 apply 和 call 则是立即调用。
*/


/** call 函数的实现步骤：
  判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
  判断传入上下文对象是否存在，如果不存在，则设置为 window 。
  处理传入的参数，截取第一个参数后的所有参数。
  将函数作为上下文对象的一个属性。
  使用上下文对象来调用这个方法，并保存返回结果。
  删除刚才新增的属性。
  返回结果。
 */
Function.prototype.myCall = function(context) {
  // 判断调用对象
  if (typeof this !== "function") {
    console.error("type error");
  }
  // 获取参数
  let args = [...arguments].slice(1),
      result = null;
  // 判断 context 是否传入，如果未传入则设置为 window
  context = context || window;
  // 将调用函数设为对象的方法
  context.fn = this;
  // 调用函数
  result = context.fn(...args);
  // 将属性删除
  delete context.fn;
  return result;
};

var foo = {
  value: 1
};

function bar(a, b, c) {
  console.log(this.value, a, b, c);
}

bar.myCall(foo, 1, 2, 3);  // 1,1,2,3
bar.myCall(foo, [1, 2, 3]); //  1 [ 1, 2, 3 ] undefined undefined


// apply 函数实现。 apply 和 call 的区别，就是第二个参数是个数组。没有第三个以及更多的参数了
Function.prototype.myApply = function(context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  let result = null;
  // 判断 context 是否存在，如果未传入则为 window
  context = context || window;
  // 将函数设为对象的方法
  context.fn = this;
  // 调用方法
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  // 将属性删除
  delete context.fn;
  return result;
};

bar.myApply(foo, [1]); // apply 第二个参数，只能是个数组


/**bind 函数的实现步骤：

  保存当前函数的引用，获取其余传入参数值。
  创建一个函数返回
  函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象。
 */
Function.prototype.myBind = function(context) {
  const _this = this; // this 即 f.myBind 的 f
  const args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.myApply(context, args.concat(...arguments));
  }
};

bar.myBind(foo, 1, 2, 3)(); // bing, 只绑定 this，不执行。参数可以有多个