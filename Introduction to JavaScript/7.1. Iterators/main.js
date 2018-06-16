// Introduction to Iterators
// One of the most common tasks a developer translates into code is looping over the contents of an array. Programmers often accomplish this with a for loop. However, as is often the case when a task occurs frequently, JavaScript now provides methods that simplify this task.

// These methods, called iterators, are called on arrays and complete such tasks as altering each element and selecting elements that fit certain criteria. In this lesson, you will learn the syntax for these methods, their return values, how to use the documentation to understand them, and how to choose the right iterator method for a given task.
let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(function(artist) {
  console.log(artist + ' is one of my favorite artists.');
});
// => Picasso is one of my favorite artists.
// Kahlo is one of my favorite artists.
// Matisse is one of my favorite artists.
// Utamaro is one of my favorite artists.

let numbers = [1, 2, 3, 4, 5];

let squareNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squareNumbers);
// => [ 1, 4, 9, 16, 25 ]

let things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

let onlyNumbers = things.filter(function(thing) {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
// => [ 5, 3.14, 100 ]

// => Picasso is one of my favorite artists.
// Kahlo is one of my favorite artists.
// Matisse is one of my favorite artists.
// Utamaro is one of my favorite artists.
// [ 1, 4, 9, 16, 25 ]
// [ 5, 3.14, 100 ]

------------------------------------------------------------
// .forEach()

let groceries = ['whole wheat flour', 'brown sugar', 'salt', 'cranberries', 'walnuts']; 

groceries.forEach(function(groceryItem) {
  console.log(' - ' + groceryItem);
});

// The code above will log a nicely formatted list of the groceries to the console. Let's explore each bit of syntax.
//     1. The first line is an array of grocery items.
//     groceries.forEach calls the .forEach() method on the groceries array.
//     2. (function(groceryItem) { creates a function that takes a single parameter, groceryItem and opens the block of code for that function. Because .forEach() is an iterator method, every element in the groceries array will be passed to this function as an argument in place of groceryItem. Syntactically, the name of the parameter does not matter. However, it is a best practice to give parameters descriptive names so that other developers who read your code can easily understand what it does.
//     3. console.log(' - ' + groceryItem); is the code we wish to execute upon each element in the array. Logging the item to the console with a - in front of it makes the elements look like a list as they're printed out.
//     4. }); closes the function code block and .forEach() method in that order.

//simplify / refractoring :
groceries.forEach(groceryItem => console.log(' - ' + groceryItem));

// There are three important things to know about the .forEach() method.

//     It is an array method. It must be called upon an array.
//     Any changes to the iterated array value won't be updated in the original array.
//     The return value is undefined.

//Another Sample:
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(function(fruitItem) {
  console.log('- ' + fruitItem);
});
// - mango
// - papaya
// - pineapple
// - apple

//simplify / refractoring :
fruits.forEach(fruitItem => console.log('- ' + fruitItem));
// - mango
// - papaya
// - pineapple
// - apple

------------------------------------------------------------
// .map()

let numbers = [1, 2, 3, 4, 5]; 

let bigNumbers = numbers.map(function(number) {
  return number * 10;
});

// 1. The first line is an array of numbers.
// 2. let bigNumbers = numbers.map creates a new array, bigNumbers, in which the returned values of the .map() method will be saved and calls the .map() method on the numbers array.
// 3. (function(number) { creates a function that takes a single parameter, number, and opens the block of code for that function.
// 4. return number * 10; is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to the bigNumbers array.
// 5. }); closes the function code block and .map() method in that order.

// Arrow function
let numbers = [1, 2, 3, 4, 5]; 
let bigNumbers = numbers.map(numbers => numbers * 10);

//Sample 2:
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// long version:
// Create the secretMessage array below
//let secretMessage = animals.map(function(animal) {
//  return animal[0];
// });

let secretMessage = animals.map(animals => animals[0]);  // notice that inside parenthesis of animals.map the variable/placeholder should be the same for arrow function

console.log(secretMessage.join(''));
// => HelloWorld

let bigNumbers = [100, 200, 300, 400, 500];

// long version:
// Create the smallNumbers array below
//let smallNumbers = //bigNumbers.map(function(number) {
 // return number / 100;
//});

let smallNumbers = bigNumbers.map(bigNumbers =>  bigNumbers/100); // notice that inside parenthesis of animals.map the variable/placeholder should be the same for arrow function

console.log(smallNumbers);
// = > [ 1, 2, 3, 4, 5 ]

------------------------------------------------------------
// .filter()

let words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

let shortWords = words.filter(function(word) {
  return word.length < 6;
});

// 1. On the first line, an array is created.
// 2. let shortWords = declares a new array that will contain the returned elements of the .filter() method.
// 3. words.filter(function(word) { calls the .filter() method on the words array and creates a function that will take a single parameter, word. Each element in the words array will be passed to this function as an argument.
// 4. return word.length < 6; is the condition to filter for all elements in the words array that have fewer than 6 characters will be added to the shortWords array.
// 5. }); closes the code block and .filter() method in that order.

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Long version:
// let smallNumbers = randomNumbers.filter(function(number){
//   return number < 250;
// });

let smallNumbers = randomNumbers.filter(number => number < 250);

console.log(smallNumbers);
// => [ 200, 3.14, 7, 13 ]

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// long version:
// let longFavoriteWords = favoriteWords.filter(function(word) {
//   return word.length > 7;
// });


let longFavoriteWords = favoriteWords.filter(word => word.length > 7);

console.log(longFavoriteWords);
//=>  [ 'nostalgia', 'hyperbole', 'esoteric' ]

------------------------------------------------------------
// Iterator Documentation

Iterator Documentation

// There are many additional built-in array methods, a complete list of which is on the Mozilla Developer Network.

// The documentation for each method contains several sections:

//     A short definition
//     A block with the correct syntax for using the method
//     A list of parameters the method accepts or requires
//     The return value of the function
//     An extended description
//     Examples of the method's use
//     Polyfill, Specifications, Browser Compatibility

// A list of iterator methods can be found here. 

// Fixing errros
let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below
console.log(words.some(function(word) {
  return word.length < 6;
}));
// => true

// Use filter to create a new array
let interestingWords = words.filter(function(word){
  return word.length > 5;
});

console.log(interestingWords);
// => [ 'unique', 'uncanny', 'oxymoron' ]

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word => word.length > 5 ));
// => true

------------------------------------------------------------
// Choose the Right Iterator

// There are many iterator methods you can choose. In addition to learning the correct syntax for the use of iterator methods, it is also important to learn how to choose the correct method for different scenarios. The exercises below will give you the opportunity to do just that!

let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));
// => Have you visited Nashville?
// Have you visited Charlotte?
// Have you visited Asheville?
// Have you visited Austin?
// Have you visited Boulder?

// Choose a method that will return a new array with only those elements longer than 7 characters.
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

------------------------------------------------------------
// Review: Iterators

// You have learned a number of useful methods in this lesson as well as how to use the JavaScript documentation from the Mozilla Developer Network to discover and understand additional methods. Let's review!

//     .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
//     .map() executes the same code on every element in an array and returns a new array with the updated elements.
//     .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
//     All iterator methods can be written using arrow function syntax. In fact, given the succinctness and the implicit return of arrow function syntax, this is quickly becoming the preferred way to write these types of method calls.
//     You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).
//     Additional iterator methods such as .some(), .every(), .reduce() perform different functions.