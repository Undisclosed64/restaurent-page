
export {createMenuHead,menuItems};

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
