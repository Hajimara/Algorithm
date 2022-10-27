let getGCD = (num1, num2) => {
    let gcd = 1; // 최소로 나올 수 있는 수 최대공약수
    // 2부터 min까지 모든 정수로 나누어 보는 방법이다.
    for (let i = 2; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;// 계속 값이 교체되며 마지막에 삽입된 값은 최대공약수가 된다.
        }
    }

    return gcd;
};
