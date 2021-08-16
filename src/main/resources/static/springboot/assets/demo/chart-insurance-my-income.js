// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("insuranceIncomeChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [""],
    datasets: [{
      type: 'line',
      label: "2019년 영업이익",
      backgroundColor: "rgba(51, 153, 255, 0.8)",
      borderColor: "rgba(51, 153, 255, 0.8)",
      data: [120.0235704, 67.25138559, -43.32872857, 112.5095, 112.2728706, 229.55, 229.037505
      , 487.2786404, 1230.266992, 147.1983445, 307.5069816, 407.2968282, 379.5962133, 178.725144
      , 339.6509231, 137.4268905, 1210.597018, -171.12728, -190.7175517
      ],
      fill: false,
      },{
      type: 'bar',
      label: "2020년 영업이익",
      backgroundColor: "rgba(255,153,0,0.9)",
      borderColor: "rgba(255,153,0,0.9)",
      data: [-819.854915, -381.7620811, -250.6410625, 90.5585, 25.31063415, -88.76152941, 181.8429686
      , 430.4196136, 1138.079408, 127.0773203, 368.556657, 529.1594081, 537.7362246, 385.6997169
      , 491.4710455, 262.4458952, 2879.769406, -421.3001598, 315.9636786
      ],
      fill: false,
    }],
  },
  options: {
    title: {
      display: true,
      text: '해당 년도 영업이익 (단위:천원)'
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