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

`

);


});
