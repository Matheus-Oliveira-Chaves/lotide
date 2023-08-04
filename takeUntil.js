function eqArrays(arr1, arr2) {

  // Iterate through the arrays and compare each element
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // If any elements don't match, return false
    }
  }
  return true; // If all elements match, return true
}

function assertArraysEqual(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);
  if (isEqual) {
    console.log("✅✅✅ Assertion Passed:", arr1, "=", arr2);
  } else {
    console.log("❌❌❌ Assertion Failed:", arr1, "!=", arr2);
  }
}

const takeUntil = function(array, callback) {
  // Initialize an empty array to store the elements
  const result = [];

  // Loop through each item in the array
  for (const item of array) {
    // Check if the callback returns a truthy value for the current item
    if (callback(item)) {
      // If the callback returns true, stop the loop using the 'break' statement
      break;
    }
    // If the callback returns false, add the current item to the result array
    result.push(item);
  }

  // Return the final result array containing the elements collected until the callback returned a truthy value
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);