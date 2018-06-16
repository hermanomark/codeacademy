print "What's your first name?" #prompting the user
first_name = gets.chomp #getting input from the user, store to a variable
first_name2 = first_name.capitalize #capitalize the first letter
first_name.capitalize! #we dont assign capitalize to a variable use ! at the end of capitalize this will modify the value

print "What's your last name?"
last_name = gets.chomp
last_name2 = last_name.capitalize
last_name.capitalize!

print "What's city you live in?"
city = gets.chomp
city2 = city.capitalize
city.capitalize!

print "What's state?"
state = gets.chomp
state2 = state.upcase
state.upcase!

print "#{first_name} #{last_name} #{city} #{state}"


#revisited the exercise, refractored the code to a better one
print "What's your first name? "
first_name = gets.chomp.capitalize! #this would work without the exclamation mark but code academy accepts this

print "What's your last name? "
last_name = gets.chomp.capitalize!

print "What city are you from? "
city = gets.chomp.capitalize!

print "What state or province are you from? "
state = gets.chomp.upcase!

puts "Your name is #{first_name} #{last_name} and you're from #{city}, #{state}!"
