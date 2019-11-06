function insertShiftArray(input, value) {
  const middle = Math.ceil(input.length / 2);
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

function removeShiftArray(input) {
  const middle = Math.floor(input.length / 2);
  const newArr = [];
  for(let i = 0; i < middle; i++) {
    newArr[newArr.length] = input[i];
  }
  for(let i = middle + 1; i < input.length; i++) {
    newArr[newArr.length] = input[i];
  }
  return newArr;
}

module.exports = {
  insertShiftArray,
  removeShiftArray
};