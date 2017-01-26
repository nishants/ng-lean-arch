app.controller("WizardController", ["$scope", "PlanetsService", "vehiclesService", "WizardService", function($scope, PlanetsService, vehiclesService, WizardService){
  $scope.planets  = PlanetsService;
  $scope.vehicles = vehiclesService;
  $scope.wizard   = WizardService;
}]);

