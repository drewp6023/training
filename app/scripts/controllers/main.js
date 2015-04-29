'use strict';

angular.module('core')
	.controller('MainController', ['$scope', function($scope) {
		$scope.testing = 'Hello World';

		console.log($scope.testing);
	}]);