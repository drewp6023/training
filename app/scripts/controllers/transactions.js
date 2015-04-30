'use strict';

angular.module('core')
	.controller('TransactionsController', ['$scope', 'TransactionsService', function($scope, TransactionsService) {

		$scope.products = TransactionsService.getProducts();
		$scope.selectedProducts = [];

		$scope.addProduct = function(index) {
			// Update the product
			TransactionsService.updateProduct(index);

			// Add selected item to selected products variable
			$scope.selectedProducts.push($scope.products.items[index].content);
		};

		$scope.resetProducts = function() {
			$scope.selectedProducts = [];
			TransactionsService.resetProducts();
			$scope.products = TransactionsService.getProducts();
		};

	}]);