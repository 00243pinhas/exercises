

const hexnumber=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn=document.getElementById('btn');

const color=document.querySelector('.color');

btn.addEventListener('click', function(){
    
    var hexcolor='#';

    console.log(hexcolor);

    var randNume=randNum();

    for (var i=0; i<6; i++){
        hexcolor +=hexnumber[randNume];
       // console.log(hexcolor)
    }

    color.textContent=hexcolor;
    document.body.style.backgroundColor=hexcolor;
});


function randNum(){
    
    numb=Math.floor(Math.random()*hexnumber.length);

    return numb;
}

