// @ts-nocheck
let timeLeft = 1500;
let timerInterval;

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById('timer').innerText = formatTime(timeLeft);
        } else {
            clearInterval(timerInterval);
            alert('Pomodoro session completed!');
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 1500;
    document.getElementById('timer').innerText = '25:00';
}

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
