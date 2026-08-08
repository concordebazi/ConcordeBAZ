// ========================
// IMAGE LIGHTBOX
// ========================


const images = document.querySelectorAll(".lightbox");

const modal = document.getElementById("imageModal");

const expandedImage =
document.getElementById("expandedImage");

const closeButton =
document.querySelector(".close-modal");



if(modal){

images.forEach(image => {

image.addEventListener("click", function(e){

e.preventDefault();

modal.style.display="flex";

expandedImage.src=this.href;

});

});


if(closeButton){

closeButton.onclick=function(){

modal.style.display="none";

};

}


modal.onclick=function(e){

if(e.target === modal){

modal.style.display="none";

}

};

}





// =========================================
// MOBILE HAMBURGER MENU
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    console.log("Hamburger:", hamburger);
    console.log("Navigation:", navLinks);

    if (!hamburger || !navLinks) {
        console.error("Hamburger or navigation menu not found!");
        return;
    }

    hamburger.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        console.log("Menu clicked");
        console.log("Menu classes:", navLinks.className);

    });

    // Close menu when clicking a navigation link
    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

});
