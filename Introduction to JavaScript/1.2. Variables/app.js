// Variables
// wo ways to declare variables: let and const

// This line of code sets the variable location to the string New York City
const location = 'New York City';

// This line of code sets the variable latitude to the number 40.7
let latitude = 40.7;

// This line of code sets the variable inNorthernHemisphere to true
let inNorthernHemisphere = true;

console.log(location);
console.log(latitude);
console.log(inNorthernHemisphere);

// = > New York City
// 40.7
// true

------------------------------------------------------------
// Create a Variable: const

const myName = 'Arya';
console.log(myName);
// Output: Arya

// const, short for constant, is a JavaScript keyword that creates a new variable with a value that cannot change.
// myName is the variable's name. Notice that the word has no spaces, and we capitalized the N. Capitalizing in this way is a standard convention in JavaScript called camelCasing, because the capital letters look like the humps on a camel's back.
// = is the assignment operator. It assigns the value ('Arya') to the variable (myName).
// 'Arya' is the value assigned (=) to the variable myName

const entree = "Enchiladas";
// => Enchiladas

const price = 12;
// => 12

console.log(entree);
console.log(price);

entree = 'Tacos';
// => /home/ccuser/workspace/learn-javascript-variables-const/app.js:8
// entree = 'Tacos';
//        ^

// TypeError: Assignment to constant variable. - will discuss this to next exercise

------------------------------------------------------------
// Create a Variable: let
// Last exercise encountered, JavaScript threw an error because you assigned a new value to a constant variable. Constant variables, as their name implies, are constant — you cannot assign them a different value. 
// Let variables however, can be reassigned.
// sample: 
let meal = 'Enchiladas';
console.log(meal);
meal = 'Tacos';
console.log(meal);
// output: Enchiladas
// output: Tacos

// You may be wondering, when to use const vs let. In general, only use const if the value saved to a variable does not change in your program. 

let changeMe = true;
changeMe = false;

console.log(changeMe);
// => false

------------------------------------------------------------
// Undefined
// What happens if you create a variable, but don't assign it a value?
// JavaScript creates space for this variable in memory and sets it to undefined. Undefined is the fifth and final primitive data type.

let notDefined;
console.log(notDefined);

let valueless;
console.log(valueless);

// => undefined
// undefined

------------------------------------------------------------
// Mathematical Assignment Operators
let x = 4;
x = x + 1;
console.log(x);
// => 5
// We don't want to use this, x = x + 1 is redundant to address this JavaScript has a collection of built-in mathematical assignment operators that make it easy to calculate a new value and assign it to the same variable without writing the variable twice.
// See examples of these operators below.
let x = 4;
x += 2; // x equals 6

let y = 4;
y -= 2; // y equals 2

let z = 4;
z *= 2; // z equals 8

let r = 4;
r++; // r equals 5

let t = 4;
t--; // t equals 3

    // The first three operators (+=, -=, and *=) perform the mathematical operation of the first operator (+, -, or *) using the number on the right, then assign the new value to the variable.
    // The last two operators are the increment (++) and decrement (--) operators. These operators are responsible for increasing and decreasing a number variable by one, respectively.

// Sample:
let molecule = 16;
let particle = 18;
let assay = 3;

// Add and assign to molecule below
molecule += 16;

// Multiply and assign to particle below
particle *= 6.02;

// Increment assay by 1
assay++;

console.log(molecule);
console.log(particle);
console.log(assay);

// 32
// 108.35999999999999
// 4

------------------------------------------------------------
// String Interpolation
// The JavaScript term for inserting the data saved to a variable into a string is string interpolation. 
// The + operator, known until now as the addition operator, is used to interpolate (insert) a string variable into a string, as follows:
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

// sample
let favoriteAnimal = "Cat";
console.log("My favorite animal: " + favoriteAnimal);
// => My favorite animal: Cat

------------------------------------------------------------
// String Interpolation II
// In the newest version of JavaScript (ES6) we can insert variables into strings with ease, by doing two things:

//     1. Instead of using quotes around the string, use backticks (this key is usually located on the top of your keyboard, left of the 1 key).
//     2. Wrap your variable with ${myVariable}, followed by a sentence. No +s necessary.

let myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: 'I own a pet armadillo.'

// sample
let myName = "Mark";
let myCity = "Rizal";
console.log(`My name is ${myName}. My favorite city is ${myCity}`);
// => My name is Mark. My favorite city is Rizal

------------------------------------------------------------

// Review Variables

// Nice work! This lesson covered a lot of foundational skills that you will often use in your future programming endeavors.

// Let's review what we learned:

//     Variables hold reusable data in a program.
//     JavaScript will throw an error if you try to reassign const variables.
//     You can reassign variables that you create with the let keyword.
//     Unset variables store the primitive data type undefined.
//     Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
//     The + operator is used to interpolate (combine) multiple strings.
//     In JavaScript ES6, backticks (`) and ${} are used to interpolate values into a string.



