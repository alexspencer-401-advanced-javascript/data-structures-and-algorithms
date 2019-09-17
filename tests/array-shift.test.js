const arrayFunction = require('../challenges/arrayShift/array-shift');

const arr = [2, 4, 6, 8];
const value = 5;
const result = arrayFunction.insertShiftArray(arr, value);

const arr1 = [4, 8, 15, 23, 42];
const value2 = 16;
const result2 = arrayFunction.insertShiftArray(arr1, value2);

describe('shift and insert into array', () => {
  it('inserts value into middle of given array', () => {
    expect(result).toStrictEqual([2, 4, 5, 6, 8]);
  });
  it('inserts value into middle of given array', () => {
    expect(result2).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
});

const arr2 = [2, 4, 5, 6, 8];
const result3 = arrayFunction.removeShiftArray(arr2);

describe('remove middle and shift array', () => {
  it('removes value in middle of given array', () => {
    expect(result3).toStrictEqual([2, 4, 6, 8]);
  });
});