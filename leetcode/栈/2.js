const stack = []

stack.push('可爱多')
stack.push('巧乐兹')
stack.push('小布丁')
stack.push('老布丁')
stack.push('老冰棍')

while (stack.length) {
  const top = stack.pop()
  console.log('现在吃:' + top);
}