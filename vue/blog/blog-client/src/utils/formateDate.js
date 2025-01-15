export function formateDate(date) {
    const d = new Date(Number(date))
    const year = d.getFullYear()
    const month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1
    const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()

    return `${year}-${month}-${day}`
}