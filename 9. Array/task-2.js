function getSumOfSequence(number) {
    let arrayOfNumbers = []
    for (i = 1; i <= number; i++) {
        arrayOfNumbers.push(i)
    }
    return console.log(arrayOfNumbers[0] + arrayOfNumbers[arrayOfNumbers.length - 1])
}
getSumOfSequence(10)