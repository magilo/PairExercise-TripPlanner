const mapbox = require("mapbox-gl");

//"url(http://i.imgur.com/WbMOfMl.png)"
const iconURLs = {
  activity: "url(http://i.imgur.com/WbMOfMl.png)",
  hotel: "url(http://i.imgur.com/D9574Cu.png)",
  restaurant: "url(http://i.imgur.com/cqR6pUI.png)"
}

class buildMarker{
  constructor(type, coords){
    this.coords = coords;
    this.type = type;
    if (this.type === 'hotel'){
      console.log(this.type)
      const markerDomEl = document.createElement("div"); // Create a new, detached DIV
      markerDomEl.style.width = "32px";
      markerDomEl.style.height = "39px";
      markerDomEl.style.backgroundImage = iconURLs.hotel;
      const hotelMarker = new mapbox.Marker(markerDomEl).setLngLat(this.coords);
      return hotelMarker;

    } else if (this.type === 'restaurant') {
      console.log(this.type)
      const markerDomEl = document.createElement("div"); // Create a new, detached DIV
      markerDomEl.style.width = "32px";
      markerDomEl.style.height = "39px";
      markerDomEl.style.backgroundImage = iconURLs.restaurant;
      const restMarker = new mapbox.Marker(markerDomEl).setLngLat(this.coords);
      return restMarker;

    } else {
      return iconURLs.activity;
    }
  }

}

module.exports = buildMarker;
