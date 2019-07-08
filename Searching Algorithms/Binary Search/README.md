## What is Binary Search
Binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array.

## Note 

Binary Search can be performed only when the array is in sorted manner

##  Advantages of Binary Search

* Binary search is a much faster form of search
* Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
* Binary search only works on sorted arrays

## Binary Search Pseudocode

* This function accepts a sorted array and a value
* Create a left pointer at the start of the array, and a right pointer at the end of the array
* While the left pointer comes before the right pointer:
    * Create a pointer in the middle
    * If you find the value you want, return the index
    * If the value is too small, move the left pointer up
    * If the value is too large, move the right pointer down
* If you never find the value, return -1

## BIG O Of Binary Search

# Worst and Average Case

O(log n)

# Best Case

O(1)

