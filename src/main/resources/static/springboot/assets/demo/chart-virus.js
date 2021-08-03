<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.14.3/dist/xlsx.full.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datasource@0.1.0"></script>

<script>
var ctx = document.getElementById("virusChart");
//Type, data, options
var chartGraph = new Chart (ctx, {
    type: 'line',
    data: {
        datasets: [{
            borderWidth: 6,
            borderColor: 'rgba(146, 242, 42, 0.85)',
            fill: false
        }, {
            borderWidth: 6,
            borderColor: 'rgba(207, 0, 15, 0.85)',
            fill: false
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: 'ENCARTUCHAMENTO 05'
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 100,
                    min: 0,
                }
            }]
        },
        plugins: {
            datasource: {
                url: '../../../../data/corona_infected_person.xlsx'
            }
        }
    }
});
</script>