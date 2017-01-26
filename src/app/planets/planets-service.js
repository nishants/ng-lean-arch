app.service("PlanetsService", ["$http", "remote", "requestConfig", "planetIcons", function($http, remote, requestConfig, planetIcons){
	var toPlanets = function(data){
		var planet = {
			name    : data.name,
			distance: data.distance,
			assigned: false,
			icon    : planetIcons[data.name] || planetIcons["other"],
			assign: function () {
				planet.assigned = true;
			},
			unassign: function () {
				planet.assigned = false;
			}
		};
		return planet;
	};

	var planets = {
		list: [],
		load: function(){
			return $http.get(remote + "/planets", {}, requestConfig).then(function(response){
				planets.list = response.data.map(toPlanets);
			});
		}
	};

	return planets;
}]);