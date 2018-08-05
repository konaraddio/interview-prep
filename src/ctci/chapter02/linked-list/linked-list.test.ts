import LinkedList from "./linked-list";

describe("getSize", () => {
  test("returns 0 for empty LinkedList", () => {
    const l = new LinkedList();
    expect(l.getSize()).toBe(0);
  });
  test("returns 1 for LinkedList w/ 1 node", () => {
    let l = new LinkedList();
    l.append(12);
    expect(l.getSize()).toBe(1);
  });
  test("returns 2 for LinkedList w/ 2 nodes", () => {
    let l = new LinkedList();
    l.append(12).append(42);
    expect(l.getSize()).toBe(2);
  });
});

describe("contains", () => {
  test("returns false for empty LinkedList", () => {
    const l = new LinkedList();
    expect(l.contains("a")).toBeFalsy();
  });
  test("returns true when target is the head", () => {
    let l = new LinkedList();
    l.append(12);
    expect(l.contains(12)).toBeTruthy();
  });
  test("returns false for when target is not in LinkedList of a length 3", () => {
    let l = new LinkedList();
    l.append(12)
      .append(42)
      .append(23);
    expect(l.contains(99)).toBeFalsy();
  });
  test("returns true for when target is at the end of the LinkedList", () => {
    let l = new LinkedList();
    l.append(12)
      .append(42)
      .append(23)
      .append(99);
    expect(l.contains(99)).toBeTruthy();
  });
  test("returns true for when target is in middle of LinkedList", () => {
    let l = new LinkedList();
    l.append(12)
      .append(42)
      .append(23);
    expect(l.contains(42)).toBeTruthy();
  });
});

describe("delete", () => {
  test("returns false for empty linkedlist", () => {
    let l = new LinkedList();
    expect(l.delete(12)).toBeFalsy();
  });
  test("returns true when head is target, keeps rest of linkedlist intact", () => {
    let l = new LinkedList();
    l.append(1);
    l.append(2);
    l.append(3);
    expect(l.delete(1) && l.getSize() == 2).toBeTruthy();
  });
  test("returns true when target is in the middle of the linkedlist", () => {
    let l = new LinkedList();
    l.append(1);
    l.append(2);
    l.append(3);
    expect(l.delete(2) && l.getSize() == 2).toBeTruthy();
  });
  test("returns true when tail is target", () => {
    let l = new LinkedList();
    l.append(1);
    l.append(2);
    l.append(3);
    expect(l.delete(3) && l.getSize() == 2).toBeTruthy();
  });
});
