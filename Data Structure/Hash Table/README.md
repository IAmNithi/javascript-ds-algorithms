## What is Hash Table ?

Hash tables are used to store key-value pairs.

They are like arrays, but the keys are not ordered.

Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!

## Why Should I Care ?

Nearly every programming language has some sort of hash table data structure

Because of their speed, hash tables are very commonly used!

## Hash Table in other Programming Language

Python has Dictionaries

JS has Objects and Maps*

Java, Go, & Scala have Maps

Ruby has...Hashes

* Objects have some restrictions, but are basically hash tables

## HASH TABLES

Imagine we want to store some colors We could just use an array/list:

```javascript
[ "#ff69b4","#ff4500","#00ffff" ] 
```
Not super readable!  What do these colors correspond to?

It would be nice if instead of using indices to access the colors, we could use more human-readable keys.

pink  ------->  #ff69b4
cyan  ------->  #00ffff
orangered ------> #ff4500

How can we get human-readability and computer readability?

Computers don't know how to find an element at index pink!

Hash tables to the rescue!


