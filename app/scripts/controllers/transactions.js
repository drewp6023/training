'use strict';

angular.module('core')
	.controller('TransactionsController', ['$scope', 'TransactionsService', function($scope, TransactionsService) {

		$scope.products = TransactionsService.getProducts();
		$scope.selectedProducts = [];

		$scope.addProduct = function(index) {
			// Update the product
			TransactionsService.updateProduct(index);
			
			// Get the product totals and store it in scope
			$scope.totals = TransactionsService.getTotals();

			// Add selected item to selected products variable
			$scope.selectedProducts.push(TransactionsService.getProducts(index).content);
		};

		$scope.clearTransactions = function() {
			$scope.products = TransactionsService.resetProducts();
			$scope.selectedProducts = [];
			$scope.totals = null;
		};

	}]);