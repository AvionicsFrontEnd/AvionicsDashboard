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
//    d3.select("body").style("background-color", "black");

    var WIDTH=1000,
	HEIGHT=500,
	MARGINS={
	    top:20,
	    right:20,
	    bottom:20,
	    left:50};
    var parseDate=d3.time.format("%H:%M").parse;
    var xScale=d3.time.scale()
	.range([MARGINS.left,WIDTH-MARGINS.right]);
    var yScale=d3.scale.linear()
	.range([HEIGHT-MARGINS.top, MARGINS.bottom]);
    var xAxis=d3.svg.axis()
	.scale(xScale)
	.tickFormat(d3.time.format("%H:%M"));
    var yAxis=d3.svg.axis()
	.scale(yScale)
	.orient("left");
    var line=d3.svg.line()
	.x(function(d){return xScale(d.time);})
	.y(function(d){return yScale(d.temperature);})
	.interpolate("basis");
    var plot=d3.select("body")
	.append("svg")
	.attr("width", WIDTH)
	.attr("height",HEIGHT);

    temperatureTimeData.forEach(function(d){
	    d.time=parseDate(d.time);	
    });
    xScale.domain(d3.extent(temperatureTimeData, function(d){
	return d.time;
    }));
    yScale.domain(d3.extent(temperatureTimeData, function(d){
	return parseInt(d.temperature);
    }));

    plot.append("svg:g")
	.attr("transform","translate(0,"
	    +(HEIGHT-MARGINS.bottom)+")")
	.call(xAxis);
    plot.append("svg:g")
	.attr("transform", "translate("+(MARGINS.left)+",0)")
	.call(yAxis);
    plot.append("svg:path")
	.attr('d',line(temperatureTimeData))
	.attr('stroke','blue')
	.attr('stroke-width',2)
	.attr('fill','none');
  }]);
