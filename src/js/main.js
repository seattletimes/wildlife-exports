// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var Chartist = require("./lib/chartist/dist/chartist.min.js");
var $ = require("jquery");
var dot = require("./lib/dot");
var table = dot.compile(require("./_table.html"));

$(".table").html(table(exportData.slice(0,10)));

$(".table").on("click", ".seemore", function() {
  $(".table").html(table(exportData));
  $(".seemore").addClass("hidden");
  $(".seeless").removeClass("hidden");
});
$(".table").on("click", ".seeless", function() {
  console.log(exportData)
  $(".table").html(table(exportData.slice(0,10)));
  $(".seeless").addClass("hidden");
  $(".seemore").removeClass("hidden");
});

// console.log(Chartist);
//
// new Chartist.Bar('.ct-chart', {
//   labels: ["1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015"],
//   series: [
//     [25,26,16,21,5,9,8,6,8,7,5,5,4,5,41,17,10],
//     [6,112,3,8,1,1,10,2,2,0,0,0,0,0,0,2,0],
//     [6,106,0,1,0,7,1,1,4,0,0,0,2,3,4,3,3],
//     [8,33,10,21,6,3,10,1,6,11,0,3,1,1,16,8,0],
//     [2,4,4,2,3,10,2,7,6,12,5,12,5,1,9,3,8],
//     [9,13,16,15,3,43,20,42,22,45,12,15,26,18,26,31,20]
//   ]
// }, {
//   seriesBarDistance: 12,
//   stackBars: true,
//   axisY: {
//     labelInterpolationFnc: function(value) {
//       return (value);
//     }
//   }
// }).on('draw', function(data) {
//   if(data.type === 'bar') {
//     data.element.attr({
//       style: 'stroke-width: 30px'
//     });
//   }
// });

new Chartist.Bar('.ct-chart', {
    labels: ["'99", "'00", "'01", "'02", "'03", "'04", "'05", "'06", "'07", "'08", "'09", "'10", "'11", "'12", "'13", "'14", "'15"],
    series: [{
      name: 'Bear',
      data: [25, 26, 16, 21, 5, 9, 8, 6, 8, 7, 5, 5, 4, 5, 41, 17, 10]
    }, {
      name: 'Caribou',
      data: [6, 112, 3, 8, 1, 1, 10, 2, 2, 0, 0, 0, 0, 0, 0, 2, 0]
    }, {
      name: 'Sheep',
      data: [6, 106, 0, 1, 0, 7, 1, 1, 4, 0, 0, 0, 2, 3, 4, 3, 3]
    }, {
      name: 'Moose',
      data: [8, 33, 10, 21, 6, 3, 10, 1, 6, 11, 0, 3, 1, 1, 16, 8, 0]
    }, {
      name: 'Deer',
      data: [2, 4, 4, 2, 3, 10, 2, 7, 6, 12, 5, 12, 5, 1, 9, 3, 8]
    }, {
      name: 'All other animals',
      data: [9, 13, 16, 15, 3, 43, 20, 42, 22, 45, 12, 15, 26, 18, 26, 31, 20]
    }]
  }, {
    // Default mobile configuration
    stackBars: true,

    // axisY: {
    //   offset: 20,
    //   onlyInteger: true
    // },
    axisX: {
   labelInterpolationFnc: function(value, index) {
     return index % 1 === 0 ? value : null;
   }
 },

labelOffset: 50,
  labelDirection: 'explode'
  }
  // , [
  //   // Options override for media > 400px
  //   ['screen and (min-width: 400px)', {
  //     reverseData: true,
  //     horizontalBars: true,
  //     axisX: {
  //       labelInterpolationFnc: Chartist.noop
  //     },
  //     axisY: {
  //       offset: 60
  //     }
  //   }],
  //   // Options override for media > 800px
  //   ['screen and (min-width: 800px)', {
  //     stackBars: false,
  //     seriesBarDistance: 10
  //   }],
  //   // Options override for media > 1000px
  //   ['screen and (min-width: 1000px)', {
  //     reverseData: false,
  //     horizontalBars: false,
  //     seriesBarDistance: 15
  //   }]
  // ]
);

var $chart = $('.ct-chart');

var $toolTip = $chart
  .append('<div class="tooltip"></div>')
  .find('.tooltip')
  .hide();

$chart.on('mouseenter', '.ct-bar', function() {
  var $bar = $(this),
    value = $bar.attr('ct:value'),
    seriesName = $bar.parent().attr('ct:series-name');
  $toolTip.html(seriesName + '<br>' + value).show();
});

$chart.on('mouseleave', '.ct-bar', function() {
  $toolTip.hide();
});

$chart.on('mousemove', function(event) {
  $toolTip.css({
    left: (event.offsetX || event.originalEvent.layerX) - $toolTip.width() / 2 - 10,
    top: (event.offsetY || event.originalEvent.layerY) - $toolTip.height() - 40
  });
});
