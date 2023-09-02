
const findKey = function(obj, callback) {
  // Loop through each key in the object
  for (const key in obj) {
    // Check if the callback returns a truthy value for the current key's value
    if (callback(obj[key])) {
      // If the callback returns true, return the current key
      return key;
    }
  }
  // If no key is found, return undefined
  return undefined;
};

module.exports = findKey

