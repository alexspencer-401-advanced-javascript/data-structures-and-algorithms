const arr = [1, 2, 3, 4, 5, 6];

function reverseArray(arr) {
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
    return newArr;
}

reverseArray(arr);