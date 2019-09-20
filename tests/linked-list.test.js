const linkListImport = require('../challenges/linkedList/linked-list');

describe('linked list tests', () => {
  it('can make an empty list', () => {
    const list = new linkListImport.LinkedList();
    const result = { head: null, size: 0 };
    expect(list).toEqual(result);
  });
});