import stringRotation from "./09";

test("waterbottle is a rotation of erbottlewat", () => {
  expect(stringRotation("waterbottle", "erbottlewat")).toBeTruthy();
});

test("waterbottle is not a rotation of erbttlewat", () => {
  expect(stringRotation("waterbottle", "erbttlewat")).toBeFalsy();
});

test("car is a rotation of rca", () => {
  expect(stringRotation("car", "rca")).toBeTruthy();
});

test("car is not a rotation of rac", () => {
  expect(stringRotation("car", "rac")).toBeFalsy();
});
