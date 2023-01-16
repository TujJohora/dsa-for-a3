function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([2, 4, 6, 8, 11, 15, 18, 19, 21], 11)); // 1
console.log(binarySearch([2, 4, 6, 8, 11], 17)); // -1

// O(log n)
// O(1)
