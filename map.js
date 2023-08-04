function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // If any elements don't match, return false
    }
  }
  return true; // If all elements match, return true
}

function assertArraysEqual(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);
  if (isEqual) {
    console.log("✅✅✅ Assertion Passed:", arr1, "=", arr2);
  } else {
    console.log("❌❌❌ Assertion Failed:", arr1, "!=", arr2);
  }
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

// Test cases
const results1 = map(words, word => word.toUpperCase());
assertArraysEqual(results1, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

const results2 = map(words, word => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const results3 = map(words, word => word[word.length - 1]);
assertArraysEqual(results3, ["d", "l", "o", "r", "m"]);