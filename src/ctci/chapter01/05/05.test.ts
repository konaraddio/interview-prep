import withinOneEdit from "./05";

test("return true for (pale, ple)", () => {
  expect(withinOneEdit("pale", "ple")).toBeTruthy();
});

test("return true for (pale, pales)", () => {
  expect(withinOneEdit("pale", "pales")).toBeTruthy();
});

test("return true for (pale, bale)", () => {
  expect(withinOneEdit("pale", "bale")).toBeTruthy();
});

test("return false for (pale, bake)", () => {
  expect(withinOneEdit("pale", "bake")).toBeFalsy();
});
