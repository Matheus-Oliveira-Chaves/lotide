function assertArraysEqual(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);
  if (isEqual) {
    console.log("✅✅✅ Assertion Passed:", arr1, "=", arr2);
  } else {
    console.log("❌❌❌ Assertion Failed:", arr1, "!=", arr2);
  }
}
function eqArrays(arr1, arr2) {

  // Iterate through the arrays and compare each element
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // If any elements don't match, return false
    }
  }

  return true; // If all elements match, return true
}

// test code

assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);// => should not pass
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should not PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should not PASS
