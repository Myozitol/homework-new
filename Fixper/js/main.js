(function () {
    // Дропменю в шапке=================================
const cityValue = document.querySelector('.city-value')
const dropdown = document.querySelector('.js-dropdown');
const dropdownValue = dropdown.querySelector('.js-dropdown-value');
const dropdownOptions = dropdown.querySelector('.js-dropdown-options');

dropdown.addEventListener('click', (event) => {


if (event.target === dropdown) {
    dropdown.classList.toggle('is-opened');
}

event.preventDefault();

if (event.target.classList.contains('js-dropdown-option')) {
    dropdownValue.innerText = event.target.innerText;
    cityValue.textContent = event.target.innerText;
    mainCity.textContent = event.target.innerText;
    dropdown.classList.remove('is-opened');
}

})

// Модальное меню=======================================

    const modalButton = document.querySelector('.burger-icon')
    const modal = document.querySelector('.wrapper-modal')
    const modalTransform = document.querySelector('.modal-window')
    const body = document.body
    const mainCityModal = document.querySelector('.main-city')
    const cityList = document.querySelector('.modal-city__ul')
    const cityIconMod = document.querySelector('.main-city-icon') 

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal() {
        body.classList.toggle('body--fixed')
        modal.classList.toggle('modal--open')
        modalTransform.classList.toggle('modal-window--transform')
    }

    function closeModal(e) {
        const target = e.target

        if (target.closest('.modal__close-btn') || target.classList.contains('wrapper-modal') || target.classList.contains('burger-tel')) {
            body.classList.remove('body--fixed')
            modal.classList.remove('modal--open')
            modalTransform.classList.remove('modal-window--transform')
        }

}

mainCityModal.addEventListener('click', () =>{
    cityIconMod.classList.toggle('main-city-icon--rotate')
    cityList.classList.toggle('modal-city__ul--open')
})

// Выбор городов в футере =====================================

    const footerCity = document.querySelector('.footer__choice')
    const mainCity = document.querySelector('.city')
    const footerChoice = document.querySelector('.footer__head-city')
    const footerIcon = document.querySelector('.nav-check-icon')

    footerChoice.addEventListener('click', (event) => {
        footerIcon.classList.toggle('nav-check-icon--rotate');
        footerCity.classList.toggle('footer__choice--open');
        if (event.target.classList.value === 'value') {
            mainCity.textContent = event.target.innerText;
            dropdownValue.innerText = event.target.innerText;
            cityValue.textContent = event.target.innerText;
        }
        
    })

    // Модалка оставить заявку =====================================

    const heroButton = document.querySelector('.hero__button')
    const worksButton = document.querySelector('.works__button')
    const worksButtonMobile = document.querySelector('.works__button-mobile')
    const modalCall = document.querySelector('.wrapper-modal-call')
    const modalCallTransform = document.querySelector('.modal-call-window')

    heroButton.addEventListener('click', openModalCall)
    worksButton.addEventListener('click', openModalCall)
    worksButtonMobile.addEventListener('click', openModalCall)
    modalCall.addEventListener('click', closeModalCall)

    function openModalCall() {
        body.classList.toggle('body--fixed')
        modalCall.classList.toggle('modal--open')
        modalCallTransform.classList.toggle('modal-window--transform')
    }

    function closeModalCall(e) {
        const target = e.target

        if (target.closest('.modal-call__close-btn') || target.classList.contains('wrapper-modal-call') || target.classList.contains('contact-button')) {
            body.classList.remove('body--fixed')
            modalCall.classList.remove('modal--open')
            modalCallTransform.classList.remove('modal-window--transform')
        }

}
    // Маска для телефона ===================================
    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)

    
    // Модалка заявка принята =====================================
    const sendButton = document.querySelector('.contact-button')
    const modalCallSend = document.querySelector('.wrapper-modal-call-send')
    const modalCallSendTransform = document.querySelector('.modal-call-send-window')

    sendButton.addEventListener('click', openModalCallSend)
    modalCallSend.addEventListener('click', closeModalCallSend)

    function openModalCallSend() {
        body.classList.toggle('body--fixed')
        modalCallSend.classList.toggle('modal--open')
        modalCallSendTransform.classList.toggle('modal-window--transform')
    }

    function closeModalCallSend(e) {
        const target = e.target

        if (target.closest('.modal-call-send__close-btn') || target.classList.contains('wrapper-modal-call-send')) {
            body.classList.remove('body--fixed')
            modalCallSend.classList.remove('modal--open')
            modalCallSendTransform.classList.remove('modal-window--transform')
        }
    }

    // Модалка заказать звонок =====================================

    const telButton = document.querySelector('.hero__tel')
    const modalTel = document.querySelector('.wrapper-modal-call-tel')
    const modalTelTransform = document.querySelector('.modal-call-tel-window')
    const headerTel = document.querySelector('.header-tel')
    const headerTelMob = document.querySelector('.header__mobile-contact')
    const burgerTel = document.querySelector('.burger-tel')
    const footerTel = document.querySelector('.footer-tel')

    telButton.addEventListener('click', openModalTel)

    headerTel.addEventListener('click', (e) => {
        e.preventDefault
        openModalTel()
    }
    ) 
    headerTelMob.addEventListener('click', (e) => {
        e.preventDefault
        openModalTel()
    }
    ) 
    burgerTel.addEventListener('click', (e) => {
        e.preventDefault
        openModalTel()
    }
    ) 
    footerTel.addEventListener('click', (e) => {
        e.preventDefault
        openModalTel()
    }
    ) 
    
    modalTel.addEventListener('click', closeModalTel)

    function openModalTel() {
        body.classList.toggle('body--fixed')
        modalTel.classList.toggle('modal--open')
        modalTelTransform.classList.toggle('modal-window--transform')
    }

    function closeModalTel(e) {
        const target = e.target

        if (target.closest('.modal-tel__close-btn') || target.classList.contains('wrapper-modal-call-tel') || target.classList.contains('tel-button')) {
            body.classList.remove('body--fixed')
            modalTel.classList.remove('modal--open')
            modalTelTransform.classList.remove('modal-window--transform')
        }
    }

        // Модалка перезвоним =====================================
        const sendTelButton = document.querySelector('.tel-button')
        const modalTelSend = document.querySelector('.wrapper-modal-call-tel-send')
        const modalTelSendTransform = document.querySelector('.modal-call--tel-send-window')
    
        sendTelButton.addEventListener('click', openModalTelSend)
        modalTelSend.addEventListener('click', closeModalTelSend)
    
        function openModalTelSend() {
            body.classList.toggle('body--fixed')
            modalTelSend.classList.toggle('modal--open')
            modalTelSendTransform.classList.toggle('modal-window--transform')
        }
    
        function closeModalTelSend(e) {
            const target = e.target
    
            if (target.closest('.modal-call-send__close-btn') || target.classList.contains('wrapper-modal-call-tel-send')) {
                body.classList.remove('body--fixed')
                modalTelSend.classList.remove('modal--open')
                modalTelSendTransform.classList.remove('modal-window--transform')
            }
        }

        // Слайдер работников =====================================
        new Swiper('.masters__animate', {
            // // Optional parameters
            loop: true,
            direction: 'vertical',
            slidesPerView: 1.45,
            spaceBetween: 0,
            speed: 6000,
            centeredSlides: true,
            autoplay: {
                delay: 10,
            },
            breakpoints: { 768:{
                centeredSlides: false
            }
            },
            });

        new Swiper('.masters__animate__second', {
            // // Optional parameters
            loop: true,
            direction: 'vertical',
            slidesPerView: 1.45,
            spaceBetween: 0,
            speed: 6000,
            centeredSlides: true,
            autoplay: {
                delay: 10,
                reverseDirection:true,
            },
        });
        new Swiper('.masters__mobile__animate', {
            // // Optional parameters
            loop: true,
            direction: 'horizontal',
            slidesPerView: 3.55,
            spaceBetween: 20,
            speed: 6000,
            centeredSlides: true,
            autoplay: {
                delay: 1,
            },
        });

        // Слайдер работы =====================================
        new Swiper('.examples__inner', {
            // // Optional parameters
            direction: 'horizontal',
            loop: true,
            navigation: {
                nextEl: '.examples__buttons__next',
                prevEl: '.examples__buttons__prev',
            },
            spaceBetween: 30,
        });

}) ();



// 

//     // Бургер
//     document.addEventListener('click', burgerInit)

//     function burgerInit(e) {

//         const burgerIcon = e.target.closest('.burger-icon')
//         const burgerNavLink = e.target.closest('.nav__link')

//         if (!burgerIcon && !burgerNavLink) return
//         if (document.documentElement.clientWidth > 900) return

//         if (!document.body.classList.contains('body--opened-menu')) {
//             document.body.classList.add('body--opened-menu')
//         } else {
//             document.body.classList.remove('body--opened-menu')
//         }

//     }

//     // Модалка

//     const modalButton = document.querySelector('.about__img-button')
//     const modal = document.querySelector('.wrapper-modal')
//     const body = document.body

//     modalButton.addEventListener('click', openModal)
//     modal.addEventListener('click', closeModal)

//     function openModal() {
//         body.classList.toggle('body--fixed')
//         modal.classList.toggle('modal--open')
//     }

//     function closeModal(e) {
//         const target = e.target

//         if (target.closest('.modal__close-btn') || target.classList.contains('wrapper-modal')) {
//             body.classList.remove('body--fixed')
//             modal.classList.remove('modal--open')
//         }
//     }

//     // Табы

//     const tabControls = document.querySelector('.tab-controls')

//     tabControls.addEventListener('click', toggleTab)

//     function toggleTab(e) {

//         const tabControl = e.target.closest('.tab-controls__link')

//         if (!tabControl) return
//         e.preventDefault()
//         if (tabControl.classList.contains('tab-controls__link--active')) return

//         const tabContentId = tabControl.getAttribute('href')
//         const tabContent = document.querySelector(tabContentId)
//         const activeControl = document.querySelector('.tab-controls__link--active')
//         const activeContent = document.querySelector('.tab-content--show')

//         if (activeControl) {
//             activeControl.classList.remove('tab-controls__link--active')

//         }
//         if (activeContent) {
//             activeContent.classList.remove('tab-content--show')
//         }

//         tabControl.classList.add('tab-controls__link--active')
//         tabContent.classList.add('tab-content--show')


//     }

//     // Аккордионы

//     const accordionLists = document.querySelectorAll('.accordion-list');

//     // Если надо, чтобы хоть какой-нибудь элемент аккордеона был изначально раскрыт 
//     // const openedAccordion = document.querySelector('.accordion-list__item--opened .accordion-list__content');

//     // openedAccordion.style.maxHeight = openedAccordion.scrollHeight + 'px'

//     //==================================================================================

//     accordionLists.forEach(el => {

//         el.addEventListener('click', e => {

//             const activate = e.currentTarget //для того, чтобы при открытии одного листа, другой закрывался
//             const accordionControl = e.target.closest('.accordion-list__control');
//             const activeAccordion = activate.querySelector('.accordion-list__item--opened')
//             const activeContent = activate.querySelector('.accordion-list__item--opened .accordion-list__content')
//             const accordionItem = accordionControl.parentElement;
//             const accordionContent = accordionControl.nextElementSibling;
//             if (!accordionControl) return;
//             e.preventDefault()
            
//             if (activeAccordion && activeAccordion != accordionItem) {
//                 activeAccordion.classList.remove('accordion-list__item--opened')
//                 activeContent.style.maxHeight = null
//             }

//             accordionItem.classList.toggle('accordion-list__item--opened');

//             if (accordionItem.classList.contains('accordion-list__item--opened')) {
//                 accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'

//             } else {
//                 accordionContent.style.maxHeight = null


//             }
//         })
//     })

//     // Слайдер-галерея

//     new Swiper('.gallery__slider', {
//         slidesPerView: 1.5,
//         spaceBetween: 15,

//         pagination: {
//             el: '.gallery__pagination',
//             type: 'fraction',
//         },

//         navigation: {
//             nextEl: '.gallery__next',
//             prevEl: '.gallery__prev',
//         },

//         breakpoints: {
//             601: {
//                 slidesPerView: 3,
//             },
//             801: {
//                 spaceBetween: 32,
//             },
//             1101: {
//                 slidesPerView: 4,
//             }
//         }

//     });

//     // Слайдер-отзывы

//     new Swiper('.testimonials__slider', {
//         slidesPerView: 1,
//         spaceBetween: 0,
//         centeredSlides: true,

//         navigation: {
//             nextEl: '.testimonials__next',
//             prevEl: '.testimonials__prev',
//         },

//         scrollbar: {
//             el: '.swiper-scrollbar',
//             draggable: true,
//         },

//         breakpoints: {
//             901: {
//                 slidesPerView: 1.5,
//             },
//             1201: {
//                 slidesPerView: 2.1,
//             }
//         }

//     });
//     // Маска для телефона
//     const telInputs = document.querySelectorAll('input[type="tel"]')
//     const im = new Inputmask('+7 (999) 999-99-99')
//     im.mask(telInputs)
// })()
