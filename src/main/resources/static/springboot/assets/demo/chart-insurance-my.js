// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("analysisChart");
var myLineChart = new Chart(ctx, {
  type: 'radar',
  data: data = {
          labels: [
            '매출액',
            '영업이익',
            '상권변화 등급',
            '임대료 등급',
            '전염병 등급',
          ],
          datasets: [{
            label: '나의 데이터',
            data: [3, 1, 5, 4, 3],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
          }, {
            label: '평균 데이터',
            data: [4, 5, 4, 4, 3],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
          }]
  },
  options: {
      elements: {
        line: {
          borderWidth: 3
        }
      },
      scales: {
            ticks: {
                beginAtZero: true,
                max: 8,
                min: 0,
                stepSize: 1
            }
      }
  }
});
