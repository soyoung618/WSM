//show/hide menu:toggle menu
const toggleMenu = function (toggleId,navListId){
//html->js
const toggle =document.getElementById(toggleId); 
const navList =document.getElementById(navListId);

const clickHandler = function (){
    //show/hide menu : .show-menu
    navList.classList.toggle('show-menu');
}

 if(toggle && navList){
    //toggle click
   toggle.addEventListener('click', clickHandler);
 }
}
toggleMenu("nav-toggle","nav-list");

//const say =() => console.log("Hello world");

// const say =() =>{
//     console.log("Hello world");
// };

// const say = function (){
//     console.log("Hello world");
//};

// function say(){
//     console.log("Hello world");
// }
//say();