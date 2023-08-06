const assertArraysEqual = function(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);
  if (isEqual) {
    console.log("✅✅✅ Assertion Passed:", arr1, "=", arr2);
  } else {
    console.log("❌❌❌ Assertion Failed:", arr1, "!=", arr2);
  }
}
const eqArrays = require(`./eqArrays`)



module.exports = assertArraysEqual