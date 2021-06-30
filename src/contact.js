
//create contact section
export function contact(){
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
