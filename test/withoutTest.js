const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");



//test code

const result1 = without([1, 2, 3], [1]);
assertArraysEqual(result1, [2, 3]); // Output: Arrays are equal: [2, 3] [2, 3]


const result2 = without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(result2, ["1", "2"]); // Output: Arrays are equal: ["1", "2"] ["1", "2"]


const result3 = without([], []);
assertArraysEqual(result3, []); // Output: Arrays are equal: [] []


const result4 = without([1, 2, 2, 3, 4, 2], [2, 3]);
assertArraysEqual(result4, [1, 4]); // Output: Arrays are equal: [1, 4] [1, 4]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// Output: Arrays are equal: ["hello", "world", "lighthouse"] ["hello", "world", "lighthouse"]
// The original array "words" remains unchanged
