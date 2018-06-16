#The Story So Far
#2 ways to create hash:

#hash literal notation:
p new_hash = { "one" => 1 }
# => "one" => 1 

#hash constructor notation
new_hash = Hash.new
new_hash["one"] = 1
p new_hash
# => "one" => 1 

------------------------------------------------------------
# Iterating Over Hashes

matz = { "First name" => "Yukihiro",
  "Last name" => "Matsumoto",
  "Age" => 47,
  "Nationality" => "Japanese",
  "Nickname" => "Matz"
}

matz.each {|key, value| puts matz[key]}

# => Yukihiro
# Matsumoto
# 47
# Japanese
# Matz

------------------------------------------------------------
#Nil: a Formal Introduction
#It's important to realize that false and nil are not the same thing: false means "not true," while nil is Ruby's way of saying "nothing at all."
creatures = { "weasels" => 0,
  "puppies" => 6,
  "platypuses" => 3,
  "canaries" => 1,
  "Heffalumps" => 7,
  "Tiggers" => 1
}

p creatures["cats"]
# => nil

------------------------------------------------------------
#Setting Your Own Default

#Set "trady brix as default value for keys"
no_nil_hash = Hash.new("Trady Blix") 

#So if call any key it will print Trady Blix
p no_nil_hash("anything")
# => "Trady Blix"

------------------------------------------------------------
#A Key of a Different Color
#We can certainly use strings as Ruby hash keys; as we've seen, there's always more than one way to do something in Ruby. However, the Rubyist's approach would be to use symbols.

menagerie = { :foxes => 2,
  :giraffe => 1,
  :weezards => 17,
  :elves => 1,
  :canaries => 4,
  :ham => 1
}

p menagerie

# => {:foxes=>2, :giraffe=>1, :weezards=>17, :elves=>1, :canaries=>4, :ham=>1}

------------------------------------------------------------
#What's a Symbol?

#Symbols aren't string
"string" == :string # false

#While there can be multiple different strings that all have the same value, there's only one copy of any particular symbol at a given time.

#The .object_id method gets the ID of an object—it's how Ruby knows whether two objects are the exact same object.
#the two "strings" are actually different 
puts "string".object_id
puts "string".object_id

#whereas the :symbol is the same object listed twice.
puts :symbol.object_id
puts :symbol.object_id

# => 9028300
# 9028020
# 802268
# 802268

------------------------------------------------------------
# Symbol Syntax

:my symbol # Don't do this!
:my_symbol # Do this instead.

p my_first_symbol = :symbol
# => :symbol 

------------------------------------------------------------
#What are Symbols Used For?
# Symbols pop up in a lot of places in Ruby, but they're primarily used either as hash keys or for referencing method names. (We'll see how symbols can reference methods in a later lesson.)
# Symbols make good hash keys for a few reasons:

#     1. They're immutable, meaning they can't be changed once they're created;
#     2. Only one copy of any symbol exists at a given time, so they save memory;
#     3. Symbol-as-keys are faster than strings-as-keys because of the above two reasons.

p symbol_hash = {
  :one => 1,
  :two => 2,    # Fill in these two blanks!
  :three => 3,
}
# => {:one=>1, :two=>2, :three=>3}

------------------------------------------------------------
#Converting Between Symbols and Strings
strings = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]

symbols = []

strings.each {|s| symbols.push(s.to_sym) }

print symbols
# =>[:HTML, :CSS, :JavaScript, :Python, :Ruby]

------------------------------------------------------------
#Many Paths to the Same Summit
#Besides using .to_sym, you can also use .intern. This will internalize the string into a symbol and works just like .to_sym:

strings = ["HTML", "CSS", "JavaScript", "Python", "Ruby"]

symbols = []

strings.each {|s| symbols.push(s.intern) }

print symbols
# =>[:HTML, :CSS, :JavaScript, :Python, :Ruby]

------------------------------------------------------------
#All Aboard the Hash Rocket!
#=> hash rocket
p movies = {
  :The_Breakfast_Club => "Relatable movie for all ages , definitely must watch",
  :Interstellar => "Mindfucking movie! if you're into deep sci-fi, you should watch this movie",
  }
# => {:The_Breakfast_Club=>"Relatable movie for all ages , definitely must watch", :Interstellar=>"Mindfucking movie! if you're into deep sci-fi, you should watch this movie"}

------------------------------------------------------------
#The Hash Rocket Has Landed
#The hash syntax changed in Ruby 1.9
p movies = {
  The_Breakfast_Club: "Relatable movie for all ages , definitely must watch",
  Interstellar: "Mindfucking movie! if you're into deep sci-fi, you should watch this movie",
  }
# => {:The_Breakfast_Club=>"Relatable movie for all ages , definitely must watch", :Interstellar=>"Mindfucking movie! if you're into deep sci-fi, you should watch this movie"}

------------------------------------------------------------
#Dare to Compare
#Comparing that symbols run faster than string! numbers don't lie!

#running benchmark
require 'benchmark'

#Create hash of key of a-z value of 1-26
#.zp Converts any arguments to arrays, then merges elements of self with corresponding elements from each argument.
string_AZ = Hash[("a".."z").to_a.zip((1..26).to_a)]
symbol_AZ = Hash[(:a..:z).to_a.zip((1..26).to_a)]

string_time = Benchmark.realtime do
  100_000.times { string_AZ["r"] }
end

symbol_time = Benchmark.realtime do
  100_000.times { symbol_AZ[:r] }
end

puts "String time: #{string_time} seconds."
puts "Symbol time: #{symbol_time} seconds."
# => String time: 0.008657366037368774 seconds.
# Symbol time: 0.005766286980360746 seconds.

------------------------------------------------------------
# Becoming More Selective
movie_ratings = {
  memento: 3,
  primer: 3.5,
  the_matrix: 5,
  truman_show: 4,
  red_dawn: 1.5,
  skyfall: 4,
  alex_cross: 2,
  uhf: 1,
  lion_king: 3.5
}

#Select movies with a rating of greater than 3
good_movies = movie_ratings.select { |key, rating| if rating > 3 then puts "#{key}: #{rating}" end}

# => primer: 3.5
# the_matrix: 5
# truman_show: 4
# skyfall: 4
# lion_king: 3.5

------------------------------------------------------------
#More Methods, More Solutions
movie_ratings = {
  memento: 3,
  primer: 3.5,
  the_matrix: 3,
  truman_show: 4,
  red_dawn: 1.5,
  skyfall: 4,
  alex_cross: 2,
  uhf: 1,
  lion_king: 3.5
}
movie_ratings.each_key {|key| puts key}
# => memento
# primer
# the_matrix
# truman_show
# red_dawn
# skyfall
# alex_cross
# uhf
# lion_king

movie_ratings.each_value {|value| puts value}
# 3
# 3.5
# 3
# 4
# 1.5
# 4
# 2
# 1
# 3.5

