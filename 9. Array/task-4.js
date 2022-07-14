const coffees = ["Latte", "Cappuccino", "Americano"]
const prices = [1.5, 1, 2]
let updatedPrices = prices.map((item) => {
    item += 0.5
})
coffees.forEach((item, index) => {
    alert(`Кофе ${item} сейчас стоит ${prices[index]} евро`)
})