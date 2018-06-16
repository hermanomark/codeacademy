#The 'While' Loop
counter = 1
while counter < 11
  puts counter
  counter = counter + 1
end
# =>
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
-------------------------------------------------
#Danger: Infinite Loops!
i = 0
while i < 5
  puts i
  i += 1
end
# =>
# 1
# 2
# 3
# 4

-------------------------------------------------
#The 'Until' Loop - backward of while loop
counter = 1
until counter > 10
  puts counter
  counter += 1
end
# =>
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10

-------------------------------------------------
#More Assignment Operators
#instead of counter = counter + 1, shortcut is +=, -=, *=, and /=
counter = 1
while counter < 11
  puts counter
  counter += 1
end
# =>
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10

-------------------------------------------------
#The 'For' Loop
for num in 1...10
  puts num
end
# =>
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10


-------------------------------------------------
#Inclusive and Exclusive Ranges
#.. prints all, ... exclude the last number
for num in 1..15
  puts num
end
# =>
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
# 11
# 12
# 13
# 14
# 15

for num in 1...15
  puts num
end
# =>
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
# 11
# 12
# 13
# 14

-------------------------------------------------
#The Loop Method
#{ } is the same with do end
i = 20
loop {
  i -= 1
  print "#{i} "
  break if i <= 0
}
#=> 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 

i = 20
loop do
  i -= 1
  print "#{i} "
  break if i <= 0
end
#=> 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 

-------------------------------------------------
#Next!
#The next keyword can be used to skip over certain steps in the loop. For instance, if we don't want to print out the even numbers, we can write:
for i in 1..5
  next if i % 2 == 0
  print "#{i} "
end
# =>1 3 5

i = 20
loop do
  i -= 1
  next if i % 2 == 1
  print "#{i} "
  break if i <= 0
end
# => 18 16 14 12 10 8 6 4 2 0 

-------------------------------------------------
#Saving Multiple Values
p my_array = [1, 2, 3, 4, 5]
# => [1, 2, 3, 4, 5]

-------------------------------------------------
# The .each Iterator
array = [1,2,3,4,5]

array.each do |x|
  x += 10
  print "#{x} "
end
# inside | | can be anything you like it should look like a placeholder
# => 11 12 13 14 15 

-------------------------------------------------
#Try It Out!
odds = [1,3,5,7,9]

odds.each do | item |
  product = item * 2
  print "#{product} "
end
# => 2 6 10 14 18 

-------------------------------------------------
#The .times Iterator
5.times { print "Chunky bacon! "}
# => Chunky bacon! Chunky bacon! Chunky bacon! Chunky bacon! Chunky bacon!

-------------------------------------------------
# Looping with 'While'
i = 3
while i > 0 do
  print "#{i} "
  i -= 1
end
# => 3 2 1

i = 1
while i <= 50 do
  print "#{i} "
  i += 1
end
# => 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 

-------------------------------------------------
#Looping with 'Until'
i = 1
until i == 51 do
   print "#{i} "
  i += 1
end
# =>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50

-------------------------------------------------
#Looping with 'For'
for i in 1..50
  print "#{i} "
end
# =>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50

-------------------------------------------------
#Loop the Loop with Loop
i = 0
loop do
  i += 1
  print "Ruby!"
  break if i == 30 
end
# => Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!

-------------------------------------------------
#Iterating with .times
30.times { print "Ruby!" }
# => Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!Ruby!




