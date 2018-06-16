// Introduction

// JavaScript is a widely used web-based programming language that powers the dynamic behavior on most websites, including this one.

// In this lesson, you will learn about data types and built-in methods, essential knowledge for all aspiring JavaScript developers. When you finish, you'll know how to write programs that solve mathematical expressions, compute the length of a word, and generate random numbers.

// This lesson covers the building blocks of JavaScript. Make sure to take notes and pace yourself. This foundation will set you up for understanding more complex concepts later.


------------------------------------------------------------
// Console
// The console is a tool that developers use to record the output of their JavaScript programs.
// The console.log() command is used to print, or log, text to the console.
// Although your code will usually run as intended without a semicolon, it is best practice to always include one to ensure your code works as expected in situations when it does need one.

console.log("Meat Lover");
console.log("Five People You Meet in Heaven");

// => Meat Lover
// Five People You Meet in Heaven

------------------------------------------------------------
// Data Types
// 4 primitive data types:
//     Strings — Any grouping of keyboard characters (letters, spaces, numbers, or symbols) surrounded by single quotes ('Hello') or double quotes ("World!"). In the example above, 'New York City' is a string.
//     Numbers — Any number, including numbers with decimals: 4, 1516, .002, 23.42. In the example above, 40.7 is a number.
//     Booleans — Either true or false, with no quotations. In the example above, true is a boolean.
//     Null — Can only be null. It represents the absence of value.
console.log("JavaScript");
console.log(33.7);
console.log(true);
console.log(null);
// JavaScript
// 33.7
// true
// null

------------------------------------------------------------
// Math Operators
// JavaScript supports the following math operators:
//     Add: +
//     Subtract: -
//     Multiply: *
//     Divide: /
console.log(3.5 + 22); //This is the age you'll be when we start sending people to live on Mars.
console.log(2018 - 1969); //The answer is how many years it's been since the 1969 moon landing.
console.log(65 / 240);
console.log(0.2708 * 100); //That's the percent of the sun that is made up of helium. Assuming we could stand on the sun, we'd all sound like chipmunks!
// => 25.5
// 49
// 0.2708333333333333
// 27.08

------------------------------------------------------------
// Properties
 // An instance is an individual case (or object) of a data type.
 // 'Hello', as a string instance in the computer's memory. Another example, the number 40.7, is stored as an instance of the number data type.
 // An instance, like the string 'Hello', has additional information attached to it.
// For example, every string instance has a property called length that stores the number of characters in it.
console.log("Teaching the world how to code".length);
// => 30

------------------------------------------------------------
// Built-in Methods
// a string instance also has methods that calculate new information as needed. 
// Built-in methods are called, or used, by appending an instance with a period, the name of the method, and opening (() and closing ()) parentheses. Consider the examples below:
// Log Codecademy in all uppercase letters
console.log('Codecademy'.toUpperCase()); 
// Use a string method to log the following statment without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim()); 
//This method checks if the starts with is true or false
console.log('Hey'.startsWith('H'));
// => CODECADEMY
// Remove whitespace
// false

------------------------------------------------------------
// Libraries
// Instance methods, by definition, require that you create an instance before you can use them. What if you want to call a method without an instance? That's where JavaScript libraries come in. Libraries contain methods that you can call without creating an instance.

// One such collection contains mathematical methods, aptly named the Math library. 
// Math.random generates a random number between 0 and 1.
// We then multiply that number by 50, so now we have a number between 0 and 50
// Then, Math.floor rounds the number down to the nearest whole number.
console.log(Math.floor(Math.random() * 100));

//smallest integer greater than or equal to a decimal number.
console.log(Math.ceil(43.8));

// find a method in the Number library that checks if a number is an integer. 
console.log(Number.isInteger(2017));

// 8
// 44
// true

------------------------------------------------------------
// Comments
// Opening line - Single line comment
console.log('It was love at first sight.');

/* 
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.'); 
- multi line comment 
*/

------------------------------------------------------------
// Review Types and Operators

// Let's take one more glance at the concepts we just learned:

//     Four essential data types in JavaScript include strings, numbers, booleans, and null.
//     Data is printed, or logged, to the console with console.log().
//     Four built-in mathematical operators include +, -, *, and /.
//     JavaScript associates certain properties with different data types.
//     JavaScript has built-in methods for different data types.
//     Libraries are collections of methods that can be called without an instance.
//     You can write single-line comments with // and multi-line comments between /* and */.



