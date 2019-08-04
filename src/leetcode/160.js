// #160 https://leetcode.com/problems/intersection-of-two-linked-lists/

// Clever solution from leetcode submissions:
var getIntersectionNode = function(headA, headB) {
  let currentA = headA;
  let currentB = headB;

  while (currentA != currentB) {
    currentA = currentA ? (currentA = currentA.next) : headB;
    currentB = currentB ? (currentB = currentB.next) : headA;
  }
  return currentA;
};

// My original solution:
/*
function getIntersectionNode(l1, l2) {
  const lengthOfL1 = getLengthOfLinkedList(l1);
  const lengthOfL2 = getLengthOfLinkedList(l2);

  let shorterList = lengthOfL1 < lengthOfL2 ? l1 : l2;
  let longerList = shorterList == l1 ? l2 : l1;

  const diff = Math.abs(lengthOfL1 - lengthOfL2);

  let count = 0;
  while (count < diff) {
    longerList = longerList.next;
    count++;
  }

  let current1 = shorterList;
  let current2 = longerList;
  while (current1 != null) {
    if (current1 == current2) {
      return current1;
    }
    current1 = current1.next;
    current2 = current2.next;
  }

  return null;
}

function getLengthOfLinkedList(head) {
  let current = head;
  let length = 0;
  while (current != null) {
    length++;
    current = current.next;
  }

  return length;
}
*/

let a = { data: 1 };
let b = { data: 2 };
let c = { data: 3 };
let d = { data: 4 };
let e = { data: 5 };

a.next = b;
c.next = b;
b.next = d;

console.log(getIntersectionNode(a, c));
console.log(getIntersectionNode(a, e));
