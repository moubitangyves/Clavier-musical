function getRandomColor(){
    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let i=0; i<6; i++){
        color = color + letters[Math.floor(Math.random() * letters.length)]
    }
    return color; 
}
function playMusic(key){
    let audio;
    switch(key){
        case "a":
            audio = new Audio("kick1.wav");
            audio.play();
            break;
        case "z":
            audio = new Audio("kick.mp3");
            audio.play();
            break;
        case "e":
            audio = new Audio("kick2.mp3");
            audio.play();
            break;
        case "r":
            audio = new Audio("Clap1.wav");
            audio.play();
            break;
        case "y":
            audio = new Audio("do-80236.mp3");
            audio.play();
            break;
        case "u":
            audio = new Audio("re-78500.mp3");
            audio.play();
            break;
        case "i":
            audio = new Audio("mi-80239.mp3");
            audio.play();
            break;
        case "o":
           audio = new Audio("fa-78409.mp3");
            audio.play();
            break;
        case " ":
            audio = new Audio("sol-101774.mp3");
            audio.play();
            break;

    }
}
let bg = document.querySelector('#particles-js');

document.addEventListener("keydown", (event) => {
    bg.style.backgroundColor = getRandomColor();
    let key = event.key;
    playMusic(key);
    
});
