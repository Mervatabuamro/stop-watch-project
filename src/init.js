console.log("Let'us build a stop watch");

const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('button-start');
const stopBtn = document.getElementById('button-stop');
const resetBtn = document.getElementById('button-reset');
const millSeconds = document.getElementById('millseconds');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('mints');

let startTime;
let intervalId;

// start button

const startTimer = () => {
    if (!startTime) {
        startTime = Date.now();
        intervalId = setInterval(updateTimer, 1000);
    }
};

// stop button
const stopTimer = () => {
    if (startTime) {
        clearInterval(intervalId);
        startTime = null;
    }
};

// reset button

const resetTimer = () => {
    stopTimer();
    const stopwatchDisplay = document.querySelector('.stopwatch');
    stopwatchDisplay.innerHTML = '00:00:00';
};

/*function updateTimer() {
    if (startTime) {
        const currentTime = new Date(Date.now() - startTime);
        const formattedTime = currentTime.toISOString().substr(11, 8);
        document.getElementById('timeDisplay').innerText = formattedTime;
    }
}*/

// updating the stopwatch

let hrs = 0;
let min = 0;
let sec = 0;

const updateTimer = () => {
    sec++;
    millSeconds.innerText = sec;
    if (sec >= 60) {
        min++;
        seconds.innerText = min;
        sec = 0;
    } else if (min >= 60) {
        hrs++;
        minutes.innerText = hrs;
        sec = 0;
    }
};

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
