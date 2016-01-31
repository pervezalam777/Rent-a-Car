/*Factory */
angular.module('carSerivces', [])

.factory("carService", ["$http",function($http){
	var service = {};

	service.fetchCarList = function(){
		return $http.get("../../app/models/cars.json")
	}

	service.fetchCarDetails = function(carId){
		return $http.get("../../app/models/" + carId + ".json")
	}
	
	return service;


}])