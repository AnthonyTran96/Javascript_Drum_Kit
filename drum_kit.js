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
        if(e.propertyName !== 'transform') return;
        e.target.classList.remove(playingClass)
      };
    const keyList=Array.from(document.querySelectorAll(".key"));
    keyList.forEach(key => {
        key.addEventListener('transitionend',removeKeyTransition);
    });
    const removeCrashAnimation=(e)=>{
        if(e.propertyName!=='transform') return;
        e.target.style.transform='rotate(-7.2deg) scale(1.5)';
    };
    crash.addEventListener("transitionend",removeCrashAnimation);
    const removeHihatTopAnimation=(e)=>{
        if (e.propertyName!=='top') return;
        e.target.style.top='89px';
    };
    hihatTop.addEventListener("transitionend",removeHihatTopAnimation);
    window.addEventListener('keydown',playSound);

}