let allStack = ['', 'HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
let student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        this.level++
        if (this.level < allStack.length) {
            this.stack.push(allStack[this.level])
        } else {
            alert('Студент выучил все технологии!')
        }
        return this
    }
}
student
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
console.log(student)