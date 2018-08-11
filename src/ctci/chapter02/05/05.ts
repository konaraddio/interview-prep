import LinkedList from "../linked-list/linked-list";

function sumLists(
  l1: LinkedList<number>,
  l2: LinkedList<number>
): LinkedList<number> {
  let sum = new LinkedList<number>();

  let current1 = l1.head;
  let current2 = l2.head;
  let carry = 0;

  while (current1 != null || current2 != null) {
    let newValue = carry;

    if (current1 != null) {
      newValue += current1.data;
    }
    if (current2 != null) {
      newValue += current2.data;
    }

    carry = newValue >= 10 ? 1 : 0;
    if (carry === 1) {
      newValue = newValue % 10;
    }

    sum.append(newValue);

    if (current1 != null) {
      current1 = current1.next;
    }
    if (current2 != null) {
      current2 = current2.next;
    }
  }

  if (carry === 1) {
    sum.append(1);
  }

  return sum;
}

export default sumLists;
