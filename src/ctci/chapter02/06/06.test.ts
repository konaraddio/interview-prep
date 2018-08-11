import LinkedList from "../linked-list/linked-list";
import isPalindrome from "./06";

test("1->2->3->2->1 is palindrome", () => {
  let l = new LinkedList<number>();
  l.append(1)
    .append(2)
    .append(3)
    .append(2)
    .append(1);

  expect(isPalindrome(l)).toBeTruthy();
});

test("1 is palindrome", () => {
  let l = new LinkedList<number>();
  l.append(1);

  expect(isPalindrome(l)).toBeTruthy();
});

test("empty linkedlist is palindrome", () => {
  let l = new LinkedList<number>();

  expect(isPalindrome(l)).toBeTruthy();
});

test("1->2 is not palindrome", () => {
  let l = new LinkedList<number>();
  l.append(1).append(2);

  expect(isPalindrome(l)).toBeFalsy();
});

test("1->2->3->1 is palindrome", () => {
  let l = new LinkedList<number>();
  l.append(1)
    .append(2)
    .append(3)
    .append(1);

  expect(isPalindrome(l)).toBeFalsy();
});
