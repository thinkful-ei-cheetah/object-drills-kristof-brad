'use strict';

//Make student report


function makeStudentReport (data){

  data.map(item=> `${item.name}: ${item.grade}`).forEach( item => console.log(item));

}
makeStudentReport([{name: 'Johnny Robot', grade: 'C'}, {name: 'Johnny Hibot', grade: 'A'}]);


// Enroll in summer school


function enrolledInSummerSchool (students){
//[{name: 'Tim', status: 'Current student', course: 'Biology'}
  return students.map( student => {
    student.status = 'In Summer School';
    return student;
  });
}

console.log(enrolledInSummerSchool([{name: 'Tim', status: 'Current student', course: 'Biology'}, {name: 'Mom', status: 'Current student', course: 'BMAth'}]));


// Find by id
// Spend up to 15 minutes writing a function called findById. This function takes 2 arguments, items and idNum. items is an array of objects. idNum is the id we're trying to find in items. The function should look for an item with the id idNum in the array items. If found, it should return that item.

function findById (items, idNum){
  return  items.find( item => item.id === idNum);
}

// For example:

// const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];
// findById(data, 2) // should return {id: 2, foo: 'bizz'}




// Validate object keys
// Spend up to 20 minutes writing a function called validateKeys. This function takes 2 arguments, object and expectedKeys. object is (you guessed it!) an object that we want to validate keys for. expectedKeys is an array of keys that we expect to find on the object.

function validateKeys(obj, expectedKeys){
 

  if ( Object.keys(obj).length !== expectedKeys.length) return false;
  return expectedKeys.every( item => obj[item] !== undefined);

}

// validateKeys should return true if object has all of the keys from expectedKeys, and no additional keys. It should return false if one or more of the expectedKeys is missing from the object, or if the object contains extra keys not in expectedKeys.


const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

// // running the function with `objectB` and `expectedKeys`
// // should return `false`
// const objectB = {
//   id: 3,
//   age: 33,
//   city: 'Peoria',
// };

const expectedKeys = ['name', 'age', 'city'];

console.log(validateKeys(objectA, expectedKeys));


