
function my_func() {
    // 사과를 콘솔에 출력해보자
    // console.log($('#apple').text())      //사과
    // console.log($('#pineapple').text())     // 파인애플
    // console.log($('#pineapple + li').text())     // 참외
    // console.log($('ul > li.myList').text())      // 참외
    // console.log($('ul > *[class]').text())       // 참외
    // console.log($('[type = text]').attr('size'))
    // $('[type = text]').attr('size', 30)
    // 입력상자 안에 사용자가 입력한 값을 알아오려면
    // alert($('[type = text]').val())  // 사용자가 입력한 값을 알아오려면 val()
    // 입력상자안에 새로운 내용을 넣으려면?
    // $('[type = text]').val('변경해요')
    // console.log($('ol > li:last').text())
    console.log($('ol >li:eq(1)').text()) // idx 숫자자
}