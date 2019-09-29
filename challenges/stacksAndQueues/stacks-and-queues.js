class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    if(this.top === null) {
      return this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    return this.top.value;
  }

  pop() {
    let answer;
    if(this.top) {
      answer = this.top.value;
      this.top = this.top.next;
    } 
    return answer;
  } 

  peek() {
    return this.top.value;
  }

}
module.exports = {
  Stack,
  Node
};

