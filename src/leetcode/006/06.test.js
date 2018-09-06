import convert from "./06";

test("PAYPALISHIRING, 3 ==> PAHNAPLSIIGYIR", () => {
  expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
});

test("PAYPALISHIRING, 4 ==> PINALSIGYAHRPI", () => {
  expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
});
