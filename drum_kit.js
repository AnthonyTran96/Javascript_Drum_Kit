window.onload = function (){
    const playingClass="playing"
    const crash=document.getElementById("crash");
    const hihatTop=document.getElementById("hihatTop");
    const crashAnimation=()=>{
        crash.style.transform= 'rotate(-3.2deg) scale(1.5)';
    }
    const hihatTopAnimation=()=>{
        hihatTop.style.top='91px';
    }
    const playSound=e=>{
        console.log("Before event:" +e);
        const keyCode=e.keyCode;
        const keyElement=document.querySelector(`kbd[data-key="${keyCode}"]`);
        if(!keyElement) return;
        const audioElement=document.querySelector(`audio[data-key="${keyCode}"]`);
        audioElement.currentTime=0;
        audioElement.play();
        if(keyCode==69||keyCode==82) crashAnimation();
        if (keyCode==75) hihatTopAnimation();
        keyElement.classList.add(playingClass);
    }

    const removeKeyTransition = e => {
        console.log("After event:"+e)
        if(e.propertyName !== 'transform') return;
    
        e.target.classList.remove(playingClass)
      };

    const keyList=Array.from(document.querySelectorAll(".key"));
    console.log(keyList);
    keyList.forEach(key => {
        key.addEventListener('transitionend',removeKeyTransition);
    });
    window.addEventListener('keydown',playSound);

}