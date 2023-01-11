

const modalbtn = document.querySelector('.modal-btn');
const closebtn= document.querySelector('.close-btn');
const overlayBtn= document.querySelector('.modal-overlay');

modalbtn.addEventListener('click',function(){
    overlayBtn.classList.add('open-modal');
});


closebtn.addEventListener('click',function(){
    overlayBtn.classList.remove('open-modal')
})