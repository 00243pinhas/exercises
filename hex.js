

let count=0;

const value=document.querySelector('#value');

const btns=document.querySelectorAll('.btn');


btns.forEach(function(item){
    item.addEventListener('click',function(e){
        //e represent a single btn
        var style=e.currentTarget.classList;

        if (style.contains('decrease')){

            count--;
            value.textContent=count;
            value.style.color='red';

        }
        else if (style.contains('increase')){
            count++;

            if(count <= 5){
                value.textContent=count;
                value.style.color='red';
            } else{
                value.textContent=count;
                value.style.color='green';  
            }

        }
        else{
            count=0
            value.textContent=count
        }

    })
})