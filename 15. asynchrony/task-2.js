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


function getUsersByIds(ids) {
    toggalLoader()
    let requests = ids.map((id) => fetch(`${usersList_url}/${id}`))
    Promise.all(requests)
        .then((responses) => {
            let dataResults = responses.map((response) => response.json())
            return Promise.all(dataResults)
        })
        .then((users) => {
            console.log(users)
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

getUsersByIds([5, 6, 2, 1])