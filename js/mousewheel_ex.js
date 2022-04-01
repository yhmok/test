const menu = document.querySelectorAll('#menu>li');
const el = document.querySelectorAll('section');
let nextScroll;

//마우스 휠 작동시
for(let i=0; i<el.length; i++){
    //휠이벤트 발생시 실행
    el[i].addEventListener('mousewheel', mouseHandle);
    el[i].addEventListener('DOMMouseScroll', mouseHandle);
    //마우스 move 이벤트 발생시 실행
    el[i].addEventListener('mousemove', e=>{
        let posX = e.pageX; //마우스의 x좌표
        let posY = e.pageY;

        const p11 = document.querySelector('.p11');
        const p12 = document.querySelector('.p12');
        const p13 = document.querySelector('.p13');
        const p21 = document.querySelector('.p21');
        const p22 = document.querySelector('.p22');
        const p31 = document.querySelector('.p31');
        const p32 = document.querySelector('.p32');
        const p33 = document.querySelector('.p33');
        const p41 = document.querySelector('.p41');
        const p42 = document.querySelector('.p42');

        //마우스가 움직일때 꽃잎이 같이 움직이게끔 설정
        //나누는 수가 클수록 움직이 적다
        //원래좌표에서 (-)하면 마우스와 반대방향
        //            (+)하면 마우스와 같은방향
        p11.setAttribute('style', 'right:'+ (20+(posX/30)) + 'px; bottom:' + (20+(posY/30)) + 'px');
        p12.setAttribute('style', 'right:'+ (130-(posX/30)) + 'px; bottom:' + (-40-(posY/30)) + 'px');
        p13.setAttribute('style', 'right:'+ (60-(posX/30)) + 'px; top:' + (180-(posY/30)) + 'px');

        p21.setAttribute('style', 'right:'+ (-180-(posX/30)) + 'px; bottom:' + (-480-(posY/30)) + 'px');
        p22.setAttribute('style', 'right:'+ (130+(posX/50)) + 'px; bottom:' + (-40+(posY/50)) + 'px');

        p31.setAttribute('style', 'right:'+ (180-(posX/30)) + 'px; bottom:' + (30-(posY/30)) + 'px');
        p32.setAttribute('style', 'right:'+ (110+(posX/30)) + 'px; bottom:' + (-270+(posY/30)) + 'px');
        p33.setAttribute('style', 'right:'+ (-70-(posX/30)) + 'px; top:' + (-130-(posY/30)) + 'px');

        p41.setAttribute('style', 'right:'+ (20+(posX/30)) + 'px; bottom:' + (-120+(posY/30)) + 'px');
        p42.setAttribute('style', 'right:'+ (0-(posX/30)) + 'px; bottom:' + (-180-(posY/30)) + 'px');
    });
}
//메뉴 클릭시
for(let i=0; i<menu.length; i++){
    menu[i].addEventListener('click', e=>{
        e.preventDefault();
        trans = el[i].offsetTop;
        window.scroll({top:trans});
        //메뉴 전체에 클래스명 삭제
        for(j=0;j<menu.length;j++){
            menu[j].classList.remove('on');
        }
        //클릭한 메뉴에만 on추가
        menu[i].classList.add('on');
    });
}
function mouseHandle(e){
    e.preventDefault(); //scroll이벤트 방지
    let delta = e.wheelDelta; //이벤트 객체에서 받는 휠 움직임 정보
  console.log(e.target);
    //휠이벤트가 발생한 index값을 찾기
    let p = e.target.parentElement.parentElement; //e.target에 휠이벤트가 발생한 자신의 부모 - #wrap
    //parentElement : 부모가 요소
    //parentNode : 부모가 요소가 아닌경우도 찾음.body안에 <script></script>태그 같은것도 Node로 봄
    //Node>Element
    
    let index = Array.prototype.indexOf.call(p.children, e.target.parentElement);
    let eleArr = document.querySelectorAll('section');

    //현재 스크롤TOP의 위치
    // currentScroll = document.documentElement.scrollTop;
    //휠을 위로 올렸을 경우
    if(delta>0){
        if(index>0){
            nextScroll = eleArr[index-1].offsetTop;
        }
    } else {
        if(index<eleArr.length-1){
            nextScroll = eleArr[index+1].offsetTop;
        }
    }
    window.scroll({top: nextScroll});
}