let key_pad = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'w', 'e', 't', 'y', 'u'];
function playSound(e){
    if(key_pad.includes(e.key.toString())) {
       const sound = new Audio(`audio/${e.key.toUpperCase()}.mp3`);
       sound.currentTime = 0;
       return   sound.play();
    }
}
const onClick = (e) => {
    if(key_pad.includes(e.target.textContent.toLowerCase())) {
        const sound = new Audio(`audio/${e.target.textContent}.mp3`);
        sound.currentTime = 0;
        return sound.play();
    }
}
document.addEventListener('click', onClick)
document.addEventListener('keypress', playSound)