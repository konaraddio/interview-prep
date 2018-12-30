import threeSum from "./015";

test("nums = [-1, 0, 1, 2, -1, -4], target = 0", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4], 0)).toEqual([[-1, 0, 1], [-1, -1, 2]]);
});
