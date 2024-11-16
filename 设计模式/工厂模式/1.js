// //对象
// var luka = {
//     name:'巴尔萨',
//     age: 20,
//     sex:'boy',
//     health:100
    
// }
// //增加属性
// luka.teacher = 'yin'

// //删除属性
// delete luka.age

// //改
// luka.health = 70

// //查
// console.log(luka.name);


//创建对象
var obj = {} //对象字面量 | 对象直接量
//v8引擎内部使用构造函数

var obj2 = new Object() //构造函数，js内置函数

console.log(obj, obj2);//一样的

//调用自定义构造函数
function Car(color) {
    this.color = color
    this.name = 'su7'
    this.height = '1400'
    this.length = '5000'
    this.weight = 1500
    this.health = 100
    this.run = function() {
        this.health--
    }
}

var car = new Car('purple')  //构造函数被调用时创建出来的实例对象
var car2 = new Car('pink')
car.name = '大劳'

console.log(car, car2);
car.run()
car.run()
car.run()
console.log(car);





