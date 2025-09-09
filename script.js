let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function updateDisplay() {
  document.getElementById("display").innerText = hours + ":" + minutes + ":" + seconds;
}

function start() {
  if (timer !== null) {
    return; // already running
  }
  timer = setInterval(function() {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  stop();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}
