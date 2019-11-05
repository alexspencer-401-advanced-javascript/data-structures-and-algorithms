const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('Multi bracket test', () => {
  it('returns the correct boolean response', () => {
    expect(multiBracketValidation('{}')).toBe(true);
    expect(multiBracketValidation('{}(){}')).toBe(true);
    expect(multiBracketValidation('()[[Extra Characters]]')).toBe(true);
    expect(multiBracketValidation('(){}[[]]')).toBe(true);
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBe(true);
    expect(multiBracketValidation('[({}]')).toBe(false);
    expect(multiBracketValidation('(](')).toBe(false);
    expect(multiBracketValidation('{(})')).toBe(false);
  });
});