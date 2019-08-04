import quicksort from "./quicksort";

test("sorts odd array of numbers", () => {
  let x = [5, 2, 9, 3, 4, 7, 0];
  quicksort(x)
  expect(x).toEqual([0, 2, 3, 4, 5, 7, 9]);
});

test("sorts even array of numbers", () => {
  let x = [24, 91, -1, 52, 78, -4];
  quicksort(x)
  expect(x).toEqual([-4, -1, 24, 52, 78, 91]);
});

test("sorts array with repeats", () => {
  let x = [24, 91, -1, 52, -1, 78, -4];
  quicksort(x)
  expect(x).toEqual([-4, -1, -1, 24, 52, 78, 91]);
});
