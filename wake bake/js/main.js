(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    const modalButton = document.querySelector('.about__img-button')
    const modal = document.querySelector('.wrapper-modal')
    const body = document.body

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal() {
        body.classList.toggle('body--fixed')
        modal.classList.toggle('modal--open')
    }

    function closeModal(e) {
        const target = e.target

        if (target.closest('.modal__close-btn') || target.classList.contains('wrapper-modal')) {
            body.classList.remove('body--fixed')
            modal.classList.remove('modal--open')
        }
    }


})()

const arrayTab = document.querySelectorAll('.tab-controls__link')
const tabOne = document.getElementById('tab1')
const tabTwo = document.getElementById('tab2')
const tabThree = document.getElementById('tab3')
const tabFour = document.getElementById('tab4')
const tabListen = document.querySelector('.tab-controls')

tabListen.addEventListener('click', tabOpen)

function tabOpen(e) {
    e.preventDefault()

    const target = e.target
    if(target.attributes.href.textContent == 'tab1') {
        tabOne.classList.add('tab-content--show')
        tabTwo.classList.remove('tab-content--show')
        tabThree.classList.remove('tab-content--show')
        tabFour.classList.remove('tab-content--show')
    }
    if (target.attributes.href.textContent == 'tab2') {
        tabTwo.classList.add('tab-content--show')
        tabOne.classList.remove('tab-content--show')
        tabThree.classList.remove('tab-content--show')
        tabFour.classList.remove('tab-content--show')
    }
    else if (target.attributes.href.textContent == 'tab3') {
        tabThree.classList.add('tab-content--show')
        tabOne.classList.remove('tab-content--show')
        tabTwo.classList.remove('tab-content--show')
        tabFour.classList.remove('tab-content--show')
    }
    else if (target.attributes.href.textContent == 'tab4') {
        tabFour.classList.add('tab-content--show')
        tabOne.classList.remove('tab-content--show')
        tabTwo.classList.remove('tab-content--show')
        tabThree.classList.remove('tab-content--show')
    }
}
