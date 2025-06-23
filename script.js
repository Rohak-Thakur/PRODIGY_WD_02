let startTime = 0;
let elapsedTime = 0;
let timerInterval;
const display = document.getElementById("display");
const laps = document.getElementById("laps");

function timeToString(time) {
  let diff = new Date(time);
  let h = diff.getUTCHours().toString().padStart(2, '0');
  let m = diff.getUTCMinutes().toString().padStart(2, '0');
  let s = diff.getUTCSeconds().toString().padStart(2, '0');
  let ms = diff.getUTCMilliseconds().toString().padStart(3, '0');
  return `${h}:${m}:${s}.${ms}`;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 10);
}

function pause() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00.000";
  elapsedTime = 0;
  laps.innerHTML = "";
}

function lap() {
  const li = document.createElement("li");
  li.textContent = timeToString(elapsedTime);
  laps.appendChild(li);
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);
