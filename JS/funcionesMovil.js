const menu = document.querySelector(".menu");
const menuAbiertoBtn = document.querySelector(".abrir-menu");
const menuCerradoBtn = document.querySelector(".cerrar-menu");

function toggleMenu(){
  menu.classList.toggle("menu_abierto");
}
menuAbiertoBtn.addEventListener("click", toggleMenu);
menuCerradoBtn.addEventListener("click", toggleMenu);