import Stack from "../../../fundamentals/stack/stack";

interface Box<T> {
  data: T;
  min: T;
}

class StackWithMin extends Stack<Box<number>> {
  constructor() {
    super();
  }

  push() {
    throw Error("Did you mean to use `pushWithMin` instead?");
  }

  pushWithMin(data: number) {
    let newBox: Box<number> = {
      data: data,
      min: data
    };
    if (this.min !== undefined && this.min < data) {
      newBox.min = this.min;
    }
    super.push(newBox);
  }

  get min(): number | undefined {
    if (this.peek()) {
      return this.peek().min;
    }
    return undefined;
  }
}

/**
 * It would be more space efficient to have a stack of mins
 * Every time we pop, check if the element is at the top of stack of mins
 * if it is, then we pop it off stack of mins too in addition to
 * popping off main stack.
 */

export default StackWithMin;
