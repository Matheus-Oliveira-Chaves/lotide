const assertEqual = function (actual, expected) {
 
};
function head(assertEqual) {
  if (assertEqual && assertEqual.length > 0) {
    console.log( assertEqual[0]);
    return
  }
  console.log( undefined);
}

assertEqual(head([5,5,5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([    ,5,5]), );
