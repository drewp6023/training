'use strict';

angular.module('core')
	.controller('DonationController', function($scope, DonationService) {

		$scope.donations = DonationService.donations;
	
	});