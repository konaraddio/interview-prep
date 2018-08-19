class SetOfStacks<T> {
  setOfStacks: T[][];
  MAX_SIZE_PER_STACK: number;

  constructor(size: number) {
    this.setOfStacks = [];
    if (size < 1) {
      throw Error("Size must be greater than 0");
    }
    this.MAX_SIZE_PER_STACK = size;
  }

  push(data: T) {
    if (this.setOfStacks.length === 0) {
      this.setOfStacks.push([]);
    }

    let i = this.setOfStacks.length - 1;
    if (this.setOfStacks[i].length < this.MAX_SIZE_PER_STACK) {
      this.setOfStacks[i].push(data);
    } else {
      this.setOfStacks.push([]);
      i = this.setOfStacks.length - 1;
      this.setOfStacks[i].push(data);
    }
  }

  pop(): T | undefined {
    let result;
    if (this.setOfStacks.length > 0) {
      result = this.setOfStacks[this.setOfStacks.length - 1].pop();
      if (this.setOfStacks[this.setOfStacks.length - 1].length === 0) {
        this.setOfStacks.pop();
      }
    }
    return result;
  }
}

export default SetOfStacks;
