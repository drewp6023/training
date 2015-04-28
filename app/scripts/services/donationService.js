'use strict';

angular.module('core')
	.factory('DonationService', function() {
		var donations = [];

		return {
			donations: donations
		};
	});