function binarySearch(arr, key) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  
  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if(key === arr[middleIndex]) {
      return middleIndex;
    }
    if(key > arr[middleIndex]) {
      startIndex = middleIndex += 1;
    } else if(key < arr[middleIndex]) {
      endIndex = middleIndex -= 1;
    } 
  }
  return -1;
}

module.exports = binarySearch;

// Found this to be a very helpful resource https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470