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
// PROFESSIONAL MAP ICONS
// ==========================================


var mapIcon = L.icon({

iconUrl:
'images/icons/map-icon.png',

iconSize:
[45,45],

iconAnchor:
[22,45],

popupAnchor:
[0,-40]

});



var geologyIcon = L.icon({

iconUrl:
'images/icons/geology-icon.png',

iconSize:
[45,45],

iconAnchor:
[22,45],

popupAnchor:
[0,-40]

});



var shipIcon = L.icon({

iconUrl:
'images/icons/ship-icon.png',

iconSize:
[45,45],

iconAnchor:
[22,45],

popupAnchor:
[0,-40]

});

// ==========================================
// PROFESSIONAL MAP ICONS
// ==========================================


var mapIcon = L.icon({

iconUrl:
'images/icons/map-icon.png',

iconSize:
[45,45],

iconAnchor:
[22,45],

popupAnchor:
[0,-40]

});



var geologyIcon = L.icon({

iconUrl:
'images/icons/geology-icon.png',

iconSize:
[45,45],

iconAnchor:
[22,45],

popupAnchor:
[0,-40]

});



var shipIcon = L.icon({

iconUrl:
'images/icons/ship-icon.png',

iconSize:
[45,45],

iconAnchor:
[22,45],

popupAnchor:
[0,-40]

});

// ==========================================
// SWEDEN - MAP ENGINEERING & HYDROGRAPHY
// ==========================================


var sweden = L.marker(

[58.5877,16.1924],

{

icon: mapIcon

}

).addTo(map);


sweden.bindPopup(`

<div class="popup-card">

<img src="images/map/swedish-maritime.jpg"
style="width:100%;
border-radius:8px;
margin-bottom:10px;">

<h3>🇸🇪 Norrköping, Sweden</h3>

<b>Swedish Maritime Administration</b>

<br>

Map Engineer

<hr>

✔ Hydrographic Databases

<br>

✔ GIS & Cartography

<br>

✔ Nautical Chart Production

<br>

✔ Spatial Data Management

</div>

`);




// ==========================================
// RWANDA - GIS & GEOLOGICAL MAPPING
// ==========================================


var rwanda = L.marker(

[-1.9403,29.8739],

{

icon: geologyIcon

}

).addTo(map);



rwanda.bindPopup(`

<div class="popup-card">

<img src="images/map/rwanda-gis.jpg"
style="width:100%;
border-radius:8px;
margin-bottom:10px;">

<h3>🇷🇼 Rwanda</h3>

<b>GIS & Geological Mapping</b>

<hr>

✔ Geological Mapping

<br>

✔ Mineral Resource Mapping

<br>

✔ GIS Database Management

<br>

✔ Spatial Analysis

</div>





`);



// ==========================================
// OFFSHORE HYDROGRAPHIC EXPERIENCE
// ==========================================

var offshore = L.marker(
    [57.7,11.9],
    {
        icon: shipIcon
    }
).addTo(map);

offshore.bindPopup(`

<div class="popup-card">

<img src="images/map/ocean-infinity.jpg"
style="width:100%;
border-radius:8px;
margin-bottom:10px;">

<h3>🌊 Offshore Projects</h3>

<b>Ocean Infinity</b>

<hr>

✔ Hydrographic Data Processing

<br>

✔ MBES

<br>

✔ CARIS HIPS

<br>

✔ Qimera

<br>

✔ FMGT

</div>

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

opacity:0.8,

dashArray:'8,12'

}

).addTo(map);
