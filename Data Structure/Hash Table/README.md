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

###  The Hash Table Part

To implement a hash table, we'll be using an array.

In order to look up values by key, we need a way to convert keys into valid array indices.

A function that performs this task is called a hash function.

## What makes a Good Hash

* Fast (i.e. constant time)
* Doesn't cluster outputs at specific indices, but distributes uniformly
* Deterministic (same input yields same output)

Here's a hash that works on strings only:
```javascript
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}

hash("pink", 10); // 0
hash("orangered", 10); // 7
hash("cyan", 10); // 3
```
Refactoring our Hash

```javascript
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
```
## Prime numbers? wut.

The prime number in the hash is helpful in spreading out the keys more uniformly.

It's also helpful if the array that you're putting values into has a prime length.

You don't need to know why. (Math is complicated!) But here are some links if you're curious.

Why do hash functions use prime numbers?

Does making array size a prime number help in hash table implementation?

## Dealing with Collisions

Even with a large array and a great hash function, collisions are inevitable. 

There are many strategies for dealing with collisions, but we'll focus on two:

1. Separate Chaining
2. Linear Probing

## Separate Chaining

With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).

This allows us to store multiple key-value pairs at the same index.

## Linear Probing

With linear probing, when we find a collision, we search through the array to find the next empty slot.

Unlike with separate chaining, this allows us to store a single key-value at each index.

## A HashTable Class

```javascript
class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}
```

## Set / Get

### Set

1. Accepts a key and a value
2. Hashes the key
3. Stores the key-value pair in the hash table array via separate chaining

### Get

1. Accepts a key
2. Hashes the key
3. Retrieves the key-value pair in the hash table
4. If the key isn't found, returns undefined

## Keys / Values

### Keys

Loops through the hash table array and returns an array of keys in the table

## Values

Loops through the hash table array and returns an array of values in the table

## Bigo O of Hash Table

|       Insert      |         Deletion     	|       Access      |
|       :---:       |          :---:        |        :---:      |
|      **O(1)**     |         **O(1)**      |      **O(1)**     |