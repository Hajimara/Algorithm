let getLCM = (num1, num2) =>{
	let lcm = 1;
    // 두 수가 0으로 나누어 떨어질 때
    // 여러 수의 공통인 배수 중 가장 작은 수
    // 두 수를 증가하는 lcm값으로 나누었을 때 떨어지는 lcm값이 최소공배수이다.
    while(true){
      if((lcm % num1 == 0) && (lcm % num2 == 0)){
        break;
      }
      lcm++;
    }
  	return lcm
}