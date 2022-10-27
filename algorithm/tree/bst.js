class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

/**
 * BinarySearchTree 조건
 * left는 부모 노드보다 값이 작아야함
 * right는 부모 노드보다 값이 커야함
 */
class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value);

    if (this.root === null) { // 최상위 루트 지정
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while(true){
        if(value < currentNode.value){ // 현재 노드값 보다 작으면 Left
          if(!currentNode.left){ // 현재 노드 Left가 비어있다면 바로 삽입
            currentNode.left = newNode;
            return this;
          }
          // 현재 노드 left가 있다면 현재 노드를 존재하고있는 left로 전환하여 재실행
          currentNode = currentNode.left; 
        } else { // 현재 노드값 보다 작으면 Right
          if(!currentNode.right){ // 현재 노드 Right가 비어있다면 바로 삽입
            currentNode.right = newNode;
            return this;
          }
          // 현재 노드 right가 있다면 현재 노드를 존재하고있는 right로 전환하여 재실행
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value){
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;

    // 값의 크기를 비교하여 노드를 계속 타고 내려간다.
    // value === currentNode.value가 되면 그대로 값을 리턴한다.
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }

    return null
  }

  remove(value) {
    if (!this.root) { // 기저조건
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){ // 노드 타고 내려가기(값이 작을경우 왼쪽)
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){ // 노드 타고 내려가기(값이 작을경우 오른쪽)
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) { // 삭제하려는 노드 찾았을 경우
        //Option 1: 현재 삭제하려는 값의 right가 비었을경우 
        if (currentNode.right === null) { // 삭제하려는 값이 right가 없고
          if (parentNode === null) { // 최상위 노드일 경우 루트로 대체
            this.root = currentNode.left; 
          } else {
            // 만약 현재 지울 노드가 부모 노드보다 값이 작다면
            // 현재 지울 노드의 left를 부모 노드의 left에 위임한다. 현재 지울 노드자리에 끼워넣기
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

            // 만약 현재 지울 노드가 부모 노드보다 값이 작다면
            // 현재 지울 노드의 left를 부모 노드의 right에 위임한다. 현재 지울 노드자리에 끼워넣기
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

        //Option 2: 현재 삭제하려는 노드의 right 속성 노드의 left가 없다면
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left; // 현재 삭제하려는 노드 의 left 위임
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {

            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

        //Option 3: left속성이 null이 아닌 right 속성
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left; // 대체자 
          let leftmostParent = currentNode.right; // 대체자 부모노드 
          while(leftmost.left !== null) { // 대체자의 left가 존재하면 계속 끌어올리기
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right; // 상단으로 올라오기 위해 right가 있다면 위임
          leftmost.left = currentNode.left; // 지우려는 노드의 left 대체자에게 위임
          leftmost.right = currentNode.right; // 지우려는 노드의 right 대체자에게 위임

          if(parentNode === null) { // 삭려하려는 노드가 루트면 자리 위임
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(180)
tree.insert(15)
tree.insert(1)
tree.remove(9)
console.log(tree.lookup(20));
// console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}