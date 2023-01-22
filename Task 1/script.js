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