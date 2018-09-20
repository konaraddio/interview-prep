import { longestCommonPrefix } from "./014";

test("['flower','flows','flight'] -> 'fl'", () => {
  expect(longestCommonPrefix(["flower", "flows", "flight"])).toBe("fl");
});

test("['flower','flows','flowers'] -> 'flow'", () => {
  expect(longestCommonPrefix(["flower", "flows", "flowers"])).toBe("flow");
});

test("['flower','xflows','zflowers'] -> ''", () => {
  expect(longestCommonPrefix(["flower", "xflows", "zflowers"])).toBe("");
});

test("['flows','','flows',''] -> ''", () => {
  expect(longestCommonPrefix(["flows", "", "flows", ""])).toBe("");
});

test("['abcd'] -> 'abcd'", () => {
  expect(longestCommonPrefix(["abcd"])).toBe("abcd");
});

test("[] -> ''", () => {
  expect(longestCommonPrefix([])).toBe("");
});
