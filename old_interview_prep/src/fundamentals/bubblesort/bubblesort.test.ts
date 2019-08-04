import { bubbleSort } from "./bubblesort";

test("[1,2,3] ==> [1,2,3]", () => {
  expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
});

test("[3,2,1] ==> [1,2,3]", () => {
  expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
});

test("[5, -1, 3, 2] ==> [-1, 2, 3, 5]", () => {
  expect(bubbleSort([5, -1, 3, 2])).toEqual([-1, 2, 3, 5]);
});
