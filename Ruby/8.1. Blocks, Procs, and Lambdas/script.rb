#You Know This!
#A Ruby block is just a bit of code that can be executed. Block syntax uses either do..end or curly braces ({}), like so:
[1, 2, 3].each do |num|
  puts num
end
# ==> Prints 1, 2, 3 on separate lines

[1, 2, 3].each { |num| puts num }
# ==> Prints 1, 2, 3 on separate lines

5.times { puts "I'm a block!" }
# => I'm a block!
# I'm a block!
# I'm a block!
# I'm a block!
# I'm a block!


------------------------------------------------------------
#Collect 'Em All
#The collect method takes a block and applies the expression in the block to every element in an array. Check it out:

fibs = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

# Add your code below!
doubled_fibs = fibs.collect { |num| num*2 }

puts doubled_fibs
puts fibs

#=> [2, 2, 4, 6, 10, 16, 26, 42, 68, 110]
# [1, 1, 2, 3, 5, 8, 13, 21, 34, 55

#.collect returns a copy of fibs, but doesn't change (or mutate) the original fibs array. If we want to do that, we can use .collect! with an exclamation point

fibs = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

# Add your code below!
doubled_fibs = fibs.collect! { |num| num*2 }

puts doubled_fibs
puts fibs

#=> [2, 2, 4, 6, 10, 16, 26, 42, 68, 110]
# [2, 2, 4, 6, 10, 16, 26, 42, 68, 110]

------------------------------------------------------------
#Learning to Yield
#Why do some methods accept a block and others don't? It's because methods that accept blocks have a way of transferring control from the calling method to the block and back again. We can build this into the methods we define by using the yield keyword.

def block_test
  puts "We're in the method!"
  puts "Yielding to the block..."
  yield
  puts "We're back in the method!"
end

block_test { puts ">>> We're in the block!" }
# => We're in the method!
# Yielding to the block...
# >>> We're in the block!
# We're back in the method!

------------------------------------------------------------
#Yielding With Parameters

def yield_name(name)
  puts "In the method! Let's yield."
  yield("Kim")
  puts "In between the yields!"
  yield(name)
  puts "Block complete! Back in the method."
end

yield_name("Eric") { |n| puts "My name is #{n}." }

# Now call the method with your name!
yield_name("Mark") { |n| puts "My name is #{n}." }

# => In the method! Let's yield.
# My name is Kim.
# In between the yields!
# My name is Eric.
# Block complete! Back in the method.
# In the method! Let's yield.
# My name is Kim.
# In between the yields!
# My name is Mark.
# Block complete! Back in the method.

------------------------------------------------------------
#Try It Yourself!
#Define your own method, double, that accepts a single parameter and yields to a block. Then call it with a block that multiplies the number parameter by 2. You can double any number you like!
#puts the result in order to see your yield in action!

def double(n)
  yield(n)
end

double(10) {|num| puts num*2 }
#=> 20

------------------------------------------------------------
#Keeping Your Code DRY
#Remember when we told you that everything is an object in Ruby? Well, we sort of fibbed. Blocks are not objects, and this is one of the very few exceptions to the "everything is an object" rule in Ruby.
#Because of this, blocks can't be saved to variables and don't have all the powers and abilities of a real object. For that, we'll need... procs!
#You can think of a proc as a "saved" block: just like you can give a bit of code a name and turn it into a method, you can name a block and turn it into a proc. Procs are great for keeping your code DRY, which stands for Don't Repeat Yourself. With blocks, you have to write your code out each time you need it; with a proc, you write your code once and can use it many times!
multiples_of_3 = Proc.new do |n|
  n % 3 == 0
end

print (1..100).to_a.select(&multiples_of_3)

#=> [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99]

------------------------------------------------------------
#Proc Syntax
#Procs are easy to define! You just call Proc.new
cube = Proc.new { |x| x ** 3 }

[1, 2, 3].collect!(&cube)
# ==> [1, 8, 27]
[4, 5, 6].map!(&cube)
# ==> [64, 125, 216]

# (The .collect! and .map! methods do the exact same thing.)
# The & is used to convert the cube proc into a block (since .collect! and .map! normally take a block). We'll do this any time we pass a proc to a method that expects a block.

#Sample:
floats = [1.2, 3.45, 0.91, 7.727, 11.42, 482.911]
# Write your code below this line!
round_down = Proc.new { |n| n.floor } #he .floor method rounds a float (a number with a decimal) down to the nearest integer.


# Write your code above this line!
ints = floats.collect(&round_down)
print ints

------------------------------------------------------------
#Why Procs?
#Why bother saving our blocks as procs? There are two main advantages:
    # Procs are full-fledged objects, so they have all the powers and abilities of objects. (Blocks do not.)
    # Unlike blocks, procs can be called over and over without rewriting them. This prevents you from having to retype the contents of your block every time you need to execute a particular bit of code.

#Sample:
# Here at the amusement park, you have to be four feet tall
# or taller to ride the roller coaster. Let's use .select on
# each group to get only the ones four feet tall or taller.

group_1 = [4.1, 5.5, 3.2, 3.3, 6.1, 3.9, 4.7]
group_2 = [7.0, 3.8, 6.2, 6.1, 4.4, 4.9, 3.0]
group_3 = [5.5, 5.1, 3.9, 4.3, 4.9, 3.2, 3.2]

# Complete this as a new Proc
over_4_feet = Proc.new {|height| height >= 4 }

# Change these three so that they use your new over_4_feet Proc
can_ride_1 = group_1.select(&over_4_feet) 
can_ride_2 = group_2.select(&over_4_feet)
can_ride_3 = group_3.select(&over_4_feet)

puts can_ride_1
puts can_ride_2
puts can_ride_3

# [4.1, 5.5, 6.1, 4.7]
# [7.0, 6.2, 6.1, 4.4, 4.9]
# [5.5, 5.1, 4.3, 4.9]

------------------------------------------------------------
#Create Your Own!
def greeter
  yield
end

phrase = Proc.new {puts "Hello there!"}

greeter(&phrase)

# => Hello there!

------------------------------------------------------------
#Call Me Maybe
#Unlike blocks, we can call procs directly by using Ruby's .call method. Check it out!
hi = Proc.new { puts "Hello!" }

hi.call

#=> Hello!

------------------------------------------------------------
#Symbols, Meet Procs

strings = ["1", "2", "3"]
nums = strings.map(&:to_i)
# ==> [1, 2, 3]

#More sample:
numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

strings_array =

puts strings_array?
# => ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

------------------------------------------------------------
#The Ruby Lambda
# Like procs, lambdas are objects. The similarities don't stop there: with the exception of a bit of syntax and a few behavioral quirks, lambdas are identical to procs.

# Check out the code in the editor. See the lambda bit? Typing

var = lambda { puts "Hello!" }
var.call
#=Hello!

# Is just about the same as

var = Proc.new { puts "Hello!" }
var.call
#=Hello!

# In the example to the below, when we pass the lambda to lambda_demo, the method calls the lambda and executes its code
def lambda_demo(a_lambda)
  puts "I'm the method!"
  a_lambda.call
end

lambda_demo(lambda { puts "I'm the lambda!" })

------------------------------------------------------------
#Lambda Syntax
lambda { |param| block }

strings = ["leonardo", "donatello", "raphael", "michaelangelo"]

symbolize = lambda { |num| num.to_sym }

symbols = strings.collect(&symbolize)
print symbols

#=> [:leonardo, :donatello, :raphael, :michaelangelo]

------------------------------------------------------------
# Lambdas vs. Procs
# If you're thinking that procs and lambdas look super similar, that's because they are! There are only two main differences.
# First, a lambda checks the number of arguments passed to it, while a proc does not. This means that a lambda will throw an error if you pass it the wrong number of arguments, whereas a proc will ignore unexpected arguments and assign nil to any that are missing.
# Second, when a lambda returns, it passes control back to the calling method; when a proc returns, it does so immediately, without going back to the calling method.
# To see how this works, take a look at the code in the editor. Our first method calls a proc; the second calls a lambda.

def batman_ironman_proc
  victor = Proc.new { return "Batman will win!" }
  victor.call
  "Iron Man will win!"
end

puts batman_ironman_proc

def batman_ironman_lambda
  victor = lambda { return "Batman will win!" }
  victor.call
  "Iron Man will win!"
end

puts batman_ironman_lambda

#=> Batman will win!
#=> Iron Man will win!

------------------------------------------------------------
#Now You Try!
my_array = ["raindrops", :kettles, "whiskers", :mittens, :packages]

# Add your code below!
symbol_filter = lambda { |param| param.is_a? Symbol }

symbols = my_array.select(&symbol_filter)

puts symbols

# [:kettles, :mittens, :packages]

------------------------------------------------------------
#Quick Review
# All this talk of blocks, procs, and lambdas might have your head spinning. Let's take a minute to clarify exactly what each one is:

# 1. A block is just a bit of code between do..end or {}. It's not an object on its own, but it can be passed to methods like .each or .select.
# 2. A proc is a saved block we can use over and over.
# 3. A lambda is just like a proc, only it cares about the number of arguments it gets and it returns to its calling method rather than returning immediately.

# There are obviously lots of cases in which blocks, procs, and lambdas can do similar work, but the exact circumstances of your program will help you decide which one you want to use.

------------------------------------------------------------
# Been Around the Block a Few Times

odds_n_ends = [:weezard, 42, "Trady Blix", 3, true, 19, 12.345]

# Add your code below!
ints = odds_n_ends.select { |params| params.is_a? Integer }

puts ints

# => [42, 3, 19]

------------------------------------------------------------
# Creating a Proc
ages = [23, 101, 7, 104, 11, 94, 100, 121, 101, 70, 44]

# Add your code below!
under_100 = Proc.new { |num| num < 100 }

# This is good, continuation is in next exercise

------------------------------------------------------------
# Passing Your Proc to a Method

ages = [23, 101, 7, 104, 11, 94, 100, 121, 101, 70, 44]

# Add your code below!
under_100 = Proc.new { |num| num < 100 }

youngsters = ages.select(&under_100)

puts youngsters

#=> [23, 7, 11, 94, 70, 44]
------------------------------------------------------------
#Creating a Lambda

crew = {
  captain: "Picard",
  first_officer: "Riker",
  lt_cdr: "Data",
  lt: "Worf",
  ensign: "Ro",
  counselor: "Troi",
  chief_engineer: "LaForge",
  doctor: "Crusher"
}
# Add your code below!
first_half = lambda { |key, value| value < "M" }


# This is good, continuation is in next exercise

------------------------------------------------------------
#Passing Your Lambda to a Method

crew = {
  captain: "Picard",
  first_officer: "Riker",
  lt_cdr: "Data",
  lt: "Worf",
  ensign: "Ro",
  counselor: "Troi",
  chief_engineer: "LaForge",
  doctor: "Crusher"
}
# Add your code below!
first_half = lambda { |key, value| value < "M" }

a_to_m = crew.select(&first_half)

puts a_to_m 

#{:lt_cdr=>"Data", :chief_engineer=>"LaForge", :doctor=>"Crusher"}
