# Notes

## Big O

If the number of elements in a problem space gets halved each time, then the runtime is probably O(logN) (e.g. binary search). If the number of elements is being doubled, then the runtime is probably O(2^N).

Simplest implementation of a hash table is an array of linked lists. Hash function outputs the index and use linked lists to handle collisions. Worst case O(N) but if the hash function is good then O(1).

## Swapping without a temporary variable

Swap the value of two variables, where the values are numbers, without a temporary variable

```js
let a = 1;
let b = 2;
a = a + b; // so a = 3
b = a - b; // now b = 1
a = a - b; // now a = 2
```
