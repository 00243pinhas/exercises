
const value=document.querySelector('#value');

const btn1=document.querySelectorAll(".btn");

let count = 0;


btn1.forEach(function(item){
  // The forEach() method calls a function for each element in an array.
  // itmes method is actually one btn
  item.addEventListener('click', function(e){
    // e is showing u where is the is the curent click 
    const style=(e.currentTarget.classList);

    if(style.contains('decrease')){
      count--;
      value.textContent=count;
    }
    else if (style.contains('increase')){
      count++;
      value.textContent=count;
    }

    else{
      count=0;
      value.textContent=count;
    }

    if (count>0){
      value.style.color='Green';
    }
    if (count<0){
      value.style.color='red';
    }

  });
});



























