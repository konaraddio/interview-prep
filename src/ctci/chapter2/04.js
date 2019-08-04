/**
 * 3 possible solutions:
 * 1. Two lists, one smaller than target and the other larger than target, then combine.
 * 2. One list where you prepend and append nodes less than and greater than the target.
 * 3. Use quicksort's partitioning algorithm and do it in-place
 */

let partition = function(head, x) {
  let dummy = { val: "dummy", next: head };
  let i = dummy;
  let j = dummy;
  while (j.next != null) {
    j = j.next;
    if (j.val < x) {
      i = i.next;
      let temp = i.val;
      i.val = j.val;
      j.val = temp;
    }
  }
  i = i.next;
  let temp = i.val;
  i.val = j.val;
  j.val = temp;

  return head;
};

console.log(
  JSON.stringify(
    partition(
      {
        val: 3,
        next: {
          val: 5,
          next: {
            val: 7,
            next: {
              val: 1,
              next: {
                val: 9,
                next: {
                  val: 2,
                  next: null
                }
              }
            }
          }
        }
      },
      6
    )
  )
);
