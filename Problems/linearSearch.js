// write a function search that accepts value and returns the index where the value passed to the function is located
// if the value is not found, return -1
function search(arr, val){
    for(let i=0; i<arr.length; i++ ){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

var array = [1,6,5,2,1,5];
search(array, 2);

// The time complexity of above given problem is O(n)