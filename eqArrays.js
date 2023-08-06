const assertEqual = require (`./assertEqual`)

const eqArrays = function(arr1, arr2) {
  // Iterate through the arrays and compare each element
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // If any elements don't match, return false
    }
  }
  return true; // If all elements match, return true
}

module.exports = eqArrays