// const obj = {
//   a: 1
// }

// obj.a
// obj.toString()




Car.prototype.run = 'running'
function Car() {
  // var this = {
  //   name: 'su7',
  //   height: 1400
  // }

  // this.__proto__ = Car.prototype  // {run: 'running'}

  this.name ='su7'
  this.height = 1400

  // return this
}
let car = new Car()
// car.run
