

const findKeyByValue = function (object, value) {
  // Get an array of keys from the object
  const keys = Object.keys(object);
  // Loop through each key in the keys array
  for (const key of keys) {
    // Check if the value of the current key in the object matches the given value
    if (object[key] === value) {
      // If there's a match, return the key
      return key;
    }
  }
  // If no match is found after the loop, return undefined
  return undefined;
};

module.exports = findKeyByValue
