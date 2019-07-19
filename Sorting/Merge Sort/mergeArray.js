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


var a = [2, 3, 6, 7, 9];
var b = [4, 5, 8, 10];
console.log(mergeArray(a, b));