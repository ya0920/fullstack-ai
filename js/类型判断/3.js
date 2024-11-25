// console.log({} instanceof Object);
// console.log([] instanceof Array);
// console.log(new Date() instanceof Date);
// console.log(function() {} instanceof Function);


// console.log([] instanceof Object);//ture


// console.log('hello' instanceof String); //False
// console.log(123 instanceof Number);  //他们身上没有隐式原型
// console.log(true instanceof Boolean);
// console.log(null instanceof Null);

function Car() {
    this.run = 'running'
}
Bus.prototype = new Car();
function Bus() {
    this.name = 'BYD';
}

let bus = new Bus();

//console.log(bus.run); //原型链

//console.log(bus instanceof Bus); //我的隐式原型等于你的显式原型bus.__proto__== Bus.prototype

console.log(bus instanceof Car); //bus.__proto__.__proto__ == Car.prototype
console.log(bus instanceof Object);