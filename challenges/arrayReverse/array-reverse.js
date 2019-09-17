function reverseArray(input) {
  let array = [];
  let index = 0;
  for(let i = input.length - 1; i >= 0; i--) {
    array[index] = input[i];
    index += 1;
  }
  return array;
}

module.exports = reverseArray;

// Found a great resource at https://teamtreehouse.com/community/reversing-an-array-in-javascript