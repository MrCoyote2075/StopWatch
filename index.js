var display = document.getElementById('display');
let startTime;
let elapsedtime = 0;
let isRunning = false;
let timer;
function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedtime;
        timer = setInterval(update,10);
        isRunning = true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedtime = Date.now() - startTime;
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer);
    elapsedtime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}
function update(){
    var currentTime = Date.now();
    elapsedtime = currentTime - startTime;
    var hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    var minutes = Math.floor(elapsedtime / (1000 * 60)) % 60;
    var seconds = Math.floor(elapsedtime / 1000) % 60;
    var milliseconds = Math.floor((elapsedtime % 1000 / 10));
    hours = String(hours).padStart(2,0); 
    minutes = String(minutes).padStart(2,0);
    seconds = String(seconds).padStart(2,0);
    milliseconds = String(milliseconds).padStart(2,0);
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

