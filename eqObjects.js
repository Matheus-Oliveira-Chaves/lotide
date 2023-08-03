function eqArrays(arr1, arr2) {
  // Iterate through the arrays and compare each element
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // If any elements don't match, return false
    }
  }
  return true; // If all elements match, return true
}

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    ;
    console.log("✅✅✅Assertion Passed = ", actual, "=", expected);
  }
  else {
    console.log("❌❌❌Assertion Failed = ", actual, "!=", expected)
  }
};


const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // Check if both objects have the same number of keys
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Loop through keys of object1 (or object2, as they have the same number of keys)
  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    // If the value for the current key is an array, compare the arrays using eqArrays function
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      // If the value is not an array, compare using strict equality (===)
      if (value1 !== value2) {
        return false;
      }
    }
  }

  // If all keys and values are the same, return true
  return true;
};

//test


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // Expect: true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // Expect: false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // Expect: true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // Expect: false

