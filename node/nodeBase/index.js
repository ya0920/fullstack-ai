// //1 CommonJS
// const { add } = require('./utils/add.js') //{add: add} 对象，key为add值为add  
// //多个对象：const { add, xxx } = require('./utils/add.js')

// console.log(add(1, 2));

// //2.============================================================
// import formateData from './utils/format.js';

// console.log(formateData(new Date(), 'YYYY-MM-DD HH:mm:ss'));

//=====================
// import {formatDate} from './utils/format.js';

// console.log(formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'));

//=====================怎么抛出的都能引入
import * as format from './utils/format.js';

console.log(format.formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss'));
console.log(format.foo);
