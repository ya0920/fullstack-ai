let obj = {   // #001
  num1: 117,
  child: { num2: 935 }
}
let res = obj  // #001

#001.child = obj = { num2: 935 }  // #002

var x = y = 935