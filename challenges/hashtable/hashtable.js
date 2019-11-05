// Provided by Ryan in class
// Helpful resource: https://reactgo.com/hashtable-javascript/

const DEFAULT_HASH = size => key => key
  .split('')
  .reduce((acc, letter, i) =>
    acc += letter.charCodeAt(0) + i, 0)
  % size;

class Hashtable {
  constructor(size = 40, hashAlgorithm = DEFAULT_HASH) {
    this.buckets = new Array(size).fill([]);
    this.hashAlgorithm = hashAlgorithm(size);
  }

  add(key, value) {
    let index = this.hash(key);
    if(!this.buckets[index]) this.buckets[index].push([key, value]);
    else this.buckets[index] = ([key, value]);
    return index;
  }

  get(key) {
    let index = this.hash(key);
    if(!this.buckets[index]) return null;
    else {
      for(let i = 0; i < this.buckets.length; i++) {
        if(this.buckets[i][0] === key) return this.buckets[i][1];
      }
    }
  }

  contains(key) {
    if(this.get(key) === null) return false;
    else return true;
  }

  hash(key) {
    return this.hashAlgorithm(key);
  }
}

module.exports = Hashtable;