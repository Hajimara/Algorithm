const array = [9, 2, 5, 1, 3, 10, 15, 55, 33, 44, 11];

// 최솟값과 최댓값을 동시에 정렬하는 알고리즘
// 최솟값은 앞배치 최댓값은 뒷배치
const doubleSelectionSort = (arr) => {
    let start = 0;
    let end = arr.length;

    while (start < end) {
        let min = start;
        let max = end;

        for (let i = start; i < end; i++) {
            if (arr[min] > arr[i]) {
                min = i;
            }

            if (arr[max] < arr[i]) {
                max = i;
            }
        }

        if (start !== min) {
            [arr[start], arr[min]] = [arr[min], arr[start]];
        }

        if (end !== max) {
            [arr[end], arr[max]] = [arr[max], arr[end]];
        }

        start++;
        end--;
    }

    return arr;
};

// 최솟값을 찾아 위치를 저장한 후 현재 가지고 있는 최소 인덱스와 위치를 교환한다.
// 선택정렬은 최선, 최악, 평균 모두 O(n2)의 시간복잡도를 가지고 있다
// left인덱스 right... 인덱스 비교하여 맨 왼쪽 인덱스가 클 경우 right인덱스값 저장
// left 인덱스가 작을경우 저장 값 위치 변경없이 다음 루프진행
// 선택정렬 ES6
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
};

console.log(doubleSelectionSort(array));
