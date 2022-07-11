let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0
let number = 0
// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
  console.log('i / numbers[i]', i, numbers[i])
  number = numbers[i] ** 3
  sum += number
  console.log('number / sum', number, sum)
}
console.log(sum) // 1158411

// Через цикл for of
sum = 0
for (let num of numbers) {
  console.log('num', num)
  num = num ** 3
  sum += num
  console.log('num / sum', num, sum)
}
console.log(sum) // 1003904306910622800