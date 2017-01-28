app.controller("MissionsController", ["$scope", "HelpService", "MissionsService", "WizardService", "ResultService", function($scope, HelpService, MissionsService, WizardService, ResultService){
	$scope.missions = MissionsService;
	$scope.help = HelpService;
	$scope.createMission = function(){
		MissionsService.remaining() ? WizardService.show() : ResultService.submit(MissionsService.list);
	};
}]);

