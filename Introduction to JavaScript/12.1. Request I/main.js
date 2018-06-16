// HTTP Requests

// One of JavaScript's greatest assets is its non-blocking properties, or that it is an asynchronous language.

// Websites, like newspaper websites, take advantage of these non-blocking properties to provide a better user experience. Generally, a site's code is written so that users don't have to wait for a giant image to load before being allowed to read the actual article—rather, that text is rendered first and then the image can load in the background.

// JavaScript uses an event loop to handle asynchronous function calls. When a program is run, function calls are made and added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed.

// Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events. We'll be exploring one system of technologies called Asynchronous JavaScript and XML, or AJAX.

// To read more about the event loop, read the MDN documentation:

    // MDN Documentation: Event Loop

//Sample
// We'll be using setTimeout(), which will pass a function call to the queue. The first argument is a callback and the second argument is the number of milliseconds the program must wait before the callback can be run.

console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');

// => First message!
// Second message!
// This message will always run last..

------------------------------------------------------------
// XHR GET Requests I

// Asynchronous JavaScript and XML (AJAX), enables requests to be made after the initial page load. Initially, AJAX was used only for XML formatted data, now it can be used to make requests that have many different formats.

// MDN Documentation: Extensible Markup Language (XML). (https://developer.mozilla.org/en-US/docs/XML_introduction)

// Similarly, the XMLHttpRequest (XHR) API, named for XML, can be used to make many kinds of requests and supports other forms of data.

// Remember, we use GET to retrieve data from a source. Take a look at the boilerplate code in the diagram to see how to make an XHR GET request.

// We’ll construct this template from scratch in a different exercise and walk through what each step does.

// diagram - https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/XHR+GET+diagram.svg

------------------------------------------------------------
// XHR GET Requests II

// We are going to reconstruct XHR GET request boilerplate code step-by-step until we have written a complete GET request.

// Feel free to refer to the XHR GET diagram at any point while completing this exercise:

    //XHR GET diagram - https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/XHR+GET+diagram.svg

//Code:
const xhr = new XMLHttpRequest();

const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response.Type;
  }
};

xhr.open('GET', url);
xhr.send();

------------------------------------------------------------
// XHR GET Requests III

// By this point, you have an idea of how to write the boilerplate code for an AJAX request using an XHR object.

// In this exercise, you will incorporate that boilerplate code to make a GET request to the Datamuse API to search for words that rhyme!

//     Datamuse API Documentation - https://www.datamuse.com/api/

//Sample - this is on main.js
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=' //'rel_rhy=' is the start of a parameter for the query string. This parameter will narrow your search to words that rhyme
// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value; //inputField.value grabs what is in the inputField and assigns it to the variable wordQuery. 
  const endpoint = url + queryParams + wordQuery;
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json'; //When data is sent back, it will be in JSON format. 
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE)       {
    renderResponse(xhr.response) //The renderResponse() helper function can be viewed at public/helperFunctions.js. - this is only a sample, you can change it to renderRawResponse() to view it raw
    }
  }
  xhr.open('GET', endpoint); //endpoint will store the value of the entire URL and query string.
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

------------------------------------------------------------
// XHR GET Requests IV
// In the previous exercise, you made a GET request to the Datamuse API to find words that rhyme. In this exercise, we will create a request to set a topic and find adjectives that describe the input word using query strings.

// A query string contains additional information to be sent with a request. The Datamuse API allows us to retrieve more specific data with query strings attached to the request URL.

    // Wiki: query string - https://en.wikipedia.org/wiki/Query_string

// A query string is separated from the URL using a ? character. After ?, you can then create a parameter which is a key value pair joined by a =. Examine the example below:

'https://api.datamuse.com/words?key=value'

// If you want to add an additional parameter you will have to use the & character to separate your parameters. Like so:

'https://api.datamuse.com/words?key=value&anotherKey=anotherValue'

//Sample - this is on main.js only

// Information to reach API
const url = 'https://api.datamuse.com/words?';

const queryParams = 'rel_jjb=';
const additionalParams = '&topics=';

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

------------------------------------------------------------
// XHR POST Requests I
// Reminder: If you haven’t already signed up for an API Key from Rebrandly, please read this Rebrandly sign up guide.

    // Codecademy Articles: Rebrandly URL Shortener API . - https://www.codecademy.com/articles/rebrandly-signup

// Great! By this point you've signed up for an API key, and you know the essence of making a GET request. We will be making a POST request using the Rebrandly API.

// The major difference between a GET request and POST request is that a POST request requires additional information to be sent through the request. This additional information is sent in the body of the post request.

// We’ll walk through the code from the diagram and construct our own POST request in the next lesson. 

// diagram - https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/XHR+POST+diagram.svg
------------------------------------------------------------
// XHR POST Requests II

// We are going to reconstruct the code from the previous exercise step-by-step until we have written a complete AJAX POST request.

// Feel free to refer to the XHR POST diagram at any point while completing this exercise:

//     XHR POST diagram - https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/XHR+POST+diagram.svg

const xhr = new XMLHttpRequest(); //The XMLHttpRequest object is used in JavaScript to interact with servers.

const url = 'https://api-to-call.com/endpoint'; //The URL will direct the request to the correct server.

const data = JSON.stringify({id: '200'}); //JSON.stringify() will convert a value to a JSON string. By converting the value to a string, we can then send the data to a server. 

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response; //The response property will contain the data that we're getting back from the POST request.
  }
}

xhr.open('POST', url); //.open() creates a new request and the arguments passed in determine what type of request is being made and where it's being made to. 
xhr.send(data); //.send() will send the request to the server. 

------------------------------------------------------------
// XHR Post Requests III

// Reminder: If you haven’t already signed up for an API Key from Rebrandly, please read the article:

//     Codecademy Articles: Rebrandly URL Shortener API. -  https://www.codecademy.com/articles/rebrandly-signup

// In this exercise, you'll be making a POST request to the Rebrandly API to shorten a URL.

// Get ready! You’re now going to incorporate the previous lesson’s boilerplate code into making an actual POST request!

// If you reset the exercise at any point, you will have to paste in your API key again at the top!

//Sample - this is on main.js

// Information to reach APIs
const apiKey = 'f031f23d27714ec8a067231252774d78'; // Rebrandly API Key,
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten}); //We're including this information because the API expects to see an object with a key destination that has a value of a URL.
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response); //The renderResponse function can be viewed at public/helperFunctions.js., note: this is only a sample, you can also change it to renderRawResponse for raw output.
}
  }
  xhr.open('POST', url);
  //To access the Rebrandly API, we need a header with two key-value pairs. In the header, you must include values for 'Content-type' and an 'apikey'.
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
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

//to test input this to field - https://medium.com/@codecademy/breaking-the-coding-language-barrier-bf24652c3c60

------------------------------------------------------------
// Review Requests I

// You’ve done an amazing job navigating through making XHR GET and POST requests! Take some time to review the core concepts before moving on to the next lesson.

//     JavaScript is the language of the web because of its asynchronous capabilities. AJAX, which stands for Asynchronous JavaScript and XML, is a set of tools that are used together to take advantage of JavaScript's asynchronous capabilities.

//     There are many HTTP request methods, two of which are GET and POST.

//     GET requests only request information from other sources.

//     POST methods can introduce new information to other sources in addition to requesting it.

//     GET requests can be written using an XMLHttpRequest object and vanilla JavaScript.

//     POST requests can also be written using an XMLHttpRequest object and vanilla JavaScript.

//     Writing GET and POST requests with XHR objects and vanilla JavaScript requires constructing the XHR object using new, setting the responseType, creating a function that will handle the response object, and opening and sending the request.

//     To add a query string to a URL endpoint you can use ? and include a parameter.

//     To provide additional parameters, use & and then include a key-value pair, joined by =.

//     Determining how to correctly write the requests and how to properly implement them requires carefully reading the documentation of the API with which you're working.

//Challenge yourself:
// Play around the with browser and code to make GET and POST requests. If you're going to make POST requests, make sure you assign apiKey your Rebrandly API key and run the code!

// If you want to challenge yourself:

//     Build shortenUrl() or getSuggestions() from scratch.
//     Manipulate the object that is returned to display something different in the browser.
//     Use a different API to make a GET or POST request.
//     Create query strings to yield different results.

//Note: project was copied to the same folder for reference :)