// Date转换为YYYY-MM-DD格式
function formatDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return [year, month, day];
}

// Date转换为HH:MM格式

function formatHour(date) {
    let newDate = new Date(date);
    let hours = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours();
    let minutes = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes();
    return `${hours}:${minutes}`;

}

// 时间戳转换为日期格式 YYYY年MM月DD日 HH:MM
const formattedDate = (date) => {
    date = new Date(Number(date));
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}年${month}月${day}日 ${hours}:${minutes}`;
};

export { formatDate, formatHour, formattedDate };
