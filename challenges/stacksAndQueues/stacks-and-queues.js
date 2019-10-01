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

class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    let currentNode = this.front;

    if(!currentNode) {
      this.front = newNode;
    } else {
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  dequeue() {
    let answer;
    if(this.front) {
      answer = this.front.value;
      this.front = this.front.next;
    } 
    return answer;
  }

  peek() {
    return this.front.value;
  }

}

module.exports = {
  Stack,
  Node,
  Queue
};

