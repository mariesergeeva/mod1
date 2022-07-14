const numbers = [10, 4, 100, -5, 54, 2]
// for
let sumFor = 0
for (i = 0; i < numbers.length; i++) {
    sumFor += numbers[i] ** 3
}
console.log(sumFor)
// for..of
let sumForOf = 0
for (num of numbers) {
    sumForOf += num ** 3
}
console.log(sumForOf)
// forEach()
let sumForEach = 0
numbers.forEach(item => sumForEach += item ** 3)
console.log(sumForEach)
// reduce()
let sumReduce = numbers.reduce((acc, item) => {
    return acc += item ** 3
}, 0)
console.log(sumReduce)