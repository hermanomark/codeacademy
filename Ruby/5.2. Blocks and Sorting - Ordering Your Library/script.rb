#What You'll Be Building
#rev (for "reverse") that will default to false if the user doesn't type in two arguments. 
def alphabetize(arr, rev=false)
  if rev
    arr.sort { |item1, item2| item2 <=> item1 }
  else
    arr.sort { |item1, item2| item1 <=> item2 }
  end
end

books = ["Heart of Darkness", "Code Complete", "The Lorax", "The Prophet", "Absalom, Absalom!"]

puts "A-Z: #{alphabetize(books)}"
puts "Z-A: #{alphabetize(books, true)}"
puts "Z-A: #{alphabetize(books, false)}"

# => A-Z: ["Absalom, Absalom!", "Code Complete", "Heart of Darkness", "The Lorax", "The Prophet"]
# Z-A: ["The Prophet", "The Lorax", "Heart of Darkness", "Code Complete", "Absalom, Absalom!"]
# Z-A: ["Absalom, Absalom!", "Code Complete", "Heart of Darkness", "The Lorax", "The Prophet"]

------------------------------------------------------------
#My work

def alphabetize(arr, rev=false)
  arr.sort! 
  if rev
    arr.reverse!
  else
    return arr
  end
end

books = ["Heart of Darkness", "Code Complete", "The Lorax", "The Prophet", "Absalom, Absalom!"]

puts "A-Z: #{alphabetize(books)}"
puts "Z-A: #{alphabetize(books, true)}"
puts "Z-A: #{alphabetize(books, false)}"

# => A-Z: ["Absalom, Absalom!", "Code Complete", "Heart of Darkness", "The Lorax", "The Prophet"]
# Z-A: ["The Prophet", "The Lorax", "Heart of Darkness", "Code Complete", "Absalom, Absalom!"]
# Z-A: ["Absalom, Absalom!", "Code Complete", "Heart of Darkness", "The Lorax", "The Prophet"]