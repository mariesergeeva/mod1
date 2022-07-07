const myName = 'Mariia'
const age = 28
const someBigNumber = 666n
const isBigNumber = true
const bigNumberName = null
const bigNumber = {
    bigNumberName: null,
    someBigNumber: 666n,
    isBigNumber: true
}
const id = Symbol("id")
let notConst
console.log("name", myName, typeof myName);
console.log("age", age, typeof age);
console.log('big number', someBigNumber, typeof someBigNumber)
console.log('is it a big number?', isBigNumber, typeof isBigNumber)
console.log('name of big number', bigNumberName, typeof bigNumberName)
console.log('big object', bigNumber, typeof bigNumber)
console.log('symbol', id, typeof id)
console.log('notConst', notConst, typeof notConst)
