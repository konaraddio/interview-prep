import Stack from "./stack";

describe("push", () => {
  test("pushes item onto the stack", () => {
    let s = new Stack<number>();
    s.push(3);
    s.push(12);
    expect(s.length).toBe(2);
  });
});

describe("pop", () => {
  test("pops the latest item off the stack", () => {
    let s = new Stack<string>();
    s.push("a");
    s.push("z");
    expect(s.pop()).toBe("z");
    expect(s.length).toBe(1);
  });
});

describe("peek", () => {
  test("returns top item in nonempty stack", () => {
    let s = new Stack<number>();
    s.push(4);
    expect(s.peek()).toBe(4);
  });

  test("returns undefined for empty stack", () => {
    let s = new Stack<number>();
    expect(s.peek()).toBeUndefined();
  });
});
