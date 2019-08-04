import Queue from './queue'

describe('enqueue', () => {
  test('places items at the end of the queue', () => {
    let q = new Queue<number>()
    q.enqueue(12)
    q.enqueue(42)
    expect(q.length).toBe(2)
  })
})

describe('dequeue', () => {
  test('removes items at the beginning of the queue', () => {
    let q = new Queue<number>()
    q.enqueue(12)
    q.enqueue(42)
    expect(q.dequeue()).toBe(12)
    expect(q.dequeue()).toBe(42)
    expect(q.dequeue()).toBeUndefined()
  })
})