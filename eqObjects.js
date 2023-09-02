const eqArrays = require('./eqArrays')
const assertEqual = require('./assertEqual')



const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // Check if both objects have the same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Loop through keys of object1 (or object2, as they have the same number of keys)
  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    // If the value for the current key is an array, compare the arrays using eqArrays function
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      // If the value is not an array, compare using strict equality (===)
      if (value1 !== value2) {
        return false;
      }
    }
  }

  // If all keys and values are the same, return true
  return true;
};

module.exports = eqObjects


