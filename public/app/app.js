angular.module('RentACarApp', ['appRoutes', 'mainCtrl'])
.config(["$httpProvider", function($httpProvider){
	console.log("working")
}])