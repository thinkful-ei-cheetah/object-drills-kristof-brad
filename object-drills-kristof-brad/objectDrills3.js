'use strict';

// 1. Object initializers and methods
// Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 and water which should be set to 210.
// Use console.log to print the flour and water properties.
// Add an empty method to the loaf object called hydration.
// Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
// Call the hydration method and use console.log to print the result.

const loaf = {
  flour: 300,
  water: 210,
  hydration: function (){ 
    return this.water / this.flour * 100;
  },
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());



// 2. Iterating over an object's properties
// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.

const myObj = {
  foo: 2,
  bar: 3,
  fum: 6,
  quux: 9,
  spam: 7,
}

for (let key in myObj) {
  console.log(key, myObj[key]);
}



// 3. Arrays in objects
// Create an object with a property called meals which is an array of strings: 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
// Use console.log to show the name of a hobbit's fourth meal of the day.
// Don't forget that humans and hobbits count from 1, but computers count from 0.

const obj2 = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(obj2.meals[3]);





// 4. Arrays of objects
// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.

const person1 = {
  name: 'Brad',
  jobTitle: 'student',
};

const person2 = {
  name: 'Kristof',
  jobTitle: 'pilot',
};

const person3 = {
  name: 'Jimmy',
  jobTitle: 'teacher',
};
const newArr = [person1, person2, person3];
newArr.forEach(person => console.log(person.name, person.jobTitle));




// 5. Properties that aren't there
// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.


person1.boss = 'Fred'
person2.boss = 'Sam'

newArr.forEach(person => console.log(person.boss !== undefined ? `${person.jobTitle} ${person.name} reports to ${person.boss}.` : `${person.jobTitle} ${person.name} doesn't report to anybody.`))




// 6. Cracking the code
// Redo your Cracking the Code problem from String Drills but this time use an object as your cipher. 
// This means, instead of doing some kind of condition check like if (char === 'a'), you should use an object's key-value pair structure as the code translator.

// Additionally, create a decodeWords function that utilizes your decode function to accept a single string of words, and then return the fully decoded message as a string.

// function decode (input) {
//     input = input.split(" ");
//     let answer = '';

//     for (let i = 0; i < input.length; i++) { 
//         var p = input[i].charCodeAt(0) - 'a'.charCodeAt(0);
//         if (p >= 0 && p <= 3) {
//             answer = answer + input[i][p+1]
//         } else {
//             answer = answer + ' '
//         }
//     } 
// } 
// return answer; 

// console.log(decode('craft block argon meter bells brown croon droop'));

function decode (input) {
  const decoder = {
    a: 2,
    b: 3,
    c: 4,
    d: 5, 
  };
  return input.split(' ').map( word => {
    if (decoder[word[0]] === undefined) return ' ';
    return word[decoder[word[0]] - 1];
  }).join('');
} 

console.log(decode('craft block argon meter bells brown croon droop'));



// 7. Factory Functions with LOTR
// Write a factory function called createCharacter (review in this assignment) that could appropriately build characters from LOTR that have the following attributes:





const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragon son of Arathorn', 'aragon', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legalos', 'legalos', 'Elf', 'Woodland Realm', 8, 5)];

// ===============================================================================================
// | Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
// -----------------------------------------------------------------------------------------------
// | Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
// -----------------------------------------------------------------------------------------------
// | Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
// -----------------------------------------------------------------------------------------------
// | Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
// -----------------------------------------------------------------------------------------------
// | Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
// -----------------------------------------------------------------------------------------------
// Each character should have the method describe which takes no parameters and prints out the string: "{name} is a {race} from {origin}."

// Each character should also have a method called evaluateFight that takes in a character object and returns the following string: 
// "Your opponent takes {x} damage and you receive {y} damage" where x and y are the differences between each characters attack and defense values. If defense exceeds attack, then take zero damage.

// Using array literal syntax, create an array characters that calls your factory function for each character in the table above with the relevant parameters. 
// Your characters array should now have 5 objects in it.

// Add a new character to characters (make up any attributes not provided):

// Arwen Undomiel is a Half-Elf of Rivendell
// Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.

// Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.

// Using the .filter() function, create a new array from characters that ONLY contains characters with attack value above 5.

// What if you wanted to equip a weapon for each character and change how they are described? For example:

// Gandolf the White is a Wizard of the Middle Earth who uses a wizard staff
// Bilbo Baggings is a Hobbit of the Shire who uses the Ring
// Frodo ... String and Barrow Blade
// Aragon .... Anduril
// Legolas ... Bow and Arrow
// Arwen .... Hadhafang
// How would you change the factory function and other methods?









// 8. BONUS: A Database Search
// Put this dataset at the top of your program:

// const HEROES = [
//   { id: 1, name: 'Captain America', squad: 'Avengers' },
//   { id: 2, name: 'Iron Man', squad: 'Avengers' },
//   { id: 3, name: 'Spiderman', squad: 'Avengers' },
//   { id: 4, name: 'Superman', squad: 'Justice League' },
//   { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
//   { id: 6, name: 'Aquaman', squad: 'Justice League' },
//   { id: 7, name: 'Hulk', squad: 'Avengers' },
// ];
// Write a function findOne() that takes in the following two arguments:

// arr - array of Heroes objects to search through
// query - object with one or more key/value pairs that must exactly match the target Hero
// The first matching result should be returned even if multiple match. If a match isn't found, return null

// With the above data set, you should be able to call findOne with the arguments shown below and return the following results:

// findOne(HEROES, { id: 1 });
// => { id: 1, name: 'Captain America', squad: 'Avengers' }

// findOne(HEROES, { id: 10 });
// => null

// findOne(HEROES, { id: 2, name: 'Aquaman' });
// => null

// findOne(HEROES, { id: 5, squad: 'Justice League' });
// => { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

// findOne(HEROES, { squad: 'Justice League' });
// => { id: 4, name: 'Superman', squad: 'Justice League' }











// 8a. BONUS II: A Database Method
// Let's create a fake database in memory with the same dataset:

// const Database = {
//   store: {
//     heroes: [
//       { id: 1, name: 'Captain America', squad: 'Avengers' },
//       { id: 2, name: 'Iron Man', squad: 'Avengers' },
//       { id: 3, name: 'Spiderman', squad: 'Avengers' },
//       { id: 4, name: 'Superman', squad: 'Justice League' },
//       { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
//       { id: 6, name: 'Aquaman', squad: 'Justice League' },
//       { id: 7, name: 'Hulk', squad: 'Avengers' },
//     ]
//   }
// };
// Add a method to Database called findOne and have it behave the same as the findOne function above. However, instead of referencing a HEROES array in the global scope, it should pull from the store in the Database. HINT: You'll want to use this for this...

// The usage should be:

// Database.findOne({ id: 2 });
// => { id: 2, name: 'Iron Man', squad: 'Avengers' }