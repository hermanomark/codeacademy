Not yet done!

Broadway
Broadway wants to build a Rails app for their home page. Here's what it looks like (https://broadway-rails.herokuapp.com/#). Looking at the request/response cycle (https://www.codecademy.com/articles/request-response-cycle-static), we need three parts to build this Rails app - a route, a controller, and a view. To preview your app at any point:

In the terminal, type rails s -p 4001
In the browser, visit http://localhost:4001
Tasks
0/12Complete
Mark the tasks as complete by checking them off
1.
Create a new Rails app named broadway.

2.
After you create the new app, switch to its folder. In the terminal, type:

$ cd broadway
The cd command is a command line command used to switch into a folder. If you are new to the command line, we recommend you do this course here (https://www.codecademy.com/en/learn/learn-the-command-line).

3.
Install the gems in the Gemfile.

4.
Generate a controller named Pages.

5.
In the Pages controller (app/controllers/pages_controller.rb), make an action named home for the Home page.

6.
In the routes file (config/routes.rb), map the request for the url /pages/home to Pages controller's home action.

7.
In the root directory of the project, we've provided the base HTML (home.html.erb) and CSS (pages.css) for this project. Look at the bottom of your file navigator to locate them. In your Rails project, create app/views/pages/home.html.erb. Then, copy and paste the contents of the root home.html.erb into your newly-created file. Then, similarly, copy and paste the contents of the root pages.css into app/assets/stylesheets/pages.css.scss.

8.
Start a Rails server to preview the app in the browser. In the terminal, type:

rails s -p 4001
This command starts a Rails server listening on port 4001. Then visit http://localhost:4001/pages/home to see your app in the browser.

9.
Finish the view to display the header and main sections:

In app/views/pages/home.html.erb in the header, add four list items for About, Work, Team and Contact.
Write CSS in app/assets/stylesheets/pages.css.scss to display them on the same line.
Change the background image of the jumbotron section. Feel free to use your own image. Here's the image we used (https://s3.amazonaws.com/codecademy-content/projects/broadway/bg.jpg). (Check out how to add background images. https://css-tricks.com/perfect-full-page-background-image/)
In the main section, add a link that says Get Started. Write CSS to style it into a dark gray button.
10.
In the routes file (config/routes.rb), set the home action as the app's home page. To do this, replace the route you created in step 6 with:

root 'pages#home'
This route tells Rails to map requests for the url / to the Pages controller's home action.

11.
Restart the Rails server and view the result by visiting http://localhost:4001/ To restart a Rails server:

In the terminal, press Ctrl+C to shut down the server.
Then type rails server -p 4001 to restart the server.
12.
Click here for a video walkthrough from our experts to help you check your work!

https://www.youtube.com/watch?v=IZ3pffhqAMk