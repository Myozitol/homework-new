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

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tabContentId = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentId)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')

        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')


    }

    // Аккордионы

    const accordionLists = document.querySelectorAll('.accordion-list');

    // Если надо, чтобы хоть какой-нибудь элемент аккордеона был изначально раскрыт 
    // const openedAccordion = document.querySelector('.accordion-list__item--opened .accordion-list__content');

    // openedAccordion.style.maxHeight = openedAccordion.scrollHeight + 'px'

    //==================================================================================

    accordionLists.forEach(el => {

        el.addEventListener('click', e => {

            const activate = e.currentTarget //для того, чтобы при открытии одного листа, другой закрывался
            const accordionControl = e.target.closest('.accordion-list__control');
            const activeAccordion = activate.querySelector('.accordion-list__item--opened')
            const activeContent = activate.querySelector('.accordion-list__item--opened .accordion-list__content')
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;
            if (!accordionControl) return;
            e.preventDefault()
            
            if (activeAccordion && activeAccordion != accordionItem) {
                activeAccordion.classList.remove('accordion-list__item--opened')
                activeContent.style.maxHeight = null
            }

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'

            } else {
                accordionContent.style.maxHeight = null


            }
        })
    })

    // Слайдер-галерея

    new Swiper('.gallery__slider', {
        slidesPerView: 1.5,
        spaceBetween: 15,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            }
        }

    });

    // Слайдер-отзывы

    new Swiper('.testimonials__slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            }
        }

    });
    // Маска для телефона
    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)
})()
