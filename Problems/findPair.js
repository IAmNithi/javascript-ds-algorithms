// array of integers
// find the pair 
// condition --> same pair Should not return

function findPair(arr, pair){
    let result = {};
    for(var i =0; i< arr.length;i++){
      for(var j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j] == pair){
          var ar = []; 
          ar.push(arr[i]);
          ar.push(arr[j]);
          result[i] ? result[i] = result[i] : result[i] = ar;
        }
      }
    }
    return result;
  }
  
  var a = [0,5,10,15,20,25,30];
  var b = 25;
  
  findPair(a,b);
  