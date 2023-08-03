function assertArraysEqual(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);
  if (isEqual) {
    console.log("✅✅✅ Assertion Passed:", arr1, "=", arr2);
  } else {
    console.log("❌❌❌ Assertion Failed:", arr1, "!=", arr2);
  }
}
function eqArrays(arr1, arr2) {

  // Iterate through the arrays and compare each element
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // If any elements don't match, return false
    }
  }
  return true; // If all elements match, return true
}

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



//test 

const testLetterPositions = function () {
  const positions = letterPositions("hello");
  assertArraysEqual(positions["h"], [0]); // Expect: [0]
  assertArraysEqual(positions["e"], [1]); // Expect: [1]
  assertArraysEqual(positions["l"], [2, 3]); // Expect: [2, 3]
  assertArraysEqual(positions["o"], [4]); // Expect: [4]
};

// Run the test
testLetterPositions();