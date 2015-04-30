'use strict';

angular.module('core')
	.factory('SuppliesService', ['$http', 'responseTransformerService', function($http, responseTransformerService) {

		var getSupplies = function() {
			$http({
				method: 'GET',
				url: 'data/initial-supplies', 
				transformResponse: responseTransformerService
			})
			.then(function(promise) {
				console.log(promise.data);
			})
			.catch(function() {

			});
		};

		var getSupplyQuantities = function() {
			return $http.get('api/suppliesQuantities.json');
		};

		return {
			getSupplies: getSupplies,
			getSupplyQuantities: getSupplyQuantities
		};
	}]);