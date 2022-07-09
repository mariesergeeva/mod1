const myName= 'Мария'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Владилена Минина'
const reasonText = 'хочу сменить профессию'
const numberOfMonth = 3
let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`
myInfoText = myInfoText.replaceAll('JavaScript', 'JAVASCRIPT')
console.log(myInfoText)
console.log(myInfoText.length)
console.log(myInfoText[0], myInfoText[myInfoText.length-1])