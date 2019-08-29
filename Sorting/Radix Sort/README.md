## Radix Sort

* Radix sort is a special sorting algorithm that works on lists of numbers
* It never makes comparisons between elements!
* It exploits the fact that information about the size of a number is encoded in the number of digits.  
* More digits means a bigger number!

## Radix Sort Helpers 

In order to implement radix sort, it's helpful to build a few helper functions first:

getDigit(num, place) - returns the digit in num at the given place value

```javascript
getDigit(12345, 0); // 5
getDigit(12345, 1); // 4
getDigit(12345, 2); // 3
getDigit(12345, 3); // 2
getDigit(12345, 4); // 1
getDigit(12345, 5); // 0
```