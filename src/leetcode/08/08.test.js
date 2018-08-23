import stringToInt from "./08";

test('returns 42 for "42"', () => {
  expect(stringToInt("42")).toBe(42);
});

test('returns -42 for "-42"', () => {
  expect(stringToInt("-42")).toBe(-42);
});

test('returns -9 for "   -9"', () => {
  expect(stringToInt("   -9")).toBe(-9);
});

test('returns 12 for "  12 hello world"', () => {
  expect(stringToInt("  12 hello world")).toBe(12);
});

test('returns 0 for "-  12 hello world"', () => {
  expect(stringToInt("-  12 hello world")).toBe(0);
});

test('returns 0 for "hello 12 hello world"', () => {
  expect(stringToInt("hello 12 hello world")).toBe(0);
});

test('returns -2147483648 for "-91283472332"', () => {
  expect(stringToInt("-91283472332")).toBe(-2147483648);
});

test('returns 2147483647 for "2147483648"', () => {
  expect(stringToInt("2147483648")).toBe(2147483647);
});

test('returns 3 for "+3"', () => {
  expect(stringToInt("+3")).toBe(3);
});
