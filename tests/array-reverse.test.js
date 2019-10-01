const reverseArray = require('../challenges/arrayReverse/array-reverse');

const arr = [89, 2354, 3546, 23, 10, -923, 823, -12];
const result = reverseArray(arr);

describe('reversing an array', () => {
  
  it('returns reversed array', () => {
    expect(result).toStrictEqual([-12, 823, -923, 10, 23, 3546, 2354, 89]);
  });

});