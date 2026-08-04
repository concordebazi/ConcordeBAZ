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
const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300||
document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
