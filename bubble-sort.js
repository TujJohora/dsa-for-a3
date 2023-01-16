// [3,4,2, 0,5,-1,6,1]
// [-1, 0, 1, 2, 3, 4, 5, 6]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([3, 4, 2, 0, 5, -1, 6, 1]));

// O(n^2) --> quadratic
