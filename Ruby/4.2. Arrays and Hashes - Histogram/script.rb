#Histogram
#What You'll Be Building
puts "Text please: "
text = gets.chomp

words = text.split(" ")
frequencies = Hash.new(0)
words.each { |word| frequencies[word] += 1 }
frequencies = frequencies.sort_by {|a, b| b }
frequencies.reverse!
frequencies.each { |word, frequency| puts word + " " + frequency.to_s }
# => Text Please:
# mark mark mark jason jason hermano
# mark 3
# jason 2
# hermano 1

------------------------------------------------------------
#My work
puts "Input a text: "
text = gets.chomp

words = text.split

frequencies = Hash.new(0)


words.each {|item| frequencies[item] += 1}

frequencies = frequencies.sort_by {|item, count | count }
frequencies.reverse!

frequencies.each do |item, count| puts item + " " + count.to_s end
# => Input a text: 
# mark mark mark jason jason hermano
# mark 3
# jason 2
# hermano 1
-------------------------------------------------------------
#My work version 2
puts "Please input: "

text = gets.chomp

words = text.split

frequencies = Hash.new(0)

words.each {|x| frequencies[x] += 1 }

frequencies = frequencies.sort_by { |word, count| count }

frequencies.reverse!

frequencies.each { |word,count| puts "#{word} #{count}" }
