'use strict';

angular.module('core')
	.controller('SalesController', function($scope) {
		
		$scope.sales = [{
		    date: '2012-01-01',
		    quantity: '500',
		    netSale: '750',
		    costOfGoods: '400'
		  }, {
		      date: '2012-02-01',
		    quantity: '425',
		    netSale: '650',
		    costOfGoods: '300'      
		  }, {
		      date: '2012-03-01',
		    quantity: '300',
		    netSale: '450',
		    costOfGoods: '300'
		  }, {
		      date: '2012-04-01',
		    quantity: '600',
		    netSale: '750',
		    costOfGoods: '400'
		  }, {
		      date: '2012-05-01',
		    quantity: '100',
		    netSale: '250',
		    costOfGoods: '175'      
		  }, {
		      date: '2012-06-01',
		    quantity: '100',
		    netSale: '250',
		    costOfGoods: '150'          
		  }, {
		      date: '2012-07-01',
		    quantity: '425',
		    netSale: '750',
		    costOfGoods: '400'      
		  }, {
		      date: '2012-08-01',
		    quantity: '300',
		    netSale: '450',
		    costOfGoods: '250'
		  }, {
		      date: '2012-09-01',
		    quantity: '650',
		    netSale: '850',
		    costOfGoods: '650'      
		  }, {
		      date: '2012-10-01',
		    quantity: '100',
		    netSale: '350',
		    costOfGoods: '250'
		  }, {
		      date: '2012-11-01',
		    quantity: '100',
		    netSale: '350',
		    costOfGoods: '250'          
		  }, {
		      date: '2012-12-01',
		    quantity: '300',
		    netSale: '450',
		    costOfGoods: '250'      
		  }, {
		    date: '2013-01-01',
		    quantity: '300',
		    netSale: '550',
		    costOfGoods: '350'
		  }, {
		      date: '2013-02-01',
		    quantity: '650',
		    netSale: '750',
		    costOfGoods: '450'      
		  }, {
		      date: '2013-03-01',
		    quantity: '300',
		    netSale: '450',
		    costOfGoods: '250'
		  }, {
		      date: '2013-04-01',
		    quantity: '650',
		    netSale: '850',
		    costOfGoods: '650'
		  }, {
		      date: '2013-05-01',
		    quantity: '100',
		    netSale: '350',
		    costOfGoods: '150'      
		  }, {
		      date: '2013-06-01',
		    quantity: '100',
		    netSale: '250',
		    costOfGoods: '150'          
		  }, {
		      date: '2013-07-01',
		    quantity: '500',
		    netSale: '350',
		    costOfGoods: '250'      
		  }, {
		      date: '2013-08-01',
		    quantity: '500',
		    netSale: '750',
		    costOfGoods: '550'
		  }, {
		      date: '2013-09-01',
		    quantity: '650',
		    netSale: '850',
		    costOfGoods: '550'      
		  }, {
		      date: '2013-10-01',
		    quantity: '300',
		    netSale: '550',
		    costOfGoods: '350'
		  }, {
		      date: '2013-11-01',
		    quantity: '100',
		    netSale: '350',
		    costOfGoods: '250'          
		  }, {
		      date: '2013-12-01',
		    quantity: '150',
		    netSale: '450',
		    costOfGoods: '150'
		  }];

		// Default the number of records that are shown
		$scope.numOfRecords = 20;

		$scope.sortOrder = function() {

		};

	});