import {header, navElements,footer} from './initializeApp.js';
import { createHome } from './home.js';
import {createMenuHead,menuItems}  from './menu.js';
import { contact } from './contact.js';


header();
navElements();
eventListeners();
createHome();
footer();

//fadd event listeners to nav items
function eventListeners(){
    //select home nav
const homeNav = document.querySelector('.home');
homeNav.classList.add("active");

//select navs
const navElements = document.querySelectorAll('.nav');

//loop through them and add event listener
for(let i = 0;i<navElements.length;i++){
navElements[i].addEventListener("click",function(e){
  //  console.log(e.target);
    const targetNav = e.target;

if(targetNav.classList.contains("home")){
   const menuNav = document.querySelector('.menu');
   const contactNav = document.querySelector('.contact');

   menuNav.classList.remove('active');
   contactNav.classList.remove('active');
   targetNav.classList.add('active');

    const container = document.querySelector('.container');
    container.innerHTML = '';

    createHome();

} else if(targetNav.classList.contains("menu")){

    const homeNav = document.querySelector('.home');
    const contactNav = document.querySelector('.contact');

    homeNav.classList.remove('active');
    contactNav.classList.remove('active');

    targetNav.classList.add("active");

     //console.log('menu clicked');
     const container = document.querySelector('.container');
      container.innerHTML = '';
   //console.log(container);

    createMenuHead();
    menuItems();
} else {
    const homeNav = document.querySelector('.home');
    const menuNav = document.querySelector('.menu');
    const contactNav = document.querySelector('.contact');

    homeNav.classList.remove('active');
    menuNav.classList.remove('active');

    contactNav.classList.add('active')
    //console.log('contact clicked');

    const container = document.querySelector('.container');
    container.innerHTML = '';

    contact();
}
})
}

}
   