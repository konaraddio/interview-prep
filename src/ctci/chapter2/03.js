function deleteMiddleNode(nodeToDelete) {
  nodeToDelete.data = nodeToDelete.next.data;
  nodeToDelete.next = nodeToDelete.next.next;
}

let l = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4,
        next: null
      }
    }
  }
};

let target = l.next.next;
deleteMiddleNode(target);
console.log(l);
