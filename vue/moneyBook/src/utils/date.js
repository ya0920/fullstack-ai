function formatDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    return [year, month];
}
export default formatDate;