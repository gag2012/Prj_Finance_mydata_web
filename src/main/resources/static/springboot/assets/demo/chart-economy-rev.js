// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("ecoRevenueChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["숙박 및 음식점업", "예술, 스포츠 및 여가관련 서비스업", "보건업 및 사회복지 서비스업", "보건업 및 사회복지 서비스업", "교육 서비스업", "전기, 가스, 증기 및 공기조절 공급업", "운수 및 창고업"
    ,"수도, 하수 및 폐기물 처리, 원료 재생업", "부동산업", "사업시설 관리, 사업 지원 및 임대 서비스업", "도매 및 소매업", "건설업", "제조업", "정보통신업"
    ,"광업", "전문, 과학 및 기술 서비스업", "금융 및 보험업", "협회 및 단체, 수리 및 기타 개인 서비스업", "농업, 임업 및 어업"],
    datasets: [{
      type: 'line',
      label: "2019년 영업이익",
      backgroundColor: "rgba(255,102,51,1)",
      borderColor: "rgba(255,102,51,1)",
      data: [120.0235704, 67.25138559, -43.32872857, 112.5095, 112.2728706, 229.55, 229.037505
      , 487.2786404, 1230.266992, 147.1983445, 307.5069816, 407.2968282, 379.5962133, 178.725144
      , 339.6509231, 137.4268905, 1210.597018, -171.12728, -190.7175517
      ],
      fill: false,
      },{
      type: 'bar',
      label: "2020년 영업이익",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
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
      text: '해당 년도 영업이익(단위:천원)'
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


var ctx = document.getElementById("ecoRevenueChart2");
var myLineChart2 = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["숙박 및 음식점업", "예술, 스포츠 및 여가관련 서비스업", "보건업 및 사회복지 서비스업", "보건업 및 사회복지 서비스업", "교육 서비스업", "전기, 가스, 증기 및 공기조절 공급업", "운수 및 창고업"
    ,"수도, 하수 및 폐기물 처리, 원료 재생업", "부동산업", "사업시설 관리, 사업 지원 및 임대 서비스업", "도매 및 소매업", "건설업", "제조업", "정보통신업"
    ,"광업", "전문, 과학 및 기술 서비스업", "금융 및 보험업", "협회 및 단체, 수리 및 기타 개인 서비스업", "농업, 임업 및 어업"],
    datasets: [{
      type: 'line',
      label: "2018년 영업이익",
      backgroundColor: "rgba(255,102,51,1)",
      borderColor: "rgba(255,102,51,1)",
      data: [120.0235704, 67.25138559, -43.32872857, 112.5095, 112.2728706, 229.55, 229.037505
      , 487.2786404, 1230.266992, 147.1983445, 307.5069816, 407.2968282, 379.5962133, 178.725144
      , 339.6509231, 137.4268905, 1210.597018, -171.12728, -190.7175517
      ],
      fill: false,
      },{
      type: 'bar',
      label: "2020년 영업이익",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [23.50788574, 149.397065, -27.5224697, 52.60425, 129.227151, 1018.234065, 178.9349735
      , 407.8756577, 1122.178625, 149.0168142, 308.2294737, 408.1480426, 366.2532683, 132.8424796
      , 625.0053913, 137.8978594, 1247.420387, -38.48484734, 466.7262759
      ],
      fill: false,
    }],
  },
  options: {
    title: {
      display: true,
      text: '해당 년도 영업이익(단위:천원)'
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