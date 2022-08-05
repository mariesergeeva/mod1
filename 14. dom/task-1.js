//innerHTML
// document.body.innerHTML = 
// `<form class="create-user-form">
//   <label>
//     Имя
//     <input type="text" name="userName" placeholder="Введите ваше имя" />
//   </label>
//   <label>
//     Пароль
//     <input type="password" name="password" placeholder="Придумайте Пароль" />
//     </label>
//   <button type="submit">
//     Подтвердить
//   </button>
// </form>`

//document.createElement()
let form = document.createElement('form')
form.className = "create-user-form"
let labelName = document.createElement('label')
labelName.innerHTML = ' Имя '
let inputName = document.createElement('input')
inputName.setAttribute('type', 'text')
inputName.setAttribute('name','userName')
inputName.setAttribute('placeholder', 'Введите ваше имя')
let labelPassword = document.createElement('label')
labelPassword.innerHTML = ' Пароль '
let inputPassword = document.createElement('input')
inputPassword.setAttribute('type', 'password')
inputPassword.setAttribute('name','password')
inputPassword.setAttribute('placeholder', 'Придумайте пароль')
let submitButtom = document.createElement('button')
submitButtom.setAttribute('type', 'submit')
submitButtom.innerHTML = ' Подтвердить '
document.body.append(form)
form.prepend(labelName)
labelName.append(inputName)
labelName.after(labelPassword)
labelPassword.append(inputPassword)
form.append(submitButtom)

