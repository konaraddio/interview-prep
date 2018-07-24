class Stack<T> {
  data: T[];
  constructor() {
    this.data = [];
  }
  /**
   * Push something onto the stack
   * @param item Anything of type T
   */
  push(item: T): void {
    this.data.push(item);
  }
  /**
   * Pop the latest off the stack
   * @returns an item of type T or undefined if the stack is empty
   */
  pop(): T | undefined {
    return this.data.pop();
  }

  /**
   * Returns length of the stack
   */
  get length(): number {
    return this.data.length;
  }
}

export default Stack;
