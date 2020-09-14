load("readline.js");
load("Finch.js");

// Gain access to our finch
var finch = new Finch();

finch.setLED(255,0,0);
wait(1000);
finch.setLED(0,255,0);

// for (var j = 0; j < 5; j += 1) {
//     for (var i = 0; i < 10; i += 1) {
//         finch.setLED(255/10*i, 0, 0);
//         wait(500);
//     }
// }

// Traffic light
for (var i = 0; i < 9; i += 1) {
    if (i % 3 == 0) {
        finch.setLED(45, 201, 55);
    } else if (i % 3 == 1) {
        finch.setLED(231,180,22)
    } else {
        finch.setLED(255,50,50)
    }
    wait(1000);
}







































function wait(secs, buffer) {
    var buf = buffer ? buffer : .1;
    var time1 = new Date().getTime();
    var time2 = new Date().getTime() ;
    while (time2 < time1 + secs + buf) {
        time2 = new Date().getTime();
    }
}
