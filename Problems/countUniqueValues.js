// counting unique values in an array. It can also contain negative numbers

function countUniqueValues(arr){
    let values = {};
    for(let key of arr){
        values[key] ? values[key] += 1 : values[key] = 1;
    }
    return Object.keys(values).length;
}


var array = [-1,2,3,4,4,4,3,5,6,5,4];

countUniqueValues(array);