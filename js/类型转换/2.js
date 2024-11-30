// '1' + 1 == '11'

// '1' + true == 2 / '1ture'

//转布尔
console.log(Boolean(true)) //true
console.log(Boolean(undefined)) //false
console.log(Boolean(null)) //false
console.log(Boolean(0)) //false
console.log(Boolean(NaN)) //false
console.log(Boolean('')) //false
console.log(Boolean('1')) //true

let a = 1
if(a) { //a为真
    console.log(a)
}

//转数字
console.log(Number(true)) //1
console.log(Number(false)) //0
console.log(Number(undefined)) //NaN
console.log(Number(null)) //0
console.log(Number('1')) //1
console.log(Number('')) //0
console.log(Number('1a')) //NaN

//转字符串
console.log(String(true)) //true
console.log(String(false)) //false
console.log(String(undefined)) //undefined
console.log(String(null)) //null
console.log(String(1)) //1
console.log(String(NaN)) //NaN
console.log(String(0)) //0
console.log(String('')) //''
console.log(String('1')) //1