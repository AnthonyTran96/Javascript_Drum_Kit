window.onload=function(){
    const playingClass='playing';
    const crash=document.getElementById("crash");
    console.log(crash);
    const hihatTop=document.getElementById('hihatTop');
    console.log(hihatTop);
    const crashAnimation=function(){
        crash.style.transform='scale(1.5) rotate(-3.2deg)';
    }
    const hihatTopAnimation=function(){
        hihatTop.style.top='92px';
    }
    const playSound=function(e){
        const keyCode=e.keyCode;
        const keyElement=document.querySelector(`.drum-display kbd[data-key="${keyCode}"]`);
        console.log(keyElement);
        if (!keyElement) return;
        const audioElement=document.querySelector(`audio[data-key="${keyCode}"]`);
        audioElement.currentTime=0;
        audioElement.play();
        switch(keyCode){
            case 69:
            case 82: crashAnimation(); break;
            case 75: hihatTopAnimation(); break;
        }
        keyElement.classList.add(playingClass);
    }
    const removeCrashAnimation=function(e){
        if(e.propertyName!=='transform') return;
        e.target.style.transform='scale(1.5) rotate(-7.2deg)';
    }
    const removeHihatAnimation=function(e){
        if(e.propertyName!=='top') return;
        e.target.style.top='89px';
    }
    const removeKeyAnimation=function(e){
        console.log(e);
        if(e.propertyName!=='transform') return;
        e.target.classList.remove(playingClass);
    }
    const keyList=Array.from(document.querySelectorAll('.drum-display .key'));
    keyList.forEach(function(key){
        
        key.addEventListener('transitionend',removeKeyAnimation);
    })
    crash.addEventListener('transitionend',removeCrashAnimation);
    hihatTop.addEventListener('transitionend',removeHihatAnimation);
    window.addEventListener('keydown',playSound);
}