var bMapAPIKey = "AuVD8Eevbpp8SK5_oEYfk6QgzmLaMMYTM12ppvRBxw65xlDx6C_oxZ7-0PI-v6aR";

var map;
function initMap() {
  "use strict";

  var storeLocation = new Microsoft.Maps.Location(30.271135, -97.7470717);

  map = new Microsoft.Maps.Map("#hplus-map", {
    credentials: bMapAPIKey,
    center: storeLocation,
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    zoom: 14,
    disableScrollWheelZoom: true,
    disablePanning: true
  });

  //Create an infobox at the center of the map but don't show it.
  var infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
    visible: false
  });

  //Assign the infobox to a map instance.
  infobox.setMap(map);

  var pin = new Microsoft.Maps.Pushpin(storeLocation, {
    title: "Chateu Bellevue",
    subTitle: "Wedding Venue"
  });
  pin.metadata = {
    title: "Chateu Bellevue",
    description: '708 San Antonio St, <br /> Austin, TX 78701'
  };

  //Add the pushpin to the map
  map.entities.push(pin);

  Microsoft.Maps.Events.addHandler(pin, "click", function pushpinClicked(e) {
    //Make sure the infobox has metadata to display.
    if (e.target.metadata) {
      //Set the infobox options with the metadata of the pushpin.
      infobox.setOptions({
        location: e.target.getLocation(),
        title: e.target.metadata.title,
        description: e.target.metadata.description,
        visible: true
      });
    }
  });
}
