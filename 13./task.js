const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defenderObject) {
        let ourArmyChances = 0
        let maximumChances = Object.keys(defenderObject).length
        for (key in defenderObject) {
            if (this[key] > defenderObject[key]) {
                ourArmyChances++
            }
        }
        return [ourArmyChances, maximumChances]
    },
    improveArmy() {
        for (key in this) {
            if (Number.isInteger(this[key])) {
                this[key] += 5
            }
        }
    },
    attack(defenderObject) {
        let chanses = attacker.checkChancesToWin(defenderObject)
        if ((chanses[0] / chanses[1] * 100) < 70) {
            attacker.improveArmy()
            alert(`Наши шансы равны ${chanses[0]}/${chanses[1]}. Необходимо укрепление!`)
        } else alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!')
    }
}
  
  const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10
}  
attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление! 
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление! 
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!