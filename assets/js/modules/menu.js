export default function menu() {
    const btnMobile = document.getElementById('btn-mobile');
    const headerEl = document.getElementById('header');

    function toggleMenu(event) {
       if(event.type === 'touchstart') event.preventDefault();
       const nav = document.getElementById('nav');
       
       nav.classList.toggle('active');
       const active = nav.classList.contains('active');
       event.currentTarget.setAttribute('aria-expanded', active);
   
       if (active) {
           event.currentTarget.setAttribute('aria-label', 'Fechar menu')
       } else {
           event.currentTarget.setAttribute('aria-label', 'Abrir menu')
       } 
   }




   btnMobile.addEventListener('click', toggleMenu);


   window.addEventListener("scroll", function () {
    headerEl.classList.toggle("sticky", window.scrollY > 150);
  });
}