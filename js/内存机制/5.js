function foo() {
    var myname = '杰克'
    let test1 = 1
    const test2 = 2
    var innerBar = {
      setName: function (name) {
        myname = name
      },
      getName: function () {
        console.log(test1);
        return myname
      }
    }
    return innerBar
  }
var bar = foo() //innerbar
bar.setName('Jack')
console.log(bar.getName());























