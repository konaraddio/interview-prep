import Stack from "../../../fundamentals/stack/stack";

class MyQueue<T> {
  stack1: Stack<T>;
  stack2: Stack<T>;

  constructor() {
    this.stack1 = new Stack<T>();
    this.stack2 = new Stack<T>();
  }

  enqueue(data: T) {
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }
    this.stack1.push(data);
  }

  dequeue(): T | undefined {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }

  get length() {
    return this.stack1.length + this.stack2.length;
  }
}

export default MyQueue;
