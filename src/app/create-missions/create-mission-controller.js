app.controller("WizardController", ["$scope", "PlanetsService", "VehiclesService", "WizardService", function ($scope, PlanetsService, VehiclesService, WizardService) {
	$scope.planets  = PlanetsService;
	$scope.vehicles = VehiclesService;
	$scope.wizard   = WizardService;
}]);

