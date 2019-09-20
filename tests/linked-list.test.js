const LinkedList = require('../challenges/linkedList/linked-list');

describe('linked list tests', () => {
  it('can make an empty list', () => {
    const list = new LinkedList;
    const result = { 
      size: 0, 
      head: null 
    };
    expect(list).toEqual(result);
});

  it()