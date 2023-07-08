import { products } from "./productsData.js"
import { render } from "./renderCards.js"

export const filterCategory = (array, categoryFilter) =>{

    const filtered = array.filter(product =>{
        if(product.category == categoryFilter){
            return product
        }
    })

    return filtered
}


export const filterRangePrice = (array) => {
    const inputRange = document.querySelector('#price__input')

    inputRange.addEventListener('input', () => {
        const spanPrice = document.querySelector('.price__value')
        spanPrice.innerText = `${inputRange.value}0`

        const arrayPriceFilter = array.filter((product) => {
            return product.price >= inputRange.value
        })
        
        render(arrayPriceFilter)
    })
}
