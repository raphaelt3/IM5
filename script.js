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

// Animations
gsap.registerPlugin(ScrollTrigger);

// gsap.from('.animate-hero', {
//     duration: 0.6,
//     opacity: 0,
//     y: -150,
//     stagger: 0.3,
// });
gsap.from('.animate-hero', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    onComplete: function() {
        gsap.to('.animate-hero', {
            duration: 0.9,
            opacity: 1,
            y: 0,
            stagger: 0,
        });
    }
});

gsap.from('.animate-services', {
    scrollTrigger: '.animate-services',
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.12,
});

gsap.from('.animate-img', {
    scrollTrigger: '.animate-services',
    duration: 1.2,
    opacity: 0,
    x: -200,
});

gsap.from('.animate-surflevel', {
    scrollTrigger: '.animate-surflevel',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5,
});

gsap.from('.animate-card', {
    scrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.2,
    delay: 0.5,
});

gsap.from('.animate-spots', {
    scrollTrigger: '.animate-spots',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5,
});

// Back to top button
// Wenn die Seite geladen ist
document.addEventListener("DOMContentLoaded", function() {
    // Bei 100px herunterscrollen, zeige den Button
    window.onscroll = function() {scrollFunction()};
});

function scrollFunction() { 
    var button = document.getElementById("topBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
        button.style.position = "fixed";
        button.style.bottom = "10px"; // Wert nach Bedarf anpassen
        button.style.right = "20px"; // Wert nach Bedarf anpassen
    } else {
        button.style.display = "none";
    }
}

// Wenn der Benutzer auf den Button klickt, nach oben scrollen
function topFunction() {
    document.body.scrollTop = 0; // Für Safari
    document.documentElement.scrollTop = 0; // Für Chrome, Firefox, IE und Opera
}
