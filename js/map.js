// ==========================================
// CONCORDE BAZIMAZIKI CAREER MAP
// GIS | GEOMATICS | HYDROGRAPHY
// ==========================================


const map = L.map('career-map')
.setView([20,10],2);



// OpenStreetMap background

L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{

maxZoom:18,

attribution:
'© OpenStreetMap contributors'

}
).addTo(map);





// Career locations


const locations=[



{


name:"🇷🇼 Rwanda",

coordinates:[-1.9441,30.0619],

description:

"GIS & Geospatial Foundation. Experience with geological mapping, mineral resource mapping and spatial databases."


},




{


name:"🇸🇪 Lund University",

coordinates:[55.7047,13.1910],

description:

"Master of Science in Geomatics. Advanced studies in GIS, geospatial technologies and mapping."


},





{


name:"🇸🇪 Gothenburg",

coordinates:[57.7089,11.9746],

description:

"GIS Engineer and Hydrographic Data Processing Specialist. Experience in marine geospatial data and spatial information."


},





{


name:"🇸🇪 Norrköping",

coordinates:[58.5877,16.1924],

description:

"Map Engineer. Experience with hydrographic information, cartography and geographic databases."


}


];





// Add markers


locations.forEach(location=>{


L.marker(location.coordinates)

.addTo(map)

.bindPopup(

`

<h3>${location.name}</h3>

<p>${location.description}</p>



var sweden = L.marker(
[59.3293,18.0686]
).addTo(map);


sweden.bindPopup(`

<h3>🇸🇪 Sweden</h3>

<b>Professional Experience</b>

<br><br>

🌊 Ocean Infinity

<br>

Hydrographic Data Processor

<br><br>

🧭 Swedish Maritime Administration

<br>

Map Engineer

<br><br>

GIS • Hydrography • Cartography

`);





// Rwanda

var rwanda = L.marker(
[-1.9403,29.8739]
).addTo(map);


rwanda.bindPopup(`

<h3>🇷🇼 Rwanda</h3>

<b>Professional Experience</b>

<br><br>

🌍 Rwanda Mining, Petroleum & Gas Board

<br>

GIS / Geospatial Specialist

<br><br>

Geological Mapping

<br>

Mineral Resource Mapping

<br>

Spatial Databases


);



});
