#Control Flow in Ruby

#If else statement
#Good practice to put 2 indention after if
print "Integer please: "
user_num = Integer(gets.chomp)

if user_num < 0
  puts "You picked a negative integer!"
elsif user_num > 0
  puts "You picked a positive integer!"
else
  puts "You picked zero!"
end

-------------------------------------------------
#if statement
mark = "mark"

if mark == "mark"
  print "I'am Mark"
else
  print "I'm not mark"
end

-------------------------------------------------
#else statement
mark = "jason"

if mark == "mark"
  print "I'am Mark"
else
  print "I'm not mark"
end

-------------------------------------------------
#elseif
name = "jason"

if name == "mark"
  print "I'am Mark"
elsif mark == "jason"
  print "I'am Jason"
else
  print "I'm not mark"
end

-------------------------------------------------
#unless
hungry = false

unless hungry
  puts "I'm writing Ruby programs!"
else
  puts "Time to eat!"
end

-------------------------------------------------
# In Ruby, we assign values to variables using =, the assignment operator
# we use ==, which is a comparator (also called a relational operator). == means "is equal to."
# You can also check to see if two values are not equal using the != comparator
is_true = 2 != 3

is_false = 2 == 3

-------------------------------------------------
#Less Than or Greater Than
#Greater than: >
#Less than: <
#Less than or equal to: <=
#Greater than or equal to: >=
test_1 = 17 > 16

test_2 = 21 < 30

test_3 = 9 <= 9

test_4 = -11 < 4

-------------------------------------------------
#Exercise!!
# test_1 = 77 != 77
test_1 = false

# test_2 = -4 <= -4
test_2 = true

# test_3 = -44 < -33
test_3 = true

# test_4 = 100 == 1000
test_4 = false

-------------------------------------------------
#And is a logical or boolean operator
true && true # => true
true && false # => false
false && true # => false
false && false # => false

#Exercise
# boolean_1 = 77 < 78 && 77 < 77
boolean_1 = false

# boolean_2 = true && 100 >= 100
boolean_2 = true

# boolean_3 = 2**3 == 8 && 3**2 == 9 #double asterisk ** means exponential
boolean_3 = true

-------------------------------------------------
#Or operator
true || true # => true
true || false # => true
false || true # => true
false || false # => false

#Exercise
# boolean_1 = 2**3 != 3**2 || true
boolean_1 = true

# boolean_2 = false || -10 > -9
boolean_2 = false

# boolean_3 = false || false
boolean_3 = false

-------------------------------------------------
#Not operator

!true # => false
!false # => true

# boolean_1 = !true
boolean_1 = false

# boolean_2 = !true && !true
boolean_2 = false

# boolean_3 = !(700 / 10 == 70)
boolean_3 = false

-------------------------------------------------
#Combining Boolean Operators
#sample
(x && (y || w)) && z

# boolean_1 = (3 < 4 || false) && (false || true)
boolean_1 = true

# boolean_2 = !true && (!true || 100 != 5**2)
boolean_2 = false

# boolean_3 = true || !(true || false)
boolean_3 = true

-------------------------------------------------
#Exercise if else statement

m = "mark"
f = "finn"
k = "kate"
mn = "monique"
a = "arvin"

human = mn

if human == m
  print "this is mark"
elsif human == f
  print "this is finn"
elsif human == k
  print "this is kate"
elsif human == mn
  print "this is monique"
elsif human == a
  print "this is arvin"
else
  "no human detected"
end

-------------------------------------------------
#Exercise unless

problem = false

unless problem
	print "Good to go!"
else
  print "Not good to go!"
end

-------------------------------------------------
#Date to compare Exercise

# test_1 should be false
test_1 = 5 == 1

# test_2 = should be false
test_2 = 1005 > 100000

# test_3 = should be true
test_3 = 9 != 100

-------------------------------------------------
#Billions of booleans

# test_1 should be true
test_1 = (5 != 6) && (4**2 == 16)

# test_2 = should be true
test_2 = (10005 < 999999) || false

# test_3 = should be false
test_3 = ((7+3)!=10) || !true
