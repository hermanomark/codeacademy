// Introduction to Requests with ES6

// In the previous lesson, we spent a lot of time dealing with asynchronous data (remember AJAX/ Asynchronous JavaScript And XML?). Many of our web page interactions rely on asynchronous events, so managing these events is essential to good web development.

// To make asynchronous event handling easier, promises were introduced in JavaScript in ES6: 

// Mozilla Development Network: Promises (https://app.rebrandly.com/account/api-keys)

// A promise is an object that handles asynchronous data. A promise has three states:

//     pending : when a promise is created or waiting for data.
//     fulfilled : the asynchronous operation was handled successfully.
//     rejected : the asynchronous operation was unsuccessful.

// The great thing about promises is that once a promise is fulfilled or rejected, you can chain an additional method to the original promise.

// In this lesson, we will explain how to use fetch(), which uses promises to handle requests. Then, we will simplify requests using async and await.

// We'll use the Datamuse API for GET requests and Rebrandly URL Shortener API for POST requests. For you to complete the lessons on POST, make sure you create a Rebrandly API Key by following the instructions in the article below:

------------------------------------------------------------
// fetch() GET Requests I

// The first type of requests we’re going to tackle are GET requests using fetch()

//     MDN: Fetch API. (https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/fetch+GET+diagram.svg)

// The fetch() function:

//     Creates a request object that contains relevant information that an API needs.
//     Sends that request object to the API endpoint provided.
//     Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.

// In the next exercise we’ll go over the boilerplate code for using fetch() and walk through what each step does!

------------------------------------------------------------
// fetch() GET Requests II

// We are going to reconstruct the boilerplate code necessary to create a GET request using the fetch() function step-by-step.

// Feel free to refer to the fetch() GET diagram at any point while completing this exercise:

//     fetch() GET diagram (https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/fetch+GET+diagram.svg)

//Boilerplate code:
fetch('https://api-to-call.com/endpoint'
).then(response => {
  if (response.ok) {
    return response.json()
  }
  throw new Error('Request failed!');
},
      networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
});

------------------------------------------------------------
// fetch() GET Requests III

// In the previous exercise, you wrote the boilerplate code for a GET request using fetch() and .then(). In this exercise, you’re going to use that code and manipulate it to access the Datamuse API and render information in the browser.

    // Datamuse API. (https://www.datamuse.com/api/)

    // If the request is successful, you'll get back an array of words that sound like the word you typed into the input field.

// You may get some errors as you complete each step. This is because sometimes we've split a single step into one or more steps to make it easier to follow. By the end, you should be receiving no errors.

//Sample - this is only in main.js
// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl='; //queryParams will be the start of your query string and will narrow your search to words that sounds like your word. 
// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value; //You'll need wordQuery to store the value of what is being typed into the input field.
  const endpoint = `${url}${queryParams}${wordQuery}`;
  fetch(endpoint).then(response => {
    if (response.ok) {
     return response.json(); //You can type The code for renderJsonResponse() can be viewed at public/helperFunctions.js. 
                              //Delete renderJsonResponse(response) and replace it with return response.json().
                              //By returning response.json(), the next function that is .then() chained to it will receive a Promise with JSON data.

    }
    throw new Error('Request failed!');
  }, networkError => {
      console.log(networkError.message)});
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

------------------------------------------------------------
// fetch() GET Requests IV

// Great job making it this far! 

// In the previous exercise, you created the query URL, called the fetch() function and passed it the query URL and a settings object. Then, you chained a .then() method and passed it two functions as arguments — one to handle the promise if it resolves, and one to handle network errors if the promise is rejected.

// In this exercise, you’ll now take the information that was returned with the promise and manipulate the webpage! 

//Sample this is on main.js
// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  fetch(endpoint).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then(jsonResponse => {
    renderResponse(jsonResponse); //You can view the purpose of renderRawResponse at public/helperFunctions.js.
  });
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);


------------------------------------------------------------
// fetch() POST Requests I

// In the previous exercise, you successfully wrote a GET request using the fetch API and handled Promises to get word suggestions from Datamuse. Give yourself a pat on the back (or two to treat yourself)!

// Now, you're going to learn how to use fetch() to construct POST requests!

// Take a look at the diagram to the right. It has the boilerplate code for a POST request using fetch().

// Notice that the initial call takes two arguments: an endpoint and an object that contains information needed for the POST request. The rest of the request is identical to the GET request.

// diagram: https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/fetch+POST+diagram.svg

------------------------------------------------------------
// fetch() POST Requests II

// We are going to reconstruct the code from the previous exercise step-by-step until we have written a complete POST request using fetch() and .then().

// Feel free to refer to the fetch() POST diagram at any point while completing this exercise:

//     fetch() POST diagram (https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/fetch+POST+diagram.svg)

//Sample boiler plate code for post:
fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: '200'})
}).then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
    console.log(networkError.message)}).then(jsonResponse => {
  return jsonResponse;
});

------------------------------------------------------------
// fetch() Post Requests III

// In the previous exercise, you created the boilerplate code for making a POST request using fetch() and .then(). In this exercise, you’re going to update that boilerplate code to allow you to shorten a URL using the Rebrandly URL Shortener API.

//     Rebrandly API.

// If you haven't already created a Rebrandly API key, read through the Rebrandly sign up guide:

//     Codecademy Articles: Rebrandly URL Shortener API.

// If you reset the exercise at any point, you will have to paste in your API key again at the top!

//Sample - this is on main.js
// Information to reach API
const apiKey = 'f031f23d27714ec8a067231252774d78';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten}); //The reason for creating data is to prepare the information needed to send in the body. 
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  });
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

//Setting up this information now will make chaining .then() in the next exercise much easier! 

------------------------------------------------------------
// fetch() POST Requests IV

// In the previous exercise you’ve positioned yourself to make the POST request by providing the endpoint and the object containing all the necessary information. In this exercise you’ll handle the response.

// The request returns a Promise which will either be resolved or rejected. If the promise resolves, you can use that information and the ok status. Let's implement that knowledge into your code!

// If you reset the exercise at any point, you will have to paste in your API key again at the top!

//sample this is on main.js
// Information to reach API
// Information to reach API
const apiKey = 'f031f23d27714ec8a067231252774d78';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  });
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

------------------------------------------------------------
// fetch() POST Requests V

// You’re almost done with the POST request you started a few lessons back!

// In fact, this time you’ll add another .then() to the chain to finally make the information available to your webpage!

// If you reset the exercise at any point, you will have to paste in your API key again at the top!

//Sample - this is on main.js
// Information to reach API
const apiKey = 'f031f23d27714ec8a067231252774d78';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
    renderResponse(jsonResponse); //The renderResponse() helper function can be viewed at public/helperFunctions.js.
  });
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

------------------------------------------------------------
// async GET Requests I

// Let’s take a minute to appreciate what you’ve accomplished so far:

//     used fetch() to make GET and POST requests.
//     check the status of the responses coming back
//     catch errors that might possibly arise
//     taking successful responses and rendering it on the webpage

// That is fantastic! It’s the basis of how the internet works!

// In the following exercises, we’re going to take what you’ve learned about chaining Promises and make it simpler using functionality introduced in ES8: async and await. You read that right, you did the hard part already, now it’s time to make it easier.

// The structure for this request will also be slightly different. Notice the new keywords async and await, as well as the try and catch statements.

// We’ll be going over how to write the boilerplate code for async GET requests in the next lesson.

//diagram: https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/async+await+GET+diagram.svg

------------------------------------------------------------
// async GET Requests II

// We are going to walk through and recreate the boilerplate code necessary to create a GET request using the async and await.

// Here are some key points to keep in mind as we walk through the code:

//     Using an async function that will return a promise.
//     await can only be used in an async function. await allows a program to run while waiting for a promise to resolve.
//     In a try...catch statement, code in the try block will be run and in the event of an exception/error, the code in the catch statement will run.

// Feel free to refer to the async/await GET diagram at any point while completing this exercise:

//     async/await GET diagram https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/async+await+GET+diagram.svg

const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  }
  catch(error) {
    console.log(error);
  }
};

------------------------------------------------------------
// async GET Requests III

// In the previous exercise, we created the boilerplate code for making a GET request using async and await.

// In this exercise, you’re going to build on previously created boilerplate code to get nouns that describe the inputted word from the Datamuse API:

//     Datamuse API Documentation.

//Sample this is on main.js
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse); //You can view the purpose of renderResponse function at public/helperFunctions.js.
    }
  }
  catch(error) {
    console.log(error);
  }
}


// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);


------------------------------------------------------------
// async POST Requests I

// Now that you’ve made an async GET request, let’s start on getting you familiar the async POST request.

// As with the other GET and POST requests that you’ve been making, an async POST request requires more information. Take a look at the diagram.

// We still have the same structure of using try and catch as before. But, in the fetch() call, we now have to include an additional argument that contains more information like method and body.

// We’ll be explaining the why's and how's of the boilerplate code for async POST requests in the next lesson.

// diagram: https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/async+await+POST+diagram.svg

------------------------------------------------------------
// async POST Requests II

// Now we’re going to piece together a POST request using async and await.

// Feel free to refer to the async/await diagram below at any point while completing this exercise:

//     async/await POST diagram

// diagram: https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/async+await+POST+diagram.svg

//Sample
const getData = async () => { //The async keyword will ensure that the function returns a promise. 
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({id: 200})
     
    });
     if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!')
    
  }
  catch(error) {
    console.log(error);
  }
}

------------------------------------------------------------
// async POST Requests III

// Since you’ve created the boilerplate code for a POST request, the next step is to incorporate that experience and logic into making a real request.

// In this exercise, you'll need to retrieve your Rebrandly API key to access the Rebrandly API.

//     Rebrandly API Keys.

// If you reset the exercise at any point, you will have to paste in your API key again at the top!

//Sample this is on main.js
// information to reach API
const apiKey = 'f031f23d27714ec8a067231252774d78';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
                'Content-type': 'application/json',
                'apikey': apiKey
                                 }
                                 });
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse); //You can view the purpose of the renderRawResponse() helper function at public/helperFunctions.js.
    }
  }
  catch(error) {
    console.log(error);
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

------------------------------------------------------------
// Review Requests II

// Let's recap on the concepts covered in the previous exercises:

//     GET and POST requests can be created a variety of ways.

//     Use AJAX to asynchronously request data from APIs. fetch() and async/await are new functionalities developed in ES6 (promises) and ES8 respectively.

//     Promises are a new type of JavaScript object that represent data that will eventually be returned from a request.

//     fetch() is a web API that can be used to create requests. fetch() will return promises.

//     We can chain .then() methods to handle promises returned by fetch().

//     The .json() method converts a returned promise to a JSON object.

//     async is a keyword that is used to create functions that will return promises.

//     await is a keyword that is used to tell a program to continue moving through the message queue while a promise resolves.

//     await can only be used within functions declared with async.

//Further instructions:
// Congratulations on learning all about AJAX requests using fetch(), async, and await! These concepts are fundamental and will help you develop more robust web apps!

// Play around the with browser and code to make GET and POST requests. If you're going to make POST requests, make sure you assign apiKey your Rebrandly API key and run the code!

// If you want to challenge yourself:

//     Rewrite the requests from scratch.
//     Replace the helper methods with your own code.
//     Use different APIs to make GET/POST requests using async/await.

// Not yet made

//Will save the whole project within the folder





