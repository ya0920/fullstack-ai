function isObject(val) {
    return typeof val === 'object' && val !== null
  }
  
  function reactive(target) {
    return createReactiveObject(target)
  }
  
  function createReactiveObject(target) {
    if (!isObject(target)) {
      return target
    }
  
    let baseHandler = {
      get(target, key, receiver) {
        console.log('读取值');
        let result = Reflect.get(target, key, receiver)
        return isObject(result) ? reactive(result) : result
      },
      set(target, key, value, receiver) {
        console.log('修改值')
        let res = Reflect.set(target, key, value, receiver)
        updateView()
        return res
      },
      // .... 一共有 13 个
    }
  
    let observer = new Proxy(target, baseHandler)
    return observer
  }
  
  
  
  function updateView() {
    console.log('视图更新')
  }
  
  let data = {
    name: '阿炜',
    age: {
      n: 18
    },
    like: ['吃饭', '睡觉']
  }
  
  let newData = reactive(data)
  
  // newData.like.push('coding')
  // newData.age.n = 20
  // console.log(newData.age.n);
  newData.sex = 'boy'