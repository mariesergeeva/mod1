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

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add(
  "Веб-разработчик",
  "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
);

dictionary.remove("JavaScript");
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает
// и дополняет существующие

