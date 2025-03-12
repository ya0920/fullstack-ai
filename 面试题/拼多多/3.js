function render(str, data) {
  // const regex = /\{\{([^}]+)\}\}/g;
  // let res = str.match(regex)
  // res = res.map(s => {
  //   return s.slice(2, -2)
  // });
  // const reg = /\{\{([^}]+)\}\}/;
  // res.forEach(s => {
  //   str = str.replace(reg, data[s])
  // });
  // console.log(str);
  
  for (let key in data) {
    const reg = new RegExp(`{{${key}}}`, 'g');
    str = str.replace(reg, data[key])
  }
  console.log(str);
}

const template = `<p v-show='true'>this is {{name}} <span>{{sex}}<span></p>`
const data = {
  name: '张三',
  age: 18,
  sex: '男'
}

render(template, data)