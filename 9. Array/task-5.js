let clientsEstimations = []
let askClientToGiveEstimation = (askToClient) => {
    askToClient = prompt('Как вы оцениваете нашу кофейню от 1 до 10?')
    if (Number(askToClient) >= 1 && Number(askToClient) <= 10) {
        return clientsEstimations.push(Number(askToClient))
    } 
}
for (i = 1; i <= 5; i++) {
    askClientToGiveEstimation()
}
console.log(clientsEstimations)
let goodEstimations = clientsEstimations.filter(item => {
    return item > 5
})
let notGoodEstimations = clientsEstimations.filter(item => {
    return item <= 5
})
alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`)