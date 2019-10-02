const stackImport = require('../challenges/stacksAndQueues/stacks-and-queues');

describe('stacks and queues testing', () => {

  it('Can successfully push onto a stack', () => {
    const stack = new stackImport.Stack();
    const result = stack.push('test');
    expect(result.value).toBe('test');
  });
  it('Can successfully push multiple values onto a stack', () => {
    const stack = new stackImport.Stack();
    stack.push('test');
    stack.push('test2');
    expect(stack.top.value).toBe('test2');
    expect(stack.top.next.value).toBe('test');
  });
  it('Can successfully pop off the stack', () => {
    const stack = new stackImport.Stack();
    stack.push('test1');
    stack.push('test');
    const result = stack.pop();
    expect(result).toBe('test');
  });
  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new stackImport.Stack();
    stack.push('test1');
    stack.push('test');
    stack.pop();
    stack.pop();
    expect(stack.top).toBe(null);
  });
  it('Can successfully peek the next item on the stack', () => {
    const stack = new stackImport.Stack();
    stack.push('test1');
    stack.push('test2');
    const result = stack.peek();
    expect(result).toBe('test2');
  });
  it('Can successfully instantiate an empty stack', () => {
    const emptyQueue = new stackImport.Queue();
    expect(emptyQueue.front).toBe(null);
  });
  it('Can successfully enqueue into a queue', () => {
    const queue = new stackImport.Queue;
    queue.enqueue('test');
    expect(queue.front.value).toBe('test');
  });
  it('Can successfully enqueue multiple into a queue', () => {
    const queue = new stackImport.Queue();
    queue.enqueue('test');
    queue.enqueue('test2');
    expect(queue.front.value).toBe('test');
    expect(queue.front.next.value).toBe('test2');
  });
  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new stackImport.Queue();
    queue.enqueue('test');
    queue.enqueue('test1');
    queue.dequeue();
    expect(queue.front.value).toBe('test1');
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new stackImport.Queue();
    queue.enqueue('test');
    expect(queue.front.value).toBe('test');
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new stackImport.Queue();
    queue.enqueue('test');
    queue.enqueue('test1');
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBe(null);
  });
  it('Can successfully instantiate an empty queue', () => {
    const queue = new stackImport.Queue();
    expect(queue.front).toBe(null);
  });
});