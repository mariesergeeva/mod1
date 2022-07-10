let clientName = prompt('Введите имя клиента').trim()
let clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?').trim())
let clientSpentForAllTime = Number(prompt('Сколько клиент потратил за все время?').trim())
if (!clientSpentToday || !clientSpentForAllTime) {
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.')
} else  {
    let discount = 0
    if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
        discount = 10
    } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
        discount = 20
    } else if (clientSpentForAllTime >= 500) {
        discount = 30
    } 
    alert(`Вам предоставляется скидка в ${discount}%!`)
    clientSpentToday = clientSpentToday * (1 - discount / 100)
    clientSpentForAllTime += clientSpentToday
    alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
}
