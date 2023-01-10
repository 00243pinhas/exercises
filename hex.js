

const toggle = document.querySelector('.nav-toggle');

const links =document.querySelector('.links');


toggle.addEventListener('click', function(){
   //console.log('hey');

   //if (links.classList.contains('show-links')){
    // in the links class list we are removing the show-links class
//         links.classList.remove('show-links')
//    }else{

//     links.classList.add('show-links')
//    }

// in the shortest way we use the toggle methode 
// this one will do the operation 

links.classList.toggle('show-links')
})