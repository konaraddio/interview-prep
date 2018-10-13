import { maxSubArray } from "./053";

test("[-2,1,-3,4,-1,2,1,-5,4] ==> 6", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});

test("[3,-4,6,1,-2,4,3] ==> 12", () => {
  expect(maxSubArray([3, -4, 6, 1, -2, 4, 3])).toBe(12);
});
