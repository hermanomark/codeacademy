// Scope

// Scope refers to where a variable can be accessed in a program. While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context. Scope depends entirely on where a variable is declared.

// You can think of scope like the view of the night sky from your window. Everyone who lives on the planet Earth is in the global scope of the stars. The stars are accessible globally. Meanwhile, if you live in a city, you may see the city skyline or the river. The skyline and river are only accessible locally in your city, but you can still see the stars that are available globally.

// We'll learn more about scope in this lesson through the use of variables.

------------------------------------------------------------
// Global Scope
// We'll start with global scope. Variables defined in the global scope are declared outside of a set of curly braces {}, referred to as a block, and are thus available throughout a program. We'll cover more on blocks in subsequent exercises
// Sample:
const color = 'blue';

const colorOfSky = () => {
  return color; // blue 
};

console.log(colorOfSky()); // blue

//Sample:
const satellite = 'The Moon';

const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  return 'Night Sky ' + satellite + ', ' + stars + ', ' + galaxy;
}

console.log(myNightSky());

// Night Sky The Moon, North Star, The Milky Way

// All variables work because it's all global variables

------------------------------------------------------------
// Global Scope II
// While it's important to know what global scope is, it's better to avoid defining variables in the global scope. Globally scoped variables can collide with variables that are more locally scoped, causing unexpected behavior in our code. 

const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());

console.log(stars);

// => Night Sky: The Moon, Sirius, The Milky Way
// Sirius

// value of stars changed

------------------------------------------------------------
// Block Scope
// Because of the challenges with global scope, it is preferable to define variables in block scope.
// A block refers to the {} braces of a function, a loop, or an if statement, and serves as an important structural marker for our code. Block scope means that a variable defined in the block is only accessible within the curly braces.
// Block scope works like this:
const colorOfSky = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};

colorOfSky(); // blue 
console.log(color); // ReferenceError
    // 1. We define a function colorOfSky().
    // 2. Within the function, the color variable is only available within the curly braces of the function.
    // 3. If we try to log the same variable outside the function, throws a ReferenceError.

// Another sample:
const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  console.log(lightWaves);
};

visibleLightWaves();

console.log(lightWaves);

// => Moonlight
// ReferenceError

------------------------------------------------------------
// Block Scope II 

const colorOfSky = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};

colorOfSky(); // blue
console.log(color); // ReferenceError

    // We create a variable dusk inside the colorOfSky() function.
    // After the if statement, we define a new code block with the {} braces. Here we assign a new value to the variable color if the if statement is true.
    // Within the if block, the color variable holds the value pink, though outside the if block, in the function body, the color variable holds the value blue.

// Sample:

const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  else {
    
  };
  console.log(lightWaves);
};

visibleLightWaves();

// = Northern Lights
// Moonlight

------------------------------------------------------------
// Block Scope III
const cloudCount = () => {
  let i = 2;
  console.log(i); // 2
  for (let i = 0; i < 10; i++) {
    console.log(i); // Numbers from 0 to 9
  }
};

cloudCount();
console.log(i); // ReferenceError

// Here the variable i is defined in the cloudCount() function.
// Within the for loop block, we again define i, as a value that will be incremented.
// The local value of i, whether defined in the function block or the for loop, has no impact on the global scope of our program

const starCount = () => {
  let i = 5;
  console.log(i);
  for (let i = 0; i < 12; i ++) {
    console.log(i);
  }
};

starCount();
console.log(i);

// => 5
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11

// ReferenceError: i is not defined
------------------------------------------------------------
// Review: Scope

// This unit introduced you to scope.

//     Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
//     Global Scope refers to variables that are accessible to every part of the program.
//     Block Scope refers to variables that are accessible only within the block they are defined.

