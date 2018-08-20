class Queue<T> {
  data: T[];
  constructor() {
    this.data = [];
  }

  /**
   * Places item at the end of the queue
   * @param item Any item of type T
   */
  enqueue(item: T): void {
    this.data.push(item);
  }

  /**
   * Returns the first item in the queue
   * Return undefined if the queue is empty
   */
  dequeue(): T | undefined {
    return this.data.shift();
  }

  /**
   * Returns length of the queue
   */
  get length(): number {
    return this.data.length;
  }

  isEmpty(): boolean {
    return this.length < 1;
  }
}

export default Queue;
