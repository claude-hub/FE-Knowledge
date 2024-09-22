/**
 * 无论成功还是失败都会执行回调
 * @param {Function} cb
 */
Promise.prototype.finally = function (cb) {
  return this.then(
    async (data) => {
      await Promise.resolve(cb(data));
      return data;
    },
    async (err) => {
      await Promise.resolve(cb(err));
      throw err;
    }
  );
};


const pro = new Promise((resolve, reject) => {
  resolve('success');
});

pro.finally((d) => {
  console.log("finally", d);
});

