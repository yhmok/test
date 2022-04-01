const pics = document.querySelectorAll(".pic"); //배열 -> index
//pics[0] = <img src="img4/tree-1-thumb.jpg" data-src = "img4/tree-1.jpg" class="pic" alt="">
//pics[1] = <img src="img4/tree-2-thumb.jpg" data-src = "img4/tree-2.jpg" class="pic" alt="">...
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.getElementById("lightboxImage");
for(let i=0; i<pics.length; i++){
    pics[i].addEventListener('click', showLightBox);
}

function showLightBox(){
    //이벤트가 발생한 자신 e.target
    //getAttribute : 속성값을 가져온다
    let bigImage = this.getAttribute("data-src"); 
console.log(bigImage);
    //setAttribute : 속성값을 바꿔주는메소드
    lightboxImage.setAttribute('src', bigImage);
    lightbox.style.display='block';
} 
lightbox.onclick = function(){
    lightbox.style.display = 'none';
}  