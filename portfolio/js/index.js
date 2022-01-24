    console.log(
        'блок <header> +6',
        'секция hero +6',
        'секция skills +6',
        'секция portfolio +6',
        'секция video +6',
        'секция price +6',
        'секция contacts +6',
        'блок <footer> +6',
        'нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5',
        'нет полосы прокрутки при ширине страницы от 768рх до 480рх +5',
        'нет полосы прокрутки при ширине страницы от 480рх до 320рх +5',
        'при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2',
        'при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4',
        'высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4',
        'при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4',
        'бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2',
        'при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4'
    );

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