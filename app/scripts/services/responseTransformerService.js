'use strict';

angular.module('core')
	.factory('responseTransformerService', function() {
		return function(data, headers) {
			var data = angular.fromJson(data);

			// Add to the data
			data.unhealthySnack = 20;

			return data;
		}
	});