angular.module('appRoutes', ['ngRoute'])

.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

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
}])