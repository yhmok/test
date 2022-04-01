setInterval(updateTime, 1000);

function updateTime(){
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    //시간 앞에 0붙이기
    if(hr<10){
        hr = '0'+hr;
    }
    if(min<10){
        min = '0'+min;
    }
    if(sec<10) {
        sec = '0'+sec;
    }
    //p태그에 출력
    document.getElementById('h01').innerHTML = hr + ' : ';
    document.getElementById('h02').innerHTML = min + ' : ';
    document.getElementById('h03').innerHTML = sec ;

    //화면 배경색 변경. 시간을 넘겨줌
    backChange(hr);
}

function backChange(hr){ //시간을 받아서 배경색 바꾸는 작업 
    console.log(hr);
    hr = 18;
    if(hr>=5&&hr<11){
        document.getElementById('wrap').classList.remove();
        document.getElementById('wrap').classList.add('morning');
    } else if(hr>=11&&hr<16) {
        document.getElementById('wrap').classList.remove();
        document.getElementById('wrap').classList.add('afternoon');
    } else if(hr>=16&&hr<20){
        document.getElementById('wrap').classList.remove();
        document.getElementById('wrap').classList.add('evening');
    } else {
        document.getElementById('wrap').classList.remove();
        document.getElementById('wrap').classList.add('night');
    }
}

