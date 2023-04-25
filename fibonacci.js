function fibs(num) {
  let arr = [0, 1];
  for (let i = 2; i <= num - 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(fibs(8));

function fibsRec(num) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  const arr = fibsRec(num - 1);
  return [...arr, arr[num - 2] + arr[num - 3]];
}

console.log(fibsRec(8));
