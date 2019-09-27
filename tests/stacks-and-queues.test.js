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
    
  });
});