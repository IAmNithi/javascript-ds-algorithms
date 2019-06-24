// Time Elapsed: 0.000029999999213032423 seconds.
function addUpTo(n){
    return n * (n + 1)/2;
}


var timer1 = performance.now();
addUpTo(1000000);
var timer2 = performance.now();
console.log(`Time Elapsed: ${(timer2-timer1) / 1000} seconds.`);