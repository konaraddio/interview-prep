import findMedianSortedArrays from "./04";

test("returns 2 for [1,3] & [2]", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
});

test("returns 2.5 for [1,3] & [2, 4]", () => {
  expect(findMedianSortedArrays([1, 3], [2, 4])).toBe(2.5);
});

test("returns 2 for [1,2,3] & []", () => {
  expect(findMedianSortedArrays([1, 2, 3], [])).toBe(2);
});

test("returns 5 for [1, 4, 5, 7, 8, 9] & [2, 3, 6]", () => {
  expect(findMedianSortedArrays([1, 4, 5, 7, 8, 9], [2, 3, 6])).toBe(5);
});
