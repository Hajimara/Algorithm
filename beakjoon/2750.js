const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let inputArr = require('fs').readFileSync(filePath).toString().trim().split('\n').map(item => parseInt(item));

const inputC = inputArr[0];
inputArr.shift();

function testCaseMultiline(inputArray, inputCase) {
    let temp = 0;
    for (let i = 0; i < inputCase; i++) {
        for (let j = i + 1; j < inputCase; j++) {
            if (inputArray[i] > inputArray[j]) {
                temp = inputArray[i];
                inputArray[i] = inputArray[j];
                inputArray[j] = temp;
            }
        }
        
    }
    inputArray.forEach(item => console.log(item));

}

testCaseMultiline(inputArr, inputC);

