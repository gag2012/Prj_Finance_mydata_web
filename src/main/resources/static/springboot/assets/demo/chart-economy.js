// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("ecoDamageChart");
var myLineChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["숙박 및 음식점업", "예술, 스포츠 및 여가관련 서비스업", "보건업 및 사회복지 서비스업", "보건업 및 사회복지 서비스업", "교육 서비스업", "전기, 가스, 증기 및 공기조절 공급업", "운수 및 창고업"
    ,"농업, 임업 및 어업"],
    datasets: [{
      label: "영업이익",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [-1193.645529, -612.6794598, -421.0335419, -133.3894592, 18339, -64.33639316, -61.21155584
      ,406.533829],
      fill: false,
    }],
  },
  options: {
    title: {
      display: true,
      text: '영업이익 손해율(2018-2020)'
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
