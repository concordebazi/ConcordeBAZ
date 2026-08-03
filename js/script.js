// ========================
// IMAGE LIGHTBOX
// ========================


const images = document.querySelectorAll(".lightbox");

const modal = document.getElementById("imageModal");

const expandedImage =
document.getElementById("expandedImage");

const closeButton =
document.querySelector(".close-modal");


images.forEach(image => {

image.addEventListener("click", function(e){

    e.preventDefault();

    if(modal && expandedImage){

        modal.style.display="flex";

        expandedImage.src=this.href;

    }

});

});


if(closeButton){

closeButton.onclick=function(){

modal.style.display="none";

};

}


if(modal){

    modal.onclick=function(e){

        if(e.target === modal){

            modal.style.display="none";

        }

    };

}
// Mobile Hamburger Menu

// ========================
// MOBILE HAMBURGER MENU
// ========================

// ========================
// MOBILE MENU TEST
// ========================

document.addEventListener("DOMContentLoaded", function(){

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");


    if(hamburger && navLinks){

        hamburger.onclick = function(){

            console.log("Hamburger clicked");

            navLinks.classList.toggle("active");

        };

    } else {

        console.log("Hamburger elements missing");

    }

});
