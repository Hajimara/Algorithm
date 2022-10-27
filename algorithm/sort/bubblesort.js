// left 인덱스자리와 right인덱스들을 비교하여 right가 작다면 서로 위치를 바꾸며
// 순회한다. left인덱스 자릿수가 증가하며 회전한다.
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                [array[j], array[i]] = [array[i], array[j]];
            }
        }
        console.log(`${i}회전: ${array}`);
    }
    return array;
}
console.log(bubbleSort([5, 3, 4, 1, 2]));
