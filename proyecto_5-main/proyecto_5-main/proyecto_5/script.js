let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonsonido = new Audio ('./sound/botonbailar.mp3');
let botonAudio = new Audio ('./sound/audio.mp3');
function bailar() {
    if(esqueleto == "off") {
        esqueleto = "on" ;
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click',()=>{
            botonsonido.play();
        })
        esqueletoStop.addEventListener('click',()=>{
            botonAudio.play();
        })
        console.log("on");  
    } else {
        esqueleto = "off"
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click',()=>{
            botonAudio.pause();
        });
        console.log ("off");
    }
}