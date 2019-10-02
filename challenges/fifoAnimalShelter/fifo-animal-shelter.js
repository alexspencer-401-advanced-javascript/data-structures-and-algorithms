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

  dequeue(pref) {
    if(pref === 'cat') {
      if(!this.catQueue.peek()) return 'there are no more cats';
      if(this.catQueue.peek()) return this.catQueue.dequeue();
      
    }
    if(pref === 'dog') {
      if(!this.dogQueue.peek()) return 'there are no more dogs';
      if(this.dogQueue.peek()) this.dogQueue.dequeue();
    } 
  }
}

module.exports = AnimalShelter;