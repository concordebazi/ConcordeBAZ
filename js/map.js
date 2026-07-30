// ==========================================
// CONCORDE BAZIMAZIKI - PROFESSIONAL MAP
// My Geospatial Journey
// ==========================================


// Create map

var map = L.map('career-map').setView(
    [20, 0],
    2
);


// OpenStreetMap layer

L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution:
        '&copy; OpenStreetMap contributors'
    }
).addTo(map);



// ==========================================
// SWEDEN - MAP ENGINEERING & HYDROGRAPHY
// ==========================================


var sweden = L.marker(
    [58.5877, 16.1924]
).addTo(map);


sweden.bindPopup(`

<h3>🇸🇪 Norrköping, Sweden</h3>

<b>Professional Experience</b>

<br><br>

🧭 Swedish Maritime Administration

<br>
Map Engineer

<br><br>

Experience in:

<br>
GIS

<br>
Cartography

<br>
Hydrographic Data Management

<br>
Nautical Mapping

<br><br>


<br>
Hydrographic Data Processor

<br><br>

Marine Survey Data

<br>
MBES Processing

<br>
Bathymetry

<br>
Quality Control

`);




// ==========================================
// RWANDA - GIS & GEOLOGICAL MAPPING
// ==========================================


var rwanda = L.marker(
    [-1.9403, 29.8739]
).addTo(map);



rwanda.bindPopup(`

<h3>🇷🇼 Rwanda</h3>

<b>GIS Experience</b>

<br><br>

🌍 Rwanda Mining, Petroleum & Gas Board

<br>
GIS / Geospatial Specialist

<br><br>

Geological Mapping

<br>
Spatial Databases

<br>
Mineral Resource Mapping

`);




// ==========================================
// OFFSHORE HYDROGRAPHIC EXPERIENCE
// ==========================================


var offshore = L.marker(
    [57.7, 11.9]
).addTo(map);



offshore.bindPopup(`

<h3> 🌊 Ocean Infinity </h3>
<br>

<br>
Hydrographic Data Processor

<br>

<b>Marine Geospatial Data Processing</b>

<br><br>

MBES Processing

<br>
Bathymetry

<br>
Backscatter

<br>
Quality Control

`);




// ==========================================
// CAREER JOURNEY LINE
// ==========================================


var careerPath = [

[-1.9403,29.8739],

[58.5877,16.1924],

[57.7,11.9]

];


L.polyline(

careerPath,

{

color:'#0077b6',

weight:4,

dashArray:'10,10'

}

).addTo(map);
