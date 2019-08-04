import StackWithMin from "./02";

describe("Min of stack changes as elements are popped off", () => {
  test("returns 3 for [5, 4, 6, 3, 7]", () => {
    let s = new StackWithMin();
    s.pushWithMin(5);
    s.pushWithMin(4);
    s.pushWithMin(6);
    s.pushWithMin(3);
    s.pushWithMin(7);
    expect(s.min).toBe(3);
  });

  test("returns 3 for [5, 4, 6, 3]", () => {
    let s = new StackWithMin();
    s.pushWithMin(5);
    s.pushWithMin(4);
    s.pushWithMin(6);
    s.pushWithMin(3);
    s.pushWithMin(7);
    s.pop();
    expect(s.min).toBe(3);
  });
  test("returns 4 for [5, 4, 6]", () => {
    let s = new StackWithMin();
    s.pushWithMin(5);
    s.pushWithMin(4);
    s.pushWithMin(6);
    s.pushWithMin(3);
    s.pushWithMin(7);
    s.pop();
    s.pop();
    expect(s.min).toBe(4);
  });

  test("returns 4 for [5, 4]", () => {
    let s = new StackWithMin();
    s.pushWithMin(5);
    s.pushWithMin(4);
    s.pushWithMin(6);
    s.pushWithMin(3);
    s.pushWithMin(7);
    s.pop();
    s.pop();
    s.pop();
    expect(s.min).toBe(4);
  });

  test("returns 5 for [5]", () => {
    let s = new StackWithMin();
    s.pushWithMin(5);
    s.pushWithMin(4);
    s.pushWithMin(6);
    s.pushWithMin(3);
    s.pushWithMin(7);
    s.pop();
    s.pop();
    s.pop();
    s.pop();
    expect(s.min).toBe(5);
  });

  test("returns undefined for []", () => {
    let s = new StackWithMin();
    s.pushWithMin(5);
    s.pushWithMin(4);
    s.pushWithMin(6);
    s.pushWithMin(3);
    s.pushWithMin(7);
    s.pop();
    s.pop();
    s.pop();
    s.pop();
    s.pop();
    expect(s.min).toBeUndefined();
  });
});
