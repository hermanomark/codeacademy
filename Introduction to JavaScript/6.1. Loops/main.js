// Loops
// One of a computer's greatest abilities is to repeat a task multiple times. Loops let us tell the computer to loop over a block of code so that we don't have to write out the same process over and over.
// Loops are especially useful when we have an array where we'd like to do something to each of its items, like logging each item to the console.
// There are two kinds of loops we will learn in this lesson:
// 1. for loops, which let us loop a block of code a known amount of times.
// 2. while loops, which let us loop a block of code an unknown amount of times
let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];

for (let i = 0; i<cookies.length; i++) {
  console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
}
//=>  I would love to eat a chocolate chip cookie right now!
// I would love to eat a raisin cookie right now!
// I would love to eat a macadamia nut cookie right now!
// I would love to eat a sugar cookie right now!

------------------------------------------------------------
// Looping Manually
let vacationSpots = ['london', 'new zeland', 'south korea'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// london
// new zeland
// south korea

------------------------------------------------------------
// for Loops
// Instead of writing out the same code over and over, let’s make the computer loop through our array for us. We can do this with for loops.
// Syntax:
let animals = ["Grizzly Bear", "Sloth", "Sea Lion"];

for (let animalIndex = 0; animalIndex < animals.length; animalIndex++) {
  console.log(animals[animalIndex]);
}

//=> Grizzly Bear
// Sloth
// Sea Lion

// Since this syntax is a little complicated, let's break it into four parts:
//    1. Within the for loop's parentheses, the start condition is let animalIndex = 0, which means the loop will start counting at 0. animalIndex is called an iterator variable and it is a good practice to give this variable a descriptive name.
//    2. The stop condition is animalIndex < animals.length, which means the loop will run as long as animalIndex is less than the length of the animals array. When animalIndex is equal to the length of the animals array, the loop will stop executing.

//    3. The iterator is animalIndex++. This means that after each loop, animalIndex will increase by 1.

//    4. Finally, the code block is inside of the { and } curly braces. The block will execute each loop until the program reaches the stop condition.
// The secret to loops is that animalIndex, the variable we created inside the for loop's parentheses, is equal to a number. To be more clear, the first loop, animalIndex will equal 0, the second loop, animalIndex will equal 1, and the third loop, animalIndex will equal 2.
// Loops make it possible to write animals[0], animals[1], animals[2] programmatically instead of by hand. We can write a for loop and replace the hard-coded number with the variable animalIndex, like this: animals[animalIndex].

let vacationSpots = ['london', 'new zealand', 'south korea'];

for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
 console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

//  => I would love to visit london
// I would love to visit new zealand
// I would love to visit south korea


------------------------------------------------------------
// for Loops, Backwards
// To do this, we'll need to edit the code between the for loop's parentheses:
//     1. The start condition should set vacationSpotIndex to the length of the array.
//     2. The loop should stop running when vacationSpotIndex is less than 0.
//     3. The iterator should subtract 1 each time, which is the purpose of vacationSpotIndex--.
let vacationSpots = ['london', 'new zealand', 'south korea'];

for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--) {
 console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

// => I would love to visit south korea
// I would love to visit new zealand
// I would love to visit london

------------------------------------------------------------
// Nested for Loops

let myPlaces = ['boracay', 'pagudpud', 'puerto galera'];

let friendPlaces = ['zambales', 'batangas', 'puerto galera'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++ ) {
  console.log(myPlaces[myPlacesIndex]);
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++ ) {
   console.log(friendPlaces[friendPlacesIndex]);
  }
}

//=> boracay
// zambales
// batangas
// puerto galera
// pagudpud
// zambales
// batangas
// puerto galera
// puerto galera
// zambales
// batangas
// puerto galera

let myPlaces = ['boracay', 'pagudpud', 'puerto galera'];

let friendPlaces = ['zambales', 'batangas', 'puerto galera'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++ ) {
 
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++ ) {
  if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
    console.log('Match: ' + myPlaces[myPlacesIndex]);
  }
  }
}

// => Match: puerto galera
// the if statement made the result if I have in common places ti visit with my friend

------------------------------------------------------------
// while Loops
// Awesome job! for loops are great, but they have a limitation: you have to know how many times you want the loop to run. What if you want a loop to execute an unknown or variable number of times instead?

// Syntax
while (condition) {
  // Code block that loops until condition is false
}
    // The loop begins with the keyword while.
    // Inside the parentheses, we write a condition. As long as the condition evaluates to true, the block of code will loop.
    // Inside the code block, we can write any code we'd like to loop.

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart';

while (currentCard != 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)]; //This code will generate a random number between 0 and 3, the range of indices of the cards array, and reassign currentCard to a new card from that array. Because the while loop only runs if the card is NOT a Spade, the value of currentCard will only be logged to the console if it is not 'Spade'. 
       }

console.log("found a spade: " + currentCard);

// The output is random, while not spade keep on finding a spade
// => Heart
// Club
// Club
// Heart
// found a spade: Spade

------------------------------------------------------------
// Infinite Loops 
// Samples:

while (true) {
    // execute code forever
}

for (let i = 0; i < array.length; i--) {
   //some code
}
//     The loop begins with i = 0.
//     After one iteration through the loop, i is equal to -1. This is because i begins at 0 and 1 is subtracted from i each loop.

// Do you see the problem? i is decreasing each time. It will never equal the length of the array. This code will execute forever. 

let flag = true;
let counter = 0;
while(flag === true){
  console.log(counter);
  counter+=1;
  if (counter === 37){
    break;
  }
}

// This code will terminate the while loop, with the break keyword, when the condition counter === 37 is met. Without this code the while loop would run infinitely because there is no condition stated to "break" the loop. 

------------------------------------------------------------
// Review: Loops

// Great job! In this lesson, we learned how to write less repetitive code with loops.

//     for loops allow us to repeat a block of code a known amount of times.
//     We can use a for loop inside another for loop to compare two lists.
//     while loops are for looping over a code block an unknown amount of times.
//     Infinite loops occur when stop conditions are never met.

  


