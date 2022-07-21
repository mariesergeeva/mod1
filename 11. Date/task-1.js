function getDateFormat(date, separator = '.') {
    date = new Date(date)
    let day = date.getDate()
    let month = date.getMonth() + 1
    if (month <= 9) month = '0' + month
    if (day <= 9) day = '0' + day
    let result = [day, month, date.getFullYear()].join(separator)
    console.log(result)
}
getDateFormat(628021800000)
getDateFormat('February 11, 2002 23:15:30')
getDateFormat('April 4, 2984 23:15:30', '-')