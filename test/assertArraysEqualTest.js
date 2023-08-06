const assertArraysEqual = require("../assertArraysEqual")



// test code

assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);// => should not pass
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should not PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should not PASS