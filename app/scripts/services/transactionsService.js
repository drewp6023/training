'use strict';

angular.module('core')
	.factory('TransactionsService', function() {
		var products = {
			items: [
				{content: 'Large glass of lemonade', size: 'large', quantity: 0, price: 3},
				{content: 'Medium glass of lemonade', size: 'medium', quantity: 0, price: 2},
				{content: 'Healthy snack', size: 'small', quantity: 0, price: 1},
				{content: 'Treat', size: 'xsmall', quantity: 0, price: 0.5}
			],
			totals: {
				quantity: 0,
				cost: 0				
			}
		};	

		var getProducts = function() {
			return products;
		};

		var getItems = function() {
			return products.items;
		};

		var getTotals = function() {
			return products.totals;
		};

		var updateProduct = function(index) {
			var product = products.items[index];
			var totals = products.totals;

			product.quantity++;
			totals.quantity++;
			totals.cost += product.price;
		};
		
		var resetProducts = function() {
			console.log(products);
			products = {
				items: [
					{content: 'Large glass of lemonade', size: 'large', quantity: 0, price: 3},
					{content: 'Medium glass of lemonade', size: 'medium', quantity: 0, price: 2},
					{content: 'Healthy snack', size: 'small', quantity: 0, price: 1},
					{content: 'Treat', size: 'xsmall', quantity: 0, price: 0.5}
				],
				totals: {
					quantity: 0,
					cost: 0				
				}
			};
		};

		return {
			getProducts: getProducts,
			updateProduct: updateProduct,
			getItems: getItems,
			getTotals: getTotals,
			resetProducts: resetProducts
		};		
	});