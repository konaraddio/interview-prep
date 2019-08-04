function removeDups(head) {
  let hashset = new Set();

  let prev;
  let current = head;
  while (current != null) {
    if (hashset.has(current.data)) {
      prev.next = current.next;
    } else {
      hashset.add(current.data);
      prev = current;
    }
    current = current.next;
  }
  return head;
}

let l1 = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 1,
      next: {
        data: 2,
        next: null
      }
    }
  }
};

let l2 = {
  data: 1,
  next: null
};

console.log(JSON.stringify(removeDups(l1)));
console.log(JSON.stringify(removeDups(l2)));
