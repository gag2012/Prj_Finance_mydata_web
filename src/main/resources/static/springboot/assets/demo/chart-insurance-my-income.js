// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("insuranceAllChart");
var myLineChart = new Chart(ctx, {
  type: 'radar',
  data: {
            labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
            datasets: [{
                data: [20, 10, 4, 2]
            }]
        }
  },
  options: {
  scale: {
          // Hides the scale
          display: false
      }
  }
});
