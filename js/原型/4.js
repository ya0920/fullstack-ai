
// String.prototype.trim = function () {
//   return 'mytrim'
// }

// let str = 'hello'  // new String('hello')
// str.length = 10

// console.log(str.length);



Car.prototype.run = function() {
  console.log('Running');
}
function Car() {
  this.name = 'su7'
}

let car = new Car()
delete car.run

car.run()





