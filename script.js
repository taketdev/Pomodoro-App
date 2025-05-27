const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const timerDisplay = document.getElementById('timer');
const alarm = document.getElementById('alarm')

let remaining = 25 * 60;
let intervalId = null;

function updateDisplay() {
    const min = String(Math.floor(remaining / 60)).padStart(2, "0");
    const sec = String(remaining % 60).padStart(2, "0");
    timerDisplay.textContent = `${min}:${sec}`;
};
updateDisplay();

startBtn.onclick = function() {
    if (intervalId) return;
    intervalId = setInterval(function() {
        remaining--;
        updateDisplay();
        if (remaining <= 0) {
            clearInterval(intervalId);
            intervalId = null;
            alarm.play();
        }
    }, 1000);
};

pauseBtn.onclick = function() {
    if (!intervalId) return;
    clearInterval(intervalId);
    intervalId = null;
};

resetBtn.onclick = function() {
    clearInterval(intervalId);
    intervalId = null;
    remaining = 25 * 60;
    updateDisplay();
};

