/*
This submission sucks.

A better way, to reduce the number of comparisons per element,
is to divide and conquer by merging two lists at a time 
instead of merging K lists at a time.

The number of comparisons per placed element
would be lg(K) with a divide an conquer approach.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  // each pointer corresponds to a list and contains an index representing the current node in its list

  lists = lists.filter(list => list != null);

  let minIndex,
    dummyNode = { next: null };
  let current = dummyNode;

  while (lists.length > 0) {
    minIndex = 0;
    for (let i = 1; i < lists.length; i++) {
      if (lists[i] != null) {
        console.log(lists[i].val);
        if (lists[minIndex] == null) {
          minIndex = i;
        }
        if (lists[i].val < lists[minIndex].val) {
          minIndex = i;
        }
      }
    }

    current.next = { val: lists[minIndex].val, next: null };
    current = current.next;

    if (lists[minIndex].next == null) {
      lists.splice(minIndex, 1);
    } else {
      lists[minIndex] = lists[minIndex].next;
    }
  }

  return dummyNode.next;
};

// note that the above destroys the given lists!

let l1 = {
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

let l2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: null,
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

console.log(mergeKLists([l1, l2, null]));
