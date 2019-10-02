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
});