// write a function called maxSumarrayValues which accepts an array of integers and number called n. 
// The function should calculate he maximum sum of n consecutive numbers in an array. 

function maxSumarrayValues(arr, num){
    if(num > arr.length){
        console.log(null);
    }
    let max = -Infinity;
    for(let i=0; i < arr.length - num +1; i++){
        let temp = 0;
        for(let j=0;j < num; j++){
            temp += arr[i+j]
        }   
        if(temp > max){
            max = temp;
        }
    }
    console.log(max);
}


var array = [1,2,5,2,8,1,5];
maxSumarrayValues(array, 2)

// The above code has the time complexity of O(n^2)
// So the above code is refactored using sliding window approch  with the time complexity of O(n)

function maxSumarrayValuesRef(arr,num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) console.log(null);
    for(let i=0;i<num;i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i=num; i< arr.length;i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum =  Math.max(maxSum, tempSum);
    }
    console.log(maxSum);
}

maxSumarrayValuesRef(array, 2);