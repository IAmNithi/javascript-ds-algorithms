// write a function search that accepts value and returns the index where the value passed to the function is located
// if the value is not found, return -1
// The problem is solved using  binary search with  divide and conquer algorithm
// Note : Binary Search works only when the array is in sorted manner 

function search(arr, val){
    let min = 0;
    let max = arr.length -1;
    while(min <= max) {
        let middle = Math.floor((min+max) / 2);
        let currentElement = arr[middle];
        if(arr[middle]  < val){
            min = middle + 1;
        } else if(arr[middle] > val){
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

let array = [1,2,3,4,5,6,7,10,12,15,18];
console.log(search(array, 12));