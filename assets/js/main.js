

import Dom from './modules/constructors.js'; //selecionar elementos
import menu from './modules/menu.js';
import scriptsHome from './modules/scriptsPaginas/home.js';



// let mediaQuery = window.matchMedia('(min-width: 1024px)').matches
menu();


// PAGES 
const pageHome = new Dom().el("#page__home")

if (pageHome) { // ★ HOME  
    new Dom().bodyClass("body__home");
    scriptsHome();
}
// else if (pageClientes) { // ★ Clientes  
//      new Dom().bodyClass("body__clientes");

// }



document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("dcl");
});