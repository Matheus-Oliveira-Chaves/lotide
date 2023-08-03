const assertEqual = function (actual, expected) {
  if (actual === expected) {
    ;
    console.log("✅✅✅Assertion Passed = ", actual, "=", expected);
  }
  else {
    console.log("❌❌❌Assertion Failed = ", actual, "!=", expected)
  }
};

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

// Test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); 