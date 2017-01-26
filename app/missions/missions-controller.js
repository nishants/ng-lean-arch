app.controller("MissionsController", ['$scope', 'HelpService', 'MissionsService', "WizardService", "ResultService", function($scope, HelpService, MissionsService, WizardService, ResultService){
  $scope.missions = MissionsService;
  $scope.help = HelpService;
  $scope.createMission = WizardService.show;
  $scope.sendMissions  = function(){
    ResultService.submit(MissionsService.list);
  };
}]);

