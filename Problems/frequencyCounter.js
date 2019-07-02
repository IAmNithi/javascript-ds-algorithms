// First function contain 2 for loops and has the time complexity of O(n^2)
function same(a,b){
    if(a.length !== b.length){
        console.log(false);
    }
    for(let i=0; i<a.length; i++){
            let correctIndex = b.indexOf(a[i] ** 2);
            if(correctIndex === -1){
                console.log(false);
            }
            console.log(b);
            b.splice(correctIndex, 1);
    }
    console.log(true);
}

same([1,2,3,2],[9,1,4,4]);


// Refactored code with the time complexity og O(n)

function sameRefac(a,b){
    if(a.length !== b.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of a){
        frequencyCounter1[val] = (frequencyCounter1[val]  || 0)  + 1;
    }
    for(let val of b){
        frequencyCounter2[val] = (frequencyCounter2[val]  || 0)  + 1;
    }
    console.log('printing frequ1', frequencyCounter1);
    console.log('printing frequ2', frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key **2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}

sameRefac([1,2,3,2],[9,1,4,4]);