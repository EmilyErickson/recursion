function mergeSort(arr) {
  if (arr.length <= 2) return arr;

  let middle = arr.length / 2;
  let left = arr.slice(0, middle),
    right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  while (left.length) sorted.push(left.shift());

  while (right.length) sorted.push(right.shift());

  return sorted;
}

console.log(mergeSort([75, 23, 6, 13, 8, 3, 61, 37, 6]));
