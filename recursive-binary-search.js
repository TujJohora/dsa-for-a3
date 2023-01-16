function binarySearch(arr, target, left, right) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (target === arr[mid]) return mid;
  if (target > arr[mid]) {
    return binarySearch(arr, target, mid + 1, right);
  } else {
    return binarySearch(arr, target, left, mid - 1);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 5, 0, 5));

// O(log n)
// less effficient for large inputs
