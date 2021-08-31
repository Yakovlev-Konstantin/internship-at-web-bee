function initMap() {
  var geoplace1;

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  } else {
    /* This browser does not support geolocation API */
    console.log("This browser does not support geolocation API");
  }

  function geoSuccess(position) {
    geoplace1 = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    drawMap();
  }

  function geoError(position) {
    geoplace1 = { lat: -25.312, lng: -57.533 };
    drawMap();
  }

  function drawMap() {
    // The map, centered at the same location
    const map1 = new google.maps.Map(document.getElementById("map1"), {
      zoom: 15,
      center: geoplace1,
    });
    // The marker, positioned at the location
    const marker1 = new google.maps.Marker({
      position: geoplace1,
      map: map1,
    });

    map1.addListener("idle", () => {
      let preloaders = document.getElementsByClassName("loader");
      if (!(preloaders[0] == null)) {
        for (let i = 0; i < preloaders.length; i++) preloaders[i].remove();
      }
    });
  }
}
