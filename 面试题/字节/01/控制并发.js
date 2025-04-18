function timeOut(time, num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`时间为${time}的任务${num}执行完毕`);
      resolve()
    }, time)
  })
}

// timeOut(2000)
// timeOut(1000)
// timeOut(6000)
// timeOut(4000)
// timeOut(3000)


class LimitTask {
  constructor(paralleCount = 2) {
    this.tasks = []  // 任务队列
    this.paralleCount = paralleCount  // 最大并发数
    this.runningCount = 0  // 当前正在运行的任务数
  }
  add(task) {
    this.tasks.push(task)
    this.run()
  }
  run() {
    while(this.runningCount < this.paralleCount && this.tasks.length) {
      const task = this.tasks.shift()
      this.runningCount++
      task().then(() => {
        this.runningCount--
        this.run()
      })
    }
  }
}


const limitTask = new LimitTask()
limitTask.add(() => timeOut(2000, 1))
limitTask.add(() => timeOut(1000, 2))
limitTask.add(() => timeOut(6000, 3))
limitTask.add(() => timeOut(4000, 4))
limitTask.add(() => timeOut(3000, 5))
