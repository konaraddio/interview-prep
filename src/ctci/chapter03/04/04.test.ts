import MyQueue from "./04";

describe("enqueue", () => {
  test("enqueues 3 items", () => {
    let q = new MyQueue<number>();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.length).toBe(3);
  });
});

describe("dequeue", () => {
  test("returns 1 for [1,2,3]", () => {
    let q = new MyQueue<number>();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.dequeue()).toBe(1);
  });

  test("returns 2 for [2,3]", () => {
    let q = new MyQueue<number>();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.dequeue();
    expect(q.dequeue()).toBe(2);
  });

  test("returns 3 for [3]", () => {
    let q = new MyQueue<number>();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.dequeue();
    q.dequeue();
    expect(q.dequeue()).toBe(3);
  });

  test("returns undefined for []", () => {
    let q = new MyQueue<number>();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.dequeue();
    q.dequeue();
    q.dequeue();
    expect(q.dequeue()).toBeUndefined();
  });

  test("returns correct item after a few en/dequeues", () => {
    let q = new MyQueue<number>();
    q.enqueue(1);
    q.dequeue();
    q.enqueue(3);
    q.enqueue(4);
    q.dequeue();
    q.enqueue(6);
    expect(q.dequeue()).toBe(4);
  });
});
