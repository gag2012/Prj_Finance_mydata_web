<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.14.3/dist/xlsx.full.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datasource@0.1.0"></script>

var ctx = document.getElementById("virusChart");
//Type, data, options
var chart = new Chart(ctx, {
  type: 'bar',
  plugins: [ChartDataSource],
  options: {
    datasource: {
      url: '../../../../data/corona_infected_person.xlsx'
    }

  }

});