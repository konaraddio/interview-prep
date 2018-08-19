import SetOfStacks from "./03";

test("Creates new stack once last stack is full", () => {
  let s = new SetOfStacks(3);
  s.push(1);
  s.push(2);
  s.push(3);
  s.push(4);
  expect(s.setOfStacks.length).toBe(2);
});

test("Removes last stack once last stack is empty", () => {
  let s = new SetOfStacks(3);
  s.push(1);
  s.push(2);
  s.push(3);
  s.push(4);
  s.pop();
  expect(s.setOfStacks.length).toBe(1);
});

test("Pops correctly", () => {
  let s = new SetOfStacks(3);
  s.push(1);
  s.push(2);
  s.push(3);
  s.push(4);
  expect(s.pop()).toBe(4);
  expect(s.pop()).toBe(3);
});

test("Removes all stacks if all elements are popped", () => {
  let s = new SetOfStacks(3);
  s.push(1);
  s.push(2);
  s.push(3);
  s.push(4);
  s.pop();
  s.pop();
  s.pop();
  s.pop();
  expect(s.setOfStacks.length).toBe(0);
});
