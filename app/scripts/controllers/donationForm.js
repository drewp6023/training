'use strict';

angular.module('core')
	.controller('DonationFormController', ['$scope', '$timeout', 'DonationService', function($scope, $timeout, DonationService) {
		$scope.contactMethods = [
			{name: 'Phone'},
			{name: 'Email'},
			{name: 'Standard Mail'},
			{name: 'Carrier pigeon'}
		];

		$scope.submit = function() {
			// Only submit the form if it is valid and has been touched.
			if ($scope.donationForm.$valid && !$scope.donationForm.$pristine) {
				// Store the donor in the DonationService.donations object so we don't lose scope between controllers.
				DonationService.donations.push($scope.donor);

				// Reset the model on the form and make sure the form is in it pristine state.
				$scope.donationForm.$setPristine();
				$scope.donor = null;
				$scope.thankYouFlag = true;

				$timeout(function() {
					$scope.thankYouFlag = false;
				}, 2000);
			}
		};

	}]);