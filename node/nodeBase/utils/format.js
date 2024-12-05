// 格式化日期

//1. 
// function formatDate(date, format) {
//     if (!date instanceof Date) {
//         throw new Error('Invalid date');
//     }

//     const options = {
//         year: 'numeric',
//         month: '2-digit',
//         day: '2-digit',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: false,
//         timeZone: 'UTC',
//     };

//     return date.toLocaleString('en-US', options).replace(',', format);
// }

// export default formatDate

//2. 抛出的是对象，这个函数在对象里面，所以接受要{}
export function formatDate(date, format) {
    if (!date instanceof Date) {
        throw new Error('Invalid date');
    }

    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'UTC',
    };

    return date.toLocaleString('en-US', options).replace(',', format);
}

function foo(){
    console.log('foo');
    
}

export default foo;