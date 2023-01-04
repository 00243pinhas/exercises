

// model={

//     bordsize:7,
//     numShips:3,
//     shipsSunk:0,
//     shipLength:3,

//     ships:[{ locations: ["06", "16", "26"], hits: ["", "", ""]},
//            {locations: ["24", "34", "44"], hits: ["", "", ""]},
//             {locations: ["10", "11", "12"], hits: ["", "", ""] }],


//     isSunk:function(){
//         var addition= this.bordsize + this.numShips;
//         console.log(addition);
//     },

//     fire : function(guess){
//         for (var i=0; i< this.numShips; i++){
//             var ship = this.ships[i];
//             var localisation = ship.locations;

//             var index= localisation.indexOf(guess);
//             console.log(index);

//             console.log(ship);
//             console.log(localisation);

//         }
//     }

// }

// function persGuess(guess){

//     var alphabet=['A','B','C','D'];

//     if (guess === null || guess.length !== 2){
//         alert('wooop')
//     } else{
//         var firstA=guess.CharAt(0);
       
//         console.log(firstA);

//         var row= alphabet.indexOf(firstA);

//         console.log(row);

//         var column = guess.CharAt(1)

//         console.log(column);
//     }
// }

// var guess=('A0');

// var result= guess.toString()

// persGuess(result)

// //guess=['bmw','Mercedes','Umer','Mercedes Wagon'];

// //model.isSunk();
// //model.fire(guess);



const colors=['yellow','red','pink','orange'];

const btn=document.getElementById('btn');

const color=document.querySelector('.color');

 btn.addEventListener('click', function(){

    //console.log(document.body);

     // get random number btwn 0-3
     randomNumber=getRandomber();

     document.body.style.background=colors[randomNumber];
     color.textContent=colors[randomNumber];
 });

 function getRandomber(){
   var math=Math.floor(Math.random()*colors.length);
   return math;
 };































