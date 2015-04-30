'use strict';

angular.module('core')
	.factory('UtilityService', ['$injector', function($injector) {
		var checkServiceInstance = function(serviceName) {
			return $injector.has(serviceName);
		};

		return {
			checkServiceInstance: checkServiceInstance
		};
	}]);