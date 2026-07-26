// ==========================================
// CONCORDE BAZIMAZIKI WEB GIS PROJECT
// Leaflet + GeoJSON
// ==========================================


const map = L.map('map')
.setView([55,15],5);




// Base map

L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{

attribution:
'© OpenStreetMap contributors'

}

).addTo(map);





// Load GeoJSON layer


fetch('data/locations.geojson')

.then(response=>response.json())

.then(data=>{


L.geoJSON(data,{

onEachFeature:function(
feature,
layer
){


layer.bindPopup(

`

<h3>
${feature.properties.name}
</h3>


<p>

${feature.properties.description}

</p>

`

);


}


}).addTo(map);


});
