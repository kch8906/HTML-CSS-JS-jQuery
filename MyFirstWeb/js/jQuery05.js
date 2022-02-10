

// method
// css(), text(), val(), attr(), remove(), each(), ...


function my_func(){
    // $('ul > li:eq(1)').css('color','red')
    // $('ul > li:eq(1)').css('background-color','yellow')
    // css는 한번에 1개의 style만 적용해서 그림을 그린다
    $('ul > li:eq(1)').addClass('myStyle')
    // css()는 잘 사용되지 않고. 주로 addClass()가 사용된다.
    // removeClass()는 class속성을 삭제한다
}