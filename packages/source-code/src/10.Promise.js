/**
 * 实现一个完美的符合Promise/A+规范的Promise
 * @param {*} callback 
 */
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';


function myPromise(callback) {
  const that = this;
  that.status = PENDING; // 初始状态
  that.value = undefined; // 成功回调的原因
  that.reason = undefined; // 失败回调的原因

  function resolve(value) {
    // 保证状态的改变是不可逆的
    if (that.status === PENDING) {
      that.value = value;
      that.status = RESOLVED;
    }
  }

  function reject(reason) {
    if (that.status === PENDING) {
      that.reason = reason;
      that.status = REJECTED;
    }
  }

  try {
    callback(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

myPromise.prototype.then = function(onFullFilled, onRejected) {
  const that = this;
  switch(that.status) {
    case RESOLVED: 
      onFullFilled(that.value);
      break;
    case REJECTED:
      onRejected(that.reason)
      break;
    default: return;
  }
}

myPromise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected);
}

myPromise.resolve = function (data) {
  if (data instanceof Promise) {
    return data;
  }
  return new Promise((resolve) => {
    resolve(data);
  });
};

myPromise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
}

const pro = new myPromise((resolve)=> {
    resolve(11)
})
pro.then(data => {
    console.log(data)
})

new myPromise((resolve, rejected)=> {
  rejected(11)
}).catch(data => {
  console.log('catch err: ', data)
})

myPromise.resolve(pro).then(res => console.log('reslove: ', res))

myPromise.reject('pro1').catch((err) => console.log(err));