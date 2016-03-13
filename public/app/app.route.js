var RentACarApp = angular.module('appRoutes', ['ngRoute'])

RentACarApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'views/pages/launchPage.html',
			controller:  'LaunchController',
			controllerAs: 'launch'
		})
		.when('/find', {
			templateUrl: 'views/pages/rentACarPage.html',
			controller:  'FindController',
			controllerAs: 'find'
		})
		.when('/cars/:param', {
			templateUrl: 'views/pages/carsPage.html',
			controller: 'CarsController',
			controllerAs: 'carPages'
		})
		.when('/dealers',{
			templateUrl: 'views/pages/dealersPage.html',
			controller: 'DealerController',
			controllerAs: 'dealerPage'
		})
		.when('/rentmycar', {
			templateUrl: 'views/pages/putACarOnRentPage.html',
			controller: 'RentYourCarController',
			controllerAs: 'rentYourCar'
		})
		.when('/rentform/:param', {
			templateUrl: 'views/pages/rentItPage.html',
			controller: 'RentCarController',
			controllerAs: 'rentCar'

		})
}])