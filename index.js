const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let inputArr = require('fs').readFileSync(filePath).toString().trim().split('\n').map(item => parseInt(item));

let count = 0;
function NQueen(N, k, arr) {
  if (k == N) {
    count++;
  } else {
    for (let i = 0; i < N; i++) {
      if (isAvailable(arr, i)) {
        arr.push(i);
        NQueen(N, k + 1, arr);
        arr.pop();
      }
    }
  }
  return count;
}

function isAvailable(arr, location) {
  const row = arr.length;
  for (let i = 0; i < row; i++) {
    if (arr[i] == location || row - i == Math.abs(arr[i] - location))  { 
        return false;
    }
  }
  return true;
}

console.log(NQueen(inputArr, 0, []));
