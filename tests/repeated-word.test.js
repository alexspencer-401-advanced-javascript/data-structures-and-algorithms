const repeatedWord = require('../challenges/repeatedWord/repeated-word');

describe('repeated word testing', () => {
  
  it('can successfully return the first repeated word', () => {
    const string = 'fa la li lo la re mi doe';
    const result = repeatedWord(string);
    expect(result).toEqual('la');
  });

});