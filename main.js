// CATTURO ICONA PUGNO NAVBAR
let pugnoIcon = document.querySelector('#pugnoIcon');

// CATTURO NAVBAR
let mainNavbar = document.querySelector('#mainNavbar')

// CATTURO INCREMENTO NUMERI

// CATTURO L'H2 "UN PO DI NUMERI"
let h2Obs = document.querySelector('#h2Obs')

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

// EVENTO SU NAVBAR
// window.addEventListener('scroll', ()=>{

//     if(window > 0){
        
//     mainNavbar.style.backgroundColor = 'var(--orangeCus)';

//     }else{
//         mainNavbar.style.backgroundColor = "var(--primary)";
//     };

// });

// CHIAMATA ASICRONA SetInterval
function createInterval(finalNumber,incrementNumberSpan){

    // contatore
    let counter = 0;
    
    let interval = setInterval(()=>{
        
        if(counter < finalNumber){

            counter++
            incrementNumberSpan.innerHTML = counter;

        }else{

            clearInterval(interval);
        };
    },1);
};



// INTERSECTION OBSERVER
let intersetionConfirm = true;
let observer = new IntersectionObserver(

    (entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting && intersetionConfirm){
                createInterval(1000, primoSpan);
                createInterval(2000, secondoSpan);
                createInterval(1500, terzoSpan);

                intersetionConfirm = false;
            }

            
        });
    }
);

observer.observe(h2Obs);

// SEZIONE MOUSE ENTER CAMION
let trucks = document.querySelectorAll('.fa-truck-fast');
let columns = document.querySelectorAll('.col-custom');


columns.forEach((colonna, i)=>{

    let columnsConfirm = false;

    colonna.addEventListener('mouseenter', ()=>{

        if(columnsConfirm == false){
            trucks[i].classList.remove('text-acc');
            trucks[i].classList.add('text-secondary');
        }else {
            trucks[i].classList.remove('text-orangeCus'); 
            trucks[i].classList.add('text-myBlack'); 
        }
        
    });

    colonna.addEventListener('mouseleave',()=>{

        if(columnsConfirm == false){
            trucks[i].classList.remove('text-secondary');
            trucks[i].classList.add('text-orangeCus'); 
            columnsConfirm = true;
        }else {
            trucks[i].classList.remove('text-myBlack'); 
            trucks[i].classList.add('text-acc'); 
            columnsConfirm = false;
        }
        
    });
});