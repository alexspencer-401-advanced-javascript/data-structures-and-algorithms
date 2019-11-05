const Hashtable = require('../challenges/hashtable/hashtable');

describe('hashtable testing', () => {

  it('can successfully get based on a key', () => {
    const hashtable = new Hashtable();
    hashtable.add('testing', 'I hope this works');
    expect(hashtable.get('testing')).toEqual('I hope this works');
  });

  it('can successfully add a key value pair (same test as above really, as they are circular', () => {
    const hashtable = new Hashtable();
    hashtable.add('testing', 'I hope this works');
    expect(hashtable.get('testing')).toEqual('I hope this works');
  });

  it('can see if something exists/is contained in buckets', () => {
    const hashtable = new Hashtable();
    hashtable.add('please work', 'I hope this works');
    expect(hashtable.contains('please work')).toBe(true);
  });

  it('can successfully make a hash using a key', () => {
    const hashtable = new Hashtable();
    expect(hashtable.hash('testing')).toBe(27);
  });

});