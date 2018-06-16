#Daffy Duckify a user's string, replacing each "s" with "th".
print "Thtring, pleathe!: "
user_input = gets.chomp
user_input.downcase!

#if character s is included in the string it print th
if user_input.include? "s"
  user_input.gsub!(/s/, "th")
else
  puts "Nothing to do here!"
end

#display the output string
puts "Your string is: #{user_input}"

-------------------------------------------------
#Improved project:
#If user input empty string it should re-prompt the user
print "Thtring, pleathe!: "
user_input = gets.chomp
user_input.downcase!

if user_input.include? "s"
user_input.gsub!(/s/, "th")
  puts "Adios #{user_input}"
else
  puts "No name starting with 'S'!"
end

while user_input == ""
  print "Thring is empty, enter again!: "
user_input = gets.chomp
user_input.downcase!

  if  user_input.include? "s"
  user_input.gsub!(/s/, "th") 
    puts "Adios #{user_input}"

  else
     puts "Still not a name with 'S'. Try again!"

  end 
end
