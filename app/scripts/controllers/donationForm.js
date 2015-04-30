'use strict';

angular.module('core')
	.controller('DonationFormController', ['$scope', '$timeout', 'DonationService', 'GeolocationService', function($scope, $timeout, DonationService, GeolocationService) {

		$scope.submit = function() {
			// Only submit the form if it is valid and has been touched.
			if ($scope.donationForm.$valid && !$scope.donationForm.$pristine) {

				GeolocationService.getCoordinates()
					.then(function(promise) {
						$scope.donor.latitude = promise.latitude;
						$scope.donor.longitude = promise.longitude;

						// Store the donor in the DonationService.donations object so we don't lose scope between controllers.
						DonationService.donations.push($scope.donor);

						// Reset the model on the form and make sure the form is in it pristine state.
						$scope.thankYouFlag = true;

						$timeout(function() {
							$scope.thankYouFlag = false;
							$scope.donationForm.$setPristine();
							$scope.donor = null;							
						}, 2000);						
					})
					.catch(function(promise) {
						console.log(promise);
					});				
			}
		};

		$scope.contactMethods = [
			{name: 'Phone'},
			{name: 'Email'},
			{name: 'Standard Mail'},
			{name: 'Carrier pigeon'}
		];		

	}]);