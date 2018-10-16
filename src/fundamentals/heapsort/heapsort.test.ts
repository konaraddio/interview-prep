import { heapSort } from "./heapsort";

test("[1,2,3] ==> [1,2,3]", () => {
  expect(heapSort([1, 2, 3])).toEqual([1, 2, 3]);
});

test("[3,2,1] ==> [1,2,3]", () => {
  expect(heapSort([3, 2, 1])).toEqual([1, 2, 3]);
});

test("[5, -1, 3, 2] ==> [-1, 2, 3, 5]", () => {
  expect(heapSort([5, -1, 3, 2])).toEqual([-1, 2, 3, 5]);
});
