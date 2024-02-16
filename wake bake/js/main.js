(function () {
// Бургер
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

// Модалка

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

// Табы

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if(!tabControl) return
        e.preventDefault()
        if(tabControl.classList.contains('tab-controls__link--active')) return
        
        const tabContentId = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentId)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent =  document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }
        
        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')

    }


})()
