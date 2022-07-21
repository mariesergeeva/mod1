function addDays(date, days) {
    date = new Date(Date.parse(new Date(date)) + convertDaysToMs(days))
    return date
}
function convertDaysToMs(value) {
    valueInMs = value * 24 * 60 * 60 * 1000
    return valueInMs
}
console.log(addDays('February 22, 2022', 2))
console.log(addDays('February 22, 2022', 365))