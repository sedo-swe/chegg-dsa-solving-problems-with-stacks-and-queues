const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  let middle = Math.floor(sentence.length / 2);

  const letters = new Stack();
  for (let i=0; i<middle; i++) {
      letters.push(sentence.charAt(i));
  }
  let start = middle;
  if (sentence.length % 2 == 1)
      start++;
  for (let i=start; i<sentence.length; i++) {
      if (sentence.charAt(i) != letters.pop()) {
          return false;
      }
  }
  return true;
};

module.exports = isPalindrome;