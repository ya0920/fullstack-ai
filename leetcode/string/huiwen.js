var isPalindrome = function(x) {
    let str = x.toString()
    let arr = str.split('')
    let newArr = arr.reverse()
    let newStr = newArr.join('')
    return str == newStr;
};


