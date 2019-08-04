import URLify from "./03";

test("returns '%20hello' for ' hello'", () => {
  expect(URLify(" hello")).toBe("%20hello");
});

test("returns '%20hello%20world%20' for ' hello world '", () => {
  expect(URLify(" hello world ")).toBe("%20hello%20world%20");
});
