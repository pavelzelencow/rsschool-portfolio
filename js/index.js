

let x = document.querySelector(".menu-btn");

x.addEventListener("click", myFunction);

function myFunction() {
  let element = document.querySelector(".menu-list");
  element.classList.toggle("menu-list__active");

  x.classList.toggle("menu-btn__active");
}


let d = document.querySelector('.menu-btn');

d.addEventListener("click", youFunction);

function youFunction() {
    let c = document.querySelector(".body-lock");
    c.classList.toggle("body-active");
}


const navLinks = document.querySelectorAll('.menu-item__link');

navLinks.forEach((el) => el.addEventListener('click', closeMenu));
let menu = document.querySelector(".menu-list");
let btn = document.querySelector(".menu-btn");
let body = document.querySelector(".body-lock");
function closeMenu(event) {
    if (event.target.classList.contains('menu-item__link')) {
        menu.classList.remove('menu-list__active');
        btn.classList.remove('menu-btn__active');
        body.classList.remove('body-active');
      // здесь код, удаляющий класс `'open'` у гамбургер-иконки и у меню
    }
  }