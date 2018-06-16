// Introduction to Functions
// A function is a block of code designed to perform a task.

// Functions are like recipes. They accept data, perform actions on that data, and return a result. The beauty of functions is that they allow us to write a block of code once, then we can reuse it over and over without rewriting the same code.

let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.

// Let's explore each part in detail.

// 1. We created a function named pressPowerButton.

//     const pressPowerButton creates a variable with a given name written in camelCase.

//     The variable is then set equal = to a set of parentheses followed by an arrow token () =>, indicating the variable stores a function. This syntax is known as arrow function syntax.

//     Finally, between the curly braces {} is the function body, or the JavaScript statements that define the function. This is followed by a semi-colon ;. In JavaScript, any code between curly braces is also known as a block.

// 2. Inside the function body is an if/else statement.

// 3. On the last few lines, we call the function by writing its name followed by a semi-colon pressPowerButton();. This executes the function, running all code within the function body.

// 4. We executed the code in the function body twice without having to write the same set of instructions twice. Functions can make code reusable! 

------------------------------------------------------------
// Functions
const takeOrder = () => {
  console.log("Order: pizza")
};

takeOrder();

------------------------------------------------------------
// Parameters
const multiplyByThirteen = (inputNumber) => {
  console.log(inputNumber * 13);
};

multiplyByThirteen(9);
// Output: 117
// Let's explore how this function works:

//     1. We add inputNumber within the parentheses () => of the multiplyByThirteen function. inputNumber is a parameter.
//     2. Inside the multiplyByThirteen() function, we use console.log to print the inputNumber multiplied by 13.
//     3. When we call the multiplyByThirteen() function on the last line, we set the inputNumber parameter. Here, we set it to 9. Then, inside the function block, 9 is multiplied by 13, resulting in 117 printing to the console.
//     4. Note on terminology: inputNumber is a parameter, but when we call multiplyByThirteen(9), the 9 is called an argument. In other words, arguments are provided when you call a function, and parameters receive arguments as their value. When we set the value 9 as the argument, we pass a value to the function.

// Parameters let us write logic inside functions that are modified when we call the function. This makes functions more flexible.

const takeOrder = (topping) => {
  console.log(`Order: pizza ${topping}`);
};

takeOrder("topped with mushrooms");

// => Order: pizza topped with mushrooms

------------------------------------------------------------
// Parameters II
const getAverage = (numberOne, numberTwo) => {
  const average = (numberOne + numberTwo) / 2 ;
  console.log(average);
};

getAverage(365, 27);
// Output: 196

    // 1. The getAverage() function has two parameters: numberOne and numberTwo, both entered in the parentheses ().

    // 2. When we call the getAverage() function on the last line, we include two numbers as the arguments, also separated by commas.

    // 3. In this case, we are telling the function to assign numberOne the value of 365 and numberTwo the value of 27. We are passing in 365 and 27 to the getAverage() function.

    // 4. When getAverage() runs, the function knows what numberOne and numberTwo equal since we passed in two arguments when we called the function. Therefore it evaluates (365 + 27) / 2 and stores the result in the average variable. When logged to the console, the value of the average is 196.

const takeOrder = (topping, crustType) => {
  console.log('Order: thin ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'crust');
takeOrder('bacon', 'crust');
takeOrder('meat', 'crust');

// Order: thin crust pizza topped with mushroom
// Order: thin crust pizza topped with bacon
// Order: thin crust pizza topped with meat
------------------------------------------------------------
// Return
// Using console.log() as the result of a function isn't the best use of a function. The purpose of a function is to take some input, perform some task on that input, then return a result.

// To return a result, we can use the return keyword. Take a look at our function from the last exercise, now re-written slightly:
const getAverage = (numberOne, numberTwo) => {
  const average = (numberOne + numberTwo) / 2;
  return average;
};

console.log(getAverage(365, 27));
// Output: 196
// 1. Instead of using console.log() inside the getAverage() function, we used the return keyword. return will take the value of the variable and return it.

// 2. On the last line, we called the getAverage() function inside of a console.log() statement, which outputted the result of 196.

// 3. This code achieved the same output as before, however now our code is better. Why? If we wanted to use the getAverage() function in another place in our program, we could without printing the result to the console. Using return is generally a best practice when writing functions, as it makes your code more maintainable and flexible.

let orderCount = 0
const takeOrder = (topping, crustType) => {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
  orderCount += 1;
};

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
}; 

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');
console.log('Total Price: ' + getSubTotal(orderCount));

// => Order: thin crust pizza topped with mushroom
// Order: whole wheat pizza topped with spinach
// Order: brooklyn style pizza topped with pepperoni
// Total Price: 22.5

------------------------------------------------------------
// Return II
const multiplyByNineFifths = (celsius) => {
  return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
  return multiplyByNineFifths(celsius) + 32;
};

console.log('The temperature is ' + getFahrenheit(15) + '°F');
// Output: The temperature is 59°F

// Take a look at the getFahrenheit() function. Inside of its block, we called multiplyByNineFifths() and passed it the degrees in celsius. The multiplyByNineFifths() function multiplied the celsius by (9/5). Then it returned its value so the getFahrenheit() function could continue on to add 32 to it.

// Finally, on the last line, we interpolated the function call within a console.log() statement. This works because getFahrenheit() returns its value.

// We can use functions to section off small bits of logic or tasks, then use them when we need to. Writing functions can help take large and difficult problems and break them into small and manageable problems.

let orderCount = 0
const takeOrder = (topping, crustType) => {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
  orderCount += 1;
};

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (itemCount) => {
  return getSubTotal(itemCount) * 0.06;
};

const getTotal = (itemCount) => {
  return getSubTotal(itemCount) + getTax(itemCount);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');
console.log('Total Price of all items: ' + getSubTotal(orderCount));
console.log('Total Price after tax: ' + getTotal(orderCount));

// => Order: thin crust pizza topped with mushroom
// Order: whole wheat pizza topped with spinach
// Order: brooklyn style pizza topped with pepperoni
// Total Price of all items: 22.5
// Total Price after tax: 23.85

------------------------------------------------------------
// Function Declarations
// Now that we have an understanding of functions in JavaScript, let's take a broader look at the type of functions we'll see. Functions in JavaScript are generally declared as either a function declaration or a function expression. 
// A function declaration is a function that is bound to an identifier or name. 
function square (number) {
  return number * number; 
}

console.log(square(5));
// Output: 25.

// Function declarations require the keyword function, a name, and a function body. You can identify this by the use of function square() and the {} below. Function declarations do not end in a semi-colon.

function isGreaterThan(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isGreaterThan(100, 200))
// = > false

------------------------------------------------------------
// Function Expressions
// A function expression is similar to function declaration, with the exception that identifier can be omitted, creating an anonymous function. Function expressions are often stored in a variable. You can identify a function expression by the absence of a function name immediately trailing the function keyword.

// before
const square = function (number) {
  return number * number;
};

console.log(square(5));
// Output: 25.

// Also note function expressions end with a semi-colon since they are stored in a variable.

// In this lesson, we have primarily been using a type of function expression known as an arrow function. Arrow function syntax is a shorter syntax for a function expression. You can identify arrow functions through the use of parentheses and the arrow token () =>.

// after
const square = (number) => {
  return number * number;
};

console.log(square(5));
// Output: 25.

// It's important to be familiar with the multiple ways of writing functions, since you will come across these in JavaScript code.

// Refractored result:
const isGreaterThan = (numberOne, numberTwo) => {
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
};

console.log(isGreaterThan(4, 8));


------------------------------------------------------------
// Arrow Functions
// We can refactor this function in three ways. The most condensed form of the function is known as concise body.
// Before:
const multiplyByNineFifths = (celsius) => {
  return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
  return multiplyByNineFifths(celsius) + 32;
};

console.log('The temperature is ' + getFahrenheit(15) + '°F');

//After:
const multiplyByNineFifths = celsius => celsius * (9/5);

const getFahrenheit = celsius => multiplyByNineFifths(celsius) + 32;

console.log('The temperature is ' + getFahrenheit(15) + '°F');
// You'll notice:
//     1. The parentheses around celsius have been removed, since it is a single parameter.
//     2. The return keyword has been removed since the function consists of a single-line block.
//     3. The {} have been removed, again, since the function consists of a single-line block.

//Sample:
const volumeOfSphere = diameter =>
  (1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

// The volume of a sphere is 523.5987755982989 cubic centimeters

------------------------------------------------------------
// Review Functions

// Review Functions

// This unit introduced you to functions.

//     Functions are written to perform a task.
//     Functions take data, perform a set of tasks on the data, and then return the result.
//     We can define parameters to be used when calling the function.
//     When calling a function, we can pass in arguments, which will set the function's parameters.
//     We can use return to return the result of a function which allows us to call functions anywhere, even inside other functions.

