const burger = document.querySelector('.burger-icon')
const body = document.querySelector('.body')
const navLink = document.querySelector('.nav__link')
function burgerRemove() {
    body.classList.remove('body--opened-menu')
}

burger.addEventListener ('click', () => {
    if (body.classList.contains('body--opened-menu')) {
        burgerRemove()
    }
    else {
        body.classList.add('body--opened-menu')
    }
})

navLink.addEventListener ('click', () => {
    if (body.classList.contains('body--opened-menu')) {
        burgerRemove()
    }
})
