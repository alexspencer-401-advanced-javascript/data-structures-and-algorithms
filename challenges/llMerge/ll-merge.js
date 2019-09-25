const linkListModel = require('../linkedList/linked-list');

const l1 = new linkListModel.LinkedList();
const l2 = new linkListModel.LinkedList();

l1.insert('abbey');
l1.insert('allison');
l1.insert('alex');
l2.insert('hello');
l2.insert('goodbye');
l2.insert('thing');

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
  console.log(finalLinkedList.toString());
  // return finalLinkedList.head;
}

mergeLists(l1, l2);

module.exports = {
  mergeLists
};