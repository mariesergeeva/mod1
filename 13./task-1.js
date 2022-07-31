class Dictionary {
    #words
    #name

    constructor(name) {
        this.#name = name
        this.#words = new Object()
    }

    get mainName() {
        return this.#name
    }
    set mainName(newName) {
        this.#name = newName
    }
    get allWords() {
        return this.#words
    }

    _addNewWord(wordKey, wordObj) {
        this.#words[wordKey] = wordObj
    }
    add(word, description) {
        if (typeof this.#words[word] === 'undefined') {
            let descriptForWordObj = new Object()
            descriptForWordObj.word = word
            descriptForWordObj.description = description
            this._addNewWord(word, descriptForWordObj)
            console.log('add', this.allWords)
        }
    }
    get(word) {
        console.log('get', this.#words[word])
        return this.#words[word]
    }
    remove(word) {
        delete this.#words[word]
        console.log('remove', this.#words)
    }
    showAllWords() {
        let array = Object.values(this.#words)
        array.forEach(item => {
            console.log(Object.values(item)[0],' - ', Object.values(item)[1])
        })
    }
}
class HardWordsDictionary extends Dictionary {
    constructor(name){
        super(name)
    }

    add(word, description) {
        if (typeof this.allWords[word] === 'undefined') {
            let descriptForWordObj = new Object()
            descriptForWordObj.word = word
            descriptForWordObj.description = description
            descriptForWordObj.isDifficult = true
            this._addNewWord(word, descriptForWordObj)
            console.log('add', this.allWords)
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

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = "Новый Словарь";
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова
// дилетант и квант

