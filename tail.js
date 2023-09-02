
const tail = function(array) {
  if (array && array.length > 1) {
    const tailArray = [];
    for (let i = 1; i < array.length; i++) {
      tailArray[tailArray.length] = array[i];
    }
    return tailArray;

  }
  return [];
}

module.exports = tail