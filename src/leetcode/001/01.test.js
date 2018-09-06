import getTwoSum from "./01";

test("returns [0,-1] for [2,7,11,15] & 9", () => {
  expect(getTwoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("returns [-1,-1] for [2,7,11,15] & 30", () => {
  expect(getTwoSum([2, 7, 11, 15], 10)).toEqual([-1, -1]);
});

test("returns [0,2] for [-3,4,3,90] & 0", () => {
  expect(getTwoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
});
