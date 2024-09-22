/**
   * 返回的Promise与第一个有结果的一致
   * @param {iterator} proms
   */
function promiseArce (proms) {
  return new Promise((resolve, reject) => {
    for (const p of proms) {
      Promise.resolve(p).then(resolve, reject);
    }
  });
}

let p1 = new Promise(resolve => {
  setTimeout(() => {
    resolve(1)
  },100)
})
let p2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    reject(2)
  })
})
let p3 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve(3)
  })
})

promiseArce([p1,p2,p3]).then(res => {
  console.log('race: ', res);
}).catch(err => {
  console.log('race: ', err);
})
