## What is Recursion ?

Recursion is a process(a function in our case) that calls itself.

## Why do I need to know this?

### It's EVERYWHERE!
* JSON.parse / JSON.stringify
* document.getElementById and DOM traversal algorithms
* Object traversal
* Very common with more complex algorithms
* It's sometimes a cleaner alternative to iteration

## How recursive functions work

Invoke the **same** function with a different input until you reach your base case!

## Base Case

The condition when the recursion ends.

## Two essential parts of a recursive function!

* Base Case
* Different Input

## first recursive function

```javascript

function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

```

```javascript

function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

```