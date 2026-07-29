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


modal.style.display="flex";


expandedImage.src=this.href;


});


});


closeButton.onclick=function(){

modal.style.display="none";

};


modal.onclick=function(e){

if(e.target === modal){

modal.style.display="none";

}

};
