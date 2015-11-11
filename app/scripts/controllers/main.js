'use strict';

/**
 * @ngdoc function
 * @name avionicsDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the avionicsDashboardApp
 */
angular.module('avionicsDashboardApp')
  .controller('MainCtrl', ['$scope', 'temperatureTimeData', function ($scope, temperatureTimeData) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    console.log(temperatureTimeData);
    // testing if d3 is working
    d3.select("body").style("background-color", "black");

  }]);
