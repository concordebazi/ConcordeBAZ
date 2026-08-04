const elements = document.querySelectorAll(
".hero-content, .professional-contact, .btn, footer"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

elements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});
