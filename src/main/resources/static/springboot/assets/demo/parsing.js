$(document).ready(function () {
	$.ajax({
		url: 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=S2NIjtDSM5uZLf8tguznRUdoEfCvq3FyzJWM9nJHBQEQr%2B0hD6nqX9bpwG4BP2VmzObrSmsHOBgUAwgEN6SKOQ%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20200310&endCreateDt=20200315', //통신을 원하는 URL주소를 입력합니다
		type: 'GET', //통신 방식을 지정합니다
		dataType: 'xml',//서버로부터 받을 데이터 타입을 입력합니다.
		success: function (response) { // 통신 성공시 호출해야할 함수
		  xmlParsing(response);
		},
		error: function (xhr, status, msg) { // 통신 실패시 호출해야하는 함수
		  console.log('상태값 : ' + status + ' Http에러메시지 : ' + msg);
		},
	});

	function xmlParsing(data) {
		var infoList = ``;
		$(data).find('row').each(function(index, item){
			//console.log(item)
			infoList += `
				<tr>
					<td>${$(this).find('STATE_DT').text()}</td>
					<td>${$(this).find('DECIDE_CNT').text()}</td>
					<td>${$(this).find('CLEAR_CNT').text()}</td>
					<td>${$(this).find('DEATH_CNT').text()}</td>
					<td>${$(this).find('ACC_DEF_RATE').text()}</td>
				</tr>
			`;
			$('#info').empty().append(infoList);
			$('tr:first').css('background', 'darkgray').css('color', 'white')
		});
	}
});