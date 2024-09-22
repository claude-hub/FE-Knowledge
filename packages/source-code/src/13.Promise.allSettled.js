// 返回全部状态

function allSettled(promises) {
  // return Promise.all(promises.map(p => Promise.resolve(p).then(
  //   value => ({ status: 'fulfilled', value }),
  //   reason => ({ status: 'rejected', reason })
  // )));

  return new Promise((resolve, reject) => {
    let settledCount = 0; //状态已经确定的promise数
    let count = 0; //promise总数
    const result = [];
    for (const prom of promises) {
      let i = count;
      count++;
      Promise.resolve(prom).then(
        (data) => {
          settledCount++;
          result[i] = {
            status: "fullfilled",
            value: data,
          };
        },
        (reason) => {
          settledCount++;
          result[i] = {
            status: "rejected",
            reason,
          };
        }
      ).finally(() => {
        if (settledCount >= count) {
          resolve(result)
        }
      });
    }
  })
}


const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'),
);
const promises = [promise1, promise2];

allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result)),
);

Promise.resolve(promise2)
  .then((res) => console.log('===', res))
  .catch(err => console.log('err: ', err))
  .finally(item => console.log('finally'))