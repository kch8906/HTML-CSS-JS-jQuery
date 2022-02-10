
function my_func(){
    //attr() , removeAttr()
    // $('[type=text]').val('소리없는 아우성!!')
    // $('[type=text]').attr('value', '변경변경!')
    // $('[type=text]').attr('disabled', 'disabled')
    // $('[type=text]').removeAttr('disabled')
    // 삭제에 대한 method는 2개가 있다.
    // remove(), empty()
    // remove() : 자기가신과 자신의 후손을 모두 지운다.
    // empty() : 자기자신은 삭제하지 않고 후손만 지운다.
    // $('ul').remove()
    // $('ul').empty()
    // selector를 이용해서 element를 선택하고 method를 적용하는 방식
    // 새로운 element 만들기
    // $('<li></li>').text('신사임당')        // element => <li>신사임당</li>
    // $('<img />').attr('src', 'img/lion.png') //<img src="img/lion.png">
    // 이렇게 element를 생성을 하면 method를 통해서 화면에 추가할 수 있다.
    // 붙이기 위한 method를 알아야 붙일 수 있다.
    // append(), prepend(), after(), before()
    // append(): 자식으로 추가하고 맨 마지막 자식으로 추가
    // let li = $('<li></li>').text('신사임당')
    // $('ul').append(li)
    // prepend() : 자식으로 추가하고 맨 처음 자식으로 추가
    // $('ul').prepend('신사임당')
    // after() : 형제로 추가하고 바로 뒤에 추가
    // before() : 형제로 추가하고 바로 앞에 추가
    // $('ul > li:last').before(li)
    // $('ul > li:eq(1)').after(li)

}

//Event Handler
function my_func2(){
    // this : event handler 안에서 의미를 가지는 객체
    //        event source에 대한 문서객체(document object)를 지칭
    // $(selector or document object) => jQuery 객체로 변환
    // alert($(this).text()) => jQuery event에서만 사용이 가능
}