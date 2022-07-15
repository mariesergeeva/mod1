function bestMatch(arrayOfGoals) {
    let maximumGoals = arrayOfGoals[0]
    for (i = 1; i < arrayOfGoals.length; i++) {
        if (arrayOfGoals[i] > maximumGoals) {
            maximumGoals = arrayOfGoals[i]
        }
    }
    alert(`Самый результативный матч был под номером ${arrayOfGoals.indexOf(maximumGoals) + 1}. В нем было забито ${maximumGoals} гол(ов).`)
}
function worstMatch(arrayOfGoals) {
    let minimumGoals = arrayOfGoals[0]
    let arrayOfMinimumGoals = [1]
    for (i = 1; i < arrayOfGoals.length; i++) {
        if (arrayOfGoals[i] !== -1 && arrayOfGoals[i] < minimumGoals) {
            minimumGoals = arrayOfGoals[i]
            arrayOfMinimumGoals = []
            arrayOfMinimumGoals.push(i + 1)
        } else if (minimumGoals === arrayOfGoals[i]) {
            arrayOfMinimumGoals.push(i + 1)
        }
    }
    alert(`Самые не результативные матчи были под номерами ${arrayOfMinimumGoals}. В каждом из них было забито по ${minimumGoals} мячу(а)`)
}
function totalOfGoals(arrayOfGoals) {
    let sumOfGoals = 0
    for (num of arrayOfGoals) {
        if (num > -1) {
            sumOfGoals += num
        } 
    }
    return sumOfGoals
}
function autoDefeats(arrayOfGoals) {
    arrayOfGoals.indexOf(-1) > 0 ? alert (`Были автоматические поражения: да`) : alert(`Были автоматические поражения: нет`)
}
function averageOfGoals(arrayOfGoals) {
    alert(`Среднее количество голов за матч равно ${Math.round(totalOfGoals(arrayOfGoals) / arrayOfGoals.length)}`) 
}
function sortOfGoals(arrayOfGoals) {
    let arrayForSort = arrayOfGoals.slice(0)
    alert(arrayForSort.sort())

}
const goals = [8, 1, 1, 3, 2, -1, 5]
// Проверка :
// bestMatch(goals)
// worstMatch(goals)
// alert(`Общее количество голов за сезон равно ${totalOfGoals(goals)}`)
// autoDefeats(goals)
// averageOfGoals(goals)
// sortOfGoals(goals)