// 1
const element = document.querySelector('#myText');
const value = element.value;
console.log(value);
// 2
const elemet1 = document.querySelector("#myText1");
elemet1.addEventListener("input", e=>{
    let value1 = e.target.value;
    console.log(value1);
});
// 3
const element2 = document.querySelector("#myText2");
const value2 = element2.value;
console.log(value2);
// 4
const element3 = document.querySelector('#myText3');
element3.addEventListener('input', e=>{
    const value3 = e.target.value;
  
    //\n:줄바꿈-> <br>태그로 변경
    const htmlStr = value3.split('\n').join('<br />');
    // const htmlStr = value3.replace(/(\n)/g,'<br>');
    console.log(htmlStr);
    document.querySelector(".log1").innerHTML = htmlStr;
});
// 5
const cbA = document.querySelector("#cbA");
const checkA = cbA.checked;
console.log(checkA);
const cbB = document.querySelector("#cbB");
const checkB = cbB.checked;
console.log(checkB);
// 6
const cb = document.querySelectorAll(".cb");
for(let i=0; i<cb.length; i++){
    cb[i].addEventListener('change' , e=>{
        const value6 = e.target.checked;
        const log2 = `체크박스 ${i}는 ${value6}로 변경되었음`;
        document.querySelector('.log2').innerHTML = log2;
    });
}
// 7
const element7 = document.querySelector('form#radioGroup');
const drinkValue = element7.drank.value;
const fruitValue = element7.fruit.value;
console.log(`drink의 선택값은 ${drinkValue}이다`);
console.log(`fruit 선택값은 ${fruitValue}이다`);
//radio버튼 변경값
element7.addEventListener('change', e=>{
    console.log(e.target.value);
});

//8 select박스 변경값 확인
const element8 = document.querySelector("#color");
element8.addEventListener('change', e=>{
    console.log(e.target.value);
});

//9
const element9 = document.querySelector('#myRange');
//현재값을 가져오기
let value3 = element9.value;
document.querySelector('.log3').innerHTML = `현재값은 ${value3}입니다.`;
//슬라이더의 변경값
element9.addEventListener('input', e=>{
    value3 = e.target.value;
    document.querySelector('.log3').innerHTML = `현재값은 ${value3}입니다.`;
});
//10 
const elemet10 = document.querySelector("#myColor");
//현재값을 가져오기
const value4 = elemet10.value;
console.log(value4);
//변경된 값을 가져오기
elemet10.addEventListener('change', e=>{
    let bg = e.target.value;
    document.body.style.backgroundColor = bg;
});

//11
const formElement = document.querySelector('#trans');
formElement.addEventListener('submit', e=>{
    const isYes = confirm('이 내용으로 전송하시겠습니까>');
    //confirm : BOM메소드
    //확인:true, 취소:false

    //취소를 선택한 경우
    if(isYes == false){
        //이벤트 해제
        e.preventDefault();
    }
});




