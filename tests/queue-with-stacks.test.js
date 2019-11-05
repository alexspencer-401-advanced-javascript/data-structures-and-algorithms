const PseudoQueue = require('../challenges/queueWithStacks/queue-with-stacks');

describe('stacks and queues testing', () => {

  it('pops all nodes into a new stack', () => {
    const queue = new PseudoQueue();
    queue.stackIn.push('1');
    queue.stackIn.push('2');
    queue.stackIn.push('3');
    queue.enqueue('4');
    expect(queue.stackIn.top.value).toEqual('3');
    expect(queue.stackIn.top.next.value).toEqual('2');
    expect(queue.stackIn.top.next.next.value).toEqual('1');
    expect(queue.stackIn.top.next.next.next.value).toEqual('4');
  });

  it('pops off the last value and returns', () => {
    const queue = new PseudoQueue();
    queue.stackIn.push('1');
    queue.stackIn.push('2');
    queue.stackIn.push('3');
    const result = queue.dequeue();
    expect(result).toEqual('1');
  });
});