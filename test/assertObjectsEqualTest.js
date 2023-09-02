const assertObjectsEqual = require('../assertObjectsEqual')
const eqObjects = require('../eqObjects')



//test
const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
const obj3 = { c: '3', d: 4 };

eqObjects(assertObjectsEqual(obj1, obj2)); // Expect: Pass (equal objects)
assertObjectsEqual(obj1, obj3); // Expect: Fail (unequal objects)


//help