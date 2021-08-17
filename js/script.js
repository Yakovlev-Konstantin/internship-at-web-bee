var dateOfEnter = new Date();

// Initializing and adding the map

function initMap() {
  // Desired location
  const geoplace1 = { lat: -25.312, lng: -57.533 };
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
    // alert("qwerwer");
    let elem = document.getElementsByClassName("loader");
    if (elem[0]) {
      for (let i = 0; i < elem.length; i++) elem[i].remove();
    }
  });
}

// Initializing timer

var myVar = setInterval(function () {
  myTimer();
}, 1000);

function myTimer() {
  var dateCurrent = new Date();
  var dateDiff = new Date(dateCurrent.getTime() - dateOfEnter.getTime());
  dateDiff.setHours(0);
  document.getElementById("clock").innerHTML = dateDiff.toLocaleTimeString();
}
