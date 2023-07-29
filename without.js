const assertArraysEqual = function (actual, expected) {
  if (actual === expected) {
    ;
    console.log("✅✅✅Assertion Passed = ", actual, "=", expected);
  }
  else {
    console.log("❌❌❌Assertion Failed = ", actual, "!=", expected)
  }
};


function without(source, itemsToRemove) {
  // Create a new array to store the filtered elements
  const filteredArray = source.filter((item) => !itemsToRemove.includes(item));
  return filteredArray;
}


const result1 = without([1, 2, 3], [1]);
assertArraysEqual(result1, [2, 3]); // Output: Arrays are equal: [2, 3] [2, 3]


const result2 = without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(result2, ["1", "2"]); // Output: Arrays are equal: ["1", "2"] ["1", "2"]


const result4 = without([], []);
assertArraysEqual(result4, []); // Output: Arrays are equal: [] []


const result5 = without([1, 2, 2, 3, 4, 2], [2, 3]);
assertArraysEqual(result5, [1, 4]); // Output: Arrays are equal: [1, 4] [1, 4]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// Output: Arrays are equal: ["hello", "world", "lighthouse"] ["hello", "world", "lighthouse"]
// The original array "words" remains unchanged
