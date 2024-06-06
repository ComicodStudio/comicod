let menuBtn = document.getElementById('menu_btn');
let closeMenuBtn = document.getElementById('close_btn');
let burgerMenu = document.querySelector('.burger_menu');

menuBtn.addEventListener('click', () => {
    burgerMenu.style.transform = "translateX(0px)";
})

closeMenuBtn.addEventListener('click', () => {
    burgerMenu.style.transform = "translateX(2000px)";
})
