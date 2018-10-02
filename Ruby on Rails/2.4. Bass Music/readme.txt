Not yet done!

Bass Music
Bass wants a Rails app for their music streaming service. Here's what it looks like (https://bass-music-rails.herokuapp.com/albums). Albums are displayed on the main page. Clicking on an album takes users to a page where they can see an album's track listing.

Here's what we'll need to build this app:

The first piece of data we need to store is an album. An album contains a cover, title, and artist. This means we'll need an Album model to store this data.
The second piece of data we need to store is a track. A track contains a song's name and duration. This means we'll need a Track model to store this data.
We can connect an album to its tracks using a has_many / belongs_to association.
To preview your app at any point:

In the terminal, type rails s -p 4001
In the browser, visit http://localhost:4001
Tasks
0/19Complete
Mark the tasks as complete by checking them off
Setup
1.
Create a new Rails app named bass-music.

2.
After you create the new app, switch to its folder. In the terminal, type:

cd bass-music
3.
Install the gems in the Gemfile.

4.
In the root directory of the project, we've provided the base HTML and CSS, files for this project. Look at the bottom of your file navigator to locate them. Let's put their contents in the correct place in your project.

In your Rails project, create app/views/albums/index.html.erb and copy and paste the contents of the root index.html into that file. Create app/views/albums/show.html.erb and copy and paste the contents of the root show.html into that file.

Then, similarly, create app/assets/stylesheets/albums.css and copy the contents of the root bm.css into it.

Add models and associations
5.
Generate a model named Album.

6.
Generate a model named Track.

7.
Associate the Album model with the Track model using the has_many and belongs_to methods.

8.
Open up the migration file in db/migrate/ for the albums table, and add the following columns:

a string column called cover
a string column called title
a string column called artist
9.
Open the migration file in db/migrate for the tracks table, and add the following columns:

a string column called name
a string column called minutes
a references column to the Album model
The references column is needed because the Track model has a belongs_to association with the Album model.

10.
Run a migration to update the database with the Album model and Track model.

11.
We've prepared a few items here (https://s3.amazonaws.com/codecademy-content/projects/3/bass-music/seeds.rb.html) to seed the database with albums and tracks. Copy these items and paste them into your db/seeds.rb.

Then in db/seeds.rb:

Create one or two more Album records. Feel free to use your favorite albums.
Create Track records associated with each album.
12.
Run rake db:seed to seed the database with the data in db/seeds.rb.

Add a controller and routes
13.
Generate a controller named Albums.

14.
In the routes file, add the resource route for the Albums controller.

15.
Run the rake routes command in the terminal to view all of the new URLs that the resource route created.

We need an action to display a list of all albums, and another action to display a specific album. Looking at Rails' seven standard controller actions (https://www.codecademy.com/articles/standard-controller-actions), we can use albums#index and albums#show.

Add controller actions and views
16.
We've prepared a layout file for the project here (https://s3.amazonaws.com/codecademy-content/projects/3/bass-music/application.html). Copy this HTML and paste it into your app/views/layouts/application.html.erb

17.
Set up the albums#index controller action:

In the Albums controller, make an action named index that retrieves all albums from the database, and saves it into a variable named @albums.

In the view app/views/albums/index.html.erb, loop through each element in @albums and display an album's details.

In the routes file, set the index action as the root route. View the result by running your project.

Start a Rails server to preview the app in the browser. In the terminal, type: rails s -p 4001. This command starts a Rails server listening on port 4001. Then visit http://localhost:4001 to see your app in the browser.

18.
Set up the albums#show controller action:

In the Albums controller, make an action named show. Retrieve a single album, and save it in @album. Then retrieve all of its tracks, and save them in @tracks.

Finish the view app/views/albums/show.html.erb. First display an album's details again. Then, loop through each track and display its information.

Restart the Rails server and view the result by visiting http://localhost:4001/. Click on an album cover to see its tracks. To restart a Rails server, in the terminal, first press Ctrl+C to shut down the server. Then type rails server to restart it.

19.
Click here for a video walkthrough from our experts to help you check your work!

https://www.youtube.com/watch?v=yug11DVD8Rw