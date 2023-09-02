const map = require('../map')
const assertArraysEqual = require('../assertArraysEqual')

// Test cases
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word.toUpperCase());
assertArraysEqual(results1, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

const results2 = map(words, word => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const results3 = map(words, word => word[word.length - 1]);
assertArraysEqual(results3, ["d", "l", "o", "r", "m"]);