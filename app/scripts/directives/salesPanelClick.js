'use strict';
/**
 *  Directive to be used across all page headers.
 **/
angular.module('core')
    .directive('salesPanelClick', function() {
        return {
            restrict: 'EA',
            scope: {
                fireClick: '&',
                recordData: '='
            },
            priority: '10',
            link: function(scope, elem, attrs, SalesController) {
                //Could be written this way
               /*$scope.callParentExecution = function() {
                    $scope.diAction({make: 'Toyota', model: 'Sienna'});
                }; */
     
                //Could also be written this way
                elem.bind('click', function() {
                    //Forcing a kick-off of the Angular digest loop
                    scope.$apply(function() {
                        console.log(SalesController);
                        scope.fireClick({record: scope.recordData});
                    }); 
                });
            }
        };
    });