let now = new Date(); //오늘 날짜를 Date()객체를 사용해서 now객체를 만든다
let firstDay = new Date('2020-03-23'); //처음 만난 날의 날짜정보를 firstDay객체로 만든다

let toNow = now.getTime(); //날짜에 대한 밀리초를 리턴한다. 1초 -> 1000
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst; //처음 만난날과 오늘 사이의 차이(밀리초)

let passedDay = Math.round(passedTime/(24*60*60*1000)); //밀리초 -> 일로 변환
document.querySelector('#accent').innerText = passedDay+'일';

let someday = new Date(firstDay);
let year = someday.getFullYear();
let month = someday.getMonth()+1; //month는 0부터 가져옴
let date = someday.getDate();
document.querySelector("#date000").innerText = year+"년 "+month+"월 "+date+"일";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days){
    let future = toFirst + (days*(24*60*60*1000));
    let someday = new Date(future);
    let year = someday.getFullYear();
    let month = someday.getMonth()+1;
    let date = someday.getDate();
    document.querySelector("#date"+days).innerText = year+"년 "+month+"월 "+date+"일";
}
