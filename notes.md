# Notes

If the number of elements in a problem space gets halved each time, then the runtime is probably O(logN) (e.g. binary search). If the number of elements is being doubled, then the runtime is probably O(2^N).

Simplest implementation of a hashtable is an array of linkedlists where the linkedlists handle collisions. Worst case O(N) but if the hash function is good then O(1).