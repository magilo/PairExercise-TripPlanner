console.log('index.js test');

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1Ijoic2xlZXB5bWFndXMiLCJhIjoiY2sxNm1iY205MDJsYzNodGJ4eGJ4MTJicyJ9.wt_h49Eb625l_pYFXmXGhw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const marker = new buildMarker("hotel", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);

//module.exports = map;
