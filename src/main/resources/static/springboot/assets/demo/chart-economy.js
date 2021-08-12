// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("ecoDamageChart");
var myLineChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["숙박 및 음식점업", "예술, 스포츠 및 여가관련 서비스업", "보건업 및 사회복지 서비스업", "보건업 및 사회복지 서비스업", "교육 서비스업", "전기, 가스, 증기 및 공기조절 공급업", "운수 및 창고업"
    ,"수도, 하수 및 폐기물 처리, 원료 재생업", "부동산업", "사업시설 관리, 사업 지원 및 임대 서비스업", "도매 및 소매업", "건설업", "제조업", "정보통신업"
    ,"광업", "전문, 과학 및 기술 서비스업", "금융 및 보험업", "협회 및 단체, 수리 및 기타 개인 서비스업", "농업, 임업 및 어업"],
    datasets: [{
      label: "영업이익 손해율",
      backgroundColor: [
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)"
      ],
      borderColor: [
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(255,102,51,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)",
        "rgba(2,117,216,1)"
      ]
      data: [-1193.645529, -612.6794598, -421.0335419, -133.3894592, -64.33639316, -61.21155584, -48.60600607
      , -31.13613679, -17.12530994, -12.44901601, 20.08750296, 30.12840038, 38.01696792, 81.26692333
      , 90.35519044, 91.31281701, 140.8320622, 198.4703338, 406.533829],
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
