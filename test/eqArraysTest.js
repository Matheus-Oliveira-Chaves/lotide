const assertEqual = require (`../assertEqual`)
const eqArrays = require (`../eqArrays`)



//test code

assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should not pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should not PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should not PASS