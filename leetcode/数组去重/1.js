const arr = [1, 2, 3, 4, 2, 1];
//去重
function unique(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        //新数组是否已经具有该值
        for (var j = 0; j < newArr.length; j++) {
            if (arr[i] === newArr[j]) {
                break;   //破坏当前的循环语句
            }
        }
        if(j === newArr.length) {  //没有找到，说明没有重复元素
            newArr.push(arr[i]); 
        }
    }
    return newArr;
}
unique(arr)
console.log(unique(arr));
