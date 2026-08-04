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



// ========================
// MOBILE HAMBURGER MENU
// ========================


const hamburger =
document.getElementById("hamburger");


const navLinks =
document.getElementById("nav-links");



if(hamburger && navLinks){


hamburger.addEventListener("click",()=>{


navLinks.classList.toggle("active");


});



// Close menu after clicking link

document.querySelectorAll(".nav-links a")
.forEach(link=>{


link.addEventListener("click",()=>{


navLinks.classList.remove("active");


});


});


}
// Scroll animation

const animatedElements = document.querySelectorAll(".animate");


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},
{

threshold:0.15

});



animatedElements.forEach((element)=>{

observer.observe(element);

});
