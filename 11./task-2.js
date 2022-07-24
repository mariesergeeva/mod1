function startGame(heroPlayer, enemyPlayer) {
    while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
        getRandomNumberInRange(0, 1) === 1 ? enemyPlayer.heatHero(heroPlayer) : heroPlayer.heatEnemy(enemyPlayer)
    }
    let winner = {}
    enemyPlayer.health > heroPlayer.health ? winner = enemyPlayer : winner = heroPlayer
    alert(`${winner.name} победил! У него осталось ${winner.health} здоровья`)
}
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
const hero = {
    name: "Batman",
    health: 100,
    heatEnemy: function(enemy) {
        enemy.health -= 10
    }
}
const enemy = {
    name: "Joker",
    health: 100,
    heatHero: function(hero) {
        hero.health -= 10
    }
}
startGame(hero, enemy)