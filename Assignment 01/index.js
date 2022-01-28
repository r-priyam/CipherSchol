// Timer Field
var hours = document.getElementById("hour")
var minutes = document.getElementById("minute")
var seconds = document.getElementById("second")
var milliSeconds = document.getElementById("mili")

// Initial counter variables
let hour = 00;
let minute = 00;
let second = 00;
let millisecond = 00;
let interval;

window.onload = () => reset(); // reset stopwatch whenever window is refreshed

function start() {
    if (interval) alert('Stopwatch is already running!')

    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

function startTimer() {
    millisecond++;

    if (millisecond > 99) {
        // second increment
        second++;
        millisecond = 0;
    }
    if (second > 59) {
        // minute increment
        minute++;
        second = 0;
    }
    if (minute > 59) {
        // hour increment
        hour++
        minute = 0;
        second = 0;
    }

    // display data accordingly
    hour > 9 ? hours.innerHTML = hour : hours.innerHTML = `0${hour}`;
    minute > 9 ? minutes.innerHTML = minute : minutes.innerHTML = `0${minute}`;
    second > 9 ? seconds.innerHTML = second : seconds.innerHTML = `0${second}`;
    millisecond > 9 ? milliSeconds.innerHTML = millisecond : milliSeconds.innerHTML = `0${millisecond}`;
}

let pause = () => clearInterval(interval);

function reset() {
    clearInterval(interval);
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    milliSeconds.innerHTML = "00";
    interval = null;
}
