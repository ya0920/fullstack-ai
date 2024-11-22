showName()
console.log(myname);
var myname = '小明'
function showName() {
    console.log('函数showName执行了');
}

//==========编译
var myname
function showName() {
    console.log('函数showName执行了');
}
showName()
console.log(myname);
myname = '小明'
