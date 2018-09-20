import intToRoman from "./012";

test("3 -> III", () => {
  expect(intToRoman(3)).toBe("III");
});

test("4 -> IV", () => {
  expect(intToRoman(4)).toBe("IV");
});

test("9 -> IX", () => {
  expect(intToRoman(9)).toBe("IX");
});

test("1994 -> LVIII", () => {
  expect(intToRoman(1994)).toBe("MCMXCIV");
});
