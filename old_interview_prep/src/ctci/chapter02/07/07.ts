import { LinkedList, Node } from "../linked-list/linked-list";

function findIntersection<T>(
  l1: LinkedList<T>,
  l2: LinkedList<T>
): Node<T> | null {
  if (l1.head == null || l2.head == null) {
    return null;
  }

  let sizeOfL1 = 0;
  let sizeOfL2 = 0;
  let currentNodeOfL1 = l1.head,
    currentNodeOfL2 = l2.head;

  while (currentNodeOfL1.next != null) {
    sizeOfL1++;
    currentNodeOfL1 = currentNodeOfL1.next;
  }

  while (currentNodeOfL2.next != null) {
    sizeOfL2++;
    currentNodeOfL2 = currentNodeOfL2.next;
  }

  if (currentNodeOfL1 !== currentNodeOfL2) {
    return null;
  }

  // if the linkedlist are equal, then we'll just treat l1 as the longer one
  const longer = sizeOfL1 > sizeOfL2 ? l1 : l2;
  const shorter = longer == l1 ? l2 : l1;
  let differenceInLength = Math.abs(sizeOfL1 - sizeOfL2);

  let currentOfLonger = longer.head;
  let currentOfShorter = shorter.head;

  while (differenceInLength > 0) {
    currentOfLonger = currentOfLonger.next;
    differenceInLength--;
  }

  while (currentOfLonger !== currentOfShorter) {
    currentOfLonger = currentOfLonger.next;
    currentOfShorter = currentOfShorter.next;
  }

  return currentOfLonger;
}

export default findIntersection;
