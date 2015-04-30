'use strict';

angular.module('core')
	.controller('TransactionsController', ['$scope', 'TransactionsService', '$http', function($scope, TransactionsService) {

		$scope.products = TransactionsService.getProducts();
		$scope.selectedProducts = [];

		var updateProducts = function() {
			$scope.products = TransactionsService.getProducts();
		};

		$scope.addProduct = function(index) {
			// Update the product
			TransactionsService.updateProduct(index);

			// Add selected item to selected products variable
			$scope.selectedProducts.push($scope.products.items[index].content);
		};

		$scope.resetProducts = function() {
			$scope.selectedProducts = [];
			TransactionsService.resetProducts();

			// Update the products object with the cleared parameters
			updateProducts();
		};

	}]);