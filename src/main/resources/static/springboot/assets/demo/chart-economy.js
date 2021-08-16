// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var options = {
                 title: {
                   display: true,
                   text: '(2019 ~ 2020)'
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
               };

var eco1 = {
   labels: [
        '숙박 및 음식점업', '예술, 스포츠 및 여가관련 서비스업', '보건업 및 사회복지 서비스업', '협회 및 단체, 수리 및 기타 개인 서비스업'
        , '전기, 가스, 증기 및 공기조절 공급업', '교육 서비스업', '운수 및 창고업', '공공행정, 국방 및 사회보장 행정'
        , '사업시설 관리, 사업 지원 및 임대 서비스업', '수도, 하수 및 폐기물 처리, 원료 재생업', '부동산업', '도매 및 소매업'
        , '건설업', '제조업', '광업', '전문,과학 및 기술 서비스업'
        , '정보통신업', '금융 및 보험업', '농업, 입업 및 어업'
    ],
    datasets: [{
        label: "연간 영업이익 추정 변화율 (단위:%)",
        backgroundColor: "rgba(255,102,51,1)",
        borderColor: "rgba(255,102,51,1)",
        data: [
            -783.08, -667.66, -478.46, -146.19
            , -138.67, -77.46, -20.61, -19.51
            , -13.67, -11.67, -7.49, 19.85
            , 29.92, 41.66, 44.70, 90.97
            , 115.80, 137.88, 265.67
        ],
        fill: false,
    }],
};

var eco2 = {
   labels: [
        '생활서비스', '일반유통', '종합유통', '전문서비스', '기타', '문화레저', '음식'
    ],
    datasets: [{
        label: "연간 매출액 추정 손실액 (단위:백만원)",
        backgroundColor: "rgba(255,102,51,1)",
        borderColor: "rgba(255,102,51,1)",
        data: [
            109952.73, 97091.48, 48271.02, 45827.92, 24270.27, 3054.81, 2225.11
        ],
        fill: false,
    }],
};


var ctx = document.getElementById("ecoDamageChart");
var ecoDChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: eco1,
  options: options
});

function btn_eco1_click(){
    ecoDChart.data = eco1;
    ecoDChart.update();
    document.getElementById("textEcoGraph").innerHTML = '업종별 영업이익 (2020, 2019)';
}

function btn_eco2_click(){
    ecoDChart.data = eco2;
    ecoDChart.update();
    document.getElementById("textEcoGraph").innerHTML = '연간 매출액 추정 손실액 (대분류)';
}