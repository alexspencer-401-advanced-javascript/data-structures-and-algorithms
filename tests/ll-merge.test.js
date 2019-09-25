const linkListImport = require('../challenges/linkedList/linked-list');
const merge = require('../challenges/llMerge/ll-merge');

describe('Linked Lists Merge', () => {
  
  it('merges to linked lists in zipper fashion', () => {
    const list1 = new linkListImport.LinkedList();
    const list2 = new linkListImport.LinkedList();
    list1.insert('5');
    list1.insert('3');
    list1.insert('1');
    list2.insert('6');
    list2.insert('4');
    list2.insert('2');
    const result = merge.mergeLists(list1, list2);
    expect(result.value).toBe('1');
    expect(result.next.value).toBe('2');
    expect(result.next.next.value).toBe('3');
    expect(result.next.next.next.value).toBe('4');
    expect(result.next.next.next.next.value).toBe('5');
    expect(result.next.next.next.next.next.value).toBe('6');
  });
});