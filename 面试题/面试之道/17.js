class EventEmitter {
  constructor() {
    this.events = {
    };
  }
  on(type, fn) {
    if (this.events[type]) {
      this.events[type].push(fn);
    } else {
      this.events[type] = [fn];
    }
  }
  emit(type) {  // 触发所有订阅事件
    if (this.events[type]) {
      this.events[type].forEach(fn => {
        fn();
      });
    }
  }
  off(type, fn) {
    if (this.events[type]) {
      this.events[type] = this.events[type].filter(item => item !== fn);
    }
  }
}


let emitter = new EventEmitter();

emitter.on('have', () => {
  console.log('买买买1111');
})

const fn = () => {
  console.log('买买买222');
}
emitter.on('have', fn)
emitter.off('have', fn)


emitter.emit('have')