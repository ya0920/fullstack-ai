function foo() {
    var myname = '子俊哥哥'
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
bar.setName('陈总')
console.log(bar.getName());























