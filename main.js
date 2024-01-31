// CATTURO ICONA PUGNO NAVBAR
let pugnoIcon = document.querySelector('#pugnoIcon');

// CATTURO NAVBAR
let mainNavbar = document.querySelector('#mainNavbar')

// VARIABILE PER PUGNOICONA NAVBAR
pugnoIcon.addEventListener('click', ()=>{
    if (confirm == false) {

        pugnoIcon.style.transform = 'rotate(0deg)';
        confirm = true;

    }else {
        pugnoIcon.style.transform = 'rotate(180deg)';
        confirm = false;
    };

    
});

// EVENTO SU NAVBAR
window.addEventListener('scroll', ()=>{

    if(window > 0){
        
    mainNavbar.style.backgroundColor = 'var(--orangeCus)';

    }else{
        mainNavbar.style.backgroundColor = "var(--primary)";
    };

});