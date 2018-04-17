var minutes = 0;
var seconds = 0;
var isPaused = true;
var timerStarted;

window.onload=function () {
    console.log("hi");
    updateTimer();
};

function updateTimer() {
    document.getElementById('timer').innerHTML=""+getMinutes()+":"+getSeconds();
}

function getMinutes() {
    return (minutes.toString().length == 2) ? minutes : "0" + minutes;
}

function getSeconds() {
    return (seconds.toString().length == 2) ? seconds : "0" + seconds;
}

function reset() {
    seconds = 0;
    minutes = 0;
    updateTimer();
}

function startTimer() {
    if (isPaused) {
        isPaused = false;
        timerStarted = setInterval(tick, 1000);
    }
}

function pauseTimer() {
    isPaused = true;
    clearInterval(timerStarted);
}

function tick() {
    if(seconds <= 0 && minutes <= 0) {
        pauseTimer();
    } else {
        decreaseSeconds();
    }
}

function decreaseSeconds() {
    if(!isPaused){
        if(seconds > 0){
            seconds--;
            updateTimer();
        }else if (minutes > 0) {
            decreaseMinutes();
            seconds = 59;
            updateTimer();
        }
    }
}

function decreaseSecondsButton() {
    if (seconds > 0) {
        seconds--;
        updateTimer();
    }
}

function decreaseMinutes() {
    if (minutes > 0) {
        minutes--;
        updateTimer();
    }
}

function increaseMinutes() {
    minutes++;
    updateTimer();
}

function increaseSeconds() {
    seconds++;

    if(seconds >= 60){
        seconds = 0;
        increaseMinutes();
    }

    updateTimer();
}