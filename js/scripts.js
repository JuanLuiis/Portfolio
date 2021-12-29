/* Esto inicializara AOS library */

AOS.init();

let menu = document.getElementById('menu');

let menu_bar = document.getElementById('menu-bar');

menu_bar.addEventListener('click', () => menu.classList.toggle('menu-toggle'))



const button = document.querySelector('.skills');
button.addEventListener('click', function(e) {
    e.preventDefault();
    const desplegable = document.querySelector('.lenguajes');
    desplegable.classList.remove('no-mostrar');
})