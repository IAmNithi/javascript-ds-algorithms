## Big O(n) 
countUpAndDown js file has a saimple example with two for loops. When we have 2 for loops then it should be O(n) && O(n) it should be O(n^2) no its Simple O(n).

```javascript
function countUpAndDown(n){
    console.log('Going up!');
    for(let i=0;i<n;i++){
        console.log(i);
    }
    console.log('At the top! \nGoing Down...');
    for(let j=n -1; j >= 0; j--){
        console.log(j);
    }
    console.log('Back Down. Bye!');
}
countUpAndDown(10);
```

Number of Operations is (eventually) bounded by a multiple of **n** (says, 10n).


##  Output of the following code

```
Going up!
0
1
2
3
4
5
6
7
8
9
At the top! 
Going Down...
9
8
7
6
5
4
3
2
1
0
Back Down. Bye!
```

## Chart 

![O(n)]('./foo1.png')
