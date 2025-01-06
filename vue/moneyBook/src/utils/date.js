function formatDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    return [year, month];
}

function formatHour(date) {
    let newDate = new Date(date);
    let hours = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours();
    let minutes = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes();
    return `${hours}:${minutes}`;

}

export { formatDate, formatHour };
