var app = angular.module("galaxy", []);

// Delay before confirm action of wizard fro smoother transition.
app.constant("wizardTimeout", 150);

app.value("remote", "https://findfalcone.herokuapp.com");
app.value("requestConfig", {headers: {Accept: "application/json", "Content-Type": "application/json"}});
app.value("planetIcons", {
  "Donlon"  : "images/planets/Donlon.png",
  "Enchai"  : "images/planets/Enchai.jpg",
  "Jebing"  : "images/planets/Jebing.jpeg",
  "Sapir"   : "images/planets/Sapir.png",
  "Lerbin"  : "images/planets/Lerbin.jpg",
  "Pingasor": "images/planets/Pingasor.jpeg",
  "other"   : "images/planets/other-planet.png"
});

app.value("vehicleIcons", {
  "Space pod"     : "images/vehicles/space-pod.jpg",
  "Space rocket"  : "images/vehicles/space-rocket.png",
  "Space shuttle" : "images/vehicles/shutle.jpeg",
  "Space ship"    : "images/vehicles/spaceship.png",
  "other"         : "images/vehicles/other-vehicle.jpg"
});

app.run(["remote", "$http", "requestConfig","planetsService", "vehiclesService", function(remote, $http, requestConfig, planetsService, vehiclesService){
  planetsService.load();
  vehiclesService.load();
}]);