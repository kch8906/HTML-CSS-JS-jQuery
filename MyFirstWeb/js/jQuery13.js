
function my_func () {
    let title = $('#searchTitle').val()
    let key = '7db4c0b6d39e1a3630ad5ba2bb5ff691'

    $.ajax({
        async: true,
        url: 'https://dapi.kakao.com/v2/search/image',
        method: 'GET',
        headers: {
            Authorization: "KakaoAK " + '7db4c0b6d39e1a3630ad5ba2bb5ff691'
        },
        data: {
            query: title
        },
        timeout: 4000,
        dataType: 'json',

        success: function (result) {
            $('#myDiv').empty()
            console.log(result)
            let imgUrl = result['documents'][0]['thumbnail_url']
            let img = $('<img />').attr('src', imgUrl)
            $('#myDiv').append(img)
        },
        error:function () {
            alert("먼가 이상해")

        }
    })
}