export {header,navElements,footer};

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