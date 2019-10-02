const queueImport = require('../stacksAndQueues/stacks-and-queues');

class AnimalShelter {
  constructor() {
    this.dogQueue = new queueImport.Queue();
    this.catQueue = new queueImport.Queue();
  }

  enqueue(animal) {
    if(animal.type === 'cat') {
      this.catQueue.enqueue(animal.name);
    } 
    if(animal.type === 'dog') {
      this.dogQueue.enqueue(animal.name);
    }
  }
}

module.exports = AnimalShelter;