// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

const wave = {
  labels: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10", "3.11", "3.12", "3.13", "3.14", "3.15", "3.16", "3.17", "3.18", "3.19", "3.20", "3.21", "3.22", "3.23", "3.24", "3.25", "3.26", "3.27", "3.28", "3.29", "3.30", "3.31",
    "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10", "4.11", "4.12", "4.13", "4.14", "4.15", "4.16", "4.17", "4.18", "4.19", "4.20", "4.21", "4.22", "4.23", "4.24", "4.25", "4.26", "4.27", "4.28", "4.29", "4.30",
    "5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7", "5.8", "5.9", "5.10", "5.11", "5.12", "5.13", "5.14", "5.15", "5.16", "5.17", "5.18", "5.19", "5.20", "5.21", "5.22", "5.23", "5.24", "5.25", "5.26", "5.27", "5.28", "5.29"],
  datasets: [{
    label: "누적확진자(예측)",
    backgroundColor: "rgba(2,117,216,0.2)",
    borderColor: "rgba(2,117,216,1)",
    pointRadius: 2,
    pointBackgroundColor: "rgba(2,117,216,1)",
    pointBorderColor: "rgba(255,255,255,0.8)",
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(2,117,216,1)",
    pointHitRadius: 50,
    pointBorderWidth: 2,
    lineTension: 0.3,
    data: [4.5, 53.01, 203.31, 492.52, 927.63, 1490.01, 2144.32, 2847.5, 3556.03, 4230.84, 4840.22, 5361.02, 5778.65, 6086.3, 6283.72, 6375.81, 6371.25, 6281.22, 6118.24, 5895.37, 5625.44, 5320.55, 4991.76, 4648.85, 4300.26, 3953.04, 3612.94, 3284.47, 2971.03, 2675.07, 2398.17, 2141.22, 1904.53, 1687.94, 1490.94, 1312.75, 1152.38, 1008.72, 880.59, 766.77, 666.03, 577.19, 499.09, 430.65, 370.84, 318.73, 273.44, 234.17, 200.2, 170.88, 145.62, 123.92, 105.29, 89.34, 75.71, 64.07, 54.16, 45.72, 38.56, 32.48, 27.32, 22.97, 19.28, 16.18, 13.56, 11.35, 9.5, 7.94, 6.63, 5.53, 4.61, 3.84, 3.2, 2.66, 2.21, 1.84, 1.52, 1.26, 1.05, 0.87, 0.72, 0.6, 0.49, 0.41, 0.34, 0.28, 0.23, 0.19, 0.16, 0.13],
  }, {
    label: "누적확진자(실제)",
    data: [1, 4, 4, 5, 8, 12, 13, 13, 14, 16, 17, 17, 16, 13, 13, 13, 11, 8, 7, 80, 179, 406, 574, 805, 949, 1233, 1738, 2308, 3120, 3705, 4304, 5082, 5417, 5655, 5991, 6208, 6337, 6217, 5747, 5418, 4719, 4243, 3751, 2976, 2615, 2232, 1820, 1524, 1338, 1321, 1448, 1206, 1168, 1158, 1155, 1170, 1242, 1263, 1248, 1221, 1235, 1177, 1101, 1195, 1200, 1147, 1090, 1052, 945, 867, 819, 726, 650, 588, 529, 457, 398, 369, 330, 290, 260, 244, 228, 206, 191, 174, 161, 148, 130, 121],
    type: 'line',
  }]
};

const wave2 = {
  labels: ["7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "7.7", "7.8", "7.9", "7.10", "7.11", "7.12", "7.13", "7.14", "7.15", "7.16", "7.17", "7.18", "7.19", "7.20", "7.21", "7.22", "7.23", "7.24", "7.25", "7.26", "7.27", "7.28", "7.29", "7.30", "7.31",
    "8.1", "8.2", "8.3", "8.4", "8.5", "8.6", "8.7", "8.8", "8.9", "8.10", "8.11", "8.12", "8.13", "8.14", "8.15", "8.16", "8.17", "8.18", "8.19", "8.20", "8.21", "8.22", "8.23", "8.24", "8.25", "8.26", "8.27", "8.28", "8.29", "8.30", "8.31",
    "9.1", "9.2", "9.3", "9.4", "9.5", "9.6", "9.7", "9.8", "9.9", "9.10", "9.11", "9.12", "9.13", "9.14", "9.15", "9.16", "9.17", "9.18", "9.19", "9.20", "9.21", "9.22", "9.23", "9.24", "9.25", "9.26", "9.27", "9.28", "9.29", "9.30"],
  datasets: [{
    label: "누적확진자(예측)",
    backgroundColor: "rgba(2,117,216,0.2)",
    borderColor: "rgba(2,117,216,1)",
    pointRadius: 2,
    pointBackgroundColor: "rgba(2,117,216,1)",
    pointBorderColor: "rgba(255,255,255,0.8)",
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(2,117,216,1)",
    pointHitRadius: 50,
    pointBorderWidth: 2,
    lineTension: 0.3,
    data: [4.38, 50.14, 187.02, 440.62, 807.11, 1260.83, 1764.68, 2279.05, 2768.0, 3202.86, 3563.59, 3838.67, 4024.12, 4122.01, 4138.89, 4084.26, 3969.3, 3805.79, 3605.28, 3378.58, 3135.38, 2884.04, 2631.54, 2383.49, 2144.24, 1916.99, 1703.97, 1506.53, 1325.35, 1160.56, 1011.87, 878.65, 760.07, 655.14, 562.8, 481.93, 411.44, 350.26, 297.38, 251.83, 212.74, 179.3, 150.78, 126.54, 105.97, 88.58, 73.91, 61.55, 51.18, 42.49, 35.21, 29.14, 24.08, 19.87, 16.38, 13.48, 11.08, 9.1, 7.46, 6.11, 5.0, 4.09, 3.34, 2.72, 2.22, 1.81, 1.47, 1.2, 0.97, 0.79, 0.64, 0.52, 0.42, 0.34, 0.27, 0.22, 0.18, 0.14, 0.12, 0.09, 0.08, 0.06, 0.05, 0.04, 0.03, 0.03, 0.02, 0.02, 0.01, 0.01, 0.01],
  }, {
    label: "누적확진자(실제)",
    data: [54, 117, 180, 241, 287, 331, 394, 443, 488, 523, 567, 629, 608, 584, 582, 581, 574, 564, 527, 523, 541, 565, 562, 613, 638, 624, 591, 579, 558, 560, 565, 550, 510, 485, 477, 407, 369, 387, 395, 375, 391, 409, 434, 507, 650, 895, 1059, 1262, 1539, 1784, 2072, 2376, 2739, 2951, 3175, 3392, 3667, 3759, 3885, 3938, 3889, 3836, 3779, 3642, 3443, 3345, 3232, 3031, 2726, 2511, 2343, 2220, 2108, 1994, 1836, 1747, 1662, 1647, 1606, 1597, 1543, 1457, 1363, 1297, 1286, 1279, 1231, 1220, 1157, 1042],
    type: 'line',
  }]
};

const wave3 = {
  labels: ["11.1", "11.2", "11.3", "11.4", "11.5", "11.6", "11.7", "11.8", "11.9", "11.10", "11.11", "11.12", "11.13", "11.14", "11.15", "11.16", "11.17", "11.18", "11.19", "11.20", "11.21", "11.22", "11.23", "11.24", "11.25", "11.26", "11.27", "11.28", "11.29", "11.30",
    "12.1", "12.2", "12.3", "12.4", "12.5", "12.6", "12.7", "12.8", "12.9", "12.10", "12.11", "12.12", "12.13", "12.14", "12.15", "12.16", "12.17", "12.18", "12.19", "12.20", "12.21", "12.22", "12.23", "12.24", "12.25", "12.26", "12.27", "12.28", "12.29", "12.30", "12.31",
    "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "1.10", "1.11", "1.12", "1.13", "1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "1.21", "1.22", "1.23", "1.24", "1.25", "1.26", "1.27", "1.28", "1.29", "1.30", "1.31"],
  datasets: [{
    label: "누적확진자(예측)",
    backgroundColor: "rgba(2,117,216,0.2)",
    borderColor: "rgba(2,117,216,1)",
    pointRadius: 2,
    pointBackgroundColor: "rgba(2,117,216,1)",
    pointBorderColor: "rgba(255,255,255,0.8)",
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(2,117,216,1)",
    pointHitRadius: 50,
    pointBorderWidth: 2,
    lineTension: 0.3,
    data: [4.63, 56.01, 220.76, 549.68, 1064.11, 1756.8, 2598.63, 3546.85, 4552.67, 5567.36, 6546.51, 7452.71, 8256.88, 8938.51, 9485.29, 9892.17, 10160.23, 10295.43, 10307.42, 10208.38, 10012.08, 9732.99, 9385.68, 8984.21, 8541.84, 8070.68, 7581.62, 7084.16, 6586.48, 6095.41, 5616.55, 5154.34, 4712.18, 4292.54, 3897.09, 3526.83, 3182.15, 2862.98, 2568.88, 2299.08, 2052.61, 1828.32, 1624.93, 1441.13, 1275.54, 1126.81, 993.59, 874.57, 768.51, 674.21, 590.56, 516.51, 451.1, 393.43, 342.67, 298.07, 258.96, 224.7, 194.76, 168.61, 145.82, 125.98, 108.72, 93.74, 80.74, 69.49, 59.74, 51.32, 44.05, 37.78, 32.38, 27.72, 23.72, 20.28, 17.33, 14.8, 12.62, 10.76, 9.17, 7.81, 6.65, 5.65, 4.81, 4.08, 3.47, 2.94, 2.5, 2.12, 1.79, 1.52, 1.29],
  }, {
    label: "누적확진자(실제)",
    data: [1, 4, 4, 5, 8, 12, 13, 13, 14, 16, 17, 17, 16, 13, 13, 13, 11, 8, 7, 80, 179, 406, 574, 805, 949, 1233, 1738, 2308, 3120, 3705, 4304, 5082, 5417, 5655, 5991, 6208, 6337, 6217, 5747, 5418, 4719, 4243, 3751, 2976, 2615, 2232, 1820, 1524, 1338, 1321, 1448, 1206, 1168, 1158, 1155, 1170, 1242, 1263, 1248, 1221, 1235, 1177, 1101, 1195, 1200, 1147, 1090, 1052, 945, 867, 819, 726, 650, 588, 529, 457, 398, 369, 330, 290, 260, 244, 228, 206, 191, 174, 161, 148, 130, 121],
    type: 'line',
  }]
};

var wave_cfg = {
  labels: [],
  datasets: [{
    label: "누적확진자(예측)",
    backgroundColor: "rgba(2,117,216,0.2)",
    borderColor: "rgba(2,117,216,1)",
    pointRadius: 2,
    pointBackgroundColor: "rgba(2,117,216,1)",
    pointBorderColor: "rgba(255,255,255,0.8)",
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(2,117,216,1)",
    pointHitRadius: 50,
    pointBorderWidth: 2,
    lineTension: 0.3,
    data: [],
  }, {
    label: "누적확진자(실제)",
    data: [],
    type: 'line',
  }]
};

//차트 그래프 분석 초기값 셋팅
document.getElementById("v_Duration").innerHTML = 91;
document.getElementById("v_Population").innerHTML = 51821669;
document.getElementById("v_avgDuration").innerHTML = 12;
document.getElementById("v_Recovery").innerHTML = 84.24;
document.getElementById("v_Death").innerHTML = 2.32;
document.getElementById("v_Gamma").innerHTML = 3.9;
document.getElementById("v_Beta").innerHTML = 6.0;
document.getElementById("v_ObsMaxInspected").innerHTML = 6337;
document.getElementById("v_ObsSumMaxInspected").innerHTML = 128524;
document.getElementById("v_MaxInspected").innerHTML = 6375;
document.getElementById("v_SumMaxInspected").innerHTML = 136152;
document.getElementById("v_Rate").innerHTML = 0.3;


var ctx = document.getElementById("virusChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: wave,
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'day'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 8
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 3
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

function btn_wave1_click() {
  myLineChart.data = wave;
  myLineChart.update();
  document.getElementById("v_Duration").innerHTML = 91;
  document.getElementById("v_Population").innerHTML = 51821669;
  document.getElementById("v_avgDuration").innerHTML = 12;
  document.getElementById("v_Recovery").innerHTML = 84.24;
  document.getElementById("v_Death").innerHTML = 2.32;
  document.getElementById("v_Gamma").innerHTML = 3.9;
  document.getElementById("v_Beta").innerHTML = 6;
  document.getElementById("v_ObsMaxInspected").innerHTML = 6337;
  document.getElementById("v_ObsSumMaxInspected").innerHTML = 128524;
  document.getElementById("v_MaxInspected").innerHTML = 6375;
  document.getElementById("v_SumMaxInspected").innerHTML = 136152;
  document.getElementById("v_Rate").innerHTML = 0.3;
}

function btn_wave2_click() {
  myLineChart.data = wave2;
  myLineChart.update();
  document.getElementById("v_Duration").innerHTML = 91;
  document.getElementById("v_Population").innerHTML = 51821669;
  document.getElementById("v_avgDuration").innerHTML = 12;
  document.getElementById("v_Recovery").innerHTML = 95.42;
  document.getElementById("v_Death").innerHTML = 1.30;
  document.getElementById("v_Gamma").innerHTML = 3.9;
  document.getElementById("v_Beta").innerHTML = 6;
  document.getElementById("v_ObsMaxInspected").innerHTML = 3938;
  document.getElementById("v_ObsSumMaxInspected").innerHTML = 125101;
  document.getElementById("v_MaxInspected").innerHTML = 4138;
  document.getElementById("v_SumMaxInspected").innerHTML = 79040;
  document.getElementById("v_Rate").innerHTML = 0.2;
}

function btn_wave3_click() {
  myLineChart.data = wave3;
  myLineChart.update();
  document.getElementById("v_Duration").innerHTML = 91;
  document.getElementById("v_Population").innerHTML = 51821669;
  document.getElementById("v_avgDuration").innerHTML = 12;
  document.getElementById("v_Recovery").innerHTML = 74.93;
  document.getElementById("v_Death").innerHTML = 1.61;
  document.getElementById("v_Gamma").innerHTML = 3.9;
  document.getElementById("v_Beta").innerHTML = 6;
  document.getElementById("v_ObsMaxInspected").innerHTML = 12508;
  document.getElementById("v_ObsSumMaxInspected").innerHTML = 584965;
  document.getElementById("v_MaxInspected").innerHTML = 10307;
  document.getElementById("v_SumMaxInspected").innerHTML = 248779;
  document.getElementById("v_Rate").innerHTML = 0.5;
}

function btn_wave4_click() {
  alert('준비중입니다.');
  document.getElementById("v_Duration").innerHTML = 0;
  document.getElementById("v_Population").innerHTML = 0;
  document.getElementById("v_avgDuration").innerHTML = 0;
  document.getElementById("v_Recovery").innerHTML = 0;
  document.getElementById("v_Death").innerHTML = 0;
  document.getElementById("v_Gamma").innerHTML = 0;
  document.getElementById("v_Beta").innerHTML = 0;
  document.getElementById("v_ObsMaxInspected").innerHTML = 0;
  document.getElementById("v_ObsSumMaxInspected").innerHTML = 0;
  document.getElementById("v_MaxInspected").innerHTML = 0;
  document.getElementById("v_SumMaxInspected").innerHTML = 0;
  document.getElementById("v_Rate").innerHTML = 0;
}

function btn_cfg_click() {
  var ratio_alpha = document.getElementById("recov_rate").value;
  var ratio_mu = document.getElementById("death_rate").value;
  var ratio_beta = 6;
  var ratio_gamma = 3.9;
  var total_day = 91;
  var population = 51821669;

  var desfunction = 0;
  var incfunction = 0;
  var iresult = 0;

  var i = 1;
  for(i; i<total_day+1; i++){
    desfunction = Math.exp(-1*(ratio_alpha+ratio_mu)*(i/365));
    incfunction = Math.pow((ratio_beta*(i/365)),ratio_gamma);
    iresult = population * desfunction * incfunction;
    wave_cfg.datasets[0].data.push(iresult);
    wave_cfg.datasets[1].data.push(1000);
  }
  console.log(wave_cfg.datasets[0].data);

  myLineChart.data = wave_cfg;
  myLineChart.update();
}



