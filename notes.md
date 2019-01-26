# Notes

## Merge K Sorted Lists

Merging K lists at a time, by choosing the min from K heads, requires K comparisons per element. So instead of merging K lists at a time, use a divide and conquer approach by merging two lists at a time. The number of comparisons per placed element would be lg(K) with the divide an conquer approach.
