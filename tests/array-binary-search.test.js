const binarySearch = require('../challenges/arrayBinarySearch/array-binary-search');

const arr = [4, 8, 15, 16, 23, 42];
const key = 15;
const result = binarySearch(arr, key);

describe('returning index of key position in array', () => {
  
  it('returns index of key in array', () => {
    expect(result).toBe(2);
  });
  
});