// suming value to  retun a number which sums  up to 0 
// Below given solution has  the time complexity of O(n^2)
function sumZero(arr){
    for(let i=0; i< arr.length;i++){
        for(let j=i+1; j< arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

let array = [1,2,-3,4,5,3,-2];
sumZero(array);

// Below given refactored code has the time complexity of O(N)

function sumZeroRef(arr){
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

sumZeroRef(array);