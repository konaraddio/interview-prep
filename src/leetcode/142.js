// This code works locally, seems to match what others online have,
// but gets "Time Limit Exceeded" on Leetcode 🤔
// If you know why, please let me know in a GitHub issue!

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let slower = head;
  let faster = head;

  while (faster != null && faster.next != null) {
    slower = slower.next;
    faster = faster.next.next;
    if (slower == faster) {
      break;
    }
  }

  if (faster == null || faster.next == null) {
    return null;
  }

  slower = head;
  let pos = 0;
  while (slower != faster) {
    slower = slower.next;
    faster = faster.next;
    pos++;
  }
  return pos;
};

let a = { data: 3, next: null };
let b = { data: 2, next: null };
let c = { data: 0, next: null };
let d = { data: -4, next: null };

a.next = b;
b.next = c;
c.next = d;
d.next = b;

console.log(detectCycle(a));
