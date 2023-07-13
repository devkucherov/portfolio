let hamburger = document.querySelector('.header__btn')
let mobileNav = document.querySelector('.header__menu')
let mobileBtn = document.querySelector('.header__btn')
let body = document.querySelector('.page__body')

hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('open')
    mobileBtn.classList.toggle('open')
    body.classList.toggle('stopscroll')
})