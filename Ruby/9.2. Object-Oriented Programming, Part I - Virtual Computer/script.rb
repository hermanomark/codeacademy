# What You'll Be Building
# Now that you've learned all about classes and objects in Ruby, you can create any kind of Ruby object your heart desires. In this project, we'll use our newfound knowledge to create a class, Machine, and generate instances of that class that can manipulate imaginary files for us.
class Machine
  @@users = {}
  
  def initialize(username, password)
    @username = username
    @password = password
    @@users[username] = password
    @files = {}
  end
  
  def create(filename)
    time = Time.now
    @files[filename] = time
    puts "#{filename} was created by #{@username} at #{time}."
  end
  
  def Machine.get_users
    @@users
  end
end

my_machine = Machine.new("eric", 01234)
your_machine = Machine.new("you", 56789)

my_machine.create("groceries.txt")
your_machine.create("todo.txt")

puts "Users: #{Machine.get_users}"

# groceries.txt was created by eric at 2018-06-03 15:56:22 +0000.
# todo.txt was created by you at 2018-06-03 15:56:22 +0000.
# Users: {"eric"=>668, "you"=>56789}

-----------------------------------------------------------
#Mywork

class Computer
  @@users = {}
  
  def initialize(username, password)
    @@users[username] = password
    #@@users hash keeps usernames as keys with each username's password as the associated value.
    
    @username = username
    @password = password
    
    @files = {}
  end
  
  def create(filename)
    time = Time.now #Time.now is the current time
    
    @files[filename] = time
    
    puts "A new file was created filename: #{filename}, username: #{@username}, time: #{time}"
  end
  
  def Computer.get_users
    @@users
  end
end

my_computer = Computer.new("hermanomark", 123456)

my_computer.create("journal.txt")

puts "Users: #{Computer.get_users}"

# => A new file was created filename: journal.txt, username: hermanomark, time: 2018-06-03 15:55:50 +0000
# Users: {"hermanomark"=>123456}

