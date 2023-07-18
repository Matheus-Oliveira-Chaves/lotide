const assertEqual = function (actual, expected) {
  if (actual === expected) {
    ;
    console.log("✅✅✅Assertion Passed = ", actual, "=", expected);
  }
  else {
    console.log("❌❌❌Assertion Failed = ", actual, "!=", expected)
  }
};

function tail(array) {
  if (array && array.length > 1) {
    const tailArray = [];
    for (let i = 1; i < array.length; i++) {
      tailArray[tailArray.length] = array[i];
    }
    return tailArray;

  }
  return [];
}
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(  words.length,2)
assertEqual(words[0],"Lighthouse")
assertEqual(words[1], "Labs")