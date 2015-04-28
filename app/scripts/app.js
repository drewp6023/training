'use strict';

angular.module('core', [
		'ui.router',
		'ngMessages'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	// Default to a route when given an unmatched url
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/app/views/main.html',
			controller: 'MainController',
			controllerAs: 'mc'
		})
		.state('sales', {
			url: '/sales',
			templateUrl: '/app/views/sales.html',
			controller: 'SalesController',
			controllerAs: 'sc'
		})
		.state('donations', {
			url: '/donations',
			templateUrl: '/app/views/donations.html',
			controller: 'DonationController',
			controllerAs: 'dc'
		});
}]);

