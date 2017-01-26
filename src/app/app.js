window.app = angular.module("galaxy", []);

// Delay before confirm action of wizard fro smoother transition.
app.constant("wizardTimeout", 150);

app.value("remote", "https://findfalcone.herokuapp.com");
app.value("requestConfig", {headers: {Accept: "application/json", "Content-Type": "application/json"}});
app.value("planetIcons", {
  "Donlon"  : "images/planets/Donlon.png",
  "Enchai"  : "images/planets/Enchai.ico",
  "Jebing"  : "images/planets/Jebing.png",
  "Sapir"   : "images/planets/Sapir.png",
  "Lerbin"  : "images/planets/Lerbin.jpg",
  "Pingasor": "images/planets/Pingasor.ico",
  "other"   : "images/planets/other-planet.png"
});

app.value("vehicleIcons", {
  "Space pod"     : "images/vehicles/space-pod.jpg",
  "Space rocket"  : "images/vehicles/space-rocket.png",
  "Space shuttle" : "images/vehicles/shutle.jpeg",
  "Space ship"    : "images/vehicles/spaceship.png",
  "other"         : "images/vehicles/other-vehicle.jpg"
});

app.run(["remote", "$http", "requestConfig","PlanetsService", "vehiclesService", function(remote, $http, requestConfig, PlanetsService, vehiclesService){
  PlanetsService.load();
  vehiclesService.load();
}]);

require("./result/result-service.js");
require("./result/result-controller.js");
require("./missions/missions-service.js");
require("./missions/missions-controller.js");
require("./help/help-service.js");
require("./components/game-progress.js");
require("./components/fullscreen.js");
require("./planets/planets-service.js");
require("./vehicles/vehicles-service.js");
require("./mission-wizard/wizard-controller.js");
require("./mission-wizard/wizard-service.js");