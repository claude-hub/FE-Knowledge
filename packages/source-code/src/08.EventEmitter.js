/**
 * https://bigfrontend.dev/zh/problem/create-an-Event-Emitter
 * 发布订阅
 */

class EventEmitter {
  // 用来存放注册的事件与回调
  constructor() {
    this._events = {};
  }

  // 订阅事件。把事件全部缓存起来。
  subscribe(eventName, callback) {
    // 由于一个事件可能注册多个回调函数，所以使用数组来存储事件队列
    const callbacks = this._events[eventName] || [];
    callbacks.push(callback);
    this._events[eventName] = callbacks;

    // 取消订阅
    return {
      // 返回一个包含 release 方法的对象   
      release: () => {
        this.off(eventName, callback);
      }
    }
  }

  // args 用于收集发布事件时传递的参数
  emit(eventName, ...args) {
    const callbacks = this._events[eventName] || [];
    callbacks.forEach(cb => cb(...args))
  }

  // 取消订阅
  off(eventName, callback) {
    const currentCallbacks = this._events[eventName] || [];
    const index = currentCallbacks.indexOf(callback);
    if (index >= 0) {
      currentCallbacks.splice(index, 1);
    }
  }

  // 单次订阅方法 1.先注册 2.事件执行后取消订阅
  once(eventName, callback) {
    // 由于需要在回调函数执行后，取消订阅当前事件，所以需要对传入的回调函数做一层包装,然后绑定包装后的函数
    const one = (...args) => {
      // 执行回调函数
      callback(...args)
      // 取消订阅当前事件
      this.off(eventName, one)
    }
    this.subscribe(eventName, one)
  }

}

const callback1 = (a, b) => console.log('callback1', a, b);
const callback2 = () => console.log('callback2');

const emitter = new EventEmitter();
const sub1 = emitter.subscribe('event1', callback1);
// 同一个callback可以重复订阅同一个事件
const sub3 = emitter.subscribe('event1', callback1);

console.log('先输出两次 callback1');
emitter.emit('event1', 1, 2); // callback1 1 2 掉两次

// subscribe()返回一个含有release()的对象，可以用来取消订阅。
// 取消订阅后，
sub1.release(); // 等价于 emitter.off('event1', callback1);


console.log('取消订阅后，只输出一次 callback1');
emitter.emit('event1', 1, 2);


// 执行一次后，就被摧毁了。
emitter.once('event2', callback2);

emitter.emit('event2'); // 输出 callback2。 执行后，就会取消订阅了。
emitter.emit('event2'); // 再次执行，没有输出了
