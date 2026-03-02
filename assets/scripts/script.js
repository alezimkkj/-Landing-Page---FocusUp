// Initial
let timerRunning = false;
let interval = null;
let minutes, seconds = 0;

restartTimer();

// Events
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('restart').addEventListener('click', restartTimer);

// Functions
function startTimer() {
    if (!interval) {
        timerRunning = true;

        interval = setInterval(() => {
            addTimer();
        }, 1000);
    }
}

function pauseTimer() {
    timerRunning = false;
    clearInterval(interval);
    interval = null;
}

function restartTimer() {
    pauseTimer();
    minutes = 0;
    seconds = 0;
    updateTimer();
}

function addTimer() {
    if (!timerRunning) return;
    
    seconds++;

    if(seconds === 60) {
        minutes++;
        seconds = 0;
    }

    updateTimer();
}

function updateTimer() {
    let secondsEl = seconds < 10 ? `0${seconds}` : seconds;
    let minutesEl = minutes < 10 ? `0${minutes}` : minutes;

    document.getElementById('timer').innerHTML =
        `${minutesEl}:${secondsEl}`;
}