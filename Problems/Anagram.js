// Given two strings, write a function to determine is the first string is anagram of the second. 
// An anagram is a word, phase, or name formated by rearranging the letters of another, such as cinema, from iceman.  

function validAnagram(a,b){
    if(a.length !== b.length){
        return false;
    }
    let lookup = {};
    for(let i=0; i<a.length; i++){
        let letter = a[i];
        lookup[letter] ? lookup[letter] +=  1 : lookup[letter] = 1;
    }
    for(let i=0; i<b.length;i++){
        let letter = b[i];
        if(!(lookup[letter])){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

validAnagram('', '');
validAnagram('aaz', 'zza');
validAnagram('rat', 'car');
validAnagram('anagram', 'nagaram');
validAnagram('awesome', 'awesom');
validAnagram('texttwisttime', 'timetwisttext');