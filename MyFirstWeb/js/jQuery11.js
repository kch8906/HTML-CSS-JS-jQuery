
function my_func() {
    //AJAX호출
    $.ajax({
        async: true,  // 동기 혹은 비동기 호출을 지정 (default : true)
                     // 동기방식 : 프로그램하기가 편하다 (순차적인 처리가 가능)
                     // 비동기방식 : 효율적이지만 프로그램 처리가 힘들다(이벤트 처리방식)
        url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
        data: {
            key: 'bb766ea620bdfea4481b09fdacce62fe',
            targetDt: '20220209'
        },
        method: 'GET',
        timeout: 3000,
        dataType: "json",
        success: function (result) {
            let m_title = result["boxOfficeResult"]["dailyBoxOfficeList"][0]["movieNm"]
            $('#myDiv').text(m_title)
        },
        error: function () {
            alert('먼가 이상해요')
        }
    })
}