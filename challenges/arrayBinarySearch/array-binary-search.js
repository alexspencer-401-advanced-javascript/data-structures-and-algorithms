function binarySearch(arr, key) {
  for(let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if(number === key) {
      return i;
    }
  } 
}

module.exports = binarySearch;