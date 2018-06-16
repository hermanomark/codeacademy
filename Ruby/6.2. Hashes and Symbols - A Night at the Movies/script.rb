#What You'll Be Building
movies = {
  Memento: 3,
  Primer: 4,
  Ishtar: 1
}

puts "What would you like to do?"
puts "-- Type 'add' to add a movie."
puts "-- Type 'update' to update a movie."
puts "-- Type 'display' to display all movies."
puts "-- Type 'delete' to delete a movie."

choice = gets.chomp.downcase
case choice
when 'add'
  puts "What movie do you want to add?"
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts "What's the rating? (Type a number 0 to 4.)"
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
    puts "#{title} has been added with a rating of #{rating}."
  else
    puts "That movie already exists! Its rating is #{movies[title.to_sym]}."
  end
when 'update'
  puts "What movie do you want to update?"
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts "Movie not found!"
  else
    puts "What's the new rating? (Type a number 0 to 4.)"
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
    puts "#{title} has been updated with new rating of #{rating}."
  end
when 'display'
  movies.each do |movie, rating|
    puts "#{movie}: #{rating}"
  end
when 'delete'
  puts "What movie do you want to delete?"
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts "Movie not found!"
  else
    movies.delete(title.to_sym)
    puts "#{title} has been removed."
  end
else
  puts "Sorry, I didn't understand you."
end

------------------------------------------------------------
# Case statement sample:
language = "Ruby"

case language
  when "JS"
    puts "Websites!"
  when "Python"
    puts "Science!"
  when "Ruby"
    puts "Web apps!"
  else
    puts "I don't know!"
end

#=> Web apps!

------------------------------------------------------------
#My work!
movies = { deadpool: 4, ironman: 3, spiderman: 3, avangers: 4, thor: 3, doctor_strange: 4 }

puts "What is your choice? "

choice = gets.chomp

case choice
  when "add"
    puts "Input a title you wish to add"
    title = gets.chomp
    if movies[title.to_sym].nil?
      puts "Input a rating for that movie"
      rating = gets.chomp
      movies[title.to_sym] = rating.to_i
      puts "#{title} has been added with rating of #{rating}"
    else
      puts "Movie already exist"
    end
    puts "List of movies: "
    movies.each {|key, value| puts "#{key}: #{value}"}
  when "update"
    puts "Input a title you wish to update"
    title = gets.chomp
    if movies[title.to_sym].nil?
      puts "Movie does not exist"
    else
      puts "Please input a new  rating"
      rating = gets.chomp
      movies[title.to_sym] = rating.to_i
      puts "#{title} has been updated with rating of #{rating}"
    end
    puts "List of movies: "
    movies.each {|key, value| puts "#{key}: #{value}"}
  when "display"
    puts "List of movies: "
    movies.each {|movie, rating| puts "#{movie}: #{rating}"}
  when "delete"
    puts "Input a movie to be deleted "
    title = gets.chomp
    if movies[title.to_sym].nil?
      puts "There's nothing to be deleted"
    else
      movies.delete(title.to_sym)
      puts "#{title} has been deleted"
    end
    puts "List of movies: "
    movies.each {|movie, rating| puts "#{movie}: #{rating}"}
  else
    puts "Error!"
end



