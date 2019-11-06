module.exports = function repeatedWord(string) {
  let obj = {};
  let stringWord = string.split(' ');
  for(let i = 0; i < stringWord.length; i++) {
    if(!obj[stringWord[i]]) obj[stringWord[i]] = 1;
    else obj[stringWord[i]]++;
  }
  let newArr = [];
  const objectEntries = Object.entries(obj);
  objectEntries.forEach(entry => {
    if(entry[1] === 2) newArr.push(entry[0]);
  });
  return newArr[0];
};