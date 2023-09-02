
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

module.exports = takeUntil