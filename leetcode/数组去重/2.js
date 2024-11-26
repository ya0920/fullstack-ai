const arr = [1, 2, 3, 4, 5, 2, 1];
//去重
function unique(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1 ) {   //  或者!newArr.includes(arr[i])
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
unique(arr)
console.log(unique(arr));