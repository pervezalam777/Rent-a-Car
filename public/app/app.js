angular.module('RentACarApp', ['appRoutes', 'mainCtrl', 'carDirectives', 'rentCarDirectives'])
.config(["$httpProvider", function($httpProvider){
	console.log("working")
}])