// const botao = document.getElementById('botao');
// const menu = document.getElementById('menu');

// botao.addEventListener('click', function(){
//     if(!menu.classList.contains('active')){
//         menu.classList.add('active');

//         let altura = menu.clientHeight + 'px';
//         menu.style.height = 0;

//         setTimeout(function(){
//             menu.style.height = altura;
//         }, 0);
//     }
//     else{
//         menu.style.height = 0;

//         menu.addEventListener('transitionend', function encolher(){
//             menu.classList.remove('active');
//             menu.style.height = 'auto';

//             menu.removeEventListener('transitionend', encolher);
//         });
//     }
// });