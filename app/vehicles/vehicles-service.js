app.service("vehiclesService", ["$http", "remote", "requestConfig", "vehicleIcons", function($http, remote, requestConfig, vehicleIcons){
  var withIcons = function(data){
    var vehicle = {
      name: data.name,
      speed: data.speed,
      icon: vehicleIcons[data.name] || vehicleIcons["other"],
      remaining: data.total_no,
      total_no: data.total_no,
      max_distance: data.max_distance,
      assign: function () {
        --vehicle.remaining;
      },
      unassign: function () {
        ++vehicle.remaining;
      }
    };
    return vehicle;
  };
  var vehicles = {
    list: [],
    load: function(){
      $http.get(remote + "/vehicles", {}, requestConfig).then(function(response){
        vehicles.list = response.data.map(withIcons);
      });
    }
  };

  return vehicles;
}]);