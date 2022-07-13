function getDivisorsCount(number) {
    if (!number || !Number(number)) {
        return NaN
    } else if (!Number.isInteger(number) || number < 0) {
        alert(`${number} должен быть целым числом и больше нуля!`)
    } else {
        let numberOfDivisors = 1 // так как само число является делителем, но в проверку не входит
        for (let i = 1; i * 2 <= number; i++) {
            if (number % i == 0) {
                numberOfDivisors++
            }
        }
        return numberOfDivisors
    }
}
console.log(getDivisorsCount(4))
console.log(getDivisorsCount(5))
console.log(getDivisorsCount(12))
console.log(getDivisorsCount(30))