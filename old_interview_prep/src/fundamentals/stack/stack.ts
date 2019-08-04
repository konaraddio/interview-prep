class Stack<T> {
  lastElement: T;
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
   * @returns last element or undefined if stack is empty
   */
  peek(): T | undefined {
    return this.data.length > 0 ? this.data[this.data.length - 1] : undefined;
  }

  /**
   * Returns length of the stack
   */
  get length(): number {
    return this.data.length;
  }
}

export default Stack;
