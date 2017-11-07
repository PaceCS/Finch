function wait(secs, buffer) {
    var buf = buffer ? buffer : .1;
    var time1 = new Date().getTime();
    var time2 = new Date().getTime() ;
    while (time2 < time1 + secs + buf) {
        time2 = new Date().getTime();
    }
}

module.exports.wait = wait;
