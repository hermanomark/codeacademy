Not yet done!

Bolt Network
Bolt Network wants to create a Rails app with a Home page and an About page. Here's what it looks like (https://bolt-network-rails.herokuapp.com/).

Using the request/response cycle (https://www.codecademy.com/articles/request-response-cycle-static) as a guide, there are eight changes to be made.

To preview your app at any point:

In the terminal, type rails s -p 4001
In the browser, visit http://localhost:4001
Tasks
1/10Complete
Mark the tasks as complete by checking them off
1.
Create a new Rails app named bolt-network.

2.
After you create the new app, switch to its folder. In the terminal, type:

$ cd bolt-network
3.
Install the gems in the Gemfile.

4.
In the root directory of the project, we've provided the base HTML (home.html) and CSS (bolt-network.css) for this project. Look at the bottom of your file navigator to locate them.

In your Rails project, create app/views/pages/home.html.erb. Then, copy and paste the contents of the root home.html into your newly-created file.

Then, similarly, create app/assets/stylesheets/pages.css.scss and copy and paste the contents of the root bolt-network.css into that new file.

5.
Generate a controller named Pages. In the Pages controller (app/controllers/pages_controller.rb) make an action named home for the Home page and about for the About page.

6.
In the routes file (config/routes.rb), first set the home action as the root route. Second, create a new route to map the url /about to the about action.

7.
Start a Rails server to preview the app in the browser. In the terminal, type:

rails s -p 4001
Then visit http://localhost:4001 in the browser.

8.
In the app/views/pages/ directory, create a new view called about.html.erb. Copy the HTML from here (https://s3.amazonaws.com/codecademy-content/projects/3/bolt-network/about.html) and paste it inside app/views/pages/about.html.erb.

9.
Set up the layout file (app/views/layouts/application.html.erb):

The layout file lets you build a base view that contains all the common elements of your site, such as CSS files, the header, and the footer. The <%= yield %&> defines the portion of the layout that child templates (like home.html.erb and about.html.erb) can fill in.

In the <head> element below the <title>, add the CSS files for Bootstrap and the web font:

<link rel="stylesheet" href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css">
<link href="https://fonts.googleapis.com/css?family=Oxygen:300,400,700" rel="stylesheet" type="text/css">
Then in the browser, click the reload icon to refresh the page and preview your updated app.

10.
Click here for a video walkthrough from our experts to help you check your work!

https://www.youtube.com/watch?v=OJ1J-85NAhg