// Introduction to Control Flow

// Control flow statements enable JavaScript programs to make decisions by executing code based on a condition. If a given condition is true, we execute one block of code. If the statement is false, we execute another block of code. For instance, if we were making a game in which the user had to choose which door to enter, we'd need a way for the program to know what to do once the user was in the next room. 

let userName = 'Mark Hermano';
let knowsJavaScript = false;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new! oh really?');
}

// => Great, Mark Hermano! Get ready to learn something new!

------------------------------------------------------------
// if/else Statements
let isSoccerFan = true;

if (isSoccerFan === true) {
  console.log("Goal!")
}
else {
  console.log("No goal!")
}

------------------------------------------------------------
// True and False Values
// In JavaScript, all values have a truthy or falsy value. This means that they evaluate to true or false when they are used as a part of a control flow condition.
// All variables that have been declared and assigned are truthy unless they contain one of the six values listed below:
//     false
//     0 and -0
//     "" and '' (empty strings)
//     null
//     undefined
//     NaN (Not a Number)

// sample
let numberOfApples = 0;
if(numberOfApples){
   console.log('Let us eat!'); // This code will not run because 0 is a falsy value
} else {
   console.log('No food left!'); // This code will run
}
//sample
let variableOne = 'I Exist!';
if (variableOne) {
   // This code will run because variableOne contains a truthy value.
} else {
   // This code will not run because the first block ran.
}

//sample:
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = 'something';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// => Great! You've started your work!
// This string doesn't seem to be empty.

------------------------------------------------------------
// True and False Values II 
let isRaining = true;
if (isRaining) {
   console.log('Carry an umbrella!');
} else {
  console.log('Enjoy the sun!');
}
// => Carry an umbrella!

// JavaScript provides an operator for swapping the truthiness and falsiness of values - the exclamation point (!). We can use this in conditional statements as shorthand to check if the value of a variable evaluates to false rather than true. 
let isPhoneCharged = true; 
if (!isPhoneCharged) {
  console.log('Plug in your phone!');
} else {
  console.log('No need to charge!');
}
// => No need to charge!

// In the example above, the program checks if isPhoneCharged evaluates to false. Because isPhoneCharged is true, the second block of code will execute. 

// sample
let favoritePhrase = 'something';

if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
// => This string is definitely empty.

------------------------------------------------------------
// Comparison Operators
// There are two comparisons you might be familiar with:

//     Less than: <
//     Greater than: >

// You may also recognize these:

//     Less than or equal to: <=
//     Greater than or equal to: >=

// These comparisons evaluate to true or false.

let hungerLevel = 5; // if value is 10, 1st block of if will execute

if (hungerLevel > 7) {
  console.log("Time to eat!");
}
else {
  console.log("We can eat later!");
}

// We can eat later!

------------------------------------------------------------
// Comparison Operators II
//    1. To check if two things equal each other, we write === (three = signs in a row).
//    2.  To check if two things do not equal each other, we write !== (an exclamation with two = signs in a row).

// It can be confusing when to use one = sign and when to use three === signs. Use a single = to assign a value to a variable. Use ===to compare the values of two different variables.
let moonPhase = "full";

if (moonPhase === "full") {
  console.log("Howl!");
}
else {
  console.log("I swear I am not a werewolf");
}

// => Howl!

------------------------------------------------------------
// else if Statements
let stopLight = 'green';

if (stopLight === 'red') {
  console.log('Stop');
} else if (stopLight === 'yellow') {
  console.log('Slow down');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
// => Go!

// sample

let moonPhase = "solar eclipse";

if (moonPhase === "full") {
  console.log("Howl!");
}
else if (moonPhase === "mostly full") {
  console.log("Arms and legs are getting hairier");
}
else if (moonPhase === "mostly new") {
  console.log("Back on two feet");
}
else {
  console.log("Invalid moon phase");
}

// => Invalid moon phase

------------------------------------------------------------
// Logical Operators
    // 1. To say "both must be true," we use &&.
    // 2. To say "either can be true," we use ||.

let stopLight = "green";
let pedestrians = false;

if (stopLight === 'green' && pedestrians === false) {
  console.log('Go!');
} else {
  console.log('Stop');
}

// => 'Go!

let moonPhase = "full";
let isFoggyNight = false;

if (moonPhase === "full" || isFoggyNight === true) {
  console.log("Howl!");
}
else if (moonPhase === "mostly full") {
  console.log("Arms and legs are getting hairier");
}
else if (moonPhase === "mostly new") {
  console.log("Back on two feet");
}
else {
  console.log("Invalid moon phase");
}

// => Howl!

------------------------------------------------------------
// switch Statements

let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// => Papayas are $1.29

let moonPhase = "full";

switch(moonPhase) {
  case "full": 
    console.log("Howl!");
    break;
  case "mostly full":
    console.log("Arms and legs are getting hairier");
    break;
  case "mostly new":
    console.log("Back on two feet");
    break;
  default:
    console.log("Invalid moon phase");
    break;
}

//=> Howl

------------------------------------------------------------
// Ternary Operator 
// JavaScript also provides a way to shorten simple if/else statements called the ternary operator.

let isNightTime = true;

//From this
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
// =>Turn on the lights!

//To this
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
// => Turn on the lights!

//sample
age >= 16 ? console.log('You are old enough to drive in the United States!') : console.log('You are not old enough to drive in the United States!');

//samples:
let isLocked = false;

//before
/* if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
} */

//after
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

// => You will not need a key to open the door

let isCorrect = true;

//before
/* if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
} */

//after
isCorrect ? console.log("Correct!") : console.log("Incorrect!")

// => Correct!

let favoritePhrase = 'Love That!';

//before
/* if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
} */

//after
favoritePhrase === "Love That!" ? console.log('I love that!') :  console.log("I don't love that!");

// => I love that!

------------------------------------------------------------
// Review: Control Flow

// Way to go! We just learned a lot of control flow concepts:

//     if/else statements make binary decisions and execute different code based on conditions.
//     All conditions are evaluated to be truthy or falsy.
//     We can add more conditional statements to if/else statements with else if.
//     switch statements make complicated if/else statements easier to read and achieve the same result.
//     The ternary operator (?) and a colon (:) allow us to refactor simple if/else statements.
//     Comparison operators, including <, >, <=, and >= can compare two variables or values.
//     After two values are compared, the conditional statement evaluates to true or false.
//     The logical operator && checks if both sides of a condition are truthy.
//     The logical operator || checks if either side is truthy.
//     The logical operator !== checks if the two sides are not equal.
//     An exclamation mark (!) switches the truthiness / falsiness of the value of a variable.
//     One equals symbol (=) is used to assign a value to a variable.
//     Three equals symbols (===) are used to check if two variables are equal to each other