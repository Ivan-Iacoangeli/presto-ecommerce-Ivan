// CATTURO ICONA PUGNO NAVBAR
let pugnoIcon = document.querySelector('#pugnoIcon');

// CATTURO NAVBAR
let mainNavbar = document.querySelector('#mainNavbar')

// CATTURO INCREMENTO NUMERI


// VARIABILE PER PUGNO ICONA NAVBAR
pugnoIcon.addEventListener('click', ()=>{
    if (confirm == false) {

        pugnoIcon.style.transform = 'rotate(0deg)';
        confirm = true;

    }else {
        pugnoIcon.style.transform = 'rotate(180deg)';
        confirm = false;
    };

    
});
