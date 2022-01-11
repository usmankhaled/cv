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