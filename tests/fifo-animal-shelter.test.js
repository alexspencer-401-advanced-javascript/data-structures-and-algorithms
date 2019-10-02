const AnimalShelter = require('../challenges/fifoAnimalShelter/fifo-animal-shelter');

describe('linked list tests', () => {
  it('successfully enqueues cats and dogs', () => {
    const queue = new AnimalShelter();
    const testCat1 = {
      type: 'cat',
      name: 'Rascal'
    };
    const testCat2 = {
      type: 'cat',
      name: 'Nutmeg'
    };
    const testDog1 = {
      type: 'dog',
      name: 'timber the goldendoodle, lord of all dogs'
    };
    const testDog2 = {
      type: 'dog',
      name: 'amazing human best friend'
    };
    queue.enqueue(testCat1);
    queue.enqueue(testCat2);
    queue.enqueue(testDog1);
    queue.enqueue(testDog2);
    expect(queue.dogQueue.front.next.value).toEqual('amazing human best friend');
    expect(queue.dogQueue.front.value).toEqual('timber the goldendoodle, lord of all dogs');
    expect(queue.catQueue.front.next.value).toEqual('Nutmeg');
    expect(queue.catQueue.front.value).toEqual('Rascal');
  });
  it('dequeues based on pref', () => {
    const queue = new AnimalShelter();
    const testCat1 = {
      type: 'cat',
      name: 'Rascal'
    };
    const testCat2 = {
      type: 'cat',
      name: 'Nutmeg'
    };
    const testDog1 = {
      type: 'dog',
      name: 'timber the goldendoodle, lord of all dogs'
    };
    const testDog2 = {
      type: 'dog',
      name: 'amazing human best friend'
    };
    queue.enqueue(testCat1);
    queue.enqueue(testCat2);
    queue.enqueue(testDog1);
    queue.enqueue(testDog2);
    queue.dequeue('cat');
    queue.dequeue('dog');
    expect(queue.catQueue.front.value).toEqual('Nutmeg');
    expect(queue.dogQueue.front.value).toEqual('amazing human best friend');
  });
  it('returns an error if you try to remove more than are available', () => {
    const queue = new AnimalShelter();
    const testCat1 = {
      type: 'cat',
      name: 'Rascal'
    };
    const testCat2 = {
      type: 'cat',
      name: 'Nutmeg'
    };
    const testDog1 = {
      type: 'dog',
      name: 'timber the goldendoodle, lord of all dogs'
    };
    const testDog2 = {
      type: 'dog',
      name: 'amazing human best friend'
    };
    queue.enqueue(testCat1);
    queue.enqueue(testCat2);
    queue.enqueue(testDog1);
    queue.enqueue(testDog2);
    queue.dequeue('cat');
    queue.dequeue('cat');
    const result = queue.dequeue('cat');
    queue.dequeue('dog');
    queue.dequeue('dog');
    const result2 = queue.dequeue('dog');
    expect(result).toEqual('there are no more cats');
    expect(result2).toEqual('there are no more dogs');
  });
});