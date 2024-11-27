let obj = {
    name: '娜塔莎',
    age: 20,
    sex: null,
    like: {
        n: '跳舞'
    }
}

//深拷贝
function deepClone(obj) {
    //return JSON.parse(JSON.stringify(obj))

    let clone = obj instanceof Array ? [] : {}       //判断是数组还是对象，函数体需要另当别论，更复杂
    for (let key in obj) {              //递归的出口，循环体结束，没有递归
        if (obj.hasOwnProperty(key)) {  //key 是不是 obj 的属性

            //第一种
            // if (typeof obj[key] === 'object' && obj[key] !== null) {
            //     clone[key] = deepClone(obj[key])
            // }
            // else {
            //     clone[key] = obj[key]
            // }

            //第二种
            if (obj[key] instanceof Object) {
                clone[key] = deepClone(obj[key])
            }
            else {
                clone[key] = obj[key]
            }

            //第三种
        }
    }
    return clone
}

let newObj = deepClone(obj)

obj.like.n = '看电影'

console.log(newObj)
console.log(obj)