// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("footChart");
var myLineChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["을지로동", "신정3동", "장위3동", "반포3동", "하계2동", "수유3동", "면목5동", "신정3동", "인헌동", "을지로동"
    , "답십리2동", "면목5동", "청운효자동", "장안1동"
    ],
    datasets: [{
      label: "표준 편차",
      backgroundColor: "rgba(255,102,51,1)",
      borderColor: "rgba(255,102,51,1)",
      data: [-85, -30, -28, -15, -12, -11.5, -9, -8.4, -1, 3
      , 13, 19, 21, 40
      ],
      fill: false,
    }],
  },
  options: {
    title: {
      display: true,
      text: '표준 편차'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      xAxes: [{
        gridLines: {
        },
        ticks: {
        }
      }],
      yAxes: [{
        ticks: {
        },
        gridLines: {
        }
      }],
    },
  }
});
