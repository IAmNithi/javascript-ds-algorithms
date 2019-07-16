## What is Merge Sort ?

* It's a combination of two things - merging and sorting!
* Exploits the fact that arrays of 0 or 1 element are always sorted
* Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

## How does it work?

```javascript
[ 8, 3, 5, 4, 7, 6, 1, 2 ]

[ 8, 3, 5, 4 ] [ 7, 6, 1, 2 ]

[ 8, 3 ] [ 5, 4 ] [ 7, 6 ] [ 1, 2 ]

[ 8 ] [ 3 ] [ 5 ] [ 4 ] [ 7 ] [ 6 ] [ 1 ] [ 2 ]

[ 3, 8 ] [ 4, 5 ] [ 6, 7 ] [ 1, 2 ]

[ 3, 4, 5, 8 ] [ 1, 2, 6, 7 ]

[ 1, 2, 3, 4, 5, 6, 7, 8 ]
```