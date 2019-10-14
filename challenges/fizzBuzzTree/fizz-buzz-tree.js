function fizzBuzzChallenge(tree) {
  return fizzBuzzSearch(tree.root, tree);
}

function fizzBuzzSearch(node, tree) {
  if(!node) return null;
  else if(node.value % 3 === 0 && node.value % 5 === 0) node.value = 'FizzBuzz';
  else if(node.value % 3 === 0) node.value = 'Fizz';
  else if(node.value % 5 === 0) node.value = 'Buzz';
  fizzBuzzSearch(node.left);
  fizzBuzzSearch(node.right);
  return tree;
}

module.exports = {
  fizzBuzzChallenge,
};
