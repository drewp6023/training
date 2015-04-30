'use strict';

angular.module('core')
	.controller('SuppliesController', ['$scope', 'SuppliesService', 'UtilityService', function($scope, SuppliesService, UtilityService) {	

		// if (UtilityService.checkServiceInstance('SuppliesService')) {
		// 	SuppliesService.getSupplies();
		// } else {
		// 	SuppliesService.getSupplyQuantities()
		// 		.then(function(promise) {
		// 			$scope.quantities = promise.data.initial;
		// 		})
		// 		.catch(function() {
		// 			console.log('Error');
		// 		});
		// }
	}]);