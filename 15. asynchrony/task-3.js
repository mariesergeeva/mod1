function toggalLoader() {
    let loaderHTML = document.querySelector('#loader')
    let isHidden = loaderHTML.hasAttribute('hidden')
    isHidden ? loaderHTML.removeAttribute('hidden') : loaderHTML.setAttribute('hidden', '')
}

let allPhotos_url = 'https://jsonplaceholder.typicode.com/photos'

function createPhotoItem(url, title) {
    let photoItem = document.createElement('li')
    photoItem.className = 'photo-item'
    let photoItemImage = document.createElement('img')
    photoItemImage.className = 'photo-item__image'
    photoItemImage.src = url
    let photoItemTitle = document.createElement('h3')
    photoItemTitle.className = 'photo-item__title'
    photoItemTitle.textContent = title
    photoItem.prepend(photoItemImage)
    photoItem.append(photoItemTitle)
    return photoItem
}

let dataContainer = document.querySelector('#data-container')

function getFastestLoadedPhoto(ids) {
    toggalLoader()
    let requests = ids.map((id) => fetch(`${allPhotos_url}/${id}`))
    Promise.race(requests)
        .then((response) => {
            return response.json()
        })
        .then((photo) => {
            console.log(photo)
            let photoHTML = createPhotoItem(photo.url, photo.title)
            dataContainer.append(photoHTML)
        })
        .catch(console.error)
        .finally(() => {
            toggalLoader()
        })
}

getFastestLoadedPhoto([60, 12, 55])