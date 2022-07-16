function getSumOfNumbers(number, type = 'odd') {
    if (!number || !Number(number)) {
        return NaN
    } else {
        if (type === 'odd') {
            let sum = 0 
            for (i = 1; i <= number; i += 2) {
                sum += i
            }
            return sum
        } else if (type === 'even') {
            let sum = 0 
            for (i = 0; i <= number; i += 2) {
                sum += i
            }
            return sum
        } else if (type === '') {
            let sum = 0 
            for (i = 1; i <= number; i++) {
                sum += i
            }
            return sum
        }
    } 
}
console.log(getSumOfNumbers(10, 'odd'))
console.log(getSumOfNumbers(10, 'even'))
console.log(getSumOfNumbers(10, ''))