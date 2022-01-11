const divemove=document.querySelector('.oval');
let hight=0;
function moveoval(){
    hight+=50;
    divemove.style.top=hight+'px';

    if(hight===400){
        clearInterval(lov);
    }

}
 const lov= setInterval(moveoval,1000);
// code for face change

 const face=document.querySelector('.mouth')
 function control(e){
     if(e.key==='ArrowRight'){
         face.classList.remove('mouth')
        face.classList.add('mouth-sad')
     }
     else if(e.key==='ArrowLeft'){
         face.classList.remove('mouth-sad')
         face.classList.add('mouth')
     }
 }
 document.addEventListener('keydown',control)
