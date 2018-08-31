Wanderlust
Using fetch, async, and await, you'll request information from the Foursquare API (https://developer.foursquare.com/) and APIXU (https://www.apixu.com/doc/) to create a travel website.

Before you begin, you'll need to register for developer accounts for both of the APIs above. They're both free. Once you make an account, the Foursquare API will give you a client ID and a client secret. You'll need to save both of those in main.js. APIXU will give you an API Key, which you'll also need to save in main.js.

You can view a live version of this project here.

Tasks
0/44Complete
Mark the tasks as complete by checking them off
Add API Information
1.
Save the client ID you obtained from the Foursquare API to const clientId.

2.
Save the client secret you obtained from the Foursquare API to const clientSecret.

3.
Create a const called url. Check the Foursquare documentation (https://developer.foursquare.com/docs/api/venues/explore) to see the explore venue API endpoint.

Add the near parameter without a value. To add a query to the end of a URL, be sure to use ? followed by the first key (near) and an =. You'll add the value of the near parameter to this URL string when you make the request itself.

4.
Save the API Key you obtained from APIXU to const apiKey.

5.
Create a const called forecastUrl. Check out Example 2 on the APIXU documentation (https://www.apixu.com/doc/examples.aspx) to see what this const should include. For this step, you should include everything up until the API key itself.

Get Data from Foursquare
6.
The following steps will guide you through constructing the getVenues() function which is called from executeSearch().

Turn getVenues() into an asynchronous function that returns a Promise.

7.
Inside of that function, add a const called city. Save the value from the user's input field on the page with $input.val().

8.
Add a const called urlToFetch. This string will contain the combined text of the entire request URL

the API endpoint URL
the user's input city
a limit parameter with the number of venues you wish to return (use 10)
the client_id parameter and your client ID
the client_secret parameter and your client secret
the v (version) parameter and today's date in this format: YYYYMMDD
Each key-value parameter pair should be joined to the others with &. For instance, to request 5 venues with a client ID of 1234, that portion of the URL would be limit=5&client_id=1234.

9.
Add try/catch statements with empty code blocks.

10.
In the catch code block, log the error to the console.

11.
In the try code block, use fetch() to send a GET request to urlToFetch. await the response and save it to a variable called response using the const keyword.

12.
Create a conditional statement that checks if the ok property of the response object evaluates to a truthy value.

13.
Log the response to the console. In the browser window with the Wanderlust page, enter a city in the search field and submit. Make sure that you have your own browser's JavaScript console open so that you can see the response that is logged to the console.

14.
Notice that the response includes the URL you requested but doesn't include the information you asked for. Copy and paste the URL into a new tab in your browser. It might be difficult to read, so try using an extension such as JSON View (https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en) to parse the data. If you don't want to use an extension, you can also try JSBeautifier (http://jsbeautifier.org/). Examine the object.

15.
Convert the response object to a JSON object. await the resolution of this method and save it to a variable called jsonResponse using the const keyword.

Log jsonResponse to the console. (https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-developer-console)

16.
Explore the object in the console. There's a lot of information in there. Let's save some of that data to a variable called venues. Specifically, follow this nesting chain from the jsonResponse variable to get an array of venue data:

the response property (an object)
the groups property (an array)
the first element of groups
the items property (an array of venue data)
17.
Log venues to the console and see what the API sent back. There should be an array with the number of objects you selected in the limit parameter. You'll only want the venue property inside of these objects. Use .map() to save these venues to the venues array from the previous step.

Add .map(parameter => parameter.valueToStore) to the end of the code from the previous step.

18.
Return venues as the very last line of the try code block. Open the hint to peek at the whole try block.

19.
Run the code and see what is logged to the console now!

Get Data from APIXU
20.
The following steps will guide you through constructing the getForecast() function which is called from executeSearch().

Turn getForecast() into an asynchronous function that returns a Promise. Add empty try/catch blocks inside. Log the error inside the catch block.

21.
Before the try code block, create a const called urlToFetch that includes:

the base forecastUrl
your API key
the q parameter (representing the location query) with a value the user's input ($input.val())
the days parameter and the number of days you want to retrieve (you can start with 4)
the hour parameter and the time of day for which you want to retrieve the weather (try 11).
Don't forget to join parameter key-value pairs after the API key with &.

22.
Inside of the try block, await the response of calling fetch() and passing it the URL you created in a previous step. Save the response to a variable called response using the const keyword.

23.
Create a conditional statement that checks the ok property of the response object. If this evaluates to a truthy value, await the response of calling .json() on the response object. Save the resolution of this Promise to a variable called jsonResponse using the const keyword.

24.
Log jsonResponse to the console. Enter a city in the browser and see what is logged! Explore the object!

25.
You'll only want to include some of the response data on. the page. Let's make a new variable called days and save the forecastday property of the forecast day object from the jsonResponse object inside of it.

26.
Return days at the bottom of the try code block. Open the hint to inspect the complete try block inside getForecast().

Render Data From Foursquare API
27.
If you want to follow the steps and render the data with guidance, that's great! If not, check the hint and update the renderVenues() function provided in main.js.

28.
In main.js. There's a function called renderVenues that calls the .forEach() method on the $venueDivs array. This is an array of the <div>s in index.html where you will render the information returned in the response from the Foursquare API.

Towards the bottom of this method, there is a variable called venueContent. It's an empty string for now, but you'll be replacing it with an HTML string to render correct venue information.

Start by creating a const venue to represent the individual venue object inside of the .forEach() callback. Save the current venue at venues[index] to this variable.

29.
Create a venueIcon const to save the value of the object representing the venue icon. This is accessible as the icon property of the first element in the array of categories of the venue object.

30.
Now, construct the full source URL for the venue icon. The venueIcon has a prefix and suffix field used to construct a source path. You can inspect more information about the icon object in the Response Fields and sample Response in the Foursquare documentation or log venueIcon to the console to inspect it.

Concatenate or combine the prefix property of venueIcon, the string 'bg_64', and the suffix, and save to a const venueImgSrc. 'bg_64' is required to fetch icons with a gray background that will show up against the background of the Wanderlust page.

31.
Now construct the HTML string to add the new venue. You can use your knowledge of the venue object shape and this HTML template (https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/wanderlust/wanderlust+templates/venueHTMLTemplate.txt) or follow the steps below. Open the hint for more information about implementing from the HTML template.

32.
A helper function named createVenueHTML() has been provided to construct the HTML string to display the venue information. You can examine it in public/helpers.js, and it is linked in index.html so that you can use it in main.js.

Pass createVenueHTML() the venue's name, location, and image source URL and save the returned string to the venueContent variable.

33.
Now it's time to hook up your renderVenues() function to the data fetched by getVenues().

In the executeSearch() function towards the bottom of main.js, getVenues() and getForecast() are already being called.

Chain a .then() method to getVenues(). .then()'s callback function should take a single parameter, venues, and return renderVenues(venues).

Save your code, search for a location, and you should be able to see venue information displayed towards the bottom of the Wanderlust page!

Render Data from APIXU
34.
If you want to follow the steps and render the data with guidance, that's great! If not, check the hint and copy and paste the function provided in main.js.

35.
Inside the callback function of $weatherDivs.forEach(), save the current day's weather object from the days array and save it to a const currentDay.

36.
Now construct the HTML string to add the new day of weather. You can inspect the currentDay object shape and this HTML template (https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/wanderlust/wanderlust+templates/forecastHTMLTemplate.txt) or follow the steps below. Open the hint for more information about implementing from the HTML template.

37.
A helper function named createWeatherHTML() has been provided to construct the HTML string to display the weather information. You can examine it in public/helpers.js, and it is linked in index.html so that you can use it in main.js.

Pass createWeatherHTML() the currentDay and save the returned string to the weatherContent variable.

38.
Time to hook up the forecast data and the render function.

Inside executeSearch(), .then() method to getForecast(). .then()'s callback function should take a single parameter, forecast, and return renderForecast(forecast).

Complete!
39.
Congratulations! You should now be able to search for venue and weather details by city and see the response on the page!

Challenges
40.
Try out any of the challenges below to get more practice!

41.
Fetch more than 4 venues and randomize which ones are added to the page.

42.
Include additional information about the weather.

43.
Include additional information about each venue from the response.

For a real challenge, try fetching venue photos! This will require an additional request for venue details (https://developer.foursquare.com/docs/api/venues/details) for each venue, as the photo information is not returned in the initial request.

44.
Click here for a video walkthrough from our experts to help you check your work!

https://www.youtube.com/watch?v=L2mCpLOUzeQ