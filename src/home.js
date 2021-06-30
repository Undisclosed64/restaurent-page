
//create home
 export function createHome(){
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
