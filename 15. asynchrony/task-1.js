function toggalLoader() {
    let loaderHTML = document.querySelector('#loader')
    let isHidden = loaderHTML.hasAttribute('hidden')
    isHidden ? loaderHTML.removeAttribute('hidden') : loaderHTML.setAttribute('hidden', '')
}

let usersList_url = 'https://jsonplaceholder.typicode.com/users'

function createUser(text) {
    let user = document.createElement('li')
    let userAnchor = document.createElement('a')
    userAnchor.href = '#'
    userAnchor.textContent = text
    user.append(userAnchor)
    return user
}

let dataContainer = document.querySelector('#data-container')


function getAllUsers() {
    toggalLoader()
    let result = fetch(usersList_url, {
    })
    
    result
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка запроса')
            }
            return response.json()
        })
        .then((users) => {
            users.forEach(user => {
                let userHTML = createUser(user.name)
                dataContainer.append(userHTML)
            })
        })
        .catch(console.error)
        .finally(() => {
            toggalLoader()
        })
}

getAllUsers()