function my_func(){
    // button을 클릭하면 AJAX 호출
    // JavaScript code로 Open API를 호출
    // $.ajax()로 AJAX 호출한다. request에 대한 정보, 기타 등등에 정보
    // 이런 내용이 호출에 포함되어야 한다.
    // 이런 내용들은 여러 정보들이 들어가야 하기 때문에 JavaScript 객체로 표현해서
    // ajax()함수의 인자로 넘겨준다
    // key값은 정해져 있다.
    $.ajax({
        // 동기인지 비동기방식인지 명시 (default 비동기?)
        async: true,
        // 기본 URL
        url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
        // 입력 Parameter
        data: {
            key: "bb766ea620bdfea4481b09fdacce62fe",
            targetDt: "20220206"
        },
        // 호출방식
        method: 'GET',
        // timeout 설정(밀리세컨드 단위 1/1000초)
        // 정해진 시간안에 response가 오지 않으면 AJAX호출이 실패했다고 간주
        timeout: 3000,
        // 결과로 전달되는 JSON은 문자열. 이 문자열은 처리하기 힘들다
        dataType: 'json',       // 내부적으로 받은 json을 JavaScript 객체로 변환
        // 만약 성공하면 아래의 함수가 호출
        success: function (result){
            console.log(result);
            $('div').text(result)
        },
        // 만약 호출에 실패히면 아래의 함수가 호출
        error: function (){
            alert('먼가 이상해!!');
        }
    });
}
