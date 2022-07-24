function getWinner(applicants, winnerObject) {
    let result = {...winnerObject, ...Object.values(applicants)[getRandomNumberInRange(0, 3)]}
    return result
}
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
const todaysWinner = {
    prize: "10 000$"
}
const winnerApplicants = {
    "001": {
      name: "Максим",
      age: 25
    },
    "201": {
      name: "Светлана",
      age: 20
    },
    "304": {
      name: "Екатерина",
      age: 35
    }
}
  const resultWinner = getWinner(winnerApplicants, todaysWinner);
  console.log("resultWinner", resultWinner);
  // { prize: '10 000$', name: 'Максим', age: 25 }  