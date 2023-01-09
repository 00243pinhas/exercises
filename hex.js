var reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
  
  
  // first objext
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
  
  // second object
  
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
  
  
    // third object
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  
const img=document.getElementById('person-img');

const author=document.getElementById('author');

const job = document.getElementById('job');

const text = document.getElementById('info');


const prevBtn=document.querySelector('.prev-btn');

const nextBtn = document.querySelector('.next-btn');

const randomBtn= document.querySelector('.random-btn');


// here is our counter variable


let countPersons=1;




//windows.addEventlisterner is used cuz we need to see the even right  away we open the windows

window.addEventListener('DOMContentLoaded',function(){
    
    // revievs is ur object
    //[counterPesons]=> this is indicating the element in the revievs object 
    automatics(countPersons);
});

  
function automatics(persons){
    
    const item= reviews[persons];
    
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    text.textContent=item.text;
};

prevBtn.addEventListener('click',function(){

    if (curentItem>0){
        curentItem=reviews.length-1
        automatics(countPersons);
    }else{
        countPersons--;
        automatics(countPersons);

    }
});


nextBtn.addEventListener('click',function(){
    
    if (countPersons>countPersons.length-1){
        
        curentItem=0 
        automatics(curentItem)
    }else{
        countPersons++;
        automatics(countPersons)
    }
});


randomBtn.addEventListener('click',function(){
    shoose=randomChoice()
    automatics(shoose);
});


function randomChoice(){

    choice=Math.floor(Math.random()*reviews.length-1);
    return choice;
}

