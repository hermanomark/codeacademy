#Redacted!
puts "Input a text:"
text = gets.chomp.downcase
puts "Input a text to be redacted:"
redact = gets.chomp.downcase
puts "Input a text to be redacted:"
redact2 = gets.chomp.downcase

 words = text.split(" ")

words.each do |word|
  if word == redact || word == redact2
    print "REDACTED "
  else
    print word + " "
  end
end

# =>
# Input a text:
# mark jason hermano
# Input a text to be redacted:
# mark
# Input a text to be redacted:
# hermano
# REDACTED jason REDACTED

-----------------------------------------------
#Improved project
#What could you do to make sure your redactor redacts a word regardless of whether it's upper case or lower case?
#How could you make your program take multiple, separate words to REDACT?
#How might you make a new redacted string and save it as a variable, rather than just printing it to the console?

#Asks the user for text
puts "Enter text"
text = gets.chomp
text.downcase!

#Word to redact number 1
puts "Enter word to remove"
redact_1 = gets.chomp
redact_1.downcase!

#Word to redact number 2
puts "Enter a new word to remove"
redact_2 = gets.chomp
redact_2.downcase!

words = text.split(" ")

#Create a new string which is empty
new_word = ""

#Add x or REDACTED to the string new_word
words.each do |x|
    if x == redact_1 || x == redact_2
        new_word << "REDACTED "
    else
        new_word << x + " "
    end
end

#Puts the new_word to check if it works
puts new_word
