
function without(source, itemsToRemove) {
  // Create a new array to store the filtered elements
  const filteredArray = source.filter((item) => !itemsToRemove.includes(item));
  return filteredArray;
}

module.exports = without
