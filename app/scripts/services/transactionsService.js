'use strict';

angular.module('core')
	.factory('TransactionsService', function() {
		var products = [
			{content: 'Large glass of lemonade', size: 'large', quantity: 0, price: 3, total: 0},
			{content: 'Medium glass of lemonade', size: 'medium', quantity: 0, price: 2, total: 0},
			{content: 'Health snack', size: 'small', quantity: 0, price: 1, total: 0},
			{content: 'Treat', size: 'xsmall', quantity: 0, price: 0.5, total: 0}
		];		

		var getProducts = function(index) {
			if (angular.isDefined(index)) {
				return products[index];
			} else {
				return products;
			}
		};

		var updateProduct = function(index) {
			var product = products[index];

			product.quantity++;
			product.total = product.quantity * product.price;
		};

		var getTotals = function() {
			var totals = {
				totalQuantity: 0,
				totalCost: 0
			};

			angular.forEach(products, function(obj) {
				totals.totalQuantity += obj.quantity;
				totals.totalCost += obj.total;
			});

			return totals;
		};

		return {
			getProducts: getProducts,
			updateProduct: updateProduct,
			getTotals: getTotals
		};		
	});