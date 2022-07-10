let userPassword = prompt('Введите пароль')
if (userPassword.length >= 3 && userPassword.length <= 20
    && !(userPassword === userPassword.toLowerCase()) 
    && /[0-9]/.test(userPassword)) {
    alert('Пароль валидный. Добро пожаловать в аккаунт!')
} else {
    alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
}
