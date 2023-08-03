

function countLetters(sentence) {
  // Initialize an empty object to store the letter counts
  const letterCount = {}; 
  
  // Loop through each character in the sentence
  for (const letter of sentence) {
   
      
      // If the letter already exists in the letterCount object, increment its count
      if (letterCount[letter]) {
        letterCount[letter]++;
      } else {
        // If the letter doesn't exist in the letterCount object, initialize its count to 1
        letterCount[letter] = 1;
      }
    }
    return letterCount; // Return the object containing letter counts
  }
  
 