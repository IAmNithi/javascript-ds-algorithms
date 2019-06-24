function addUpTo(n){
    let result = 0;
    for(let i=0;i<n;i++){
        result += n;
    }
    return result;
}


var timer1 = performance.now();
addUpTo(1000000);
var timer2 = performance.now();
console.log(`Time Elapsed: ${(timer2-timer1) / 1000} seconds.`);