const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let inputArr = require('fs').readFileSync(filePath).toString().trim().split('\n').map(item => parseInt(item));
// N-Queen 문제는 크기가 N × N인 체스판 위에 퀸 N개를 서로 공격할 수 없게 놓는 문제이다.
// N이 주어졌을 때, 퀸을 놓는 방법의 수를 구하는 프로그램을 작성하시오.

// 첫째 줄에 N이 주어진다. (1 ≤ N < 15)
// 첫째 줄에 퀸 N개를 서로 공격할 수 없게 놓는 경우의 수를 출력한다.
let count = 0;
// NQueen(N, k:행 번호(넣을 자리), arr: 열 번호를 저장할 배열)
function NQueen(N, k, arr) {
  if (k == N) {
    count++;
  } else {
    for (let i = 0; i < N; i++) {
      if (isAvailable(arr, i)) {
        arr.push(i);
        NQueen(N, k + 1, arr);
        // arr.splice(arr.length - 1);
        arr.pop();
      }
    }
  }
  return count;
}

function isAvailable(arr, location) {
  const row = arr.length;
  for (let i = 0; i < row; i++) {
    const a = arr[i]
    console.log(row - i, a - location);
    // if (a == location || row - i == Math.abs(a - location)) {
    //     return false;
    // }
    if (a == location) { // 열(col) 조건으로 겹치는 부분으로 세로 조건 
        return false;
    }
    // 대각선 조건으로 i번 째 줄의 퀸과의 row 와 col의 차가 같은 경우 대각선이라 판단.
    // x+y=(합이 같음) or x-y=0을 충족한다면 대각선이 매칭이 됨을 의미
    // 현재 행 - 체크할 행 === 현재 위치 +- 확인할 위치
    if (row - i == Math.abs(a - location)) { 
      return false;
    }
  }
  return true;
}

console.log(NQueen(inputArr, 0, []));
