const insertShiftArray = require('../challenges/arrayShift/array-shift');

const arr = [2, 4, 6, 8];
const value = 5;
const result = insertShiftArray(arr, value);

describe('shift and insert into array', () => {
  it('inserts value into middle of given array', () => {
    expect(result).toStrictEqual([2, 4, 5, 6, 8]);
  });
});