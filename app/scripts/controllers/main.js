'use strict';

/**
 * @ngdoc function
 * @name avionicsDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the avionicsDashboardApp
 */
angular.module('avionicsDashboardApp')
  .controller('MainCtrl', ['$scope', 'temperatureTimeFactory', function ($scope, temperatureTimeFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.temperatureTimeData = temperatureTimeFactory;
    
    $scope.$watch('temperatureTimeData', function(newVal, oldVal){
        console.log(newVal);
    }, true);

    // testing if d3 is working
    d3.select("body").style("border-color", "white");

  }]);
