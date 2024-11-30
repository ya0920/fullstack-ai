function identify() {
  return this.name.toUpperCase()
}

function speak() {
  var gretting = 'Hello, I am ' + identify.call(this)
  console.log(gretting);
}

var me = {
  name: 'Tom'
}

speak.call(me)

