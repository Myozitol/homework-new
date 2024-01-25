const btn = document.querySelector('.modal')
const mod = document.querySelector('.modal_open')
const modWin = document.querySelector('.window')
const close = document.querySelector('.modal_close')

btn.addEventListener('click', () => {
    mod.classList.add('open')
    modWin.classList.add('open')
})

modWin.addEventListener('click', () => {
    if (mod.classList.contains('open')) {
        mod.classList.remove('open')
        modWin.classList.remove('open')
    }
})

close.addEventListener('click', () => {
    if (mod.classList.contains('open')) {
        mod.classList.remove('open')
        modWin.classList.remove('open')
    }
})

