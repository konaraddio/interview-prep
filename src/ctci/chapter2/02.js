function getKthFromLast(head, k) {
  let count = 1;
  let p1 = head;
  while (count < k) {
    p1 = p1.next;
    count++;
  }
  let p2 = head;
  while (p1.next != null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
}

console.log(
  getKthFromLast(
    {
      data: 2,
      next: {
        data: 4,
        next: {
          data: 6,
          next: {
            data: 8,
            next: null
          }
        }
      }
    },
    3
  )
);
