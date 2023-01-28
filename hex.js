const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-5.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];


//   const sectionDiv = document.querySelector('.section-center');

//   const filterBtn = document.querySelectorAll('.filter-btn');



//   filterBtn.forEach(function(item){
//     item.addEventListener('click',function(e){
//         const categories= e.currentTarget.dataset.id

//         const menuCategory=menu.filter(function(menuItem){
//            //  console.log(menuItem.category
           
//            if (menuItem===categories){
//             return menuItem
//            }
//         })


//         console.log(menuCategory)


//     })
//   })


// // f'ilter item 


// // filterBtn.forEach(function(btn){
// //     btn.addEventListener('click',function(e){
// //         const categori= e.currentTarget.dataset.id

// //         const mencategory=menu.filter(function(menuItem){
// //            // console.log(menuItem.category)

// //             if (menuItem.category===categori){

// //                 return menuItem
// //             }       
// //         });
// //         // console.log(mencategory);

// //         if (categori==='all'){
// //             displalyMenueItems(menu)
// //         }

// //         else{
// //             displalyMenueItems(mencategory)
// //         }
// //     })
// // })




const sectionDiv = document.querySelector('.section-center')

const contenaire = document. querySelector('.btn-container')

// when u just open the window the function should be running 
window.addEventListener('DOMContentLoaded', function(){
    displayMenuitems(menu)
    displayMenucbtns()

    
});

//console.log(filterBtn)
// here is the function to filter items u wanna show up on the window




function displayMenuitems(menuitems){
    
    let displayMenu=menuitems.map(function(item){
        //console.log(item)
        return `<article class="menu-item">
        <img src="${item.img}" alt="${item.title}" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
        </div>
      </article>`
    }).join('')
   
    //displayMenu=displayMenu.join('');
   // console.log(displayMenu)
    sectionDiv.innerHTML=displayMenu

}

function displayMenucbtns(){
    const category = menu.reduce(function(value,items){
        if (!value.includes(items.category)){
            value.push(items.category)
        }
        return value 
    },
    ['all'])

    //console.log(category)


    const categoriBtns= category.map(function(categoribtn){
        return `<button type="button" class="filter-btn" 
        data-id="${categoribtn}">${categoribtn}</button>`
    })
    .join('')

    contenaire.innerHTML=categoriBtns
    const filterBtn = contenaire.querySelectorAll('.filter-btn');
    //console.log(filterBtn );
    
    filterBtn.forEach(function(btn){
    
        btn.addEventListener('click',function(e){
        const categori= e.currentTarget.dataset.id;

        const menuCategory=menu.filter(function(menuitem){
            if(menuitem.category===categori){
                return menuitem
            }
        });
        if (categori==='all'){
            displayMenuitems(menu);
        }else{
            displayMenuitems(menuCategory)
        }
    })
})
}















