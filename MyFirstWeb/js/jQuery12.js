// 영화 상세 정보 (감독명, 주연배우 이름) 해보기

function my_func() {
    let my_date = $('#searchDate').val()
    if (my_date == ""){
        alert('검색을 위해 날짜를 선택해 주세요')
    } else {
        let modified_date = my_date.replace(/-/g, '')
        //AJAX 호출
        $.ajax({
            async: true,  // 동기 혹은 비동기 호출을 지정 (default : true)
            // 동기방식 : 프로그램하기가 편하다 (순차적인 처리가 가능)
            // 비동기방식 : 효율적이지만 프로그램 처리가 힘들다(이벤트 처리방식)
            url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
            data: {
                key: 'bb766ea620bdfea4481b09fdacce62fe',
                targetDt: modified_date
            },
            method: 'GET',
            timeout: 3000,
            dataType: "json",
            success: function (result) {
                console.log(result)
                $('tbody').empty()
                let data_list = result['boxOfficeResult']["dailyBoxOfficeList"]
                for(let i=0; i<10; i++) {
                    let tr = $('<tr></tr>')
                    let rankTd = $('<td></td>').text(data_list[i]["rank"])
                    let imgTd = $('<td></td>')
                    let img = $('<img />')
                    let searchTitle = data_list[i]["movieNm"] + '포스터'
                    imgTd.append(img)
                    $.ajax({
                        async: true,
                        url: 'https://dapi.kakao.com/v2/search/image',
                        method: 'GET',
                        headers: {
                            Authorization: "KakaoAK " + '7db4c0b6d39e1a3630ad5ba2bb5ff691'
                        },
                        data: {
                            query: searchTitle
                        },
                        timeout: 4000,
                        dataType: 'json',
                        success: function (result) {
                            let imgUrl = result['documents'][0]['thumbnail_url']
                            img.attr('src', imgUrl)
                        },
                        error:function () {
                            alert("먼가 이상해")
                        }
                    })
                    let titleTd = $('<td></td>').text(data_list[i]["movieNm"])
                    let openTd = $('<td></td>').text(data_list[i]["openTd"])
                    let accAudiTd = $('<td></td>').text(data_list[i]["audiAcc"])
                    let delTd = $('<td></td>')
                    let delBtn = $('<input />').attr('type', 'button').attr('value','삭제')
                    // btn-primary:파란색, btn-warning:노란색, btn-info:초록색, btn-danger:빨간색
                    delBtn.addClass('btn btn-danger')
                    // jQuery객체 이벤트 처리 방식 : on()
                    delBtn.on('click', function () {
                        // 현재 이벤트가 발생한 Event Source의 document Object => this
                        $(this).parent().parent().remove()
                    })
                    delTd.append(delBtn)
                    tr.append(rankTd)
                    tr.append(imgTd)
                    tr.append(titleTd)
                    tr.append(openTd)
                    tr.append(accAudiTd)
                    tr.append(delTd)
                    $('tbody').append(tr)
                }
            },
            error: function () {
                alert('먼가 이상해요')
            }
        })
    }
}