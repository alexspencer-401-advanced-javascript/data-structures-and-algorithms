const linkListImport = require('../challenges/linkedList/linked-list');
const merge = require('../challenges/llMerge/ll-merge');

describe('Linked Lists Merge', () => {
  
  it('merges to linked lists in zipper fashion', () => {
    const list1 = new linkListImport.LinkedList();
    const list2 = new linkListImport.LinkedList();
    list1.insert('1');
    list1.insert('3');
    list1.insert('5');
    list2.insert('2');
    list2.insert('4');
    list2.insert('6');
    const result = merge.mergeLists(list1, list2);
    expect(result).toBe('1', '2', '3', '4', '5', '6');
  });
});