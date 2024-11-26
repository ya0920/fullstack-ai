

// arr.sort((a, b) =>{          //返回的是排序后的数组，不消耗空间
//     return b - a;
// })    

// console.log(arr);


//遍历数组的方法
// const arr2 = arr.filter((item, index, arr) => {   
//     return item <= 2;           //有一个空间复杂度，把满足条件的数组放到新数组中
// })
// console.log(arr2);

const arr = [1, 2, 3, 4, 2, 1];

function unique(arr) { //cope一份原数组，不然以后拿去别的地方用，这就是一个有序的数组
    let newArr = [...arr]  //浅拷贝：把 arr 的值展开到 newArr 中，所以 newArr 是一个新数组
    return newArr.sort().filter((item, index, arr) => {
        return index === 0 || item !== arr[index - 1];
    })

    //或者直接 return [...arr].sort().filter((item, index, arr) => !index || item !== arr[index - 1])
}
console.log(unique(arr));
