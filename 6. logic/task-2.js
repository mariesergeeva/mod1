let query1 = 'Сколько будет 2 + 2?'
let query2 = 'Сколько будет 2 * 2?'
let query3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
let query4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'
let query5 = 'Сколько будет 2 + 2 * 2?'
let correctAnswer1 = 4
let correctAnswer2 = 4
let correctAnswer3 = 1
let correctAnswer4 = 12
let correctAnswer5 = 6
let correctAnswers = 0
let incorrectAnswers = 0
Number(prompt(query1).trim()) === correctAnswer1 ? (
    alert('Ответ Верный'),
    correctAnswers++
) : (
    alert('Ответ Неверный'),
    incorrectAnswers++
)
Number(prompt(query2).trim()) === correctAnswer2 ? (
    alert('Ответ Верный'),
    correctAnswers++
) : (
    alert('Ответ Неверный'),
    incorrectAnswers++
)
Number(prompt(query3).trim()) === correctAnswer3 ? (
    alert('Ответ Верный'),
    correctAnswers++
) : (
    alert('Ответ Неверный'),
    incorrectAnswers++
)
Number(prompt(query4).trim()) === correctAnswer4 ? (
    alert('Ответ Верный'),
    correctAnswers++
) : (
    alert('Ответ Неверный'),
    incorrectAnswers++
)
Number(prompt(query5).trim()) === correctAnswer5 ? (
    alert('Ответ Верный'),
    correctAnswers++
) : (
    alert('Ответ Неверный'),
    incorrectAnswers++
) 
alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`)