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
document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        profileModal.style.display = "none";

    }

});
    });

});
// =====================================
// CONTACT FORM - BACKGROUND SUBMISSION
// =====================================

const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

if (contactForm && formSuccess) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton =
            contactForm.querySelector("button[type='submit']");

        submitButton.disabled = true;
        submitButton.textContent = "📤 Sending...";

        try {

            const formData = new FormData(contactForm);

            const response = await fetch(
                contactForm.action,
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (response.ok) {

                formSuccess.style.display = "block";

                contactForm.reset();

                submitButton.disabled = false;
                submitButton.textContent = "📩 Send Message";

            } else {

                throw new Error("Form submission failed");

            }

        } catch (error) {

            submitButton.disabled = false;
            submitButton.textContent = "📩 Send Message";

            alert(
                "Sorry, there was a problem sending your message. Please try again."
            );

        }

    });

}
