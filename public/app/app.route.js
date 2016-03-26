var RentACarApp = angular.module('appRoutes', ['ui.router'])

RentACarApp.config(["$stateProvider", "$locationProvider", function($stateProvider, $locationProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/pages/launchPage.html',
			controller:  'LaunchController',
			controllerAs: 'launch'
		})
		.state('find', {
			url: '/find',
			templateUrl: 'views/pages/rentACarPage.html',
			controller:  'FindController',
			controllerAs: 'find'
		})
		.state('cars', {
			url: '/cars/:param',
			templateUrl: 'views/pages/carsPage.html',
			controller: 'CarsController',
			controllerAs: 'carPages'
		})
		.state('dealers',{
			url: '/dealers',
			templateUrl: 'views/pages/dealersPage.html',
			controller: 'DealerController',
			controllerAs: 'dealerPage'
		})
		.state('rentmycar', {
			url: '/rentmycar',
			templateUrl: 'views/pages/putACarOnRentPage.html',
			controller: 'RentYourCarController',
			controllerAs: 'rentYourCar'
		})
		.state('rentform', {
			url: '/rentform/:param',
			templateUrl: 'views/pages/rentItPage.html',
			controller: 'RentCarController',
			controllerAs: 'rentCar'

		})
}])