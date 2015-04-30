'use strict';

angular.module('core', [
		'ui.router',
		'ngMessages',
		'ngAnimate'
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
		})
		.state('transactions', {
			url: '/transactions',
			templateUrl: '/app/views/transactions.html',
			controller: 'TransactionsController',
			controllerAs: 'tc'
		})
		.state('supplies', {
			url: '/supplies',
			templateUrl: '/app/views/supplies.html',
			controller: 'SuppliesController',
			controllerAs: 'sc'
		});
}]);

