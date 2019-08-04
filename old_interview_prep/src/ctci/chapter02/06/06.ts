import LinkedList from "../linked-list/linked-list";

function isPalindrome(l: LinkedList<number>): boolean {
  let stack = [];
  let current = l.head;

  while (current != null) {
    stack.push(current.data);
    current = current.next;
  }

  current = l.head;
  while (stack.length > 0) {
    if (current.data !== stack.pop()) {
      return false;
    }
    current = current.next;
  }

  return true;
}

export default isPalindrome;
