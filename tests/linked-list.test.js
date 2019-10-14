const linkListImport = require('../challenges/linkedList/linked-list');

describe('linked list tests', () => {
  it('can make an empty list', () => {
    const list = new linkListImport.LinkedList();
    const result = { head: null, size: 0 };
    expect(list).toEqual(result);
  });
  it('can properly insert into the linked list', () => {
    const list = new linkListImport.LinkedList();
    expect(list.size).toEqual(0);
    list.insert('testing');
    expect(list.size).toBe(1);
  });
  it('the head property will properly point to the first node in the linked list', () => {
    const list = new linkListImport.LinkedList();
    list.insert('testing2');
    const result = { value: 'testing2', next: null };
    expect(list.head).toEqual(result);
  });
  it('can properly insert multiple nodes into the linked list', () => {
    const list = new linkListImport.LinkedList();
    list.insert('testing 1');
    list.insert('testing 2');
    list.insert('testing 3');
    const first = { value: 'testing 1', next: null };
    const second = { value: 'testing 2', next: first };
    const third = { value: 'testing 3', next: second };
    expect(list.head).toEqual(third);
    expect(list.head.next).toEqual(second);
    expect(list.head.next.next).toEqual(first);
    expect(list.size).toBe(3);
  });
  it('will return true when finding a value within the linked list that exists', () => {
    const list = new linkListImport.LinkedList();
    list.insert('test');
    const value = list.head.value;
    expect(list.includes(value)).toBe(true);
  });
  it('will return false when searching for a value in the linked list that does not exist', () => {
    const list = new linkListImport.LinkedList();
    list.insert('test');
    expect(list.includes('wrong')).toBe(false);
  });
  it('can properly return a collection of all the values that exist in the linked list', () => {
    const list = new linkListImport.LinkedList();
    list.insert('test1');
    list.insert('test2');
    expect(list.head.value.toString()).toBe('test2', 'test1');
  });
  it('can successfully add a new node to end of linked list', () => {
    const list = new linkListImport.LinkedList();
    list.insert('test1');
    list.insert('test2');
    list.append('test3');
    expect(list.size).toBe(3);
    expect(list.head.next.next.value).toBe('test3');
  });
  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const list = new linkListImport.LinkedList();
    list.insert('test1');
    list.append('test2');
    list.append('test3');
    expect(list.size).toBe(3);
    expect(list.head.next.value).toBe('test2');
    expect(list.head.next.next.value).toBe('test3');
  });
  it('Can successfully insert a node before a node located in', () => {
    const list = new linkListImport.LinkedList();
    list.insert('test1');
    list.insert('test2');
    list.insertBefore('test2', 'test1.5');
    expect(list.size).toBe(3);
    expect(list.head.next.value).toBe('test1.5');
  });
  it('Can successfully insert a node before the first node of a linked list', () => {
    const list = new linkListImport.LinkedList();
    list.insert('test1');
    list.insert('test2');
    list.insertBefore('test2', 'test1.5');
    expect(list.size).toBe(3);
    expect(list.head.next.value).toBe('test1.5');
  });
  it('can insert before first node in list', () => {
    const list = new linkListImport.LinkedList();
    list.insert('test1');
    list.insertBefore('test1', 'test0');
    expect(list.size).toBe(2);
    expect(list.head.value).toBe('test0');
  });
  it('inserts one after', () => {
    const list = new linkListImport.LinkedList();
    list.insert('test1');
    list.insertAfter('test1', 'test2');
    list.insertAfter('test2', 'test3');
    expect(list.size).toBe(3);
    expect(list.head.next.value).toBe('test2');
    expect(list.head.next.next.value).toBe('test3');
  });
  it('can insert after last node of list', () => {
    const list = new linkListImport.LinkedList();
    list.insert('test1');
    list.insertAfter('test1', 'test2');
    expect(list.head.next.value).toBe('test2');
  });
  it('Where k is greater than the length of the linked list', () => {
    const list = new linkListImport.LinkedList();
    list.insert('1');
    list.insert('2');
    const k = 4;
    const result = list.kthFromEnd(k);
    expect(result).toBe('exception');
  });
  it('Where k and the length of the list are the same', () => {
    const list = new linkListImport.LinkedList();
    list.insert('1');
    list.insert('2');
    const k = 2;
    const result = list.kthFromEnd(k);
    expect(result).toBe('same length');
  });
  it('Where k is not a positive integer', () => {
    const list = new linkListImport.LinkedList();
    list.insert('1');
    list.insert('2');
    const k = -10;
    const result = list.kthFromEnd(k);
    expect(result).toBe('not a positive integer');
  });
  it('Where the linked list is of a size 1', () => {
    const list = new linkListImport.LinkedList();
    list.insert('1');
    const k = 1;
    const result = list.kthFromEnd(k);
    const k2 = 0;
    const result2 = list.kthFromEnd(k2);
    expect(result).toBe('same length');
    expect(result2).toBe('exception');
  });
  it('happy path', () => {
    const list = new linkListImport.LinkedList();
    list.insert('1');
    list.insert('2');
    list.insert('3');
    const k = 1;
    const result = list.kthFromEnd(k);
    expect(result).toBe('2');
  });
});