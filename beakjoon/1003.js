const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let inputArr = require('fs').readFileSync(filePath).toString().trim().split('\n').map(item => parseInt(item));

// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
// N이 주어졌을 때, fibonacci(N)을 호출했을 때, 
// 0과 1이 각각 몇 번 출력되는지 구하는 프로그램을 작성하시오.
// 메모리제한 128MB
const t = inputArr.shift();
const arr = [[1, 0], [0, 1]];
//            arr[0][0] arr[0][1] arr[1][0] arr[1][1]
// fibonacci(3)의 값은 fibonacci(2)와 fibonacci(1)의 합이다. 
// fibonacci값을 구한 후 저장시켜놓고 원하는 횟수까지 늘려 계산한다.
// 위에서 아래로 더한다고 생각하면 쉽다. 이후 값을 다음 인덱스 배열에 저장한다.
// 0: (2) [1, 0]
// 1: (2) [0, 1]
// 2: (2) [1, 1]
// 3: (2) [1, 2]
// 4: (2) [2, 3]
for (let i = 0; i < t; i ++) {
  const n = inputArr[i];

  for (let j = 2; j <= n; j++) {
    arr[j] = [(arr[j-1][0] + arr[j-2][0]), (arr[j-1][1] + arr[j-2][1])];
  }
// arr[2] = [ 0 + 1, 1 + 0 ] = [1, 1]
// arr[3] = [ 0 + 1, 1 + 1 ] = [1, 2]
  console.log(arr[n].join(' '));
}

// 메모리 제한 초과 
// for (let index = 0; index < t; index++) {
//   const sumArr = [0 ,0]
//   const fib = (n) => {
//     // 기저조건
//     if (n <= 1) {
//       n === 0 ? sumArr.push(sumArr[0] += 1) : sumArr[1] += 1;
//       return n;
//     }

//     return fib(n - 1) + fib(n - 2);
//   }
//   fib(inputArr[index]);
//   console.log(`${sumArr[0]} ${sumArr[1]}`);
// }


