# Objects

objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively, in the context of an object.

## Big O of Objects

* Insertion - O(1)
* Removal - O(1)
* Searching - O(N)
* Access - O(1)

Searching has O(N) because we have to loop through all the objects to find the result. So the size of the object increases the time Complexity increases in a linear manner.

When you Dont need any ordering, Objects are excellent Choice !

## Big O of  Object Methods

* Object.keys - O(N)
* Object.values - O(N)
* Object.entries - O(N)
* hasOwnProperty - O(1)

# Arrays

The Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.

## When you need Arrays

* When you need Order
* When you need fast access/insertion and removal.

## Big O of Arrays

* Insertion - It Depends
* Removal - It Depends
* Searching - O(N)
* Access -  O(1)

## Big O of Array Operations

* Push - O(1)
* POP - O(1)
* Shift - O(N)
* Unshift - O(N)
* Concat - O(N)
* Slice - O(N)
* Splice - O(N)
* Sort - O(N * log N)
* forEach/map/filter/reduce/etc - O(N) 
