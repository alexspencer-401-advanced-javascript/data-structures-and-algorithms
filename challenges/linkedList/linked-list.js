class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insert(value) {
    const newNode = new Node(value);
    this.head = newNode; 
    newNode.next = this.head;
    this.size++; 
  }
  
  includes(value) {
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++ ) {
      if(currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    } return false;
  }

  toString() {
    let string;
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++ ) {
      string = string + currentNode.value;
      currentNode = currentNode.next;
    }
    return string;
  }
}

module.exports = {
  Node,
  LinkedList
};