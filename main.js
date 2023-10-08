
import './sass/main.sass'

let burger = document.getElementById('burger')
let headerRow = document.getElementById('headerRow')

burger.addEventListener('click',()=>{
    burger.classList.toggle('active')
    headerRow.classList.toggle('header__top-row-mobile')
})


