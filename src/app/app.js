window.app = angular.module("galaxy", []);

require("./variables.js");
require("./config.js");
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