export default function scriptsHome (){
    // 'colocar scripts das respectivas paginas dentro de -scriptsPaginas-  e criar o arquivo exemplo: home.js - contato.js  --- e importar no main e executar em sua respectiva pagina '

    const firstProgressBar = document.querySelectorAll('.step-1 #progressbar li');
    const secondProgressBar = document.querySelectorAll('.step-2 #progressbar li');
    const firstStep = document.querySelector('.step-1 .btn-primary');
  
    
    firstStep.addEventListener('click', () => {
        console.log(secondProgressBar)
        secondProgressBar.forEach( item => {
            item.classList.add('active');
            console.log(item)
            // setTimeout(() => {
            //     item.classlist.add('active');
            // }, 1000)
        }) 
    })
    
}