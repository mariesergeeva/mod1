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
            console.log('add', this.words)
        }
    }
    get(word) {
        console.log('get', this.words[word])
        return this.words[word]
    }
    remove(word) {
        delete this.words[word]
        console.log('remove', this.words)
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
dictionary.get("JavaScript")
dictionary.remove("JavaScript");
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает
// и дополняет существующие

