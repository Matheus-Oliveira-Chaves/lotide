
const letterPositions = function (sentence) {
  const results = {};

  // Loop through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];

    // If the letter already exists in the results object, push the current index to its array
    if (results[letter]) {
      results[letter].push(i);
    } else {
      // If the letter doesn't exist in the results object, initialize its array with the current index
      results[letter] = [i];
    }
  }
  return results;
}

module.exports = letterPositions