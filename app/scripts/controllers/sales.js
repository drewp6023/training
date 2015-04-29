'use strict';

angular.module('core')
	.controller('SalesController', ['$scope', '$filter', 'SalesService', function($scope, $filter, SalesService) {
		
		// Set the default order by field and reverse order flag
		$scope.orderByField = 'date';
		$scope.reverseSort = true;

		$scope.sales = SalesService.getSales();

		// Default the number of records that are shown
		$scope.numOfRecords = 20;

		$scope.displayStats = function(panelObj) {
			var profitString = (panelObj.grossProfit >= 200) ? 'were' : 'weren\'t';

			$scope.statsMsg = 'The report created on ' + $filter('date')(panelObj.date, 'M-d-yyyy') + ' shows that month we ' + profitString + ' profitable.';
		};

	}]);