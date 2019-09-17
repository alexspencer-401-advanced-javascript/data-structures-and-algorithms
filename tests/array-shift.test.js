const insertShiftArray = require('../challenges/arrayShift/array-shift');

const arr = [2, 4, 6, 8];
const value = 5;
const result = insertShiftArray(arr, value);

const arr1 = [4, 8, 15, 23, 42];
const value2 = 16;
const result2 = insertShiftArray(arr1, value2);

describe('shift and insert into array', () => {
  it('inserts value into middle of given array', () => {
    expect(result).toStrictEqual([2, 4, 5, 6, 8]);
  });
  it('inserts value into middle of given array', () => {
    expect(result2).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
});