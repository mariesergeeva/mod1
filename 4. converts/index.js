let myName = 'Mariia'
console.log(Number(myName), Boolean(myName), String(myName))
let age = 28
console.log(Number(age), Boolean(age), String(age))
let someBigNumber = 666n
console.log(Number(someBigNumber), Boolean(someBigNumber), String(someBigNumber))
let isBigNumber = true
console.log(Number(isBigNumber), Boolean(isBigNumber), String(isBigNumber))
let bigNumberName = null
console.log(Number(bigNumberName), Boolean(bigNumberName), String(bigNumberName))
let bigNumber = {
    bigNumberName: null,
    someBigNumber: 666n,
    isBigNumber: true
}
console.log(Number(bigNumber), Boolean(bigNumber), String(bigNumber))
const id = Symbol("id")
console.log(Boolean(id), String(id))
let notConst
console.log(Number(notConst), Boolean(notConst), String(notConst))