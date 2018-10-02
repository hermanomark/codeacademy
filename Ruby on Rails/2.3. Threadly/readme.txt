Not yet done!

Threadly
Threadly wants to create a Rails app for their commenting service. Here's what it looks like (https://threadly-rails.herokuapp.com/). When a user types a comment into the box and clicks the Post button, the comment is saved into a database.

Using the request/response cycle (https://www.codecademy.com/articles/request-response-cycle-forms) as a guide, here's what we need to do for the Threadly app:

In the first turn of the request/response cycle, the list of all posts is displayed to the user.
When a user posts a comment, it triggers the second turn of the request/response cycle, where a new post is added to the database.
To preview your app at any point:

In the terminal, type rails s -p 4001
In the browser, visit http://localhost:4001
Tasks
0/15Complete
Mark the tasks as complete by checking them off
Setup
1.
Create a new Rails app named threadly.

2.
After you create the new app, switch to its folder. In the terminal, type:

cd threadly
3.
Install the gems in Gemfile.

4.
In the root directory of the project, we've provided the base HTML and CSS, files for this project. Look at the bottom of your file navigator to locate them. Let's put their contents in the correct place in your project.

In your Rails project, create app/views/posts/index.html.erb and copy and paste the contents of the root index.html into that file.

Then, similarly, create app/assets/stylesheets/posts.css and copy the contents of the root threadly.css into it.

Add a model
5.
Generate a model named Post.

6.
Open the migration file in db/migrate/, and add a string column called comment.

7.
Run a migration to update the database with the Post model.

Add a controller and routes
8.
Generate a controller named Posts.

9.
In the routes file, add the resource route resources :posts.

10.
Run the rake routes command in the terminal to view all of the new URLs that the resource route maps to the Posts controller's seven standard actions (https://www.codecademy.com/articles/standard-controller-actions). Resize the terminal component to see the routes.

Looking back at the request/response cycle, we need a controller action to handle GET requests and another controller action to handle POST requests. According to the output of rake routes, we can use:

posts#index to handle GET requests by displaying all comments.
posts#create to handle POST requests by saving a new post to the database.
Add controller actions and views
11.
Set up the posts#index controller action to handle GET requests:

In the Posts controller, make an action named index:

def index
@new_post = Post.new
@all_posts = Post.order(created_at: :desc).all
end
We'll use @new_post in the view to render a form. We'll use @all_posts to render a list of all posts, sorted in descending order.

In app/views/posts/index.html, create a Rails form with the fields of the @new_post object to post comments.

Replace the hardcoded<ul> element by using @all_posts:
<ul class="comments">
  <% @all_posts.each do |p| %>
    <li><%= p.comment %></li>
  <% end %>
</ul>
Here we loop through each element in @all_posts and display it in an <li> element.

In the routes file, set the index action as the root route.

Start a Rails server to preview the app in the browser. In the terminal, type: rails s -p 4001.

This command starts a Rails server listening on port 4001. Then visit http://localhost:4001 to see your app in the browser.

12.
Set up the posts#create controller action to handle POST requests:

In the Posts controller, write a private method named post_params. Require the model name post and permit the column name comment.

In the Posts controller, make an action named create. Use post_params to create a new Post object. After saving to the database, redirect to root_path.

Restart the Rails server and view the result by visiting http://localhost:4001/. Type in an email address and submit the form. To restart a Rails server, in the terminal, first press Ctrl+C to shut down the server. Then type rails server to restart it.

Check the database
13.
Check that your comment saved to the database using the Rails console.

Open a new terminal tab by clicking the icon.
Navigate to your threadly folder using cd.
Then start the Rails console and retrieve all comments in the database using Post.all. Your comment should show up in the results.
14.
Add more comments through the form, and use the Rails console to check that they saved to the database.

15.
Click here for a video walkthrough from our experts to help you check your work!

https://www.youtube.com/watch?v=Xv-lZboA8BQ