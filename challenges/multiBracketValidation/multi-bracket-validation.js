function multiBracketValidation(input) {

  const { Stack } = require('../stacksAndQueues/stacks-and-queues');
  
  const codeStack = new Stack();
  const bracketDictionary = ['(', ')', '{', '}', '[', ']'];
  let result;
  let resultArr = [];

  for(let i = 0; i < input.length; i ++) {
    if(input[i] === '(' || input[i] === '{' || input[i] === '[') {
      codeStack.push(input[i]);
    }
    if(input[i] === ')' || input[i] === '}' || input[i] === ']') {
      const leftSide = codeStack.pop();
      let rightBracketFigure = bracketDictionary.indexOf(input[i]);
      let leftBracketFigure = bracketDictionary.indexOf(leftSide);
      let test = rightBracketFigure - leftBracketFigure;
      resultArr.push(test);
    }
  } 
  if(codeStack.top) {
    return false;
  }
  for(let j = 0; j < resultArr.length; j ++) {
    if(resultArr[j] !== 1) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}

module.exports = multiBracketValidation;


