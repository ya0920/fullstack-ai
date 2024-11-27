//数组的扁平化

let arr = [1, 2, [3, [4]]];

function flattenArr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flattenArr(arr[i])); //concat 会返回一个新数组，不会改变原数组
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(flattenArr(arr));