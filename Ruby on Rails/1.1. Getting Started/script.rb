# Hello Rails I
# Ruby on Rails is a web framework that makes it easy to build powerful web apps in a short amount of time.

# $ rails new MySite
# $ bundle install
# $ rails server
# View the Rails app in the browser by visiting http://localhost:8000.

# -----------------------------------------------------------

# Hello Rails II
# Nice work! In three commands, you built a working Rails app that displays the Rails default page. How does it work?

# 1. The rails new command created a new Rails app named MySite. It generated a number of files and folders that we will use to build the app. In the Code Editor, click on the folder icon to see these files and folders. We'll see what these files and folders are for in the next exercises. The rails new command is the starting point of every Rails project.

# 2. The bundle install command installed all the software packages needed by the new Rails app. These software packages are called gems and they are listed in the file Gemfile.

# 3. The rails server command started the Rails development server so that we could preview the app in the browser by visiting http://localhost:8000. This development server is called WEBrick.

# -----------------------------------------------------------

# Controller
# What happens when you visit http://localhost:8000 in the browser? Check out the diagram in the browser.

# Diagram: https://www.codecademy.com/articles/request-response-cycle-static

# 1. The browser makes a request for the URL http://localhost:8000.
# 2. The request hits the Rails router in config/routes.rb. The router recognizes the URL and sends the request to the controller.
# 3. The controller receives the request and processes it.
# 4. The controller passes the request to the view.
# 5. The view renders the page as HTML.
# 6. The controller sends the HTML back to the browser for you to see.
# 7. This is called the request/response cycle. It's a useful way to see how a Rails app's files and folders fit together.

# Looking at the request/response cycle, we need three parts to build a Rails app: a controller, a route, and a view. Let's start here by creating a controller.

# In the terminal, type:

# $ rails generate controller Pages

# After rails generate finishes running, in the Code Editor, open app/controllers/pages_controller.rb. Within the class PagesController, add a method home:

class PagesController < ApplicationController 

  def home
  end
end

# -----------------------------------------------------------
# Routes
# Great! We created a new controller named Pages. How did we do this?

# The rails generate controller Pages command generated a new controller named Pages. This created a file named app/controllers/pages_controller.rb.
# Inside the new Pages controller, we added a method called home. Methods in Rails controllers are also referred to as controller actions, so here we added the home action to the Pages controller.

# Now that we have a controller, let's move on to the second part of the request/response cycle and create a route.

# Open config/routes.rb and underneath line 1, type:

Rails.application.routes.draw do
  get 'welcome' => 'pages#home'
  # .....
end

# -----------------------------------------------------------
# Views
# Well done! Now when a user visits http://localhost:8000/welcome, the route

get 'welcome' => 'pages#home'
# will tell Rails to send this request to the Pages controller's home action.

# Now that we have a controller and a route, let's move on to the third part of the request/response cycle and create a view.

# Open app/views/pages/home.html.erb, and type in the following HTML. Fill in your own name.

# <div class="main">
#   <div class="container">
#     <h1>Hello my name is Mark Hermano</h1>
#     <p>I make Rails apps.</p>
#   </div>
# </div>

# We've provided CSS in the file app/assets/stylesheets/pages.css.scss

# View your app by visiting http://localhost:8000/welcome in the browser.

# -----------------------------------------------------------
# Generalizations
# Congratulations! You built a Rails app from scratch. What can we generalize so far?

# Using the request/response cycle as a guide, this has been our workflow when making a Rails app. (https://www.codecademy.com/articles/request-response-cycle-static)

# 1. Generate a new Rails app.
# 2. Generate a controller and add an action.
# 3. Create a route that maps a URL to the controller action.
# 4. Create a view with HTML and CSS.
# 5. Run the local web server and preview the app in the browser.