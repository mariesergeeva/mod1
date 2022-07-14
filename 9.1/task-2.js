let showSuccessMessage = function(message) {
    console.log(message)
}
let showErrorMessage = function(message) {
    console.error(message)
}
let checkTextOnErrorSymbol = function(text, errorSymbol, successCallback, errorCallback) {
    let includes = []
    for (i = 0; i < text.length; i++) {
        if (text[i] === errorSymbol) {
            includes.push(i)
        } 
    }
    if (includes.length) {
        includes.forEach(item => {
            errorCallback(`Найден запрещенный символ ${errorSymbol} под индексом ${item}`)
        })
    } else {
        successCallback('В данном тексте нет запрещенных символов')
    }
}
const text = "Привет! Как дела! Давно мы с тобой не виделись."
checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage)