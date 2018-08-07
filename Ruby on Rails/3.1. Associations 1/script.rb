# Adding More Data
# We built a Rails app that stores data using a single model.

# What if we want to build an app with more than one kind of data, like Team and Athlete? Both Team and Athlete would have have different columns, and it would get messy to represent both in one model. Instead, we can represent them using two models.

# Let's see how this works by building a Rails app for a travel app.

# 1.
# Create a new app named TravelApp.

# $ rails new TravelApp

# 2.
# Install the gems.

# $ bundle install

# 3.
# Run the local server and visit http://localhost:8000.

# ------------------------------------------------------------

# Models I
# Great! Looking at the request/response cycle, we need four parts to build the travel app: models, controllers, routes, and views.

# Let's begin by creating the models.

# 1.
# Generate a model named Tag.

# $ rails generate model Tag

# 2.
# Generate another model named Destination.

# $ rails generate model Destination

# 3.
# In app/models/tag.rb add a has_many method, like this:

class Tag < ActiveRecord::Base 
  has_many :destinations 
end

# 4.
# In app/models/destination.rb, add a belongs_to method:

belongs_to :tag

# ------------------------------------------------------------

# Models II
# What did we just do?

# We created two models named Tag and Destinations.

# In the model files, we used the methods has_many and belongs_to define an association between Tag and Destination:

# has_many :destinations denotes that a single Tag can have multiple Destinations.
# belongs_to :tag denotes that each Destination belongs to a single Tag.
# The has_many / belongs_to pair is frequently used to define one-to-many relationships. A few examples are:

# a Library has many Books; a Book belongs to a Library
# an Album has many Photos; a Photo belongs to an Album
# a Store has many Products; a Product belongs to a Store

# 1.
# Now that there's an association between Tag and Destination, let's continue and add columns to the migration files.

# Open the migration file in db/migrate/ for the tags table, and add the following columns:

# a string column called title
# a string column called image

class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :title
      t.string :image
      t.timestamps
    end
  end
end


# 2.
# Next in the migration file for the destinations table, add the following columns:

# a string column called name
# a string column called image
# a string column called description
# the line t.references :tag

class CreateDestinations < ActiveRecord::Migration
  def change
    create_table :destinations do |t|
      t.string :name
      t.string :image
      t.string :description
      t.references :tag
      t.timestamps
    end
  end
end


# 3.
# Run the migration to update the database with Tag and Destination.

# $ rake db:migrate

# 4.
# Open up db/seeds.rb. We've added a few items here to seed the database with tags and destinations. Run rake db:seed to seed the database with the data in db/seeds.rb.

# $ rake db:seed

# ------------------------------------------------------------
# Display all tags
# Nice work. What did we just do?

# We added two string columns title and image to the tags table
# We added three string columns name, image, and description to the destinations table
# We also added the line t.references :tag to the destinations table. This adds a foreign key pointing to the tags table.
# Finally we ran the migrations to update the database, and seeded the database with the data in db/seeds.rb.

# 1.
# Now that the models are set up, let's move on to the rest of the request/response cycle and create a controller, a route, and a view.

# Generate a controller named Tags

# $ rails generate controller Tags

# 2.
# In the routes file, add a new route that maps requests to /tags to the Tags controller's index action.

# get '/tags' => 'tags#index'

# 3.
# Then in the Tags controller, add the index action to display a list of all tags. To do this, fetch all tags from the database and store them in variable @tags.

  def index
    @tags = Tag.all
  end

# 4.
# In app/views/tags/index.html.erb at line 12, iterate through each tag in the @tags array. Then for each tag, display its title and image.

# <div class="tags">
#   <div class="container">
#     <div class="cards row">
#       <% @tags.each do |t| %>
#       <div class="card col-xs-4">
#         <%= image_tag t.image %>
#         <h2><%= t.title %></h2>
#         <%= link_to "Learn more", tag_path(t) %>
#       </div>
      
#       <% end %>
#     </div>
#   </div>
# </div>

# We've provided CSS in app/assets/stylesheets/application.css.

# 5.
# Visit http://localhost:8000/tags in the browser.

# ------------------------------------------------------------
# Show a tag
# Well done! The app now displays a list of tags from the database.

# 1.
# Let's add another action to display a specific tag. Looking at the seven standard controller actions, we need to use the show action. Let's set it up now.

# First in the routes file, add this route:

get '/tags/:id' => 'tags#show', as: :tag
# Here we use as: to name this route "tag".

# 2.
# Then in the Tags controller, add the show action:

def show 
  @tag = Tag.find(params[:id]) 
  @destinations = @tag.destinations 
end

# 3.
# In app/views/tags/show.html.erb inside the <h2> element, display a tag's title.

# Then in <div class="cards">...</div>, iterate through each destination in the @destinations array and display its image, name, and description.

# 4.
# Finally in app/views/tags/index.html.erb within the <% @tags.each do |t| %>...<% end %> block, add this link:

<%= link_to "Learn more", tag_path(t) %>

# <div class="tags"> 
#   <div class="container">
#     <div class="cards row">
#       <% @tags.each do |t| %>
#       <div class="card col-xs-4">
#         <%= image_tag t.image %>
#         <h2><%= t.title %></h2>
#         <%= link_to "Learn more", tag_path(t) %>
#       </div>
      
#       <% end %>
#     </div>
#   </div>
# </div>

# By giving the route in step 1 the name "tag", Rails automatically creates a helper method named tag_path. We use tag_path(t) here to generate the URL to a specific tag's path, for example /tag/1.

# 5.
# Visit http://localhost:8000/tags in the browser. Click on a 'Learn more' to see all destinations under that tag.

# ------------------------------------------------------------
# Show a destination
# Nice job! The app displays all destinations that belong to a tag. How does this work?

# When a user visits http://localhost:8000/tags/1, the route get '/tags/:id' => 'tags#show' sends this request to the Tags controller's show action with {id: 1} in params.
# The @destinations = @tag.destinations retrieves all the destinations that belong to the tag, and stores them in @destinations. The has_many / belongs_to association lets us query for destinations like this.
# The tag and its destinations are sent to the view to be displayed.

# 1.
# Let's add functionality to see a destination.

# Generate a controller named Destinations.

# $ rails generate controller Destinations

# 2.
# Next in the routes file, map requests to/destinations/:id to the Destinations controller's show action. Use as: to name this route "destination".

get '/destinations/:id' => 'destination#show' as: :destination

# 3.
# Then in the Destinations controller, set up the show action. Use params to find a destination by id, and save it in @destination


def show
    @destination = Destination.find(params[:id])
end

# 4.
# Then in the view app/views/destinations/show.html.erb, display the destination's image, name, and description.

# <%= image_tag @destination.image %>
# <h2><%= @destination.name %></h2>
# <p><%= @destination.description %></p>


# 5.
# Finally in app/views/tags/show.html.erb below a destination's description, use link_to to add a link to that destination:

# Use "See more" for the link text
# By giving the show route a name of "destination", Rails automatically creates a helper method named destination_path. Use destination_path to generate a URL to a specific destination's path.

# <% @destinations.each do |d| %>
#   <div class="card col-xs-4">
#     <%= image_tag d.image %>
#     <h2> <%= d.name %> </h2>
#     <p><%= d.description %> </p>
#     <%= link_to "See more", destination_path(d) %> // this is the code for link to
#   </div>
# <% end %>


# 6.
# Visit http://localhost:8000/tags/1 in the browser. Click on a destination to see its show page.

# ------------------------------------------------------------

# Update a destination I
# Great! The app now displays a specific destination.

# Let's continue by adding actions to update a destination's name and description. Looking at the seven standard Rails actions, we need to use the edit and update actions to do this. Let's set them up now.

#   1.
# First in the routes file (config/routes.rb), add these routes:

get '/destinations/:id/edit' => 'destinations#edit', as: :edit_destination 
patch '/destinations/:id' => 'destinations#update'

# 2.
# Then in the Destinations controller below the show action, add an edit action:

def edit 
  @destination = Destination.find(params[:id]) 
end

# 3.
# Below the edit action, add a private method named destination_params:

private 
  def destination_params 
    params.require(:destination).permit(:name, :description) 
  end

# 4.
# Between the edit action and the private method, add an update action:

def update 
  @destination = Destination.find(params[:id]) 
  if @destination.update_attributes(destination_params) 
    redirect_to(:action => 'show', :id => @destination.id) 
  else 
    render 'edit' 
  end 
end

# 5.
# In app/views/destinations/edit.html.erb inside <div class="container">...</div>, use form_for to create a form with the fields of the @destination object.

# Look back at this exercise for an example of how to use form_for.

 # <%= form_for(@destination) do |f| %>  
 #   <div class="field"> 
 #     <%= f.text_area :name %><br> 
 #     <%= f.text_area :description %> 
 #   </div> 
 #   <div class="actions"> 
 #     <%= f.submit "Update" %> 
 #   </div> 
 #  <% end %>

# 6.
# Finally in app/views/destinations/show.html.erb, use link_to to create a link to the destination's edit path:

# Use "Edit" for the link text
# By giving the edit route a name of "edit_destination", Rails automatically creates a helper method named edit_destination_path. Use it to generate a URL to a specific destination's edit path.

  # <%= image_tag @destination.image %>
  # <h2><%= @destination.name %></h2>
  # <p><%= @destination.description %></p>
  # <%= link_to "Edit", edit_destination_path(@destination) %> // this is the code

# 7.
# Visit http://localhost:8000/tags/1 in the browser and click on a destination. Then click the Edit button to edit the destination's name and description.

# ------------------------------------------------------------

# Update a destination II

# https://www.codecademy.com/articles/request-response-cycle-forms

# Nicely done! You can now update a destination's name and description. How does it work?

# When you visit http://localhost:8000/destinations/1/edit to edit a destination, it triggers the first turn of the request/response cycle:

# The browser makes a HTTP GET request for the URL /destinations/1/edit.
# The Rails router maps this URL to the Destinations controller's edit action. The edit action finds the destination with id 1, stores it in @destination, and passes it on to the view app/views/destinations/edit.html.erb.
# In the view, form_for creates a form with the fields of the @destinations object.
# Then when you fill out the form and submit it, it triggers the second turn of the request/response cycle:

# The browser sends the data to the Rails app via an HTTP POST request to the URL /destinations/update.
# This time, the Rails router maps this URL to the update action.
# The update uses the destination_params method to safely collect data from the form. It finds the destination in the database, updates its attributes, and redirects to the destination's show page.

# ------------------------------------------------------------

# Generalizations
# Congratulations! You built an travel app that uses a database to store two kinds of data. What can we generalize so far?

# We connected a Tag to its Destinations using associations. In this case, a tag has_many destinations, and a destination belongs_to one tag.
# The has_many / belongs_to pair can be used to model other one-to-many relationships, which occur frequently.
# Rails provides seven standard controller actions can be used to do common things such as display and change data

# https://www.codecademy.com/articles/standard-controller-actions