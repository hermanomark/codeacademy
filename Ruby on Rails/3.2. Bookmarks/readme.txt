Not yet done!

Bookmarks
Bookmarks wants a Rails app for their best-seller list. Here's what it looks like (https://bookmarks-rails-2633.herokuapp.com/books). Books are listed by rank on the main page. Clicking on a book takes users to a page where they can read editorial reviews.

To preview your app at any point:

In the terminal, type rails s -p 4001
In the browser, visit http://localhost:4001
Tasks
0/19Complete
Mark the tasks as complete by checking them off
Setup
1.
Create a new Rails app named bookmarks.

2.
After you create the new app, switch to its folder. In the terminal, type:

$ cd bookmarks
3.
Install the gems in the Gemfile.

4.
In the root directory of the project, we've provided the base HTML and CSS, files for this project. Look at the bottom of your file navigator to locate them. Let's put their contents in the correct place in your project.

In your Rails project, create app/views/books/index.html.erb and copy and paste the contents of the root index.html into that file. Create app/views/books/show.html.erb and copy and paste the contents of the root show.html into that file.

Then, similarly, create app/assets/stylesheets/books.css and copy the contents of the root bookmarks.css into it.

5.
Open app/views/layouts/application.html.erb and add the following lines immediately following the <title> tag.

<link rel="stylesheet" href="http://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css">
<link href='http://fonts.googleapis.com/css?family=Domine' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Merriweather:300italic,300' rel='stylesheet' type='text/css'>
Add models and associations
6.
Generate a model named Book.

7.
Generate a model named Review.

8.
Associate the Book model with the Review model using the has_many and belongs_to methods:

Open up app/models/book.rb and add the has_many method.
Open up app/models/review.rb and add the belongs_to method.
9.
Open the migration file in db/migrate/ for the books table, and add the following columns:

a string column called title
a string column called author
a string column called description
a string column called publisher
an integer column called weeks_on_list
an integer column called rank_this_week
10.
Open the migration file in db/migrate/ for the reviews table, and add the following columns:

a string column called author
a string column called comment
a references column to the Book model
The references column is needed because the Review model has a belongs_to association with the Book model.

11.
Run a migration to update the database with the Book model and Review model.

12.
We've prepared a few items here (https://s3.amazonaws.com/codecademy-content/projects/3/bookmarks/seeds.rb.html) to seed the database with books and reviews. Copy these items and paste them into your db/seeds.rb.

Then in db/seeds.rb:

Create two more Book records. Feel free to use your favorite books.
Create Review records associated with each book.
13.
Run rake db:seed to seed the database with the data in db/seeds.rb.

Add a controller and routes
14.
Generate a controller named Books.

15.
In the routes file, add the resource route for the Books controller.

16.
Run the rake routes command in the terminal to view all of the new URLs that the resource route created.

We need an action to display a list of all books, and another action to display a specific book. Looking at the Rails' seven standard controller actions (https://www.codecademy.com/articles/standard-controller-actions), we can use books#index and books#show.

Add controller actions and views
17.
Set up the books#index controller action:

In the Books controller, make an action named index that retrieves all books from the database, and saves it into a variable named @books.
Check out the view index.html.erb inside the app/views/books directory. We use

<% @books.each do |book| %>
to loop through each element in @books. Finish the view to display a book's details.

In the routes file, set the index action as the root route. View the result by running your project.

Start a Rails server to preview the app in the browser. In the terminal, type: rails s -p 4001 This command starts a Rails server listening on port 4001. Then visit http://localhost:4001 to see your app in the browser.

18.
Set up the books#show controller action:

In the Books controller, make an action named show:

def show
  @book = Book.find(params[:id])
  @reviews = @book.reviews
end
First we retrieve a single book, and save it in @book. Then we retrieve all of its reviews, and save them in @reviews. The has_many / belongs_to association lets us query for reviews like this.

Finish the view app/views/books/show.html.erb. First display a book's details again. Then inside the loop, display each review.

Restart the Rails server and view the result by visiting http://localhost:4001/. Click on a book's "See all Editorial Reviews" link to see its reviews. To restart a Rails server, in the terminal, first press Ctrl+C to shut down the server. Then type rails server to restart it.

19.
Click here for a video walkthrough from our experts to help you check your work!

https://www.youtube.com/watch?v=jUFC-_9fTJ0