#Why Methods?
# A method is a reusable section of code written to perform a specific task in a program.
def prime(n)
  puts "That's not an integer." unless n.is_a? Integer
  is_prime = true
  for i in 2..n-1
    if n % i == 0
      is_prime = false
    end
  end
  if is_prime
    puts "#{n} is prime!"
  else
    puts "#{n} is not prime."
  end
end

prime(2)
prime(9)
prime(11)
prime(51)
prime(97)
# => 2 is prime!
# 9 is not prime.
# 11 is prime!
# 51 is not prime.
# 97 is prime!

------------------------------------------------------------
#Methods syntax
#def short for define
#1. The header, which includes the def keyword, the name of the method, and any arguments the method takes. 
#2. The body, which is the code block that describes the procedures the method carries out.
#3. The method ends with the end keyword
def puts_1_to_10
  (1..10).each { |i| puts i }
end

puts_1_to_10 # Ignore this for now. We'll explain it soon!
# =>1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10

------------------------------------------------------------
#Create Your Own
# Define your method below!
def greeting
  puts "Good morning"
end

# Define your method above this line.

greeting # Ignore this for now. We'll explain
         # it in the next exercise!

------------------------------------------------------------
#Call It!
def array_of_10
  puts (1..10).to_a #converting it to array
end

array_of_10 #calling a method
# => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

------------------------------------------------------------
#Parameters and Arguements
def cubertino(n) #parameter is the name you put between the method's parentheses when you define it.
 puts n ** 3
end

cubertino(8) #The argument is the piece of code you actually put between the method's parentheses when you call it
# => 512

------------------------------------------------------------
#Splat!
 # splat arguments. Splat arguments are arguments preceded by a *, which tells the program that the method can receive one or more arguments. 
def what_up(greeting, *friends) 
  friends.each { |friend| puts "#{greeting}, #{friend}!" }
end

what_up("What up", "Ian", "Zoe", "Zenas", "Eleanor")
# => What up, Ian
# What up, Zoe
# What up, Zenas
# WHat up, Eleanor

------------------------------------------------------------
# Let's Learn Return
#Sometimes we don't just want a method to print something to the console, but we actually want that method to hand us (or another method!) back a value. For that, we use return.
def double(n)
  return n * 2
end

output = double(6)
output += 2
puts output
# => 14

def add(num1, num2)
  return num1 + num2
end

puts add(2,2)
puts add(67, 78)
# => 4
# 145

------------------------------------------------------------
# Practice Makes Perfect
def greeter(name)
  return "Welcome " + name
end

p greeter("mark")

def by_three?(number)
  if number % 3 == 0
     return true
   else
    return false
  end
end

p by_three?(9)
p by_three?(10)
p by_three?(3)
# => "Welcome mark"
# true
# false
# true

------------------------------------------------------------
#Blocks Are Like Nameless Methods
#Blocks can be defined with either the keywords do and end or with curly braces ({}).
1.times do
  puts "I'm a code block!"
end

1.times { puts "As am I!" }
# => I'm a code block!
# As am I!

------------------------------------------------------------
# How Blocks Differ from Methods
# method that capitalizes a word
def capitalize(string) 
  puts "#{string[0].upcase}#{string[1..-1]}"
end

capitalize("ryan") # prints "Ryan"
capitalize("jane") # prints "Jane"

# block that capitalizes each string in the array
["ryan", "jane"].each {|string| puts "#{string[0].upcase}#{string[1..-1]}"} # prints "Ryan", then "Jane"

# =>Ryan
# Jane
# Ryan
# Jane

------------------------------------------------------------
#Using Code Blocks
# abstracting -  Imagine if when you wanted to house hunt, you had to say, "Honey, let's go look at configurations of concrete, plywood, and vinyl siding." That'd be crazy! Just like saying "house" simplifies listing its components
# The block, {|i| puts i}, is passed the current
# array item each time it is evaluated. This block
# prints the item. 
[1, 2, 3, 4, 5].each { |i| puts i }

# This block prints the number 5 for each item.
# (It chooses to ignore the passed item, which is allowed.)
[1, 2, 3, 4, 5].each { |i| puts 5 * i }

# => 1
# 2
# 3
# 4
# 5
# 5
# 10
# 15
# 20
# 25

------------------------------------------------------------
# Introduction to Sorting
my_array = [3, 4, 8, 7, 1, 6, 5, 9, 2].sort!

# Call the sort! method on my_array below.
# my_array should then equal [1, 2, 3, 4, 5, 6, 7, 8, 9].

puts my_array

# => [1, 2, 3, 4, 5, 6, 7, 8, 9]

------------------------------------------------------------
#Foundations
# library sorting code
books = ["Charlie and the Chocolate Factory", "War and Peace", "Utopia", "A Brief History of Time", "A Wrinkle in Time"].sort!

# How might we sort! the books in alphabetical order? (Hint, hint)

puts books
# => ["A Brief History of Time", "A Wrinkle in Time", "Charlie and the Chocolate Factory", "Utopia", "War and Peace"]

------------------------------------------------------------
#The Combined Comparison Operator
# The combined comparison operator looks like this: <=>. It returns 0 if the first operand (item to be compared) equals the second, 1 if the first operand is greater than the second, and -1 if the first operand is less than the second.
# Alphabetically, last is greater than first
book_1 = "A Wrinkle in Time"

book_2 = "A Brief History of Time"

p book_1 <=> book_2

a = "abc"

b = "xyz"  

p a <=> b

# => 1
# -1

------------------------------------------------------------
#Getting Technical
books = ["Charlie and the Chocolate Factory", "War and Peace", "Utopia", "A Brief History of Time", "A Wrinkle in Time"]

# To sort our books in ascending order, in-place
p books.sort! { |firstBook, secondBook| firstBook <=> secondBook }

# Sort your books in descending order, in-place below
p books.sort! { |firstBook, secondBook| secondBook <=> firstBook  }

# => ["A Brief History of Time", "A Wrinkle in Time", "Charlie and the Chocolate Factory", "Utopia", "War and Peace"]
# ["War and Peace", "Utopia", "Charlie and the Chocolate Factory", "A Wrinkle in Time", "A Brief History of Time"]

------------------------------------------------------------
# Basic Methods review
def welcome
  return "Welcome to Ruby!"
end

puts welcome
# => Welcome to Ruby!

------------------------------------------------------------
# Methods With Arguments review
def welcome(name)
  return "Hello, #{name}"
end

p welcome("Mark")
# => "Hello, Mark"

------------------------------------------------------------
# Blocks review
numbers = [5, 2, 8]
sum = 0
numbers.each do |n|
  sum += n
end
puts sum
# => 15

my_array = [1, 2, 3, 4, 5]

my_array.each {|item| puts item * item }
# => 1
# 4
# 9
# 16
# 25

------------------------------------------------------------
#Sorting review
fruits = ["orange", "apple", "banana", "pear", "grapes"]

#Solution 1, simplest code
p fruits.sort.reverse 

#Solution 2
fruits.sort! do |fruit1, fruit2| fruit2 <=> fruit1  end

p fruits

#Solution 3
def bubble_sort(sample)
  for i in (0..sample.length)
    for j in (i..sample.length - 1).reverse_each
      if sample[i] < sample[j]
        sample[i], sample[j] = sample[j], sample[i]
      end
    end
  end
  return sample
end

p bubble_sort(fruits)

# => ["pear", "orange", "grapes", "banana", "apple"]
# ["pear", "orange", "grapes", "banana", "apple"]
# ["pear", "orange", "grapes", "banana", "apple"]


