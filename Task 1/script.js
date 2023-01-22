var options = {
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  
    colors: ["#fe94e5", " #322a63"],
  
    series: [
      {
        name: "Discharge By Interval",
        type: "column",
        data: [0, 1, 16, 11, 5, 2, 0, 0, 0, 0],
      },
      {
        name: "Avg Time",
        type: "line",
        //timeformat is not getting passed in data 
        data: [ 0, 2.18, 2.57, 2.32, 1.45, , 0, 0, 0, 0],
      },
    ],
  
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "bottom",
        },
      },
    },
  
    chart: {
      height: 500,
      type: "line",
      stacked: true,
      colors: [" #322a63"],
    },
  
    stroke: {
      show: true,
      width: [0, 2],
      curve: "smooth",
      colors: [" #322a63"],
    },
  
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0, 1],
      hideOverflowingLabels: true,
      position: "bottom",
      style: {
        colors: ["#FE6E6F", " #322a63"],
      },
    },
    labels: [
      "12AM-06PM",
      "06AM-08AM",
      "08AM-10AM",
      "10AM-12PM",
      "12PM-02PM",
      "02PM-04PM",
      "04PM-06PM",
      "06PM-08PM",
      "08PM-10PM",
      "10PM-12AM",
    ],
  
    yaxis: [
      {
        show: false,
      },
      {
        opposite: false,
        show: false,
      },
    ],
  
    fill: {
      colors: ["#fe94e5"],
    },
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();




  var canvas = document.getElementById("myChart");
  var ctx = canvas.getContext("2d");

  var horizonalLinePlugin = {
    id: 'horizontalLine',
    afterDraw: function(chartInstance) {
    var yScale = chartInstance.scales["y-axis-0"];
    var canvas = chartInstance.chart;
    var ctx = canvas.ctx;
    var index;
    var line;
    var style;

    if (chartInstance.options.horizontalLine) {
      for (index = 0; index < chartInstance.options.horizontalLine.length; index++) {
        line = chartInstance.options.horizontalLine[index];

        if (!line.style) {
          style = "rgba(169,169,169, .6)";
        } else {
          style = line.style;
        }

        if (line.y) {
          yValue = yScale.getPixelForValue(line.y);
        } else {
          yValue = 0;
        }

        ctx.lineWidth = 3;

        if (yValue) {
          ctx.beginPath();
          ctx.moveTo(0, yValue);
          ctx.lineTo(canvas.width, yValue);
          ctx.strokeStyle = style;
          ctx.stroke();
        }

        if (line.text) {
          ctx.fillStyle = style;
          ctx.fillText(line.text, 0, yValue + ctx.lineWidth);
        }
      }
      return;
    }
  }
};

Chart.register(horizonalLinePlugin);
var myChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
    "horizontalLine": [{
      "y": 75.8,
      "style": "#ff0000",
      "text": "upper-limit"
    }, {
      "y": 62.3,
      "style": "#00ff00",
      "text": "avg"
    }, {
      "y": 48.8,
      "style": "#0000ff",
      "text": "lower-limit"
    }]
  }
});