#Ruby is a Delight
#As a language, Ruby prioritizes programmer productivity over program optimization. This means that Ruby may not always run a program in the fastest way possible, but it strives to be a language that programmers (like you!) find easy and fun to use.
ruby_is_eloquent = true
ruby_is_ugly = false

puts "Ruby is eloquent!" if ruby_is_eloquent
puts "Ruby's not ugly!" unless ruby_is_ugly
# =>
# Ruby is eloquent!
# Ruby's not ugly!

------------------------------------------------------------
#A Simpler 'If'
puts "It's true" if true

#= > It's true

#not like this
if true puts "It's true!" #this will output syntax error

------------------------------------------------------------
# The One-Line Unless
puts "One-Line Unless" unless false

#=> One-Line Unless

------------------------------------------------------------
#One Good Turn Deserves a Ternary
#An even more concise version of if/else is the ternary conditional expression. It's called "ternary" because it takes three arguments: a boolean, an expression to evaluate if the boolean is true, and an expression to evaluate if the boolean is false.
puts true ? "True!" : "False!" #ternary conditional expression
#=> "True!"

#The same as
if true
  puts "True!"
else
  puts "False!"
end
#=> "True!"

#another sample
puts 3 < 4 ? "3 is less than 4!" : "3 is not less than 4."
#=> 3 is less than 4!
------------------------------------------------------------
#When and Then: The Case Statement
#Syntax looks like this:
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
#But you can fold it like this:
case language
  when "JS" then puts "Websites!"
  when "Python" then puts "Science!"
  when "Ruby" then puts "Web apps!"
  else puts "I don't know!"
end

#My code
puts "Hello there!"
greeting = gets.chomp

# Add your case statement below!
case greeting
  when "English" then puts "Hello!"
  when "French" then puts "Bonjour"
  when "German" then puts "Guten Tag!"
  when "Fnnish" then puts "Haloo!"
  else puts "I don't know that language"
end
#=> Hello there
# English
# Hello!

------------------------------------------------------------
#Conditional Assignment
#||=. It's made up of the or (||) logical operator and the normal = assignment operator.
favorite_book = nil
puts favorite_book

favorite_book ||= "Cat's Cradle"
puts favorite_book

favorite_book ||= "Why's (Poignant) Guide to Ruby"
puts favorite_book

favorite_book = "Why's (Poignant) Guide to Ruby"
puts favorite_book
# #=> 
# Cat's Cradle
# Cat's Cradle
# Why's (Poignant) Guide to Ruby

# Run the code in the editor. Here's what's happening:

#     1. favorite_book is set to nil, which is Ruby for "nothing." When you try to puts it to the screen, you get exactly that: nothing!
#     2. Now our variable is conditionally set to "Cat's Cradle." Since the value of the variable was nothing before, Ruby goes ahead and sets it, so you see "Cat's Cradle" printed out.
#     3. We try conditional assignment again, this time with "Why's (Poignant) Guide to Ruby." But wait! Our variable already has a value, "Cat's Cradle," so it stays set to that value and that's what we see printed out.
#     4. Finally, we use regular old assignment to tell Ruby to reset favorite_book to "Why's (Poignant) Guide to Ruby," which it gladly does.

------------------------------------------------------------
#Now You Try!
favorite_language ||= "PHP"
puts favorite_language
#=> PHP
# Your favorite language isn't Ruby?? For shame! - I see what you did there code academy

------------------------------------------------------------
#Implicit Return
#Ruby's methods will return the result of the last evaluated expression.
def add(a,b)
  return a + b
end

def add(a,b)
  a + b
end
# The two methods works the same w/ or w/o the return
# More sample:
def multiple_of_three(n)
  n % 3 == 0 ? "True" : "False"
end

puts multiple_of_three(5)
#=> "False"

------------------------------------------------------------
#Short-Circuit Evaluation
def a
  puts "A was evaluated!"
  return true
end

def b
  puts "B was also evaluated!"
  return true
end

puts a || b
puts "------"
puts a && b
# => 
# A was evaluated!
# true
# ------
# A was evaluated!
# B was also evaluated!
# true

#On my own understanding, puts a || b - A was evaluated because it returns true which means it stops reading because logical OR return true as soon it encounters true, puts a && b - A and B was evaluated because in logical AND both should be true before it returns true.

------------------------------------------------------------
#The Right Tool for the Job

my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

my_array.each {|arr| if arr.even?
                      then puts arr
                     end }
# => 2
# 4
# 6
# 8
# 10

#One liner if
my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

my_array.each {|arr| puts arr if arr.even? }
# => 2
# 4
# 6
# 8
# 10

------------------------------------------------------------
#Up the Down Staircase
#If we know the range of numbers we'd like to include, we can use .upto and .downto. This is a much more Rubyist solution than trying to use a for loop that stops when a counter variable hits a certain value.
95.upto(100) { |num| print num, " " }
# => 95 96 97 98 99 100
100.downto(80) { |num| print num, " " }
# 100 99 98 97 96 95 94 93 92 91 90 89 88 87 86 85 84 83 82 81 80

#Alphabet
"L".upto("P") { |letter| puts letter }
# => 
# L
# M
# N
# O
# P
"P".downto("L") { |letter| puts letter }
#=> undefined method downto, doesn't work with downto

------------------------------------------------------------
#Call and Response
p [1, 2, 3].respond_to?(:push)
#=> would return true, since you can call .push on an array object.
p [1, 2, 3].respond_to?(:to_sym)
#=> would return false, since you can't turn an array into a symbol.

age = 26
p age.respond_to?(:next)
#=> true

#to confirm
puts age.next
#=> 27

------------------------------------------------------------
#Being Pushy
#Instead of typing out the .push method name, you can simply use <<, the concatenation operator (also known as "the shovel")
alphabet = ["a", "b", "c"]
puts alphabet << "d"
# => ["a", "b", "c", "d"]

caption = "A giraffe surrounded by "
puts caption << "weezards!"
# => A giraffe surrounded by weezards!

------------------------------------------------------------
#String Interpolation
drink = "espresso"
"I love " + drink
# ==> I love espresso
"I love " << drink
# ==> I love espresso
age = 26
"I am " + age.to_s + " years old."
# ==> "I am 26 years old."
"I am " << age.to_s << " years old."
# ==> "I am 26 years old."
#Better way to do it, with string interpolation:
drink = "espresso"
"I love #{drink}."
# ==> I love espresso.
age = 26
"I am #{age} years old."
# ==> I am 26 years old.

#Sample:
favorite_things = ["Ruby", "espresso", "candy"]

puts "A few of my favorite things:"

favorite_things.each do |thing|
  puts "I love #{thing}!"
end

------------------------------------------------------------
#One-Liners
#Test your one liner skills
#Before:
if 1 < 2
  puts "One is less than two!"
end
#After:
  puts "One is less than two!" if 1 < 2
#=> One is less than two!

------------------------------------------------------------
#The Ternary Operator
#Test your skills
#Before:
if 1 < 2
  puts "One is less than two!"
else
  puts "One is not less than two."
end
#After:
puts 1 < 2 ? "One is less than two!" : "One is not less than two"
#=> One is less than two!

------------------------------------------------------------
#In Case of Many Options
#a chain of if/elsif/else statements can clean up really nicely, too!
#Before:
puts "What's your favorite language?"
language = gets.chomp

if language == "Ruby"
  puts "Ruby is great for web apps!"
elsif language == "Python"
  puts "Python is great for science."
elsif language == "JavaScript"
  puts "JavaScript makes websites awesome."
elsif language == "HTML"
  puts "HTML is what websites are made of!"
elsif language == "CSS"
  puts "CSS makes websites pretty."
else
  puts "I don't know that language!"
end
#After:
puts "What's your favorite language?"
language = gets.chomp

case language
  when "Ruby" then puts "Ruby is great for web apps!"
  when "Python" then puts "Python is great for science."
  when "Javascript" then puts "Javascript makes websites awesome"
  when "HTML" then puts "HTML is what websites are made of!"
  when "CSS" then puts "CSS makes websites pretty."
  else puts "I don't know that language!"
end

------------------------------------------------------------
#Conditional Assignment
puts favorite_animal ||= "cat"
# => cat

------------------------------------------------------------
#Implicit Return
def square(number)
  number*number
end

p square(12)
# => 144

------------------------------------------------------------
#'For' Shame!
#Before:
for i in (1..3)
  puts "I'm a refactoring master!"
end
#After:
3.times { puts "I'm a refactoring master!" }
# => 
# I'm a refactoring master!
# I'm a refactoring master!
# I'm a refactoring master!