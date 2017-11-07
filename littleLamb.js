load("readline.js");
load("Finch.js");

// Gain access to our finch
const finch = new Finch();

function wait(secs, buffer) {
    const buf = buffer ? buffer : .1;
    const time1 = new Date().getTime();
    let time2 = new Date().getTime() ;
    while (time2 < time1 + secs + buf) {
        time2 = new Date().getTime();
    }
}

const note = 500;
const arr = [329.6, 293.7, 261.6, 293.7, 329.6, 329.6, 329.6, 293.7, 293.7, 293.7, 329.6, 392, 392, 329.6, 293.7, 261.6, 293.7, 329.6, 329.6, 329.6, 329.6, 293.7, 293.7, 329.6, 293.7, 261.6];

const time = [1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1]

for (let i = 0; i < arr.length; i += 1) {
    finch.playTone(arr[i], time[i] * note);
    if (i % 2 == 0) {
        finch.setLED(0, 0, 255);
    } else {
        finch.setLED(0,255,0);
    }
    wait(time[i]*note + 100);
}
