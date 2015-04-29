'use strict';

angular.module('core')
	.controller('DonationController', ['$scope', 'DonationService', function($scope, DonationService) {

		$scope.donations = DonationService.donations;
	
	}]);