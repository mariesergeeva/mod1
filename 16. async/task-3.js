let ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'

let dataContainer = document.createElement('ul')
dataContainer.className = 'data-container'
document.body.append(dataContainer)

function toggalLoader() {
    let loaderHTML = document.querySelector('#loader')
    let isHidden = loaderHTML.hasAttribute('hidden')
    isHidden ? loaderHTML.removeAttribute('hidden') : loaderHTML.setAttribute('hidden', '')
}

function createAlbum(title) {
    let album = document.createElement('li')
    album.textContent = title
    return album
}

async function renderAlbums() {
    try {
        toggalLoader()
        let response = await fetch(ALBUMS_URL)
        let albums = await response.json()
        albums.forEach(item => {
            let albumHTML = createAlbum(item.title)
            dataContainer.append(albumHTML)   
        })

    }
    catch {
        dataContainer.textContent = 'Произошла ошибка в получении данных об альбомах...'
        console.log(error)
    }
    finally {
        toggalLoader()
    }
}

renderAlbums()

// users.forEach(user => {
//     let userHTML = createUser(user.name)
//     dataContainer.append(userHTML)
// })