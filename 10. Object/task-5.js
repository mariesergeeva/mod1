function sum(...array) {
    let sum = 0
    for (element of array) {
        sum += element
    }
    return sum
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(2, 2)); // 4
console.log(sum(10, 15, 249, 653, 846)); // 1773