
function my_func(){
    // 현재 select 박스에서 선택된 option을 찾아
    // 그 option tag사이의 글자를 알아내서
    // div 태그사이에 그 글자를 넣으면 된다.
    console.log('변경되었어요')
    // $('select > option:selected').text()
    $('div').text( $('select > option:selected').text())
}