const time_el = document.querySelector('.timer .actual-time');
const start_btn = document.getElementById('start');
const pause_btn = document.getElementById('pause');
const reset_btn = document.getElementById('reset');


let seconds = 0;
let interval = null;

start_btn.addEventListener('click', start);
pause_btn.addEventListener('click', pause);
reset_btn.addEventListener('click', reset);

function timer() {

    seconds++;

    let hr = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - (hr * 3600)) / 60);
    let sec = seconds % 60;

    if(sec < 10) sec  = '0' + sec;
    if(min < 10) min = '0' + min;
    if(hr < 10) hr = '0' + hr;

    time_el.innerText = `${hr}:${min}:${sec}`;
}

function start() {

    if(interval) {
        return;
    }

    interval = setInterval(timer, 1000);
}

function pause() {

    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    seconds = 0;
    time_el.innerHTML = '00:00:00';
}