// toggle mobile menu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// Display Mobile Menu
// --> #mobile-menu anvisieren und das menü aus und einschalten
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

// eventListener (quasi "Actiontrigger"--> wenn ich auf's Hamburger Menü klicke die Funktion mobile Menü auslösen
menu.addEventListener('click', mobileMenu);