const eqObjects = require('./eqObjects')

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // Importing the inspect function from the util library

  // Check if the objects are equal using eqObjects function
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;