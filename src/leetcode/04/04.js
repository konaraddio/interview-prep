function findMedianSortedArrays(nums1, nums2) {
  let mergedArr = [];
  let i = 0,
    j = 0;
  while (i < nums1.length || j < nums2.length) {
    if (i >= nums1.length && j < nums2.length) {
      mergedArr.push(nums2[j++]);
    } else if (i < nums1.length && j >= nums2.length) {
      mergedArr.push(nums1[i++]);
    } else {
      if (nums1[i] < nums2[j]) {
        mergedArr.push(nums1[i++]);
      } else {
        mergedArr.push(nums2[j++]);
      }
    }
  }

  const length = mergedArr.length;
  const lastIndex = length - 1;
  const center = lastIndex / 2;

  if (length % 2 == 0) {
    return (mergedArr[Math.floor(center)] + mergedArr[Math.round(center)]) / 2;
  }

  return mergedArr[center];
}

export default findMedianSortedArrays;
