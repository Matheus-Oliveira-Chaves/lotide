function eqArrays(arr1, arr2) {
  // Iterate through the arrays and compare each element
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // If any elements don't match, return false
    }
  }
  return true; // If all elements match, return true
}

function assertArraysEqual(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  if (isEqual) {
    console.log("✅✅✅ Assertion Passed:", actual, "=", expected);
  } else {
    console.log("❌❌❌ Assertion Failed:", actual, "!=", expected);
  }
}

function middle(arr) {
  const middleArray = [];
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length <= 2) {
    return middleArray;
  } if (arr.length % 2 === 1) {
    // Odd number of elements, return single middle element
    middleArray.push(arr[middleIndex]);
  } else {
    // Even number of elements, return two middle elements
    middleArray.push(arr[middleIndex - 1], arr[middleIndex]);
  }

  return middleArray;
}

// test code

const result1 = middle([1]);
assertArraysEqual(result1, []); //  ✅✅✅ Assertion Passed: [] = []

const result2 = middle([1, 2]);
assertArraysEqual(result2, []); // Output: ✅✅✅ Assertion Passed: [] = []

const result4 = middle([1, 2, 3, 4, 5]);
assertArraysEqual(result4, [3]); // Output: ✅✅✅ Assertion Passed: [3] = [3]

const result6 = middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(result6, [3, 4]); // Output: ✅✅✅ Assertion Passed: [3, 4] = [3, 4]

const result7 = middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(result7, [3, 5]); // Output: ❌❌❌ Assertion Failed: [3, 4] != [3, 5]