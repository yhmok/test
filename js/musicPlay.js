const frame = document.querySelector("section");
const lists = document.querySelectorAll('article');
const audio = document.querySelectorAll('audio');
const prev = document.querySelector('.btnPrev');
const next = document.querySelector('.btnNext');

const len = lists.length;
let num=0, active=0;

for(let i=0; i<len; i++){
    let pic = lists[i].querySelector('.pic');

    lists[i].style.transform = 'rotate('+(45*i)+'deg) translateY(-100vh)';
    pic.style.backgroundImage = `url(../music/member${i+1}.jpg)`;

    //play 버튼 click시
    const pause = lists[i].querySelector(".pause");
    const play = lists[i].querySelector(".play");
    const load = lists[i].querySelector(".load");
    play.addEventListener('click', function(e){
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        //closest("요소명") :가장 근접한 조상 요소 찾기
        //contains("클래스명"):클래스 이름 포함 여부
        if(isActive){ //true : <article class="on"></article>
            e.currentTarget.closest("article").querySelector(".pic").classList.add('on');
            e.currentTarget.closest("article").querySelector("audio").play();
        }
    });
    pause.addEventListener('click', e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){ //true : <article class="on"></article>
            e.currentTarget.closest("article").querySelector(".pic").classList.remove('on');
            e.currentTarget.closest("article").querySelector("audio").pause();
        }
    });
    load.addEventListener('click', e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){ //true : <article class="on"></article>
            e.currentTarget.closest("article").querySelector(".pic").classList.add('on');
            e.currentTarget.closest("article").querySelector("audio").load();
            e.currentTarget.closest("article").querySelector("audio").play();
        }
    });
}
//prev버튼 클릭시
prev.addEventListener('click', ()=>{
    initMusic();
    num++;
    frame.style.transform = 'rotate('+(45*num)+'deg)';
    for(let i=0; i<len; i++){
        lists[i].classList.remove("on");
    }
    //if(active==0){ 0, 1, 2, 3, ~ 7
    //     active=len-1; 8-1
    // } else {
    //     active--;
    // }
    (active==0)?active=len-1:active--; //삼항연산자 (조건문) ? true : false
    lists[active].classList.add('on');
});
//next버튼 클릭시
next.addEventListener('click', e=>{
    initMusic();
    num--;
    frame.style.transform='rotate('+(45*num)+'deg)';
    for(let i=0; i<len; i++){
        lists[i].classList.remove("on");
    }
    (active==(len-1))?active=0:active++; //삼항연산자 (조건문) ? true : false
    lists[active].classList.add('on');
});
function initMusic(){
    for(let i=0; i<len; i++){
        lists[i].querySelector("audio").pause();
        lists[i].querySelector("audio").load();
        lists[i].querySelector(".pic").classList.remove("on");
    }
}