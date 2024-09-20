/**
 * 防抖， 等待指定时间后再执行，用于关键字搜索等。
 * 最后一次触发事件有效
 * @param {*} fn 将执行的函数
 * @param {*} time 指定防抖持续时间
 */
function debounce(fn, time) {
  let timer = null

  return function (...args) {
    // 重新执行并停止上次执行（若上次还未执行则会被清除）
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      timer = null
      // this指向外层函数
      fn.apply(this, args)
    }, time)
  }
}

const func = () => {};

debounce(func, 1000)();
