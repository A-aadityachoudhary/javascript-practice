function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const x = position.coords.latitude;
  const y = position.coords.longitude;
  console.log("Latitude:", x, "Longitude:", y);
}

function showError(error) {
  console.log("Error getting location:", error.message);
}
getLocation()