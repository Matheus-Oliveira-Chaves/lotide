const assertEqual = require ('../assertEqual')
const findKey = require('../findKey')

// Test 1
const exampleData = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const result1 = findKey(exampleData, x => x.stars === 2);
assertEqual(result1, "noma"); // It should return "noma"

// Test 2
const emptyData = {};
const result2 = findKey(emptyData, x => x === 5);
assertEqual(result2, undefined); // It should return undefined because the object is empty

// Test 3
const data3 = {
  a: { value: "apple" },
  b: { value: "banana" },
  c: { value: "cherry" }
};
const result3 = findKey(data3, x => x.value === "banana");
assertEqual(result3, "b"); // It should return "b" because the callback returns true for key "b"

// Test 4
const data4 = {
  x: { count: 0 },
  y: { count: 5 },
  z: { count: 10 }
};
const result4 = findKey(data4, x => x.count > 7);
assertEqual(result4, "z"); // It should return "z" because the callback returns true for key "z"
