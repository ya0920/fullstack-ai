let s = '([{}])'
var isValid = function(s) {
  const lToR = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i])
    } else {  // 当前获取到的是朝右的括号
      if (!stack.length || lToR[stack.pop()] !== s[i]) {  //  '}' === '}'
        return false
      }
    }
  }

  return !stack.length

  // if (stack.length) {
  //   return false
  // }
  // return true
};

console.log(isValid(s));


// const obj = {
//   a: 1
// }

// obj['a']