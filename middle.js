const eqArrays = require("./eqArrays")

const assertArraysEqual = require("./assertArraysEqual")

const middle = function(arr) {
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

module.exports = middle


