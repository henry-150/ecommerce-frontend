const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.nav-mobile');

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});
