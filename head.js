const assertEqual = require('./assertEqual');

const head = function(array) {
  // Check if the array is not empty
  if (array.length > 0) {
    // Return the first element of the array
    return array[0];
  }
  // If the array is empty, return undefined
  return undefined;
};

module.exports = head