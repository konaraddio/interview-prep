function ListNode(val) {
  this.val = val;
  this.next = null;
}

function addTwoNumbers(l1, l2) {
  if (l1 == null && l2 == null) {
    return null;
  }

  let head;
  let sum;
  let carry = 0;

  // to set up the head
  if (l1 != null || l2 != null) {
    let val = l1.val + l2.val;
    if (val > 9) {
      val -= 10;
      carry = 1;
    }
    sum = new ListNode(val);
    head = sum;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  while (l1 != null || l2 != null) {
    const l1Value = l1 ? l1.val : 0;
    const l2Value = l2 ? l2.val : 0;
    let val = l1Value + l2Value + carry;
    if (val > 9) {
      val -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    let newNode = new ListNode(val);
    sum.next = newNode;
    sum = sum.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  if (carry == 1) {
    sum.next = new ListNode(1);
  }

  return head;
}

export { ListNode, addTwoNumbers };
