const letterPositions = require('../letterPositions')
const assertArraysEqual = require('../assertArraysEqual')



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