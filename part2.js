/*1) Sum Zero
Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

For example:

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True */

function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          return true;
        }
      }
    }
    
    return false;
  }
    console.log(addToZero([1,2,3,-2]))

    //The runtime complexity of the above code is O(n^2), where n is the length of the input array arr. 
    //This is because the code uses nested loops to iterate through all possible pairs of numbers in the array.

    //The space complexity of the provided code is O(1),
    // which means it uses constant space regardless of the size of the input array.




/* 2) Unique Characters
Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

For example:

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False */


function hasUniqueChars(str) {
    let charSet = new Set();
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      // Check if the character is already in the set
      if (charSet.has(char)) {
        return false;
      }
  
      // Add the character to the set
      charSet.add(char);
    }
  
    return true;
  }

  console.log(hasUniqueChars("Monday"));
  //Runtime complexity:
  //The runtime complexity of the provided code is O(n), where n is the length of the input word.
  //The code iterates through each character in the word exactly once 
  //and uses set performing constant-time operations for each character.

  //Space Complexity
  // The space complexity of the code is also O(n) because the Set data structure stores unique characters encountered in the word. 
  /* 3) Pangram Sentence
A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not.

For example:

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False */

function isPangram(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lettersSet = new Set();
  
    // Convert the sentence to lowercase for case-insensitive comparison
    const lowercaseSentence = sentence.toLowerCase();
  
    // Iterate through each character in the sentence
    for (let i = 0; i < lowercaseSentence.length; i++) {
      const char = lowercaseSentence[i];
  
      // Check if the character is a letter of the alphabet
      if (alphabet.includes(char)) {
        lettersSet.add(char);
      }
    }
  
    // Check if the set of letters contains all the letters of the alphabet
    return lettersSet.size === alphabet.length;
  }
  

 console.log( isPangram("The quick brown fox jumps over the lazy dog!"));
 console.log(isPangram("I like cats, but not mice"));

 /*  Runtime Complexity:
 The runtime complexity of the code is O(n), where n is the length of the sentence. 
 This is beacuse the code iterates through each character in the sentence exactly once, 
 performing constant-time operations for each character. 
 
 Space Complexity:
 The space complexity of the code is O(1)
 because the set of letters (lettersSet) has a maximum size of 26 (the number of letters in the English alphabet). 
 The space required is constant since it does not depend on the length of the sentence.*/



 /* 4) Longest Word
Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

For example:

findLongestWord(["hi", "hello"]);
// -> 5*/

function findLongestWord(words) {
    let longestWordLength = 0;
  
    // Iterate through each word in the list
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
  
      // Update the longest word length if the current word is longer
      if (word.length > longestWordLength) {
        longestWordLength = word.length;
      }
    }
  
    return longestWordLength;
  }
  
  console.log(findLongestWord(["hi", "hello"])); 

   /* Runtime Complexity
The time complexity of the code is O(n), where n is the number of words in the input list. 
The code iterates through each word in the list exactly once, performing constant-time operations for each word.
Therefore, the runtime grows linearly with the size of the input list.
  
Space Complexity:
The space complexity of the code is O(1) because it only uses a single variable (longestWordLength)
to store the length of the longest word. The space required is constant and does not depend on the size
of the input list. */
