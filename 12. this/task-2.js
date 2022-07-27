const dog = {
    name: "Чарли",
    type: "Собака",
    makeSound() {
      return "Гав-Гав";
    }
}
const bird = {
    name: "Петя",
    type: "Воробей",
    makeSound() {
      return "Чик-чирик";
    }
}  
function makeDomestic(isDomestic) {
    alert (`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
    this.isDomestic = isDomestic
    console.log(this)
    return this
}
makeDomestic.bind(dog, true)(); // вернет объект: {name: 'Чарли', type: 'Собака', isDomestic: true, makeSound: ƒ}
// Выведет сообщение: "Собака по имени Чарли говорит Гав-Гав"

makeDomestic.call(bird, false); // вернет объект: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}
// Выведет сообщение: "Воробей по имени Петя говорит Чик-чирик"

makeDomestic.apply(bird, [false])