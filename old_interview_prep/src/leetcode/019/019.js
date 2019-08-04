/*
To remove the Nth node from the end,
use two pointers.

p2 is always n + 1 nodes ahead of p1
Once p2 reaches the end then set p1.next to p1.next.next
*/

var removeNthFromEnd = function(head, n) {
  let p1 = head;
  let p2 = head;
  let diff = 0;
  while (diff < n + 1) {
    // handles edge case where n = length of linkedlist
    if (p2 == null) {
      return head.next;
    }

    p2 = p2.next;
    diff++;
  }

  while (p2 != null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  p1.next = p1.next.next;

  return head;
};

let l = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
};

console.log(JSON.stringify(removeNthFromEnd(l, 5)));
