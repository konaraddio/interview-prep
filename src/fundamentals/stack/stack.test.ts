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
