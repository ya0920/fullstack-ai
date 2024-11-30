Car.prototype.name = 'su7'
Car.prototype.height = 1400
Car.prototype.lang = 5000

function Car(color, owner) {
  // this.name = 'su7'
  // this.height = 1400
  // this.lang = 5000
  this.color = color
  this.owner = owner
}

let car1 = new Car('red', '阿炜')
let car2 = new Car('green', '小朱')

console.log(car1.name)