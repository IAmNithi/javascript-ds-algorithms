## Time Comparison
Add1_Timing and Add2_Timing both solves the same problem but the main part is to calculate the time take for both the code to Execute.

## Add1_Timing

```javascript
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
```
performance.now() method is used to calculate the time.

Output for the current program is : Time Elapsed: 0.009855000000214205 seconds. 

## Add2_Timing

```javascript
function addUpTo(n){
    return n * (n + 1)/2;
}


var timer1 = performance.now();
addUpTo(1000000);
var timer2 = performance.now();
console.log(`Time Elapsed: ${(timer2-timer1) / 1000} seconds.`);
```

Output for the current program is : Time Elapsed: 0.000029999999213032423 seconds. 

## Conclusion
As far the timing result Add2_Timing is faster than Add21_Timer.
But the performance.now() methos is not a reliable method to calculate the time complexity. It may vary based on your System Performance.
The same machine will record different time.
for fast Algorithm, speed measurments may not be precise enough.