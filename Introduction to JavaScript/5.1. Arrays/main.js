// Arrays

//sampleL:
let newYearsResolutions = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];

// Arrays are JavaScript's way of making lists. These lists can store any data types (including strings, numbers, and booleans) and they are ordered, meaning each item has a numbered position. 

let bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];

console.log(bucketList);
// => [ 'Rappel into a cave',
//   'Take a falconry class',
//   'Learn to juggle' ]

------------------------------------------------------------
// Create an array
let newYearsResolutions  = ['quit my job', 'to become a web developer', 'to build memories'];

console.log(newYearsResolutions);
// [ 'quit my job',
//   'to become a web developer',
//   'to build memories' ]

------------------------------------------------------------
// Property Access
let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];

let listItem = newYearsResolutions[0];
console.log(listItem);

console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]);
//=> Run a marathon
// Read 52 books
// undefined

------------------------------------------------------------
// Update Elements 
let seasons = ["Winter", "Spring", "Summer", "Fall"];

seasons[3] = "Autumn";
console.log(seasons) 
//Output: 
//Winter 
//Spring
//Summer

let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];

newYearsResolutions[1] = "Learn a new language Mr. Mark";

console.log(newYearsResolutions[1]);
// => Learn a new language Mr. Mark

------------------------------------------------------------
// length property
let newYearsResolutions = ['Rappel into a cave', 'Take a falconry class'];

console.log(newYearsResolutions.length);
// Output: 2

let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];

console.log(newYearsResolutions.length);
// => 3

------------------------------------------------------------
// push Method
let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];

newYearsResolutions.push("Become a web developer", "Develop good habits");
console.log(newYearsResolutions);
// => [ 'Run a marathon',
//   'Learn a new language',
//   'Read 52 books',
//   'Become a web developer',
//   'Develop good habits' ]

newYearsResolutions.pop();
console.log(newYearsResolutions);
// [ 'Run a marathon',
//   'Learn a new language',
//   'Read 52 books',
//   'Become a web developer' ]

------------------------------------------------------------
// More Array Methods
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(); //method to remove the first item from the array
console.log(groceryList);
// ['bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']

groceryList.unshift('popcorn'); //method to add popcorn to the beginning of your array
console.log(groceryList);
 // ['popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

console.log(groceryList.slice(1,4)); //The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
//=> 'bananas', 'coffee beans', 'brown rice'

console.log(groceryList);
// ['popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
// Notice that the result was the same with when we do the unshift method, it's because slice method doesn't modify the array.

------------------------------------------------------------
// Arrays with let and const
// You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.

// Variables that are assigned with const cannot be reassigned. However, arrays that are declared with const remain mutable, or changeable.

// This means that we can change the contents of an array, but cannot reassign the variable name to a new array or other data type.

// The instructions below will illustrate this more clearly. Pay close attention to the similiarities and differences between the condiments array and the utensils array as you complete the steps.
// 
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('Coleslaw');
console.log(condiments);
// => [ 'Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha', 'Coleslaw' ]

condiments = ['Mashed potato'];
console.log(condiments);
// => [ 'Mashed potato' ]

utensils.pop();
console.log(utensils);
// => [ 'Fork', 'Knife', 'Chopsticks' ]

utensils = ['spoon'];
// => TypeError: Assignment to constant variable.

------------------------------------------------------------
// Review Arrays

// Nice work! In this lesson, we learned these concepts regarding arrays:

//     Arrays are lists and are a way to store data in JavaScript.
//     Arrays are created with brackets [].
//     Each item inside of an array is at a numbered position, starting at 0.
//     We can access one item in an array using its numbered position, with syntax like: myArray[0].
//     We can also change an item in an array using its numbered position, with syntax like myArray[0] = "new string";
//     Arrays have a length property, which allows you to see how many items are in an array.
//     Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
//     Arrays have many other methods that perform different functions, such as .slice() and .shift(). You can read the documentation for any array method on the Mozilla Developer Network website.
//     Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable; they can be changed. However, a variable declared with const cannot be reassigned.