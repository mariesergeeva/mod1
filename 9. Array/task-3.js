const coffees = ["Latte", "Cappuccino", "Americano"]
const coffesLowerCase = ["latte", "cappuccino", "americano"]
let coffeeName = prompt('Поиск кофе по названию:').trim().toLowerCase()
let coffeeNamePosition = coffesLowerCase.findIndex(item => {
    return item === coffeeName
}) 
if (coffeeNamePosition >= 0) {
    alert(`Держите ваш любимый кофе ${coffees[coffeeNamePosition]}. Он ${coffeeNamePosition + 1} по популярности в нашей кофейне.`)
} else {
    alert('К сожалению, такого вида кофе нет в наличии')
}