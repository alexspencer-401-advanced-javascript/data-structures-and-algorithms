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
});