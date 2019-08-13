/*
 ** Chartjs JS
 *** @version v1.4.0
 **** @copyright 2018 Pepdev.
 */
$(function() {
  // ==============================================================
  // Chart js Charts
  // ==============================================================
  window.chartColors = {
    primary: "rgb(52, 131, 255)",
    success: "rgb(11, 195, 110)",
    warning: "rgb(254, 193, 7)",
    danger: "rgb(251, 150, 120)",
    secondary: "rgb(205, 15, 216)",
    dark: "rgb(85, 85, 85)",
    grey: "rgb(201, 203, 207)"
  };

  var color = Chart.helpers.color;

  //Chartjs Line Chart

  //Chartjs Pie Chart
  var init_chart10 = function() {
    var config = {
      type: "pie",
      data: {
        datasets: [
          {
            data: [10, 20, 30, 40, 50],
            backgroundColor: [
              window.chartColors.primary,
              window.chartColors.secondary,
              window.chartColors.success,
              window.chartColors.warning,
              window.chartColors.danger
            ],
            label: "Dataset 1"
          }
        ],
        labels: ["Primary", "Secondary", "Success", "Warning", "Danger"]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };

    var ctx = document.getElementById("chart10").getContext("2d");
    window.myPie = new Chart(ctx, config);
  };
  //Chartjs Doughnut Chart
  var init_chart11 = function() {
    var config = {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [10, 20, 30, 40, 50],
            backgroundColor: [
              window.chartColors.primary,
              window.chartColors.secondary,
              window.chartColors.success,
              window.chartColors.warning,
              window.chartColors.danger
            ],
            label: "Dataset 1"
          }
        ],
        labels: ["Primary", "Secondary", "Success", "Warning", "Danger"]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };

    var ctx = document.getElementById("chart11").getContext("2d");
    window.myPie = new Chart(ctx, config);
  };
  //Chartjs Polar Area Chart
  var init_chart12 = function() {
    var config = {
      data: {
        datasets: [
          {
            data: [89, 78, 48, 96, 12],
            backgroundColor: [
              color(chartColors.primary)
                .alpha(0.5)
                .rgbString(),
              color(chartColors.secondary)
                .alpha(0.5)
                .rgbString(),
              color(chartColors.success)
                .alpha(0.5)
                .rgbString(),
              color(chartColors.warning)
                .alpha(0.5)
                .rgbString(),
              color(chartColors.danger)
                .alpha(0.5)
                .rgbString()
            ],
            label: "My dataset"
          }
        ],
        labels: ["Red", "Orange", "Yellow", "Green", "Blue"]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        title: {
          display: false,
          text: "Chart.js Polar Area Chart"
        },
        scale: {
          ticks: {
            beginAtZero: true
          },
          reverse: false
        },
        animation: {
          animateRotate: false,
          animateScale: true
        }
      }
    };

    var ctx = document.getElementById("chart12");
    window.myPolarArea = Chart.PolarArea(ctx, config);
  };
  //Chartjs Radar Chart
  var init_chart13 = function() {
    var config = {
      type: "radar",
      data: {
        labels: [
          ["Eating", "Dinner"],
          ["Drinking", "Water"],
          "Sleeping",
          ["Designing", "Graphics"],
          "Coding",
          "Cycling",
          "Running"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: color(window.chartColors.primary)
              .alpha(0.2)
              .rgbString(),
            borderColor: window.chartColors.primary,
            pointBackgroundColor: window.chartColors.primary,
            data: [20, 40, 60, 80, 100, 120]
          },
          {
            label: "My Second dataset",
            backgroundColor: color(window.chartColors.danger)
              .alpha(0.2)
              .rgbString(),
            borderColor: window.chartColors.danger,
            pointBackgroundColor: window.chartColors.danger,
            data: [10, 20, 30, 40, 50, 60]
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        title: {
          display: false
        },
        scale: {
          ticks: {
            beginAtZero: true
          }
        }
      }
    };
    window.myRadar = new Chart(document.getElementById("chart13"), config);
  };

  //Intilize Chartjs function
  init_chart10();
  init_chart11();
});
