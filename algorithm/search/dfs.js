// const graph = {
//   A: ["B", "C"],
//   B: ["A", "D"],
//   C: ["A", "G", "H", "I"],
//   D: ["B", "E", "F"],
//   E: ["D"],
//   F: ["D"],
//   G: ["C"],
//   H: ["C"],
//   I: ["C", "J"],
//   J: ["I"],
// };

// const DFS = (graph, startNode) => {
//   const visited = []; // 탐색을 마친 노드들
//   let needVisit = []; // 탐색해야할 노드들

//   needVisit.push(startNode); // 노드 탐색 시작

//   while (needVisit.length !== 0) {
//     // 탐색해야할 노드가 남아있다면
//     const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
//     if (!visited.includes(node)) {
//       // 해당 노드가 탐색된 적 없다면
//       visited.push(node);
//       needVisit = [...graph[node], ...needVisit];
// //DFS는 이전 노드가 아니라 자기 자신과 연결되었던 노드를 먼저 탐색한다.
//     }
//   }
//   return visited;
// };

// console.log(DFS(graph, "A"));
// ["A", "B", "D", "E", "F", "C", "G", "H", "I", "J"]


// 1부터 n까지 자연 수 중에서 중복없이 M개를 고른 수열
// 수열 구분은 공백으로 한다.
const n = 3;
const m = 3;
const results =[]

const getDFS = () => {

  if (results.length === m) {
    console.log(results.join(' '));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if(!results.includes(i)) { // 만약 중복되는 수열이 없다면
      results.push(i) // 수열 추가
      getDFS();
      results.pop() //마지막 요소 제거
    }
  }
  return results;
}

getDFS();