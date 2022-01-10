const today = new Date();
const todayDate = document.getElementById("today-date");
const time = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

todayDate.innerText = today.toDateString();
startButton.addEventListener("click", startTime);
stopButton.addEventListener("click", stopTime);
resetButton.addEventListener("click", resetTime);

let sec = 0;
let mins = 0;
let isTimerStarted = false;

console.log(today.toDateString());

function addSecond() {
if (isTimerStarted) {
 sec++; // 0+1
 if (sec >= 60) {
     mins++;
     sec = 0;
 }

 const additionalMinsZero = additionalZero(mins);
 const additionalSecZero = additionalZero(sec);
 time.innerText = `${additionalMinsZero}${mins}:${additionalSecZero}${sec}`; // nusetina html 1
 setTimeout(addSecond, 1000);
  }

}
function additionalZero(time) {
    return time <= 9 ? "0" : "";
}
function startTime() {
    if(!isTimerStarted) {
    isTimerStarted = true;
    addSecond();
    startButton.disabled = true;
    stopButton.disabled = false;
    } 
    
 }
function stopTime() {
    isTimerStarted = false;
    startButton.disabled = false;
    stopButton.disabled = true;
}
function resetTime() {
     
     isTimerStarted = true;
     isTimerStarted = false;
     sec = 0;

     mins = 0;
    stwopButton.disabled = true;
    startButton.disabled = false;
    time.innerText = "00:00";
    stopTime();
}
