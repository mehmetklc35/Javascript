//toggle icon navbar
let menuicon =document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuicon.onclick = ()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function validateform() {
    
    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value.trim(); // Remove leading and trailing whitespace

    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();

    var numberInput = document.getElementById("number");
    var numberValue = numberInput.value.trim();

    var subjectInput = document.getElementById("subject");
    var subjectValue = subjectInput.value.trim();

    if (nameValue === "") {
        nameInput.placeholder = "Name is required"; // Change the placeholder text
        nameInput.style.border = "1px solid red"; // Set border style, color, and width
        nameInput.style.borderRadius = "4px"; // Set border radius to 4px
        return false; // Prevent form submission
    } else {
        nameInput.style.border = ""; // Reset border style
    }

    if (emailValue === "") {
        emailInput.placeholder = "Email is required"; // Change the placeholder text
        emailInput.style.border = "1px solid red"; // Set border style, color, and width
        emailInput.style.borderRadius = "4px"; // Set border radius to 4px
        return false; // Prevent form submission
    } else {
        emailInput.style.border = ""; // Reset border style
    }

    if (numberValue === "") {
        numberInput.placeholder = "Mobile number is required"; // Change the placeholder text
        numberInput.style.border = "1px solid red"; // Set border style, color, and width
        numberInput.style.borderRadius = "4px"; // Set border radius to 4px
        return false; // Prevent form submission
    } else {
        numberInput.style.border = ""; // Reset border style
    }

    if (subjectValue === "") {
        subjectInput.placeholder = "Subject is required"; // Change the placeholder text
        subjectInput.style.border = "1px solid red"; // Set border style, color, and width
        subjectInput.style.borderRadius = "4px"; // Set border radius to 4px
        return false; // Prevent form submission
    } else {
        subjectInput.style.border = ""; // Reset border style
    }

    // If all fields are valid, return true to allow form submission
    return true;
}
    
/*previous  active navbar contetnt ko remove krna r new jispe click kry osko active krna*/

document.addEventListener("DOMContentLoaded", ()=> {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach((navLink)=> {
        navLink.addEventListener('click', ()=> {
            
            // Remove 'active' class from all navigation links
            navLinks.forEach((link)=> {
                link.classList.remove('active');
            });

            // Add 'active' class to the clicked navigation link
            navLink.classList.add('active');

            //when we clicked then remove toggle and navbar
            menuicon.classList.remove('bx-x');
           navbar.classList.remove('active');

        });
    });

});

//scroll reveal
ScrollReveal({ 
    //reset: true ,
    distance: '80px',
    duration: 2000
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


//typed js

const typed =  new Typed('.multiple-text',{
    strings: ['Frontend Developer','Full-Stack Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})