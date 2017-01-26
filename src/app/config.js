app.value("remote", "https://findfalcone.herokuapp.com");
app.value("requestConfig", {headers: {Accept: "application/json", "Content-Type": "application/json"}});

app.run(["remote", "$http", "requestConfig","PlanetsService", "vehiclesService", function(remote, $http, requestConfig, PlanetsService, vehiclesService){
	PlanetsService.load();
	vehiclesService.load();
}]);
