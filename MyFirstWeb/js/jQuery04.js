
// 버튼을 누르면 체크박스에서 선택된 사람이
// 콘솔에 한줄에 한명씩
function my_func() {

    // console.log($('[type=checkbox]:checked + span').text())
    // 이렇게 하면 선택된 element를 하나하나 처리할 방법이 없다.
    // $('selector').each()  // 선택된 element가 여러개이면 각각에 대해서 each안에 들어있는 람다함수를 호출
    $('[type=checkbox]:checked + span').each(function (idx,item){
        // idx 0부터 1씩 증가하는 index값
        // item은 현재 선택된 Element의 document object(jQuery 객체가 아니다)
        // 현재 item을 지칭하는 것은 span이것을 jQuery 객체로 변환시켜 사용해야지 .method를 사용할 수 있다.
        console.log($(item).text())
    })

}