import maxArea from "./11";

test("[1,8,6,2,5,4,8,3,7] ==> 49", () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});

test("[2, 3, 1] ==> 2", () => {
  expect(maxArea([2, 3, 1])).toBe(2);
});

test("[1,2] ==> 1", () => {
  expect(maxArea([1, 2])).toBe(1);
});

test("[1] ==> 0", () => {
  expect(maxArea([1])).toBe(0);
});
