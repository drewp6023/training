'use strict';

angular.module('core')
	.controller('DonationFormController', function($scope) {

		$scope.submit = function() {

			// Only submit the form if it is valid and has been touched.
			if ($scope.donationForm.$valid && !$scope.donationForm.$pristine) {
				$scope.$parent.donations.push($scope.donor);
				
				// Reset the model on the form and make sure the form is in it pristine state.
				$scope.donationForm.$setPristine();
				$scope.donor = null;
			}
		};

	});