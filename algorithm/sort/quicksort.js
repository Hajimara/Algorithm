// 최악 O(n^2)
// 평균 O(nlog^n)
const quickSort = function (arr) {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  };
  // const arra = [7, 4, 3, 2, 1, 6, 5];
  
  // console.log(quickSort(arra));
  
  console.log(quickSort([6,3,5,1,9,4,8,2,7]));