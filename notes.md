# Notes

## Patterns

* sliding window / multiple pointers

## Problems

### Merge K Sorted Lists

Merging K lists at a time, by choosing the min from K heads, requires K comparisons per element. So instead of merging K lists at a time, use a divide and conquer approach by merging two lists at a time. The number of comparisons per placed element would be lg(K) with the divide an conquer approach.

### Going from O(nlgn) time to O(n) time + extra space using buckets

A common trick to going from O(nlgn) (assuming this approach involves sorting) is to use buckets. Go through each element and place it in a bucket. The items across the buckets will be sorted. Use the smallest possible bucket to guarantee only 1 or 0 elements in each bucket (otherwise store an array at each bucket) then iterate over the buckets to do your task. Using buckets will lead to a O(n) runtime but depending on the situation it could use a lot of space.

For example, given an array of numbers and you need to find the minimum difference between any two numbers in the given array, you can bucket by number and end up with a sorted list across the buckets which you can then iterate over to find the minimum difference between any two elements.

The bucket approach is generally good if you know the data is confined within two end points (e.g. if it's an array of times then the number of buckets must be a constant).


