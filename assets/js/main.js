/*  ()  */

/*SHOW MENU*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*VALIDATING EXSISTENCE*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*HIDE MENU*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*HIDE MENU - LINK CLICK*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*NAV LINE*/
function navLine() {
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the nav-line class to the header tag
    if (this.scrollY >= 80) header.classList.add('nav-line'); else header.classList.remove('nav-line')
}
window.addEventListener('scroll', navLine)

/*ARROW UP*/
function arrowUp() {
    const arrowUp = document.getElementById('arrow-up');

    if (this.scrollY >= 170) arrowUp.classList.add('show-arrow'); else arrowUp.classList.remove('arrow-up')
}

window.addEventListener('scroll', arrowUp)

/*DARK THEME*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'


if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*VIDEO PLAY - HOME*/
const video = document.querySelectorAll('.edits__video')

video.forEach(play => play.addEventListener('click', () => {

    play.classList.toggle('.active');

    if (play.paused) {
        play.play();
    }

    else {
        play.pause();
    }

}));