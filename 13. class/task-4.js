class Dictionary {
    constructor(name) {
        this.name = name
        this.words = new Object()
    }

    add(word, description) {
        if (typeof this.words[word] === 'undefined') {
            this.words[word] = new Object()
            this.words[word].word = word 
            this.words[word].description = description
            console.log('after add', this.words)
        }
    }
    remove(word) {
        delete this.words[word]
        console.log('after remove', this.words)
    }
    showAllWords() {
        let array = Object.values(this.words)
        array.forEach(item => {
            console.log('showAllWords', Object.values(item).join(' - '))
        })
    }
}
class HardWordsDictionary extends Dictionary {
    constructor(name){
        super(name)
    }

    add(word, description) {
        if (typeof this.words[word] === 'undefined') {
            this.words[word] = new Object()
            this.words[word].word = word 
            this.words[word].description = description
            this.words[word].isDifficult = true
            console.log('after add', this.words)
        }
    }
}
const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
  "дилетант",
  "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);

hardWordsDictionary.add(
  "неологизм",
  "Новое слово или выражение, а также новое значение старого слова."
);

hardWordsDictionary.add(
  "квант",
  "Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");

hardWordsDictionary.showAllWords();

// дилетант - Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой-либо величины в физике.

