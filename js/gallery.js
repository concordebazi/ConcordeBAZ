// ==========================================
// IMAGE LIGHTBOX
// ==========================================


const galleryImages =
document.querySelectorAll(".gallery-item img");


galleryImages.forEach(image=>{


image.addEventListener("click",()=>{


const overlay=document.createElement("div");


overlay.className="image-overlay";


const largeImage=document.createElement("img");


largeImage.src=image.src;


overlay.appendChild(largeImage);


document.body.appendChild(overlay);



overlay.addEventListener("click",()=>{


overlay.remove();


});


});


});
