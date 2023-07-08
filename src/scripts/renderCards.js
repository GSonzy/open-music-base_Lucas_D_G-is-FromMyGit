import { categories, products } from "./productsData.js";

export function render (array) {
    const albumsList = document.querySelector('.main__list')

    albumsList.innerHTML = ''

    array.forEach(product => {
        const card = createCard(product)

        albumsList.appendChild(card)
    });
    
}

export function createCard(product){
    const cardAlbum = document.createElement('li')
    const imageAlbum = document.createElement('img')
    const organizeTittle = document.createElement('div')
    const bandAlbum = document.createElement('p')
    const yearAlbum = document.createElement('p')
    const titleAlbum = document.createElement('h3')
    const organizeprice = document.createElement('div')
    const organizevalue = document.createElement('div')
    const dollarsing = document.createElement('span')
    const priceAlbum = document.createElement('span')
    const payAlbum = document.createElement('button')


    cardAlbum.classList.add('card__album')
    cardAlbum.dataset.categoryGender = categories [product.category]
    cardAlbum.dataset.categoryid = product.category
    imageAlbum.classList.add('image__album')
    organizeTittle.classList.add('organize__Tittle')
    bandAlbum.classList.add('band__album')
    yearAlbum.classList.add('year__album')
    titleAlbum.classList.add('title__album')
    organizeprice.classList.add('organize__price')
    organizevalue.classList.add('organize_value')
    dollarsing.classList.add('dollar__sing')
    priceAlbum.classList.add('price__album')
    payAlbum.classList.add('button-pay__album')

    imageAlbum.src = product.img
    bandAlbum.innerText = product.band
    yearAlbum.innerText = product.year
    titleAlbum.innerText = product.title
    dollarsing.innerText = "R$"
    priceAlbum.innerText = ` ${product.price}.00 `
    payAlbum.innerText = "Comprar"

    organizeTittle.append(bandAlbum, yearAlbum)
    organizevalue.append(dollarsing, priceAlbum)
    organizeprice.append(organizevalue, payAlbum)

    cardAlbum.appendChild(imageAlbum)
    cardAlbum.appendChild(organizeTittle)
    cardAlbum.appendChild(titleAlbum)
    cardAlbum.appendChild(organizeprice)
    
return cardAlbum
}

