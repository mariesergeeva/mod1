// for (let i = 0; i < 3; i += 1) {
//     let newStudent = prompt("Введите имя нового студента!");
//     if (newStudent) {
//       newStudent = newStudent.trim();
//       alert(`Добро пожаловать, ${newStudent}!`);
//     }
//   }

let i = 0
let newStudent
do {
    newStudent = prompt("Введите имя нового студента!").trim()
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent}!`)
    }
    i++
} while (i < 3)
