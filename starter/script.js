'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnCloseModal)


function openModel(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}


for(let i = 0; i<btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModel);
    

function closModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closModal);
 
overlay.addEventListener('click', closModal);


document.addEventListener('keydown', function(e){
    console.log(e.key);

if(e.key === 'Escape'){
    if(!modal.classList.contains('hidden')){
        closModal();
    }
    
}
});
  

