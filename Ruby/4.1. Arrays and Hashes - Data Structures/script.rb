# Creating Arrays
p my_array = [1,2,3,4,5]
# => [1,2,3,4,5]

-----------------------------------------------
#Access by Index
#         +---+---+---+---+---+
# array   | 5 | 7 | 9 | 2 | 0 |
#         +---+---+---+---+---+
# index     0   1   2   3   4

demo_array = [100, 200, 300, 400, 500]

print  demo_array[2]
#=> 300

-----------------------------------------------
#Arrays of Non-Numbers

p string_array = ["one", "two", "three", "four", "five"]
#=> ["one", "two", "three", "four", "five"]

-----------------------------------------------
#Arrays of Arrays
#Arrays of arrays are called multidimensional arrays, 
multi_d_array = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

multi_d_array.each { |x| puts "#{x}\n" }
# #=> [0, 0, 0, 0]

# [0, 0, 0, 0]

# [0, 0, 0, 0]

# [0, 0, 0, 0]

-----------------------------------------------
#Create Your Own
my_2d_array = [[1,2,3,4],[1,2,3,4],[1,2,3,4]]

my_2d_array.each do |item|
  puts item
end

# => [1, 2, 3, 4]
# [1, 2, 3, 4]
# [1, 2, 3, 4]


-----------------------------------------------
#Introduction to Hashes
#Syntax:
hash = {
  key1 => value1,
  key2 => value2,
  key3 => value3
}

#sample
my_hash = { "name" => "Eric",
  "age" => 26,
  "hungry?" => true
}

puts my_hash["name"]
puts my_hash["age"]
puts my_hash["hungry?"]
# => Eric
# 26
# true

-----------------------------------------------
# Using Hash.new
#Setting a variable equal to Hash.new creates a new, empty hash; it's the same as setting the variable equal to empty curly braces ({}).
pets = Hash.new

-----------------------------------------------
# Adding to a Hash
pets = Hash.new
pets["Arya"] = "cat"

-----------------------------------------------
# Accessing Hash Values
pets = Hash.new
pets["Arya"] = "cat"
puts pets
# => {"Arya"=>"cat"}

-----------------------------------------------
#(Re)Introduction to Iteration
friends = ["Milhouse", "Ralph", "Nelson", "Otto"]

family = { "Homer" => "dad",
  "Marge" => "mom",
  "Lisa" => "sister",
  "Maggie" => "sister",
  "Abe" => "grandpa",
  "Santa's Little Helper" => "dog"
}

friends.each { |x| puts "#{x}" }
family.each { |x, y| puts "#{x}: #{y}" }
# => Milhouse
# Ralph
# Nelson
# Otto
# Homer: dad
# Marge: mom
# Lisa: sister
# Maggie: sister
# Abe: grandpa
# Santa's Little Helper: dog

-----------------------------------------------
#Iterating Over Arrays
languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]

languages.each { |word| puts word }
# => HTML
# CSS
# JavaScript
# Python
# Ruby

-----------------------------------------------
# Iterating Over Multidimensional Arrays
s = [["ham", "swiss"], ["turkey", "cheddar"], ["roast beef", "gruyere"]]

s.each do |item| item.each 
  do |sub_array| puts sub_array end 
  end
#=> ham
# swiss
# turkey
# cheddar
# roast beef
# gruyere

#another way to make the syntax
s.each { |item| item.each 
  { |sub_array| puts sub_array } 
  }
#=> ham
# swiss
# turkey
# cheddar
# roast beef
# gruyere

-----------------------------------------------
#Iterating Over Hashes
secret_identities = {
  "The Batman" => "Bruce Wayne",
  "Superman" => "Clark Kent",
  "Wonder Woman" => "Diana Prince",
  "Freakazoid" => "Dexter Douglas"
}
  
secret_identities.each do |key, val| puts "#{key}: #{val}" end
# => The Batman: Bruce Wayne
# Superman: Clark Kent
# Wonder Woman: Diana Prince
# Freakazoid: Dexter Douglas

-----------------------------------------------
#Multidimensional Arrays review
p my_array = [["one", "two", "three"],
  ["four", "five", "six"],
  ["seven", "eight", "nine"]]

  # => [["one", "two", "three"], ["four", "five", "six"], ["seven", "eight", "nine"]]
  -----------------------------------------------
#Hashes review
p my_hash = {
  :mark => "hermano",
  :finn => "rothacker", 
  :kate => "reverente", 
  :arvin => "peralta",
  :monique => "manansala"
  }

my_hash = Hash.new
my_hash[:cd1] = "Coco"
my_hash[:cd2] = "Sing Street"
my_hash[:cd3] = "Snowden"
my_hash[:cd4] = "Leap!"
my_hash[:cd5] = "Your Name"
p my_hash
# => {:mark=>"hermano", :finn=>"rothacker", :kate=>"reverente", :arvin=>"peralta", :monique=>"manansala"}
# {:cd1=>"Coco", :cd2=>"Sing Street", :cd3=>"Snowden", :cd4=>"Leap!", :cd5=>"Your Name"}

 -----------------------------------------------
 #Iterating Over a Hash review
 lunch_order = {
  "Ryan" => "wonton soup",
  "Eric" => "hamburger",
  "Jimmy" => "sandwich",
  "Sasha" => "salad",
  "Cole" => "taco"
}

#Iterate through .each key/value pair in lunch_order. Please puts out the value of each pair (just the value, not the key).

lunch_order.each { |key, val| puts val }
# => wonton soup
# hamburger
# sandwich
# salad
# taco








