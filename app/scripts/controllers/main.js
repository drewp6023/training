'use strict';

angular.module('core')
	.controller('MainController', function($scope) {
		$scope.testing = 'Hello World';

		console.log($scope.testing);
	});