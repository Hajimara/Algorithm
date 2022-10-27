const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let inputArr = require('fs').readFileSync(filePath).toString().trim().split('\n').map(item => parseInt(item));
inputArr.shift()
console.log(inputArr.sort((a, b) => a - b).join('\n'));

// 시간초과
// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     let j;
//     for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr
// }

// 시간초과
// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) minIndex = j;
//     }
    
//     if (minIndex !== i) [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
//   }
//   return arr
// }

// console.log(selectionSort(inputArr));

// // 시간초과
// const merge = (left, right) => {
//   const sortedArr = [];
//   while(left.length && right.length) {
//     if (left[0] <= right[0]) sortedArr.push(left.shift())
//     else sortedArr.push(right.shift());
//   }
//   // 순서상관없음 어차피 left, right 둘중 하나는 비워진다.
//   return [...sortedArr, ...left, ...right]
// }

// const mergeSort = (arr) => {
//   // 기저 조건
//   if (arr.length <= 1) return arr;

//   const boundary = Math.ceil(arr.length / 2);
//   const left = arr.slice(0, boundary);
//   const right = arr.slice(boundary);

//   return merge(mergeSort(left), mergeSort(right));
// }

// console.log(mergeSort(inputArr).join('\n'));

// 메모리 초과
// const quickSort = (arr) => {
//   if (arr.length <= 1) return arr;
//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   // 분할
//   for (let i = 1; i < arr.length; i++) {
//     // 오름차순 내림차순 지정 구간
//     if (arr[i] <= pivot) left.push(arr[i]);
//     else right.push(arr[i]);
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// };
// console.log(quickSort(inputArr));
