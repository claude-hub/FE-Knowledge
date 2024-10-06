class PromisePool {
  constructor(limit) {
    this.limit = limit
    this.queue = []
    this.runNum = 0
  }

  add(promise) {
    this.queue.push(promise)
    this.run()
  }

  run() {
    if (this.runNum < this.limit && this.queue.length) {
      const task = this.queue.shift();

      this.runNum++
      console.log('task start')
      task.finally(() => {
        this.runNum--
        this.run();
      })
    }
  }
}

// 使⽤⽰例
const pool = new PromisePool(5);
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 20; i++) {
  const random = getRndInteger(1000, 10000);
  pool.add(
    delay(random).then(() => console.log(`Task ${i} completed`))
  );
}