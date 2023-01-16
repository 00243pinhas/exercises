


const AllBtn = document.querySelectorAll('.question-btn');

AllBtn.forEach(function(item){
    item.addEventListener('click',function(e){
        const Btn = e.currentTarget.parentElement.parentElement;

        Btn.classList.toggle('show-text')
    })
})