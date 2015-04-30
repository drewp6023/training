'use strict';

angular.module('core')
	.factory('GeolocationService', ['$q', function($q) {

		var getCoordinates = function() {
			var deffered = $q.defer();

			var success = function(obj) {
				var latitude = obj.coords.latitude;
				var longitude = obj.coords.longitude;

				deffered.resolve({latitude: latitude, longitude: longitude});
			};

			var error = function(obj) {
				deffered.reject('There has been an error.');
			};

			navigator = window.navigator.geolocation.getCurrentPosition(success, error);

			return deffered.promise;
		}

		return {
			getCoordinates: getCoordinates
		};
	}]);