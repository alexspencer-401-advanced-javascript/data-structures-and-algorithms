const linkListModel = require('../linkedList/linked-list');

function mergeLists(l1, l2) {

  const finalLinkedList = new linkListModel.LinkedList();
  let currentNodeOne = l1.head;
  let currentNodeTwo = l2.head;

  while(currentNodeOne.next !== null && currentNodeTwo.next !== null) {
    finalLinkedList.append(currentNodeOne.value);
    finalLinkedList.append(currentNodeTwo.value);
    currentNodeOne = currentNodeOne.next;
    currentNodeTwo = currentNodeTwo.next;
  }
  finalLinkedList.append(currentNodeOne.value);
  finalLinkedList.append(currentNodeTwo.value);

  if(l1.size > l2.size) {
    currentNodeOne = currentNodeOne.next;
    while(currentNodeOne.next) {
      finalLinkedList.append(currentNodeOne.value);
      currentNodeOne = currentNodeOne.next;
    }
    finalLinkedList.append(currentNodeOne.value);
  }

  if(l2.size > l1.size) {
    currentNodeTwo = currentNodeTwo.next;
    while(currentNodeTwo.next) {
      finalLinkedList.append(currentNodeTwo.value);
      currentNodeTwo = currentNodeTwo.next;
    }
    finalLinkedList.append(currentNodeTwo.value);
  }

  return finalLinkedList.head;
}

module.exports = {
  mergeLists
};