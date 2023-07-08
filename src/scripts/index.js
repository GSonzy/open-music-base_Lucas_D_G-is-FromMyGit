import { categories, products } from './productsData.js'
import {render} from './renderCards.js'
import { renderDarkMode } from './theme.js'
import { filterCategory,filterRangePrice } from './filterFunction.js'


function renderFilterByCategory(array) {
    const buttonsCategorys = document.querySelectorAll('.button__gender')

    buttonsCategorys.forEach(button =>{
        button.addEventListener('click', (event) =>{
            if(event.target.innerText === 'Todos'){
                render(array)
            }else{
                const genderFiltered = filterCategory(array, event.target.value)
                render(genderFiltered)
            }
        })
    })
}


render(products)
renderDarkMode()
renderFilterByCategory(products)
filterRangePrice(products)