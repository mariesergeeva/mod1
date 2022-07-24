function allowVisa(array) {
    let now = new Date()
    let people = []
    array.forEach(item => {
        let passportDateArray = item.passportExpiration.split('.')
        let passportDate = new Date(passportDateArray[2], passportDateArray[1] - 1, passportDateArray[0])
        if (Date.parse(passportDate) > Date.parse(now) && item.criminalRecord === false) {
            people.push(item)
        }
    })
    return people
}
const peopleWithVisa = [
    {
      firstName: "Stasia",
      lastName: "Ward",
      criminalRecord: true,
      passportExpiration: "19.06.2040"
    },
    {
      firstName: "Elliot",
      lastName: "Baker",
      criminalRecord: false,
      passportExpiration: "04.06.2041"
    },
    {
      firstName: "Leighann",
      lastName: "Scott",
      criminalRecord: true,
      passportExpiration: "31.07.2039"
    },
    {
      firstName: "Nick",
      lastName: "Pop",
      criminalRecord: false,
      passportExpiration: "31.12.2010"
    }
]
const result = allowVisa(peopleWithVisa);
console.log("result", result)