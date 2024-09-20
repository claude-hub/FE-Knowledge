/**
 * 节流, 立即执行函数，在规定时间内，只会执行第一次。用于抢购等。
 * 第一次点击有效
 * @param {*} fn 将执行的函数
 * @param {*} time 节流规定的时间
 */
function throttle(fn, time) {
  let timer = null;

  return function (...args) {
    if (!timer) {
      fn.apply(this, args);

      timer = setTimeout(() => {
        timer = null;
      }, time)
    }
  }
}

const func = () => console.log('====');

throttle(func, 1000)();
