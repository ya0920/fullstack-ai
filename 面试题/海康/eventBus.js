class EventBus {
  constructor() {
    this.events = {}
  }
  on(type, fn) {  // 订阅
    if (!this.events[type]) {
      this.events[type] = []
      this.events[type].push(fn)
    } else {
      this.events[type].push(fn)
    }
  }
  emit(type) {  // 发布
    if (this.events[type]) {
      this.events[type].forEach(fn => {
        fn()
      })
    }
  }
}

let ev = new EventBus()

ev.on('foo', function () {
  console.log('foo 事件触发了 1111')
})
ev.on('foo', function () {
  console.log('foo 事件触发了2222')
})

ev.emit('foo')  // 带来 foo 事件触发了