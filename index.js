function isPalindrome(word) {
  // Write your algorithm here
for(let i=0;i< word.length/2;i++){
const j = word.length-1-i;
const startChar = word[i];
const endChar = word[j];
if(startChar !== endChar) return false
return true;
}
}

/* 
  Add your pseudocode here
    We should check if the first letter of a given word is the same as the last 
    letter and if the second last is the same at the secondly positioned letter.
    We should carry on until we have compared come across a letter that doesn't match its corresponding- 
    equally positioned letter when the string is read from the behind.
    At that point we halt the comparison and return false.
    If all the letters match after all comparison, we conclude that the word is a palindrome and return true.

*/

/*
  Add written explanation of your solution here
  refactoring the code for redundancy
  for(let i=0;i<word.length/2;i++){
   const j = word.length-1-i;
   const startChar = word[i];
   const endChar = word[j];
   return startChar !== endChar
}
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));


}

module.exports = isPalindrome;
