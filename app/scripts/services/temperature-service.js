'use strict';

angular.module('avionicsDashboardApp')
  .factory('temperatureTimeFactory', function ($timeout, $interval) {

    var data = {
        temperature : null,
        time : null
    }

    var generateTemperatureInRange = function(min, max) {
        return Math.random() * (max - min) + min;
    }

    $interval(function(){
        data.temperature = generateTemperatureInRange(10, 70);
        data.time = (new Date());
    }, Math.random() * (1000 - 200) + 100);

    return data;
});