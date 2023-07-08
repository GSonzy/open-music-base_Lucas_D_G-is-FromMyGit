
export const renderDarkMode = () => {
    const modeButton = document.querySelector('.dark__controller')
    const modeImg = document.querySelector('#img__sun-moon')
    const html = document.querySelector('html')
    const localStoragePrefer = JSON.parse(localStorage.getItem('darkMode'))
    
    if(localStoragePrefer) {
        modeImg.src = "./src/assets/img/sun.svg.svg"
        html.classList.add('dark__mode')
    }else{
        modeImg.src = "./src/assets/img/moon.svg.svg"
        html.classList.remove('dark__mode')
    }

    modeButton.addEventListener('click', () => {
        html.classList.toggle('dark__mode')

        if(html.classList.contains('dark__mode')) {
            modeImg.src = "./src/assets/img/sun.svg.svg"
            localStorage.setItem('darkMode', true)
        }else{
            modeImg.src = "./src/assets/img/moon.svg.svg"
            localStorage.setItem('darkMode', false)
        }
    })
}

