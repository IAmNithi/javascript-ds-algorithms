## What is sorting

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

### Example

* Sorting numbers from smallest to largest
* Sorting names alphabetically
* Sorting movies based on release year
* Sorting movies based on revenue

## Why do we need to learn this?

* Sorting is an incredibly common task, so it's good to know how it works
* There are many different ways to sort things, and different techniques have their own advantages and disadvantages
* Sorting sometimes has quirks, so it's good to understand how to navigate them

## JavaScript has a sort method...

Yes, it does!

...but it doesn't always work the way you expect.

```javascript
[ "Steele", "Colt", "Data Structures", "Algorithms" ].sort();
// [ "Algorithms", "Colt", "Data Structures", "Steele" ]
```

```javascript
[ 6, 4, 15, 10 ].sort();
// [ 10, 15, 4, 6 ]
```

## Telling JavaScript how to sort

* The built-in sort method accepts an optional comparator function
* You can use this comparator function to tell JavaScript how you want it to sort
* The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
    * If it returns a negative number, a should come before b
    * If it returns a positive number, a should come after b,
    * If it returns 0, a and b are the same as far as the sort is concerned

### Example

```javascript
function numberCompare(num1, num2) {
  return num1 - num2;
}

[ 6, 4, 15, 10 ].sort(numberCompare);
// [ 4, 6, 10, 15 ]
```

```javascript
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

[ "Steele", "Colt", "Data Structures", "Algorithms" ]
  .sort(compareByLen);
// [ "Colt", "Steele", "Algorithms", "Data Structures" ]
```

## Before we sort, we must swap!

Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order)

```javascript
// ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}
```

## Comparing Bubble, Selection and Insertion Sort

|    Algorithm    | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
|      :---:      |          :---:         |           :---:           |          :---:          |       :---:      |
|   Bubble Sort   |        **O(n)**        |        **O(n^2)**         |        **O(n^2)**       |     **O(1)**     |
|  Insertion Sort |        **O(n)**        |        **O(n^2)**         |        **O(n^2)**       |     **O(1)**     |
|  Selection Sort |       **O(n^2)**       |        **O(n^2)**         |        **O(n^2)**       |     **O(1)**     |