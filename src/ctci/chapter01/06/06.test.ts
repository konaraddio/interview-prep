import compressString from "./06";

test('returns "bob" for "bob"', () => {
  expect(compressString("bob")).toBe("bob");
});

test('returns "abc" for "abc"', () => {
  expect(compressString("abc")).toBe("abc");
});

test('returns "a2b1c4" for "aabcccc"', () => {
  expect(compressString("aabcccc")).toBe("a2b1c4");
});
