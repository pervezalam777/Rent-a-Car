angular.module('RentACarApp', ['appRoutes', 'mainCtrl', 'carDirectives'])
.config(["$httpProvider", function($httpProvider){
	console.log("working")
}])