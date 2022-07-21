function getDaysBeforeBirthday(nextBirthdayDate) {
    nextBirthdayDate = new Date(nextBirthdayDate)
    let difference = nextBirthdayDate.getTime() - (new Date().getTime())
    console.log(convertMsToDays(difference))
}
function convertMsToDays(value) {
    value = Math.round(value / 1000 / 60 / 60 / 24)
    return value
}
getDaysBeforeBirthday('September 9, 2022')
getDaysBeforeBirthday('July 18, 2023')