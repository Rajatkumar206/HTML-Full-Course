const menuIcon = document.querySelector('.menu-icon');
const navbarUl = document.querySelector('.navbar ul');

menuIcon.addEventListener('click', () => {
    navbarUl.classList.toggle('active');
});