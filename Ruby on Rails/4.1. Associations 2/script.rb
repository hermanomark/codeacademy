# Many to Many
# So far we've made an app that stores data using two models. We used the has_many / belongs_to association to model a one-to-many relationship between the data.

# But not all data is one-to-many. For example, a movie has many actors in the cast, but each actor also has many movies she's starred in.

# To model this data, we need a many-to-many relationship. Let's see how to do this by building a Rails app for a movie website.

# 1.
# Create a new app named MovieApp.

# rails new MovieApp

# 2.
# Install the gems.

# bundle install

# 3.
# Run the local server and visit http://localhost:8000.

# ------------------------------------------------------------

# Models I
# Looking at the request/response cycle, we need four parts to the build the movie app: models, controllers, routes, and views.

# Let's begin by creating the models.

# 1.
# Generate a model named Movie.

# $ rails generate model Movie

# 2.
# Generate another model named Actor.

# $ rails generate model Actor

# 3.
# Generate a third model named Part.

# $ rails generate model Part

# 4.
# In app/models/movie.rb, inside the Movie class add the following methods:

has_many :parts 
has_many :actors, through: :parts

# 5.
# In app/models/actor.rb, add the following methods:

has_many :parts 
has_many :movies, through: :parts

# 6.
# In app/models/part.rb, add the following methods:

belongs_to :movie 
belongs_to :actor

# ------------------------------------------------------------

# Models II
# What did we just do? Check out the diagram in the browser:

# diagram: https://s3.amazonaws.com/codecademy-content/courses/learn-rails/img/has-many-through.svg

# We created three models - Movie, Actor, and Part.
# In the models, we used the has_many :through association to connect the Movie model to the Actor model through the Part model.
# In this way, the has_many :through association sets up a many-to-many relationship between movies and actors.

# 1.
# Now that there's an association between Movie and Actor, let's continue and add columns to the migration files:

# Open the migration file in db/migrate/ for the movies table, and add the following columns:

# a string column called title
# a string column called image
# a string column called release_year
# a string column called plot

class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title
      t.string :image
      t.string :release_year
      t.string :plot
      t.timestamps
    end
  end
end


# 2.
# Next in the migration file for the actors table, and add the following columns:

# a string column called first_name
# a string column called last_name
# a string column called image
# a string column called bio

class CreateActors < ActiveRecord::Migration
  def change
    create_table :actors do |t|
      t.string :first_name
      t.string :last_name
      t.string :image
      t.string :bio
      t.timestamps
    end
  end
end

# 3.
# Then in the migration file for the parts table, add the following lines. They add foreign keys that point to the movie and actor tables.

t.belongs_to :movie, index: true 
t.belongs_to :actor, index: true

# 4.
# Run the migration to update the database with the three tables.

# $ rake db:migrate

# 5.
# Open up db/seeds.rb. We've added a few items here to seed the database with movies and actors. Run rake db:seed to seed the database with the data in db/seeds.rb.

# $ rake db:seed

# ------------------------------------------------------------

# Movies I
# Nice work! Let's review what we did:

# We added columns to the movies table and actors table
# We used the t.belongs_to methods in the parts table to add foreign keys, setting up the many-to-many relationship.
# Finally we ran the migrations to update the database, and seeded the database with the data in db/seeds.rb.

# 1.
# Now that the models are set up, let's move on to the rest of the request/response cycle and create the routes, controllers, and views.

# Generate a controller named Movies.

# $ rails generate controller Movies

# 2.
# In the routes file, create a new route that maps the URL /movies to the Movies controller's index action.

get '/movies' => 'movies#index'

# 3.
# Then in the Movies controller, add the index action to display a list of all movies. To do this, fetch all movies from the database and store them in variable @movies.

def index
  @movies = Movie.all
end

# 4.
# In app/views/movies/index.html.erb inside <div class="main"> iterate through each movie in @movies and display the image, title, and release year.

# <div class="main">
#   <div class="container">
#   <h2>Popular Films</h2>
#     <% @movies.each do |movie| %>
#     <div class="movie">
#       <%= image_tag movie.image %>
#       <h3><%= movie.title %></h3>
#       <p><%= movie.release_year %></p>
#       <p><%= movie.plot %></p>
#       <%= link_to "Learn more", movie_path(movie) %>
#     </div>
#     <% end %>
#   </div>
# </div>

# 5.
# Run the local server and visit http://localhost:8000/movies in the browser.

# ------------------------------------------------------------

# Movies II
# Well done! The movies show up on the page.

# Let's add another action to display a specific movie and its actors. Looking at the seven standard controller actions, we need to use the show action to do this.

# https://www.codecademy.com/articles/standard-controller-actions

# 1.
# In the routes file, add another route to send requests to URLs like /movies/1 to the Movie controller's show action. Use as: to name this route "movie".

get 'movies/:id' => 'movies#show', as: :movie

# 2.
# Then in the Movies controller, add the show action to display a specific movie and its actors.

# First use Movie.find to find the movie by its id.
# Then retrieve all actors that belong to the movie, and store them in @actors.

def show 
  @movie = Movie.find(params[:id])
  @actors = @movie.actors
end

# 3.
# In app/view/movies/show.html.erb

# Inside <div class="movie">...</div>, display the movie's image, title, release year, and plot.
# Below <h2>Cast</h2>, iterate through each actor and display the image, first name, last name, and bio.

#       <div class="info">
#         <%= image_tag @movie.image %>
#         <h3 class="movie-title"> <%= @movie.title %> </h3>
#         <p class="movie-release-year">  <%= @movie.release_year %> </p>
#         <p class="movie-plot"> <%= @movie.plot %></p>
#       </div>
#     </div>

#     <h2>Cast</h2>
#     <% @actors.each do |actor| %>
#     <div class="actor">
#       <%= image_tag actor.image %>
#       <h3 class="actor-name">  <%= actor.name %></h3>
#       <p class="actor-bio">  <%= actor.bio %></p>
#     </div>
#     <% end %>

# 4.
# Finally in app/views/movies/index.html.erb below a movie's plot, use link_to to add a link to that movie:

# Use "Learn more" for the link text
# By giving the show route a name of "movie", Rails automatically creates a helper method named movie_path, so use it to generate a URL to a specific movie's path

# <div class="main">
#   <div class="container">
#   <h2>Popular Films</h2>
#     <% @movies.each do |movie| %>
#     <div class="movie">
#       <%= image_tag movie.image %>
#       <h3><%= movie.title %></h3>
#       <p><%= movie.release_year %></p>
#       <p><%= movie.plot %></p>
#       <%= link_to "Learn more", movie_path(movie) %> // this is the code
#     </div>
#     <% end %> 

# 5.
# Visit http://localhost:8000/movies in the browser. Click on a 'Learn more' to see a movie and its actors.

# ------------------------------------------------------------

# Actors I
# Great job! The app displays all actors that belong to a movie. The has_many :through association lets us easily query for all actors that belong to a movie.

# 1.
# Let's add the ability to see all movies an actor has appeared in.

# Generate a controller named Actors.

# $ rails generate controller Actors

# 2.
# In the routes file, add a route that maps the URL /actors to the Actors controller's index action.

get '/actors' => 'actors#index'

# 3.
# Then in the controller, add the index action to display a list of all actors.

def index
  @actors = Actor.all
end

# 4.
# In app/views/actors/index.html.erb, iterate through each actor and display the image, first name, and last name.

# <% @actors.each do |actor| %>
# <div class="actor col-xs-2">
#   <%= image_tag actor.image %>
#   <h3> <%= actor.first_name + ' ' + actor.last_name %> </h3>
#   <%= link_to "Learn more", actor_path(actor) %> 
#   <p> <%= actor.bio %> </p>
# </div>
# <% end %>

# 5.
# Back in the routes file, add another route to send requests to URLs like /actors/1 to the Actors controller's show action. Use as: to name this route "actor".

get 'actors/:id' => 'actors#show', as: :actor

# 6.
# Then in the controller, add the show action to display a specific actor and the filmography. To do this, first find an actor by id. Then retrieve all movies that belong to the actor.

  def show
    @actor = Actor.find(params[:id])
    @movies = @actor.movies
  end

# 7.
# In app/views/actors/show.html.erb:

# Display the actor's image, first name, last name, and bio.
# Then iterate through each movie and display its title, image, and release year.

#  <div class="actor">
#   <%= @actor.image %>
#   <div class="info">
#     <h3 class="actor-name"> <%= @actor.first_name +  ' ' + @actor.last_name %>  </h3>
#     <p class="actor-bio"> <%= @actor.bio %> </p>
#   </div>
# </div>

# <h2>Movies</h2>
# <% @movies.each do |movie| %>
# <div class="movie">
#   <%= image_tag movie.image %>
#   <h3 class="movie-title"> <%= movie.title %> </h3>
#   <p class="movie-release-year"><%= movie.release_year %>  </p>
#   <p class="movie-plot"> <%= movie.plot %>  </p>
# </div>
# <% end %>

# 8.
# Finally in app/views/actors/index.html.erb below an actor's name, use link_to to add a link to that actor:

# Use "Learn more" for the link text
# By giving the show route a name of "actor", Rails automatically creates a helper method named actor_path, so use it to generate a URL to a specific actor's path

# <% @actors.each do |actor| %>
# <div class="actor col-xs-2">
#   <%= image_tag actor.image %>
#   <h3> <%= actor.first_name + ' ' + actor.last_name %> </h3>
#   <%= link_to "Learn more", actor_path(actor) %> // this is the code
#   <p> <%= actor.bio %> </p>
# </div>
# <% end %>

# 9.
# Visit http://localhost:8000/movies in the browser. Click on a movie to see its cast.

# Then visit http://localhost:8000/actors. Click on an actor to see what movies he's appeared in.

# ------------------------------------------------------------

# Generalizations
# Congratulations! You build a movie website that lets people browse a movie's cast and an actor's filmography. What can we generalize so far?

# Actors and movies can be modeled using a many-to-many relationship. In Rails, this can be implemented using a has_many :through association.
# The has_many :through association joins two models via a third model.