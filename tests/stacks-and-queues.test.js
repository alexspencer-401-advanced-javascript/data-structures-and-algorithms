const stackImport = require('../challenges/stacksAndQueues/stacks-and-queues');

describe('stacks and queues testing', () => {

  it('Can successfully push onto a stack', () => {
    const stack = new stackImport.Stack();
    const result = stack.push('test');
    expect(result.value).toBe('test');

  });
});