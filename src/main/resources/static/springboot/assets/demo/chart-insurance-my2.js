// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var options = {
    responsive: false,
    maintainAspectRatio: true,
    scale: {
        ticks: {
            beginAtZero: true,
            max: 10
        }
    }
};

var mydata = {
    label: "나의 데이터",
     backgroundColor: 'rgba(255, 99, 132, 0.2)',
     borderColor: 'rgb(255, 99, 132)',
     pointBackgroundColor: 'rgb(255, 99, 132)',
     pointBorderColor: '#fff',
     pointHoverBackgroundColor: '#fff',
     pointHoverBorderColor: 'rgb(255, 99, 132)',
    data: [
        2, 3, 4
    ]
};

var avgdata = {
    label: "평균 데이터",
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)',
    data: [
        3, 5, 4
    ]
};

var dataLiteracy = {
    labels: [
        "상권변화 등급", "임대료 등급", "전염병 등급"
    ],
    datasets: [
        mydata, avgdata
    ],
};

var ctx = document.getElementById("analysisChart");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: dataLiteracy,
    options: options
});

console.log(myRadarChart);