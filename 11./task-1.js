function getTotalPriceOfShoppingBag(shoppingBagArray) {
    let total = 0
    shoppingBagArray.forEach(item => {
        let product = groceries[item.productId]
        if (product) {
            total += item.count * product.price * (1 - product.discount / 100)
        } else console.log(`Товар с id: ${item.productId} не найден`)
    })
    return total.toFixed(2)
}
const groceries = {
    "73Wakv": {
      name: "Orange Juice",
      price: 1.5,
      discount: 10
    },
    "5L3db9": {
      name: "Chocolate",
      price: 2,
      discount: 0
    }
}
const shoppingBag = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 23 }
  ]
const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); // Возвращает 50.05  