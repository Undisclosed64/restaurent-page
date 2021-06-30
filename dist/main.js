/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });

//create contact section
function contact(){
    //select content
const content = document.querySelector('#content');
//select container 
const container = document.querySelector('.container');
   //create section
    const section  = document.createElement("section");
    section.classList.add("sectionContact");

     //create header
     const contactHeader = document.createElement("h2");
     contactHeader.innerText = "Our Contact";
     contactHeader.classList.add('homeHeader',"contactHeader");
     section.appendChild(contactHeader);

    //create contact div    
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");

    //create call icon
    const callIcon = document.createElement("div");
    callIcon.innerHTML = '<i class="fas fa-phone-alt"></i>';
    callIcon.classList.add("icon");

    //create call div
    const callDiv = document.createElement("div");
    callDiv.textContent = "91-209013";

    callDiv.classList.add("contactElements");
    callDiv.appendChild(callIcon);
    contactDiv.appendChild(callDiv);

     //create location icon
     const locationIcon = document.createElement("div");
     locationIcon.innerHTML = '<i class="fas fa-map-marker-alt"></i>';
     locationIcon.classList.add("icon");

    //create location div
    const locationDiv = document.createElement("div");
    locationDiv.textContent = "LA,Street 5";
    locationDiv.classList.add("contactElements")
    locationDiv.appendChild(locationIcon);
    contactDiv.appendChild(locationDiv);

     //create day icon
     const dayIcon = document.createElement("div");
     dayIcon.innerHTML = '<i class="far fa-calendar-alt"></i>';
     dayIcon.classList.add("icon");
    //create day
    const day = document.createElement("div");
    day.innerText = 'Mon - Fri';
    day.classList.add("contactElements");
    day.appendChild(dayIcon);

    contactDiv.appendChild(day);

     //create hours icon
     const hoursIcon = document.createElement("div");
     hoursIcon.innerHTML = '<i class="fas fa-clock"></i>';
     hoursIcon.classList.add("icon");

    //create hours 
    const hours = document.createElement("div");
    hours.innerText = '8am - 9pm';
    hours.classList.add("contactElements");
    hours.appendChild(hoursIcon);
    contactDiv.appendChild(hours);

     //create mail icon
     const mailIcon = document.createElement("div");
     mailIcon.innerHTML = '<i class="fas fa-envelope"></i>';
     mailIcon.classList.add("icon","mailIcon");
     
   //create mail div
   const mailDiv = document.createElement("div");
   mailDiv.textContent = "spanitho@gmail.com";
   mailDiv.classList.add("contactElements","mail")
   mailDiv.appendChild(mailIcon);
   contactDiv.appendChild(mailDiv);

    section.appendChild(contactDiv);
    container.appendChild(section);
    content.appendChild(container);
    //console.log('contact module exported sucessfully');
};


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });

//create home
 function createHome(){
    //select content div
    const div_content = document.querySelector('#content');
    //select container div
    const container = document.querySelector('.container');
    container.classList.add("container")

    //create section element
    const section = document.createElement("section");
    section.classList.add("sectionHome");

    //create header of home section
    const homeHeader = document.createElement("h2");
    homeHeader.innerText = "Spanitho";
    homeHeader.classList.add('homeHeader');

    //create brand line of home header
    const p = document.createElement("p");
    p.innerText = 'The Most loved food heaven in L.A';
    p.classList.add('brandLine');

    //append p to homeHeader
    homeHeader.appendChild(p);
    //append homeHeader to section
    section.appendChild(homeHeader);

    //create paragraph element for details
    const homeDetails = document.createElement("p");
    homeDetails.innerText = "We have been awarded with the People's Choice Award in both 2020 and 2021.We pledge to treat you with the most deliciously exotic food you'll ever have.Every working hour and every working minute,we breaath in this pledge.Right from that gorgeous looking pasta at top, to the last item of our menu,everything is made with the utmost care and love.We believe that great quality and awesome deliciousness can go hand in hand and our team is just dedicated that.Visit us to feel how great food tastes like.";
    homeDetails.classList.add("homeDetails");

    //append homedetails to section
    section.appendChild(homeDetails);

    //append section to container
    container.appendChild(section);
    //append container to content of the body
    div_content.appendChild(container);
    //console.log(container);
   // console.log(section);
   // console.log('home module exported successfully');
}


/***/ }),

/***/ "./src/initializeApp.js":
/*!******************************!*\
  !*** ./src/initializeApp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "navElements": () => (/* binding */ navElements),
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });


//make header and brand element 
function header(){
    //select div content
    const divContent = document.querySelector('#content');
    
    //create header div
    const divHeader = document.createElement('div');
    //console.log(divHeader);
    
    //create brand div and append it to header
    const divBrand = document.createElement("div");
    divBrand.innerText = "Spanitho";
    divBrand.classList.add("brand");
   divHeader.appendChild(divBrand);
 
    //add header style and append header to div content
    divHeader.classList.add('header');
  //  console.log(divHeader);
    divContent.appendChild(divHeader);
}
//make nav elements
function navElements(){
    ////select header 
   const divHeader = document.querySelector('.header');
    //make ul
    const ul_element = document.createElement("ul");
    ul_element.classList.add("ul");
    //make home element
    const home = document.createElement("li");
    home.textContent = "Home"
    home.classList.add("nav","home");
    ul_element.appendChild(home);

    //make menu element
    const menu = document.createElement("li");
    menu.innerText = "Menu"
    menu.classList.add("nav","menu");
    ul_element.appendChild(menu);

    //make contact element
    const contact = document.createElement("li");
    contact.innerText = "Contact"
    contact.classList.add("nav","contact");
    ul_element.appendChild(contact);

    //append ul to header
    divHeader.appendChild(ul_element);
    console.log('initialize App module exported successfully');
}
//create footer
function footer(){
    //select body
    const body = document.querySelector('body');

     //create footer div
     const divFooter = document.createElement('footer');
     divFooter.classList.add("footer");

      //create footer content and append it to footer
      const footerContent = document.createElement("div");
      footerContent.innerText = "Developed with ❤️ by Undisclosed";
      footerContent.classList.add("footerContent");

      //append footer content to footer
      divFooter.appendChild(footerContent);
      body.appendChild(divFooter);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuHead": () => (/* binding */ createMenuHead),
/* harmony export */   "menuItems": () => (/* binding */ menuItems)
/* harmony export */ });



  //select div content
  const div_content = document.querySelector('#content');
  //select container
  const container = document.querySelector('.container');
 // container.classList.add("container")

//create menu header 
function createMenuHead(){

//create section
const section = document.createElement('section');
section.classList.add("sectionMenu");
//console.log(section);

//select h2 of header
const menuHead = document.createElement('h2');
menuHead.innerText = "The Menu";
menuHead.classList.add("homeHeader","menuHeading");

//append menuHeader to section
section.appendChild(menuHead);

//append section to container
container.appendChild(section);

//append container to divContent
div_content.appendChild(container);
}

//create menu item
function menuItems(){
    //select section
    const section = document.querySelector('.sectionMenu');

//create parent div for menu items
const menuItems = document.createElement("div");
menuItems.classList.add("menuItems")

//create item type div
const mainCourse_div = document.createElement('div');
mainCourse_div.innerText = "Main Course";
mainCourse_div.classList.add('itemType_div');

//append main course to menu items
menuItems.appendChild(mainCourse_div);

//create first menu item
const menuItem_1 = document.createElement("div");
menuItem_1.classList.add("item");
 
    //create item img
    const firstItem_img = document.createElement("img");
    firstItem_img.src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
    firstItem_img.classList.add("img");
 
    //create first item img to menu item1
    menuItem_1.appendChild(firstItem_img);

//parent div for item name and price
const itemContent = document.createElement("div");
itemContent.classList.add("itemContent");

    //create item name
    const firstItem_name = document.createElement('div');
    firstItem_name.innerText = "Special Pasta";
    firstItem_name.classList.add("name");
    itemContent.appendChild(firstItem_name);
    menuItem_1.appendChild(firstItem_name);

    //create item price
    const firstItem_price = document.createElement('div');
    firstItem_price.innerText = "$10";
    firstItem_price.classList.add("price");
    itemContent.appendChild(firstItem_price);
    menuItem_1.appendChild(firstItem_price);
//console.log(menuItem_1);
  menuItem_1.appendChild(itemContent);
    menuItems.appendChild(menuItem_1);

    //create second menu item
const menuItem_2 = document.createElement("div");
menuItem_2.classList.add("item");
 
    //create item img
    const secondItem_img = document.createElement("img");
    secondItem_img.src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60";
    secondItem_img.classList.add("img");

    menuItem_2.appendChild(secondItem_img);

    //create item name
    const secondItem_name = document.createElement('div');
    secondItem_name.innerText = "Cheesy Pizza";
    secondItem_name.classList.add("name");

    menuItem_2.appendChild(secondItem_name);

    //create item price
    const secondItem_price = document.createElement('div');
    secondItem_price.innerText = "$10";
    secondItem_price.classList.add("price");
    menuItem_2.appendChild(secondItem_price);
    menuItems.appendChild(menuItem_2);

//create third menu item
const menuItem_3 = document.createElement("div");
menuItem_3.classList.add("item");
 
    //create item img
    const thirdItem_img = document.createElement("img");
    thirdItem_img.src="https://images.unsplash.com/photo-1572862905000-c5b6244027a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80";
    thirdItem_img.classList.add("img");

    menuItem_3.appendChild(thirdItem_img);

    //create item name
    const thirdItem_name = document.createElement('div');
    thirdItem_name.innerText = "Salmon Fillet";
    thirdItem_name.classList.add("name");

    menuItem_3.appendChild(thirdItem_name);

    //create item price
    const thirdItem_price = document.createElement('div');
    thirdItem_price.innerText = "$10";
    thirdItem_price.classList.add("price");
    menuItem_3.appendChild(thirdItem_price);
    menuItems.appendChild(menuItem_3);

    //create fourth menu item
const menuItem_4 = document.createElement("div");
menuItem_4.classList.add("item");
 
    //create item img
    const fourthItem_img = document.createElement("img");
    fourthItem_img.src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1215&q=80";
    fourthItem_img.classList.add("img");

    menuItem_4.appendChild(fourthItem_img);

    //create item name
    const fourthItem_name = document.createElement('div');
    fourthItem_name.innerText = "Chicken Salad";
    fourthItem_name.classList.add("name");
    menuItem_4.appendChild(fourthItem_name);

    //create item price
    const fourthItem_price = document.createElement('div');
    fourthItem_price.innerText = "$10";
    fourthItem_price.classList.add("price");
    menuItem_4.appendChild(fourthItem_price);

    menuItems.appendChild(menuItem_4);
    //create item type div
const sideCourse_div = document.createElement('div');
sideCourse_div.innerText = "Side Dishes";
sideCourse_div.classList.add('itemType_div');

menuItems.appendChild(sideCourse_div);

//create fifth menu item
const menuItem_5 = document.createElement("div");
menuItem_5.classList.add("item");
 
    //create item img
    const fifthItem_img = document.createElement("img");
    fifthItem_img.src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1850&q=80";
    fifthItem_img.classList.add("img");

    menuItem_5.appendChild(fifthItem_img);

    //create item name
    const fifthItem_name = document.createElement('div');
    fifthItem_name.innerText = "Pancake";
    fifthItem_name.classList.add("name");
    menuItem_5.appendChild(fifthItem_name);

    //create item price
    const fifthItem_price = document.createElement('div');
    fifthItem_price.innerText = "$10";
    fifthItem_price.classList.add("price");
    menuItem_5.appendChild(fifthItem_price);
    menuItems.appendChild(menuItem_5);

    //create sixth menu item
const menuItem_6 = document.createElement("div");
menuItem_6.classList.add("item");
 
    //create item img
    const sixthItem_img = document.createElement("img");
    sixthItem_img.src="https://images.unsplash.com/photo-1479388891567-3c137b61de97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
    sixthItem_img.classList.add("img");

    menuItem_6.appendChild(sixthItem_img);

    //create item name
    const sixthItem_name = document.createElement('div');
    sixthItem_name.innerText = "Fries & Burger";
    sixthItem_name.classList.add("name");
    menuItem_6.appendChild(sixthItem_name);

    //create item price
    const sixthItem_price = document.createElement('div');
    sixthItem_price.innerText = "$10";
    sixthItem_price.classList.add("price");
    menuItem_6.appendChild(sixthItem_price);
    menuItems.appendChild(menuItem_6);

      //create item type div
const desertCourse_div = document.createElement('div');
desertCourse_div.innerText = "Deserts";
desertCourse_div.classList.add('itemType_div');

menuItems.appendChild(desertCourse_div);

     //create seventh menu item
const menuItem_7 = document.createElement("div");
menuItem_7.classList.add("item");
 
    //create item img
    const seventhItem_img = document.createElement("img");
    seventhItem_img.src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    seventhItem_img.classList.add("img");

    menuItem_7.appendChild(seventhItem_img);

    //create item name
    const seventhItem_name = document.createElement('div');
    seventhItem_name.innerText = "Vanilla Cake";
    seventhItem_name.classList.add("name");
    menuItem_7.appendChild(seventhItem_name);

    //create item price
    const seventhItem_price = document.createElement('div');
    seventhItem_price.innerText = "$10";
    seventhItem_price.classList.add("price");
    menuItem_7.appendChild(seventhItem_price);
    menuItems.appendChild(menuItem_7);

     //create eigth menu item
const menuItem_8 = document.createElement("div");
menuItem_8.classList.add("item");
 
    //create item img
    const eigthItem_img = document.createElement("img");
    eigthItem_img.src="https://images.unsplash.com/photo-1588195539297-f0b4efdb5472?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=956&q=80";
    eigthItem_img.classList.add("img");

    menuItem_8.appendChild(eigthItem_img);

    //create item name
    const eigthItem_name = document.createElement('div');
    eigthItem_name.innerText = "Special Icecream";
    eigthItem_name.classList.add("name");
    menuItem_8.appendChild(eigthItem_name);

    //create item price
    const eigthItem_price = document.createElement('div');
    eigthItem_price.innerText = "$10";
    eigthItem_price.classList.add("price");
    menuItem_8.appendChild(eigthItem_price);
    menuItems.appendChild(menuItem_8);

section.appendChild(menuItems);
container.appendChild(section);
div_content.appendChild(container);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initializeApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initializeApp.js */ "./src/initializeApp.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






(0,_initializeApp_js__WEBPACK_IMPORTED_MODULE_0__.header)();
(0,_initializeApp_js__WEBPACK_IMPORTED_MODULE_0__.navElements)();
eventListeners();
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHome)();
(0,_initializeApp_js__WEBPACK_IMPORTED_MODULE_0__.footer)();

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

    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHome)();

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

    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuHead)();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuItems)();
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

    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.contact)();
}
})
}

}
   
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyZW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyZW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyZW50LXBhZ2UvLi9zcmMvaW5pdGlhbGl6ZUFwcC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyZW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyZW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmVudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyZW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyZW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyZW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQSxDQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNDbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzdRQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ044RDtBQUN2QjtBQUNhO0FBQ2I7OztBQUd2Qyx5REFBTTtBQUNOLDhEQUFXO0FBQ1g7QUFDQSxvREFBVTtBQUNWLHlEQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGNBQWMscUJBQXFCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxvREFBVTs7QUFFZCxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHdEQUFjO0FBQ2xCLElBQUksbURBQVM7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksb0RBQU87QUFDWDtBQUNBLENBQUM7QUFDRDs7QUFFQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vY3JlYXRlIGNvbnRhY3Qgc2VjdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gY29udGFjdCgpe1xyXG4gICAgLy9zZWxlY3QgY29udGVudFxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuLy9zZWxlY3QgY29udGFpbmVyIFxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgIC8vY3JlYXRlIHNlY3Rpb25cclxuICAgIGNvbnN0IHNlY3Rpb24gID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uQ29udGFjdFwiKTtcclxuXHJcbiAgICAgLy9jcmVhdGUgaGVhZGVyXHJcbiAgICAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICBjb250YWN0SGVhZGVyLmlubmVyVGV4dCA9IFwiT3VyIENvbnRhY3RcIjtcclxuICAgICBjb250YWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvbWVIZWFkZXInLFwiY29udGFjdEhlYWRlclwiKTtcclxuICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xyXG5cclxuICAgIC8vY3JlYXRlIGNvbnRhY3QgZGl2ICAgIFxyXG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG5cclxuICAgIC8vY3JlYXRlIGNhbGwgaWNvblxyXG4gICAgY29uc3QgY2FsbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FsbEljb24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXBob25lLWFsdFwiPjwvaT4nO1xyXG4gICAgY2FsbEljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XHJcblxyXG4gICAgLy9jcmVhdGUgY2FsbCBkaXZcclxuICAgIGNvbnN0IGNhbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FsbERpdi50ZXh0Q29udGVudCA9IFwiOTEtMjA5MDEzXCI7XHJcblxyXG4gICAgY2FsbERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEVsZW1lbnRzXCIpO1xyXG4gICAgY2FsbERpdi5hcHBlbmRDaGlsZChjYWxsSWNvbik7XHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNhbGxEaXYpO1xyXG5cclxuICAgICAvL2NyZWF0ZSBsb2NhdGlvbiBpY29uXHJcbiAgICAgY29uc3QgbG9jYXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICBsb2NhdGlvbkljb24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLW1hcC1tYXJrZXItYWx0XCI+PC9pPic7XHJcbiAgICAgbG9jYXRpb25JY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xyXG5cclxuICAgIC8vY3JlYXRlIGxvY2F0aW9uIGRpdlxyXG4gICAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9jYXRpb25EaXYudGV4dENvbnRlbnQgPSBcIkxBLFN0cmVldCA1XCI7XHJcbiAgICBsb2NhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEVsZW1lbnRzXCIpXHJcbiAgICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkljb24pO1xyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkRpdik7XHJcblxyXG4gICAgIC8vY3JlYXRlIGRheSBpY29uXHJcbiAgICAgY29uc3QgZGF5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgZGF5SWNvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXIgZmEtY2FsZW5kYXItYWx0XCI+PC9pPic7XHJcbiAgICAgZGF5SWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcclxuICAgIC8vY3JlYXRlIGRheVxyXG4gICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRheS5pbm5lclRleHQgPSAnTW9uIC0gRnJpJztcclxuICAgIGRheS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEVsZW1lbnRzXCIpO1xyXG4gICAgZGF5LmFwcGVuZENoaWxkKGRheUljb24pO1xyXG5cclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoZGF5KTtcclxuXHJcbiAgICAgLy9jcmVhdGUgaG91cnMgaWNvblxyXG4gICAgIGNvbnN0IGhvdXJzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgaG91cnNJY29uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1jbG9ja1wiPjwvaT4nO1xyXG4gICAgIGhvdXJzSWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBob3VycyBcclxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvdXJzLmlubmVyVGV4dCA9ICc4YW0gLSA5cG0nO1xyXG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RFbGVtZW50c1wiKTtcclxuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzSWNvbik7XHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGhvdXJzKTtcclxuXHJcbiAgICAgLy9jcmVhdGUgbWFpbCBpY29uXHJcbiAgICAgY29uc3QgbWFpbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgIG1haWxJY29uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1lbnZlbG9wZVwiPjwvaT4nO1xyXG4gICAgIG1haWxJY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsXCJtYWlsSWNvblwiKTtcclxuICAgICBcclxuICAgLy9jcmVhdGUgbWFpbCBkaXZcclxuICAgY29uc3QgbWFpbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgIG1haWxEaXYudGV4dENvbnRlbnQgPSBcInNwYW5pdGhvQGdtYWlsLmNvbVwiO1xyXG4gICBtYWlsRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0RWxlbWVudHNcIixcIm1haWxcIilcclxuICAgbWFpbERpdi5hcHBlbmRDaGlsZChtYWlsSWNvbik7XHJcbiAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQobWFpbERpdik7XHJcblxyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIC8vY29uc29sZS5sb2coJ2NvbnRhY3QgbW9kdWxlIGV4cG9ydGVkIHN1Y2Vzc2Z1bGx5Jyk7XHJcbn07XHJcbiIsIlxyXG4vL2NyZWF0ZSBob21lXHJcbiBleHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xyXG4gICAgLy9zZWxlY3QgY29udGVudCBkaXZcclxuICAgIGNvbnN0IGRpdl9jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIC8vc2VsZWN0IGNvbnRhaW5lciBkaXZcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpXHJcblxyXG4gICAgLy9jcmVhdGUgc2VjdGlvbiBlbGVtZW50XHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uSG9tZVwiKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBoZWFkZXIgb2YgaG9tZSBzZWN0aW9uXHJcbiAgICBjb25zdCBob21lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgaG9tZUhlYWRlci5pbm5lclRleHQgPSBcIlNwYW5pdGhvXCI7XHJcbiAgICBob21lSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvbWVIZWFkZXInKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBicmFuZCBsaW5lIG9mIGhvbWUgaGVhZGVyXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLmlubmVyVGV4dCA9ICdUaGUgTW9zdCBsb3ZlZCBmb29kIGhlYXZlbiBpbiBMLkEnO1xyXG4gICAgcC5jbGFzc0xpc3QuYWRkKCdicmFuZExpbmUnKTtcclxuXHJcbiAgICAvL2FwcGVuZCBwIHRvIGhvbWVIZWFkZXJcclxuICAgIGhvbWVIZWFkZXIuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAvL2FwcGVuZCBob21lSGVhZGVyIHRvIHNlY3Rpb25cclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaG9tZUhlYWRlcik7XHJcblxyXG4gICAgLy9jcmVhdGUgcGFyYWdyYXBoIGVsZW1lbnQgZm9yIGRldGFpbHNcclxuICAgIGNvbnN0IGhvbWVEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBob21lRGV0YWlscy5pbm5lclRleHQgPSBcIldlIGhhdmUgYmVlbiBhd2FyZGVkIHdpdGggdGhlIFBlb3BsZSdzIENob2ljZSBBd2FyZCBpbiBib3RoIDIwMjAgYW5kIDIwMjEuV2UgcGxlZGdlIHRvIHRyZWF0IHlvdSB3aXRoIHRoZSBtb3N0IGRlbGljaW91c2x5IGV4b3RpYyBmb29kIHlvdSdsbCBldmVyIGhhdmUuRXZlcnkgd29ya2luZyBob3VyIGFuZCBldmVyeSB3b3JraW5nIG1pbnV0ZSx3ZSBicmVhYXRoIGluIHRoaXMgcGxlZGdlLlJpZ2h0IGZyb20gdGhhdCBnb3JnZW91cyBsb29raW5nIHBhc3RhIGF0IHRvcCwgdG8gdGhlIGxhc3QgaXRlbSBvZiBvdXIgbWVudSxldmVyeXRoaW5nIGlzIG1hZGUgd2l0aCB0aGUgdXRtb3N0IGNhcmUgYW5kIGxvdmUuV2UgYmVsaWV2ZSB0aGF0IGdyZWF0IHF1YWxpdHkgYW5kIGF3ZXNvbWUgZGVsaWNpb3VzbmVzcyBjYW4gZ28gaGFuZCBpbiBoYW5kIGFuZCBvdXIgdGVhbSBpcyBqdXN0IGRlZGljYXRlZCB0aGF0LlZpc2l0IHVzIHRvIGZlZWwgaG93IGdyZWF0IGZvb2QgdGFzdGVzIGxpa2UuXCI7XHJcbiAgICBob21lRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiaG9tZURldGFpbHNcIik7XHJcblxyXG4gICAgLy9hcHBlbmQgaG9tZWRldGFpbHMgdG8gc2VjdGlvblxyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChob21lRGV0YWlscyk7XHJcblxyXG4gICAgLy9hcHBlbmQgc2VjdGlvbiB0byBjb250YWluZXJcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxuICAgIC8vYXBwZW5kIGNvbnRhaW5lciB0byBjb250ZW50IG9mIHRoZSBib2R5XHJcbiAgICBkaXZfY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhjb250YWluZXIpO1xyXG4gICAvLyBjb25zb2xlLmxvZyhzZWN0aW9uKTtcclxuICAgLy8gY29uc29sZS5sb2coJ2hvbWUgbW9kdWxlIGV4cG9ydGVkIHN1Y2Nlc3NmdWxseScpO1xyXG59XHJcbiIsImV4cG9ydCB7aGVhZGVyLG5hdkVsZW1lbnRzLGZvb3Rlcn07XHJcblxyXG4vL21ha2UgaGVhZGVyIGFuZCBicmFuZCBlbGVtZW50IFxyXG5mdW5jdGlvbiBoZWFkZXIoKXtcclxuICAgIC8vc2VsZWN0IGRpdiBjb250ZW50XHJcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgLy9jcmVhdGUgaGVhZGVyIGRpdlxyXG4gICAgY29uc3QgZGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGRpdkhlYWRlcik7XHJcbiAgICBcclxuICAgIC8vY3JlYXRlIGJyYW5kIGRpdiBhbmQgYXBwZW5kIGl0IHRvIGhlYWRlclxyXG4gICAgY29uc3QgZGl2QnJhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2QnJhbmQuaW5uZXJUZXh0ID0gXCJTcGFuaXRob1wiO1xyXG4gICAgZGl2QnJhbmQuY2xhc3NMaXN0LmFkZChcImJyYW5kXCIpO1xyXG4gICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoZGl2QnJhbmQpO1xyXG4gXHJcbiAgICAvL2FkZCBoZWFkZXIgc3R5bGUgYW5kIGFwcGVuZCBoZWFkZXIgdG8gZGl2IGNvbnRlbnRcclxuICAgIGRpdkhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuICAvLyAgY29uc29sZS5sb2coZGl2SGVhZGVyKTtcclxuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2SGVhZGVyKTtcclxufVxyXG4vL21ha2UgbmF2IGVsZW1lbnRzXHJcbmZ1bmN0aW9uIG5hdkVsZW1lbnRzKCl7XHJcbiAgICAvLy8vc2VsZWN0IGhlYWRlciBcclxuICAgY29uc3QgZGl2SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG4gICAgLy9tYWtlIHVsXHJcbiAgICBjb25zdCB1bF9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgdWxfZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidWxcIik7XHJcbiAgICAvL21ha2UgaG9tZSBlbGVtZW50XHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiXHJcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJuYXZcIixcImhvbWVcIik7XHJcbiAgICB1bF9lbGVtZW50LmFwcGVuZENoaWxkKGhvbWUpO1xyXG5cclxuICAgIC8vbWFrZSBtZW51IGVsZW1lbnRcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBtZW51LmlubmVyVGV4dCA9IFwiTWVudVwiXHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZcIixcIm1lbnVcIik7XHJcbiAgICB1bF9lbGVtZW50LmFwcGVuZENoaWxkKG1lbnUpO1xyXG5cclxuICAgIC8vbWFrZSBjb250YWN0IGVsZW1lbnRcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb250YWN0LmlubmVyVGV4dCA9IFwiQ29udGFjdFwiXHJcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJuYXZcIixcImNvbnRhY3RcIik7XHJcbiAgICB1bF9lbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG5cclxuICAgIC8vYXBwZW5kIHVsIHRvIGhlYWRlclxyXG4gICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKHVsX2VsZW1lbnQpO1xyXG4gICAgY29uc29sZS5sb2coJ2luaXRpYWxpemUgQXBwIG1vZHVsZSBleHBvcnRlZCBzdWNjZXNzZnVsbHknKTtcclxufVxyXG4vL2NyZWF0ZSBmb290ZXJcclxuZnVuY3Rpb24gZm9vdGVyKCl7XHJcbiAgICAvL3NlbGVjdCBib2R5XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuICAgICAvL2NyZWF0ZSBmb290ZXIgZGl2XHJcbiAgICAgY29uc3QgZGl2Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICAgZGl2Rm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XHJcblxyXG4gICAgICAvL2NyZWF0ZSBmb290ZXIgY29udGVudCBhbmQgYXBwZW5kIGl0IHRvIGZvb3RlclxyXG4gICAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZm9vdGVyQ29udGVudC5pbm5lclRleHQgPSBcIkRldmVsb3BlZCB3aXRoIOKdpO+4jyBieSBVbmRpc2Nsb3NlZFwiO1xyXG4gICAgICBmb290ZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJmb290ZXJDb250ZW50XCIpO1xyXG5cclxuICAgICAgLy9hcHBlbmQgZm9vdGVyIGNvbnRlbnQgdG8gZm9vdGVyXHJcbiAgICAgIGRpdkZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDb250ZW50KTtcclxuICAgICAgYm9keS5hcHBlbmRDaGlsZChkaXZGb290ZXIpO1xyXG59IiwiXHJcbmV4cG9ydCB7Y3JlYXRlTWVudUhlYWQsbWVudUl0ZW1zfTtcclxuXHJcbiAgLy9zZWxlY3QgZGl2IGNvbnRlbnRcclxuICBjb25zdCBkaXZfY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgLy9zZWxlY3QgY29udGFpbmVyXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gLy8gY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIilcclxuXHJcbi8vY3JlYXRlIG1lbnUgaGVhZGVyIFxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SGVhZCgpe1xyXG5cclxuLy9jcmVhdGUgc2VjdGlvblxyXG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5zZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uTWVudVwiKTtcclxuLy9jb25zb2xlLmxvZyhzZWN0aW9uKTtcclxuXHJcbi8vc2VsZWN0IGgyIG9mIGhlYWRlclxyXG5jb25zdCBtZW51SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbm1lbnVIZWFkLmlubmVyVGV4dCA9IFwiVGhlIE1lbnVcIjtcclxubWVudUhlYWQuY2xhc3NMaXN0LmFkZChcImhvbWVIZWFkZXJcIixcIm1lbnVIZWFkaW5nXCIpO1xyXG5cclxuLy9hcHBlbmQgbWVudUhlYWRlciB0byBzZWN0aW9uXHJcbnNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUhlYWQpO1xyXG5cclxuLy9hcHBlbmQgc2VjdGlvbiB0byBjb250YWluZXJcclxuY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG5cclxuLy9hcHBlbmQgY29udGFpbmVyIHRvIGRpdkNvbnRlbnRcclxuZGl2X2NvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxufVxyXG5cclxuLy9jcmVhdGUgbWVudSBpdGVtXHJcbmZ1bmN0aW9uIG1lbnVJdGVtcygpe1xyXG4gICAgLy9zZWxlY3Qgc2VjdGlvblxyXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uTWVudScpO1xyXG5cclxuLy9jcmVhdGUgcGFyZW50IGRpdiBmb3IgbWVudSBpdGVtc1xyXG5jb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51SXRlbXMuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtc1wiKVxyXG5cclxuLy9jcmVhdGUgaXRlbSB0eXBlIGRpdlxyXG5jb25zdCBtYWluQ291cnNlX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5tYWluQ291cnNlX2Rpdi5pbm5lclRleHQgPSBcIk1haW4gQ291cnNlXCI7XHJcbm1haW5Db3Vyc2VfZGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW1UeXBlX2RpdicpO1xyXG5cclxuLy9hcHBlbmQgbWFpbiBjb3Vyc2UgdG8gbWVudSBpdGVtc1xyXG5tZW51SXRlbXMuYXBwZW5kQ2hpbGQobWFpbkNvdXJzZV9kaXYpO1xyXG5cclxuLy9jcmVhdGUgZmlyc3QgbWVudSBpdGVtXHJcbmNvbnN0IG1lbnVJdGVtXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51SXRlbV8xLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xyXG4gXHJcbiAgICAvL2NyZWF0ZSBpdGVtIGltZ1xyXG4gICAgY29uc3QgZmlyc3RJdGVtX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBmaXJzdEl0ZW1faW1nLnNyYz1cImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzE0MzcyNjcvcGV4ZWxzLXBob3RvLTE0MzcyNjcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJnc9NTAwXCI7XHJcbiAgICBmaXJzdEl0ZW1faW1nLmNsYXNzTGlzdC5hZGQoXCJpbWdcIik7XHJcbiBcclxuICAgIC8vY3JlYXRlIGZpcnN0IGl0ZW0gaW1nIHRvIG1lbnUgaXRlbTFcclxuICAgIG1lbnVJdGVtXzEuYXBwZW5kQ2hpbGQoZmlyc3RJdGVtX2ltZyk7XHJcblxyXG4vL3BhcmVudCBkaXYgZm9yIGl0ZW0gbmFtZSBhbmQgcHJpY2VcclxuY29uc3QgaXRlbUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5pdGVtQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaXRlbUNvbnRlbnRcIik7XHJcblxyXG4gICAgLy9jcmVhdGUgaXRlbSBuYW1lXHJcbiAgICBjb25zdCBmaXJzdEl0ZW1fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZmlyc3RJdGVtX25hbWUuaW5uZXJUZXh0ID0gXCJTcGVjaWFsIFBhc3RhXCI7XHJcbiAgICBmaXJzdEl0ZW1fbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICAgIGl0ZW1Db250ZW50LmFwcGVuZENoaWxkKGZpcnN0SXRlbV9uYW1lKTtcclxuICAgIG1lbnVJdGVtXzEuYXBwZW5kQ2hpbGQoZmlyc3RJdGVtX25hbWUpO1xyXG5cclxuICAgIC8vY3JlYXRlIGl0ZW0gcHJpY2VcclxuICAgIGNvbnN0IGZpcnN0SXRlbV9wcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZmlyc3RJdGVtX3ByaWNlLmlubmVyVGV4dCA9IFwiJDEwXCI7XHJcbiAgICBmaXJzdEl0ZW1fcHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xyXG4gICAgaXRlbUNvbnRlbnQuYXBwZW5kQ2hpbGQoZmlyc3RJdGVtX3ByaWNlKTtcclxuICAgIG1lbnVJdGVtXzEuYXBwZW5kQ2hpbGQoZmlyc3RJdGVtX3ByaWNlKTtcclxuLy9jb25zb2xlLmxvZyhtZW51SXRlbV8xKTtcclxuICBtZW51SXRlbV8xLmFwcGVuZENoaWxkKGl0ZW1Db250ZW50KTtcclxuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbV8xKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBzZWNvbmQgbWVudSBpdGVtXHJcbmNvbnN0IG1lbnVJdGVtXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51SXRlbV8yLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xyXG4gXHJcbiAgICAvL2NyZWF0ZSBpdGVtIGltZ1xyXG4gICAgY29uc3Qgc2Vjb25kSXRlbV9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgc2Vjb25kSXRlbV9pbWcuc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTMxMDQ4OTAxMzgtN2M3NDk2NTlhNTkxP2l4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TVh4OGNHbDZlbUY4Wlc1OE1Id3dmREI4ZkElM0QlM0QmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02MDAmcT02MFwiO1xyXG4gICAgc2Vjb25kSXRlbV9pbWcuY2xhc3NMaXN0LmFkZChcImltZ1wiKTtcclxuXHJcbiAgICBtZW51SXRlbV8yLmFwcGVuZENoaWxkKHNlY29uZEl0ZW1faW1nKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBpdGVtIG5hbWVcclxuICAgIGNvbnN0IHNlY29uZEl0ZW1fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2Vjb25kSXRlbV9uYW1lLmlubmVyVGV4dCA9IFwiQ2hlZXN5IFBpenphXCI7XHJcbiAgICBzZWNvbmRJdGVtX25hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcblxyXG4gICAgbWVudUl0ZW1fMi5hcHBlbmRDaGlsZChzZWNvbmRJdGVtX25hbWUpO1xyXG5cclxuICAgIC8vY3JlYXRlIGl0ZW0gcHJpY2VcclxuICAgIGNvbnN0IHNlY29uZEl0ZW1fcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlY29uZEl0ZW1fcHJpY2UuaW5uZXJUZXh0ID0gXCIkMTBcIjtcclxuICAgIHNlY29uZEl0ZW1fcHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xyXG4gICAgbWVudUl0ZW1fMi5hcHBlbmRDaGlsZChzZWNvbmRJdGVtX3ByaWNlKTtcclxuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbV8yKTtcclxuXHJcbi8vY3JlYXRlIHRoaXJkIG1lbnUgaXRlbVxyXG5jb25zdCBtZW51SXRlbV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubWVudUl0ZW1fMy5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcclxuIFxyXG4gICAgLy9jcmVhdGUgaXRlbSBpbWdcclxuICAgIGNvbnN0IHRoaXJkSXRlbV9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgdGhpcmRJdGVtX2ltZy5zcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3Mjg2MjkwNTAwMC1jNWI2MjQ0MDI3YTU/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTc1MCZxPTgwXCI7XHJcbiAgICB0aGlyZEl0ZW1faW1nLmNsYXNzTGlzdC5hZGQoXCJpbWdcIik7XHJcblxyXG4gICAgbWVudUl0ZW1fMy5hcHBlbmRDaGlsZCh0aGlyZEl0ZW1faW1nKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBpdGVtIG5hbWVcclxuICAgIGNvbnN0IHRoaXJkSXRlbV9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlyZEl0ZW1fbmFtZS5pbm5lclRleHQgPSBcIlNhbG1vbiBGaWxsZXRcIjtcclxuICAgIHRoaXJkSXRlbV9uYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG5cclxuICAgIG1lbnVJdGVtXzMuYXBwZW5kQ2hpbGQodGhpcmRJdGVtX25hbWUpO1xyXG5cclxuICAgIC8vY3JlYXRlIGl0ZW0gcHJpY2VcclxuICAgIGNvbnN0IHRoaXJkSXRlbV9wcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcmRJdGVtX3ByaWNlLmlubmVyVGV4dCA9IFwiJDEwXCI7XHJcbiAgICB0aGlyZEl0ZW1fcHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xyXG4gICAgbWVudUl0ZW1fMy5hcHBlbmRDaGlsZCh0aGlyZEl0ZW1fcHJpY2UpO1xyXG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKG1lbnVJdGVtXzMpO1xyXG5cclxuICAgIC8vY3JlYXRlIGZvdXJ0aCBtZW51IGl0ZW1cclxuY29uc3QgbWVudUl0ZW1fNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1lbnVJdGVtXzQuY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XHJcbiBcclxuICAgIC8vY3JlYXRlIGl0ZW0gaW1nXHJcbiAgICBjb25zdCBmb3VydGhJdGVtX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBmb3VydGhJdGVtX2ltZy5zcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwNDkwODE3Njk5Ny0xMjVmMjVjYzZmM2Q/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEyMTUmcT04MFwiO1xyXG4gICAgZm91cnRoSXRlbV9pbWcuY2xhc3NMaXN0LmFkZChcImltZ1wiKTtcclxuXHJcbiAgICBtZW51SXRlbV80LmFwcGVuZENoaWxkKGZvdXJ0aEl0ZW1faW1nKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBpdGVtIG5hbWVcclxuICAgIGNvbnN0IGZvdXJ0aEl0ZW1fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm91cnRoSXRlbV9uYW1lLmlubmVyVGV4dCA9IFwiQ2hpY2tlbiBTYWxhZFwiO1xyXG4gICAgZm91cnRoSXRlbV9uYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gICAgbWVudUl0ZW1fNC5hcHBlbmRDaGlsZChmb3VydGhJdGVtX25hbWUpO1xyXG5cclxuICAgIC8vY3JlYXRlIGl0ZW0gcHJpY2VcclxuICAgIGNvbnN0IGZvdXJ0aEl0ZW1fcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvdXJ0aEl0ZW1fcHJpY2UuaW5uZXJUZXh0ID0gXCIkMTBcIjtcclxuICAgIGZvdXJ0aEl0ZW1fcHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xyXG4gICAgbWVudUl0ZW1fNC5hcHBlbmRDaGlsZChmb3VydGhJdGVtX3ByaWNlKTtcclxuXHJcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUl0ZW1fNCk7XHJcbiAgICAvL2NyZWF0ZSBpdGVtIHR5cGUgZGl2XHJcbmNvbnN0IHNpZGVDb3Vyc2VfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnNpZGVDb3Vyc2VfZGl2LmlubmVyVGV4dCA9IFwiU2lkZSBEaXNoZXNcIjtcclxuc2lkZUNvdXJzZV9kaXYuY2xhc3NMaXN0LmFkZCgnaXRlbVR5cGVfZGl2Jyk7XHJcblxyXG5tZW51SXRlbXMuYXBwZW5kQ2hpbGQoc2lkZUNvdXJzZV9kaXYpO1xyXG5cclxuLy9jcmVhdGUgZmlmdGggbWVudSBpdGVtXHJcbmNvbnN0IG1lbnVJdGVtXzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51SXRlbV81LmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xyXG4gXHJcbiAgICAvL2NyZWF0ZSBpdGVtIGltZ1xyXG4gICAgY29uc3QgZmlmdGhJdGVtX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBmaWZ0aEl0ZW1faW1nLnNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTk4MjE0ODg2ODA2LWM4N2I4NGI3MDc4Yj9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTg1MCZxPTgwXCI7XHJcbiAgICBmaWZ0aEl0ZW1faW1nLmNsYXNzTGlzdC5hZGQoXCJpbWdcIik7XHJcblxyXG4gICAgbWVudUl0ZW1fNS5hcHBlbmRDaGlsZChmaWZ0aEl0ZW1faW1nKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBpdGVtIG5hbWVcclxuICAgIGNvbnN0IGZpZnRoSXRlbV9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmaWZ0aEl0ZW1fbmFtZS5pbm5lclRleHQgPSBcIlBhbmNha2VcIjtcclxuICAgIGZpZnRoSXRlbV9uYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gICAgbWVudUl0ZW1fNS5hcHBlbmRDaGlsZChmaWZ0aEl0ZW1fbmFtZSk7XHJcblxyXG4gICAgLy9jcmVhdGUgaXRlbSBwcmljZVxyXG4gICAgY29uc3QgZmlmdGhJdGVtX3ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmaWZ0aEl0ZW1fcHJpY2UuaW5uZXJUZXh0ID0gXCIkMTBcIjtcclxuICAgIGZpZnRoSXRlbV9wcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XHJcbiAgICBtZW51SXRlbV81LmFwcGVuZENoaWxkKGZpZnRoSXRlbV9wcmljZSk7XHJcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUl0ZW1fNSk7XHJcblxyXG4gICAgLy9jcmVhdGUgc2l4dGggbWVudSBpdGVtXHJcbmNvbnN0IG1lbnVJdGVtXzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51SXRlbV82LmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xyXG4gXHJcbiAgICAvL2NyZWF0ZSBpdGVtIGltZ1xyXG4gICAgY29uc3Qgc2l4dGhJdGVtX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBzaXh0aEl0ZW1faW1nLnNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDc5Mzg4ODkxNTY3LTNjMTM3YjYxZGU5Nz9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTA1MCZxPTgwXCI7XHJcbiAgICBzaXh0aEl0ZW1faW1nLmNsYXNzTGlzdC5hZGQoXCJpbWdcIik7XHJcblxyXG4gICAgbWVudUl0ZW1fNi5hcHBlbmRDaGlsZChzaXh0aEl0ZW1faW1nKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBpdGVtIG5hbWVcclxuICAgIGNvbnN0IHNpeHRoSXRlbV9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzaXh0aEl0ZW1fbmFtZS5pbm5lclRleHQgPSBcIkZyaWVzICYgQnVyZ2VyXCI7XHJcbiAgICBzaXh0aEl0ZW1fbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICAgIG1lbnVJdGVtXzYuYXBwZW5kQ2hpbGQoc2l4dGhJdGVtX25hbWUpO1xyXG5cclxuICAgIC8vY3JlYXRlIGl0ZW0gcHJpY2VcclxuICAgIGNvbnN0IHNpeHRoSXRlbV9wcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2l4dGhJdGVtX3ByaWNlLmlubmVyVGV4dCA9IFwiJDEwXCI7XHJcbiAgICBzaXh0aEl0ZW1fcHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xyXG4gICAgbWVudUl0ZW1fNi5hcHBlbmRDaGlsZChzaXh0aEl0ZW1fcHJpY2UpO1xyXG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKG1lbnVJdGVtXzYpO1xyXG5cclxuICAgICAgLy9jcmVhdGUgaXRlbSB0eXBlIGRpdlxyXG5jb25zdCBkZXNlcnRDb3Vyc2VfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRlc2VydENvdXJzZV9kaXYuaW5uZXJUZXh0ID0gXCJEZXNlcnRzXCI7XHJcbmRlc2VydENvdXJzZV9kaXYuY2xhc3NMaXN0LmFkZCgnaXRlbVR5cGVfZGl2Jyk7XHJcblxyXG5tZW51SXRlbXMuYXBwZW5kQ2hpbGQoZGVzZXJ0Q291cnNlX2Rpdik7XHJcblxyXG4gICAgIC8vY3JlYXRlIHNldmVudGggbWVudSBpdGVtXHJcbmNvbnN0IG1lbnVJdGVtXzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51SXRlbV83LmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xyXG4gXHJcbiAgICAvL2NyZWF0ZSBpdGVtIGltZ1xyXG4gICAgY29uc3Qgc2V2ZW50aEl0ZW1faW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIHNldmVudGhJdGVtX2ltZy5zcmM9XCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xMTI2MzU5L3BleGVscy1waG90by0xMTI2MzU5LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTY1MCZ3PTk0MFwiO1xyXG4gICAgc2V2ZW50aEl0ZW1faW1nLmNsYXNzTGlzdC5hZGQoXCJpbWdcIik7XHJcblxyXG4gICAgbWVudUl0ZW1fNy5hcHBlbmRDaGlsZChzZXZlbnRoSXRlbV9pbWcpO1xyXG5cclxuICAgIC8vY3JlYXRlIGl0ZW0gbmFtZVxyXG4gICAgY29uc3Qgc2V2ZW50aEl0ZW1fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2V2ZW50aEl0ZW1fbmFtZS5pbm5lclRleHQgPSBcIlZhbmlsbGEgQ2FrZVwiO1xyXG4gICAgc2V2ZW50aEl0ZW1fbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICAgIG1lbnVJdGVtXzcuYXBwZW5kQ2hpbGQoc2V2ZW50aEl0ZW1fbmFtZSk7XHJcblxyXG4gICAgLy9jcmVhdGUgaXRlbSBwcmljZVxyXG4gICAgY29uc3Qgc2V2ZW50aEl0ZW1fcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNldmVudGhJdGVtX3ByaWNlLmlubmVyVGV4dCA9IFwiJDEwXCI7XHJcbiAgICBzZXZlbnRoSXRlbV9wcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XHJcbiAgICBtZW51SXRlbV83LmFwcGVuZENoaWxkKHNldmVudGhJdGVtX3ByaWNlKTtcclxuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbV83KTtcclxuXHJcbiAgICAgLy9jcmVhdGUgZWlndGggbWVudSBpdGVtXHJcbmNvbnN0IG1lbnVJdGVtXzggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51SXRlbV84LmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xyXG4gXHJcbiAgICAvL2NyZWF0ZSBpdGVtIGltZ1xyXG4gICAgY29uc3QgZWlndGhJdGVtX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBlaWd0aEl0ZW1faW1nLnNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTg4MTk1NTM5Mjk3LWYwYjRlZmRiNTQ3Mj9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9OTU2JnE9ODBcIjtcclxuICAgIGVpZ3RoSXRlbV9pbWcuY2xhc3NMaXN0LmFkZChcImltZ1wiKTtcclxuXHJcbiAgICBtZW51SXRlbV84LmFwcGVuZENoaWxkKGVpZ3RoSXRlbV9pbWcpO1xyXG5cclxuICAgIC8vY3JlYXRlIGl0ZW0gbmFtZVxyXG4gICAgY29uc3QgZWlndGhJdGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVpZ3RoSXRlbV9uYW1lLmlubmVyVGV4dCA9IFwiU3BlY2lhbCBJY2VjcmVhbVwiO1xyXG4gICAgZWlndGhJdGVtX25hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgICBtZW51SXRlbV84LmFwcGVuZENoaWxkKGVpZ3RoSXRlbV9uYW1lKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBpdGVtIHByaWNlXHJcbiAgICBjb25zdCBlaWd0aEl0ZW1fcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVpZ3RoSXRlbV9wcmljZS5pbm5lclRleHQgPSBcIiQxMFwiO1xyXG4gICAgZWlndGhJdGVtX3ByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcclxuICAgIG1lbnVJdGVtXzguYXBwZW5kQ2hpbGQoZWlndGhJdGVtX3ByaWNlKTtcclxuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbV84KTtcclxuXHJcbnNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcclxuY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG5kaXZfY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtoZWFkZXIsIG5hdkVsZW1lbnRzLGZvb3Rlcn0gZnJvbSAnLi9pbml0aWFsaXplQXBwLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gJy4vaG9tZS5qcyc7XHJcbmltcG9ydCB7Y3JlYXRlTWVudUhlYWQsbWVudUl0ZW1zfSAgZnJvbSAnLi9tZW51LmpzJztcclxuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gJy4vY29udGFjdC5qcyc7XHJcblxyXG5cclxuaGVhZGVyKCk7XHJcbm5hdkVsZW1lbnRzKCk7XHJcbmV2ZW50TGlzdGVuZXJzKCk7XHJcbmNyZWF0ZUhvbWUoKTtcclxuZm9vdGVyKCk7XHJcblxyXG4vL2ZhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIG5hdiBpdGVtc1xyXG5mdW5jdGlvbiBldmVudExpc3RlbmVycygpe1xyXG4gICAgLy9zZWxlY3QgaG9tZSBuYXZcclxuY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XHJcbmhvbWVOYXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHJcbi8vc2VsZWN0IG5hdnNcclxuY29uc3QgbmF2RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2Jyk7XHJcblxyXG4vL2xvb3AgdGhyb3VnaCB0aGVtIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJcclxuZm9yKGxldCBpID0gMDtpPG5hdkVsZW1lbnRzLmxlbmd0aDtpKyspe1xyXG5uYXZFbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihlKXtcclxuICAvLyAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gICAgY29uc3QgdGFyZ2V0TmF2ID0gZS50YXJnZXQ7XHJcblxyXG5pZih0YXJnZXROYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaG9tZVwiKSl7XHJcbiAgIGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG4gICBjb25zdCBjb250YWN0TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcclxuXHJcbiAgIG1lbnVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgIGNvbnRhY3ROYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgIHRhcmdldE5hdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY3JlYXRlSG9tZSgpO1xyXG5cclxufSBlbHNlIGlmKHRhcmdldE5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51XCIpKXtcclxuXHJcbiAgICBjb25zdCBob21lTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcclxuICAgIGNvbnN0IGNvbnRhY3ROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpO1xyXG5cclxuICAgIGhvbWVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBjb250YWN0TmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuICAgIHRhcmdldE5hdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAvL2NvbnNvbGUubG9nKCdtZW51IGNsaWNrZWQnKTtcclxuICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgLy9jb25zb2xlLmxvZyhjb250YWluZXIpO1xyXG5cclxuICAgIGNyZWF0ZU1lbnVIZWFkKCk7XHJcbiAgICBtZW51SXRlbXMoKTtcclxufSBlbHNlIHtcclxuICAgIGNvbnN0IGhvbWVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG4gICAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XHJcbiAgICBjb25zdCBjb250YWN0TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcclxuXHJcbiAgICBob21lTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgbWVudU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICBjb250YWN0TmF2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAvL2NvbnNvbGUubG9nKCdjb250YWN0IGNsaWNrZWQnKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29udGFjdCgpO1xyXG59XHJcbn0pXHJcbn1cclxuXHJcbn1cclxuICAgIl0sInNvdXJjZVJvb3QiOiIifQ==