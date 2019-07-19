function mergeArray(arr1, arr2) {
    var i = 0;
    var j = 0;
    var result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    var middle = Math.floor(arr.length/2)
    var left = mergeSort(arr.slice(0,middle));
    var right = mergeSort(arr.slice(middle));
    return mergeArray(left, right);
}

var a = [7,5,9,3,8,11,24,23,18,26,63,37,54];
console.log(mergeSort(a));