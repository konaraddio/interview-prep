import LinkedList from "../linked-list/linked-list";

type StringOrNumber = string | number;

class NewLinkedList extends LinkedList<StringOrNumber> {
  removeDups() {
    let uniqueData: {
      // @ts-ignore
      [data: StringOrNumber]: boolean;
    } = {};
    let current = this.head;
    let next = this.head.next;
    uniqueData[current.data] = true;
    while (next != null) {
      if (!uniqueData[next.data]) {
        uniqueData[next.data] = true;
        current = current.next;
      } else {
        // delete duplicate
        current.next = next.next;
      }
      next = current.next;
    }
  }
}

export default NewLinkedList;
