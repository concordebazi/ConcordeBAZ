// ==========================================
// DARK MODE
// ==========================================


const darkButton =
document.getElementById("dark-toggle");


darkButton.addEventListener(
"click",
()=>{


document.body.classList.toggle(
"dark-mode"
);


localStorage.setItem(
"darkMode",
document.body.classList.contains("dark-mode")
);


});




// Remember user choice

if(
localStorage.getItem("darkMode") === "true"
){

document.body.classList.add(
"dark-mode"
);

}
