function insertShiftArray(input, value) {
  const middle = ((input.length) / 2);
  const newArr = [];
  for(let i = 0; i < middle; i++) {
    newArr[newArr.length] = input[i];
  }
  newArr[newArr.length] = value;
  for(let i = middle; i < input.length; i++) {
    newArr[newArr.length] = input[i];
  }
  return newArr;
}

module.exports = insertShiftArray;