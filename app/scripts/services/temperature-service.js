'use strict';

angular.module('avionicsDashboardApp')
  .factory('temperatureTimeData', function () {
    var temperatureTimeData =
    [
        {
            time: "17:00",
            temperature: "12"
        },
        {
            time: "17:01",
            temperature: "11"
        },
        {
            time: "17:03",
            temperature: "9"
        },
        {
            time: "17:10",
            temperature: "6"
        },
        {
            time: "17:12",
            temperature: "10"
        },
        {
            time: "17:13",
            temperature: "12"
        },
        {
            time: "17:15",
            temperature: "20"
        },
        {
            time: "17:20",
            temperature: "22"
        },
        {
            time: "17:21",
            temperature: "11"
        },
        {
            time: "17:22",
            temperature: "9"
        },
        {
            time: "17:24",
            temperature: "3"
        }
    ];
    return temperatureTimeData;
});
