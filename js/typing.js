const titles=[

"GIS & Geomatics Engineer",

"Map Engineer",

"Hydrographic Data Processing Specialist",

"Marine Geospatial Professional"

];


let index=0;


setInterval(()=>{


index++;


if(index>=titles.length){

index=0;

}


document.getElementById(
"typing-title"
).innerHTML=titles[index];


},2500);
