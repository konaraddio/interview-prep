/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (head == null || head.next == null) {
    return head;
  }

  // if even and multiple of 3
  // 3 pointers
  // p1 p2 p3
  // p2.next = p1
  // p1.next = p3
  let p0;
  let p1 = head;
  let newHead = p1.next;
  let p2 = p1.next;
  let p3 = p2.next;

  while (true) {
    p2.next = p1;
    p1.next = p3;

    if (p0 != null) {
      p0.next = p2;
    }

    // ... _  _  _   _
    // p0  p2 p1 p3

    if (p3 == null || p3.next == null) {
      break;
    }

    p0 = p1;
    p1 = p1.next;
    p2 = p1.next;
    p3 = p2.next;
  }

  return newHead;
};

let l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
};

let l2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
};

let l3 = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
};

let l4 = {
  val: 1,
  next: null
};

console.log(JSON.stringify(swapPairs(l1)));
console.log(JSON.stringify(swapPairs(l2)));
console.log(JSON.stringify(swapPairs(l3)));
console.log(JSON.stringify(swapPairs(l4)));
