

var x = document.querySelector(".menu-btn");

x.addEventListener("click", myFunction);

function myFunction() {
  var element = document.querySelector(".menu-list");
  element.classList.toggle("menu-list__active");
  
  x.classList.toggle("menu-btn__active");
}
