
const openbtn= document.querySelector(".modal-btn")

const Closbtn=document.querySelector('.close-btn');

const ModeOverlay=document.querySelector('.modal-overlay');



openbtn.addEventListener('click',function(){
    ModeOverlay.classList.add('open-modal')
})

Closbtn.addEventListener('click',function(){
    ModeOverlay.classList.remove('open-modal')
})

