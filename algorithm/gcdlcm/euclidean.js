// 유클리드 호제법의 기본 원리는 **num1를 num2로 나눈 나머지를 r이라고 했을 때, GCD(num1, num2) = GCD(num2, r)과 같다는 것이다.**
// r이 0이라면, 그 때의 num2가 최대공약수이다.\

// num1=24, num2=16을 가정하면, GCD(24, 16) = GCD(16, 8) = GCD(8, 0)
// 여기서 num1 < num2의 경우에는 값이 자동스왑된다. 
// ex) num1=16, num2=24일 경우에는 getGCD(24, (16%24=16))이 불러지게 된다.


function solution(a, b){
    const gcd = (a, b) => b < 0 ? gcd(b, a % b) : a
    const lcm = (a, b) => a * b / gcd(a, b)
  
    return [gcd(a, b), lcm(a, b)]
  }
  
  console.log(solution(12, 142));
  // 최대공약수 최대공배수