const assertArraysEqual = function (actual, expected) {
  if (actual === expected) {
    ;
    console.log("✅✅✅Assertion Passed = ", actual, "=", expected);
  }
  else {
    console.log("❌❌❌Assertion Failed = ", actual, "!=", expected)
  }
};
function eqArrays(arr1, arr2) {

  // Iterate through the arrays and compare each element
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // If any elements don't match, return false
    }
  }

  return true; // If all elements match, return true
}

assertArraysEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should not pass
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should not PASS
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should not PASS