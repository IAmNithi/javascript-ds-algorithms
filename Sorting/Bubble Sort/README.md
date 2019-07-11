## BubbleSort

A sorting algorithm where the largest values bubble up to the top!

## Example

```
[ 5, 3, 4, 1, 2 ]
[ 3, 5, 4, 1, 2 ]
[ 3, 4, 5, 1, 2 ]
[ 3, 4, 1, 5, 2 ]
[ 3, 4, 1, 2, 5 ]
```

## BubbleSort Pseudocode

* Start looping from with a variable called i the end of the array towards the beginning
* Start an inner loop with a variable called j from the beginning until i - 1
* If arr[j] is greater than arr[j+1], swap those two values!
* Return the sorted array

## Time Complexity

### Worst  Case
**O(n^2)**

### Best Case  
**O(n)**