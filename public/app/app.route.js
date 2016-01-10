var RentACarApp = angular.module('appRoutes', ['ngRoute'])

RentACarApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'views/pages/launchPage.html',
			controller:  'MainController',
			controllerAs: 'main'
		})
		.when('/find', {
			templateUrl: 'views/pages/rentACarPage.html',
			controller:  'MainController',
			controllerAs: 'main'
		})
		.when('/cars', {
			templateUrl: 'views/pages/carsPage.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.when('/dealers',{
			templateUrl: 'views/pages/dealersPage.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.when('/rentmycar', {
			templateUrl: 'views/pages/putACarOnRentPage.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.when('/rentform', {
			templateUrl: 'views/pages/rentItPage.html',
			controller: 'MainController',
			controllerAs: 'main'

		})
}])