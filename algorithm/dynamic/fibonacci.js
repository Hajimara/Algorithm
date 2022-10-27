function fibonacci(number) {
    let result = [0, 1];
    if (number === 0) {
      console.log([0]);
    }
    if (number === 1) {
      console.log([0, 1])
    }
    for (let i = 2; i <= number; i++){
      result.push(result[i - 2] + result[i - 1]);
      console.log(result);
    }
  }
  
function fibonacci(a) {
    if (a == 1 || a == 2) {
        return 1;
    }
    // 전항과 전전항을 더해주는 공식
    return fibonacci(a - 1) + fibonacci(a - 2);
}

function fibonacci(n) {
    // TODO: 여기에 코드를 작성합니다.

    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


function fibonacci(n) {
    // TODO: 여기에 코드를 작성합니다.
    //일단 초기 배열이 [0, 1]에서 시작하여 배열의 요소를 누적해 나가는 방법
    //그리고 이미 구해놓은 것은 배열의 요소로 저장해놓기..!!! 그래야 런타임이 초과되지 않는다

    let newArr = [0, 1]; //0번째 1번째 요소는 고정시켜두고

    let fib = (n) => {
        //함수 한개를 선언해주고
        if (newArr[n] !== undefined) {
            return newArr[n]; //이미 있는 건 그대로 리턴
        }
        newArr[n] = fib(n - 1) + fib(n - 2); //없는 건 새로 만들어서 저장!!!*****
        return newArr[n];
    };

    return fib(n);
}

console.log(fibonacci(5)); // 5
