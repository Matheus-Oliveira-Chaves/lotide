function flatten(arr) {
  const flattenedArray = [];
  // start w/ empty array
  for (let i = 0; i < arr.length; i++) {
    //for loop through array
    if (Array.isArray(arr[i])) {
      // If the element is an array, concatenate its elements to the flattenedArray
      flattenedArray.push(...arr[i]);
    } else {
      // If the element is not an array, simply push it to the flattenedArray
      flattenedArray.push(arr[i]);
    }
  }

  return flattenedArray;
}
