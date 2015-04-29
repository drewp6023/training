'use strict';
/**
 *  Directive to be used across all page headers.
 **/
angular.module('core')
    .directive('diCar', function() {
        return {
            //Only allowing element and attribute implementations
            restrict: 'EA',
            scope: {
                //Parent execution binding strategy
                diAction: '&',
            },
            //Inline template for simplicity
            template: '<button>Call Parent</button>',
            /**
             * Handles user interaction with the directive.
             * @param scope: the scope connected with the directive
             * @param elem: the rendered directive element
             **/
            link: function(scope, elem) {
                //Could be written this way
               /*scope.callParentExecution = function() {
                    scope.diAction({make: 'Toyota', model: 'Sienna'});
                }; */
     
                //Could also be written this way
                elem.bind('click', function() {
                    //Forcing a kick-off of the Angular digest loop
                    scope.$apply(function() {
                        scope.diAction({make: 'Toyota', model: 'Sienna'});
                    }); 
                });
            }
        };
    });