const binarySearch = require('../challenges/arrayBinarySearch/array-binary-search');

const arr = [4, 8, 15, 16, 23, 42];
const key = 4;
const result = binarySearch(arr, key);

const arr2 = [4, 8, 15, 16, 23, 42];
const key2 = 8;
const result2 = binarySearch(arr2, key2);

const arr3 = [4, 8, 15, 16, 23, 42];
const key3 = 15;
const result3 = binarySearch(arr3, key3);

const arr4 = [4, 8, 15, 16, 23, 42];
const key4 = 16;
const result4 = binarySearch(arr4, key4);

const arr5 = [4, 8, 15, 16, 23, 42];
const key5 = 23;
const result5 = binarySearch(arr5, key5);

const arr6 = [4, 8, 15, 16, 23, 42];
const key6 = 42;
const result6 = binarySearch(arr6, key6);

const arr7 = [11, 22, 33, 44, 55, 66, 77]; 
const key7 = 90;
const result7 = binarySearch(arr7, key7);

const arr8 = [11, 22, 33, 44, 55, 66, 77]; 
const key8 = 44;
const result8 = binarySearch(arr8, key8);

describe('returning index of key position in array', () => {
  it('returns index of key in array', () => {
    expect(result).toBe(0);
  });
  it('returns index of key in array', () => {
    expect(result2).toBe(1);
  });
  it('returns index of key in array', () => {
    expect(result3).toBe(2);
  });
  it('returns index of key in array', () => {
    expect(result4).toBe(3);
  });
  it('returns index of key in array', () => {
    expect(result5).toBe(4);
  });
  it('returns index of key in array', () => {
    expect(result6).toBe(5);
  });
  it('returns index of key in array', () => {
    expect(result7).toBe(-1);
  });
  it('returns index of key in array', () => {
    expect(result8).toBe(3);
  });
});