
# Why Classes?
# Ruby is an object-oriented programming language, which means it manipulates programming constructs called objects. (Almost) everything in Ruby is an object! You've been using them all along, so they should be very familiar. Objects have methods, which you've seen before, and attributes, which are just data. For instance, in

"Matz".length
# ==> 4

# the "Matz" object is a string with a .length method and a length attribute of 4. We'll learn how to build our own objects with their own methods and internal variables in the next few exercises.
# But what exactly makes "Matz" a string? The fact that it's an instance of the String class. A class is just a way of organizing and producing objects with similar attributes and methods.

# Check out the code below. We've defined our own class, Language, and created ruby, python, and javascript instances. Run the code to see how they work!

# Move on when you're ready to get started creating classes and objects of your own.

class Language
  def initialize(name, creator)
    @name = name
    @creator = creator
  end
  
  def description
    puts "I'm #{@name} and I was created by #{@creator}!"
  end
end

ruby = Language.new("Ruby", "Yukihiro Matsumoto")
python = Language.new("Python", "Guido van Rossum")
javascript = Language.new("JavaScript", "Brendan Eich")

ruby.description
python.description
javascript.description

# => I'm Ruby and I was created by Yukihiro Matsumoto!
# I'm Python and I was created by Guido van Rossum!
# I'm JavaScript and I was created by Brendan Eich!

------------------------------------------------------------
# Class Syntax

# A basic class consists only of the class keyword and the name of the class. Check it out:

class NewClass
  # Class magic here
end

# Our NewClass has the ability to create new Ruby objects of class NewClass (just like "Hello!" is a String and 4 is a Fixnum). By convention, class names start with a capital letter and use CamelCase instead of relying_on_underscores.

#sample:

class Person

end

------------------------------------------------------------
#Classing It Up
# You may have noticed in our example back in the first exercise that we started our class definition off with a method called initialize. You can think of initialize as the function that "boots up" each object the class creates.

class Person
  def initialize
  end
end

------------------------------------------------------------
# What's in a @name?
# All right! Just one more step before we can create a person from our Person class: we have to make sure each person has a @name.

# In Ruby, we use @ before a variable to signify that it's an instance variable. This means that the variable is attached to the instance of the class. 

class Car
  def initialize(make, model) 
    @make = make
    @model = model
  end
end

kitt = Car.new("Pontiac", "Trans Am")

# The code in the example above creates an instance, kitt, of the class Car. kitt has his own @make ("Pontiac") and @model ("Trans Am"). Those variables belong to the kitt instance, which is why they're called instance variables.

# We'll cover other kinds of variables (like those attached to entire classes!) in the next few exercises

# sample: 
class Person
  def initialize(name)
    @name = name
  end
end

------------------------------------------------------------
#Instantiating Your First Object
class Person
  def initialize(name)
    @name = name
  end
end

matz = Person.new("Yukihiro")

------------------------------------------------------------
#Scope it Out
# Another important aspect of Ruby classes is scope. The scope of a variable is the context in which it's visible to the program.

# It may surprise you to learn that not all variables are accessible to all parts of a Ruby program at all times. When dealing with classes, you can have variables that are available everywhere (global variables), ones that are only available inside certain methods (local variables), others that are members of a certain class (class variables), and variables that are only available to particular instances of a class (instance variables).

# The same goes for methods: some are available everywhere, some are only available to members of a certain class, and some are only available to particular instance objects.

# Check out the code in the editor. See how some variables start with $, @, or @@? This helps mark them as global, instance, and class variables (respectively). We'll explain these in the next section. Run the code to see how these different variables work!

class Computer
  $manufacturer = "Mango Computer, Inc."
  @@files = {hello: "Hello, world!"}
  
  def initialize(username, password)
    @username = username
    @password = password
  end
  
  def current_user
    @username
  end
  
  def self.display_files
    @@files
  end
end

# Make a new Computer instance:
hal = Computer.new("Dave", 12345)

puts "Current user: #{hal.current_user}"
# @username belongs to the hal instance.

puts "Manufacturer: #{$manufacturer}"
# $manufacturer is global! We can get it directly.

puts "Files: #{Computer.display_files}"
# @@files belongs to the Computer class.

Current user: Dave
Manufacturer: Mango Computer, Inc.
Files: {:hello=>"Hello, world!"}

------------------------------------------------------------
# Naming Your Variables
# Recall that instance variables begin with an @. This isn't just a Ruby convention—it's part of the syntax! Always start your instance variables with @.

# Class variables are like instance variables, but instead of belonging to an instance of a class, they belong to the class itself. Class variables always start with two @s, like so: @@files.

# Global variables can be declared in two ways. The first is one that's already familiar to you: you just define the variable outside of any method or class, and voilà! It's global. If you want to make a variable global from inside a method or class, just start it with a $, like so: $matz.

# We'll go through instance and class variables in more detail in a moment. First, let's do a quick review of local and global scope
#sample, make the variable global.
class MyClass
  $my_variable = "Hello!"
end


puts $my_variable

# => Hello!

------------------------------------------------------------
#For Instance...
# Good! A caveat, though: global variables can be changed from anywhere in your program, and they are generally not a very good idea. It's much better to create variables with limited scope that can only be changed from a few places!

# For example, instance variables belong to a particular object (or "instance"). Let's get in some practice with instance variables! We've added our Person class from before to the editor.
class Person
  def initialize(name, age, profession)
    @name = name
    @age = age
    @profession = profession
  end
end

------------------------------------------------------------
# Twice the @, Twice as Classy
# We can create class variables by starting a variable name with two @ symbols. Class variables are attached to entire classes, not just instances of classes, like so:
class MyClass
  @@class_variable
end

# Because there's only one copy of a class variable shared by all instances of a class, we can use them to pull off some cool Ruby tricks. For example, we can use a class variable to keep track of the number of instances of that class we've created. Let's do that now!

#sample:
class Person
  # Set your class variable to 0 on line 3
  @@people_count = 0
  
  def initialize(name)
    @name = name
    # Increment your class variable on line 8
    @@people_count += 1
  end
  
  def self.number_of_instances
    # Return your class variable on line 13
    @@people_count
  end
end

matz = Person.new("Yukihiro")
dhh = Person.new("David")

puts "Number of Person instances: #{Person.number_of_instances}"

#=> Number of Person instances: 2

------------------------------------------------------------

# Classes Are Serious Business

# Classes like Language and Person are great when you are starting to learn the concepts of classes and instances.

# However, classes and objects are often used to model real-world objects. The code in the editor is a more realistic demonstration of the kind of classes and objects you might find in commercial software. Here we have a snippet of the Rails source code. See how they've created an instance of the RecordInvalid class?

# Most of the syntax should look familiar to you; the raise bit (which we'll cover in future lessons) generates a new RecordInvalid error if the user tries to create or save an invalid record.

# Click Run to continue!

def create_record(attributes, raise_error = false)
  record = build_record(attributes)
  yield(record) if block_given?
  saved = record.save
  set_new_record(record)
  raise RecordInvalid.new(record) if !saved && raise_error
  record
end

------------------------------------------------------------
#Watch Your Step
# Inheritance is a tricky concept, so let's go through it step by step.

# Inheritance is the process by which one class takes on the attributes and methods of another, and it's used to express an is-a relationship. For example, a cartoon fox is a cartoon mammal, so a CartoonFox class could inherit from a CartoonMammal class.

# However, a Wizard is not an Elf, so it shouldn't inherit from the Elf class (even if they have a lot of magical attributes and methods in common). Instead, both Wizard and Elf could ultimately inherit from the same MagicalBeing class.

# Check out the code in the editor. We've defined a class, ApplicationError, as well as a SuperBadError class that inherits from ApplicationError. Note that we don't define the display_error method in the body of SuperBadError, but it will still have access to that method via inheritance. Click Run to see for yourself!

class ApplicationError
  def display_error
    puts "Error! Error!"
  end
end

class SuperBadError < ApplicationError
end

err = SuperBadError.new
err.display_error

# => Error! Error!

------------------------------------------------------------
# Inheritance Syntax
# The derived class is the new class you're making and the base class is the class from which that new class inherits. You can read "<" as "inherits from.

class Application
  def initialize(name)
    @name = name
  end
end

class MyApp < Application
  #Some stuff
end

------------------------------------------------------------
# Override!
# Sometimes you'll want one class that inherits from another to not only take on the methods and attributes of its parent, but to override one or more of them.

# For instance, you might have an Email class that inherits from Message. Both classes might have a send method that sends them, but the e-mail version may have to identify valid e-mail addresses and use a bunch of e-mail protocols that Message knows nothing about. Rather than add a send_email method to your derived class and inherit a send method you'll never use, you can instead just explicitly create a send method in the Email class and have it do all the email-sending work.

# This new version of send will override (that is, replace) the inherited version for any object that is an instance of Email.

#sample:
class Creature
  def initialize(name)
    @name = name
  end
  
  def fight
    return puts "Punch to the chops!"
  end
end

# Add your code below!
class Dragon < Creature
  def fight
    return puts "Breathes fire!"
  end
end

drogon = Dragon.new("drogon")
viserion = Creature.new("viserion")

drogon.fight
viserion.fight

# => Breathes fire!
# Punch to the chops!

------------------------------------------------------------
#When Good isn't Good Enough
# On the flip side, sometimes you'll be working with a derived class (or subclass) and realize that you've overwritten a method or attribute defined in that class' base class (also called a parent or superclass) that you actually need. Have no fear! You can directly access the attributes or methods of a superclass with Ruby's built-in super keyword.

# The syntax looks like this:
class DerivedClass < Base
  def some_method
    super(optional args)
      # Some stuff
    end
  end
end
# When you call super from inside a method, that tells Ruby to look in the superclass of the current class and find a method with the same name as the one from which super is called. If it finds it, Ruby will use the superclass' version of the method.

class Creature
  def initialize(name)
    @name = name
  end
  
  def fight
    return puts "Punch to the chops!"
  end
end

# Add your code below!
class Dragon < Creature
  def fight
    puts "Instead of breathing fire..."
    super
  end
end

drogon = Dragon.new("drogon")
drogon.fight
# =>Instead of breathing fire...
# Punch to the chops!

viserion = Creature.new("viserion")
viserion.fight
# =>Punch to the chops!

------------------------------------------------------------
# There Can Be Only One!

# Any given Ruby class can have only one superclass. Some languages allow a class to have more than one parent, which is a model called multiple inheritance. This can get really ugly really fast, which is why Ruby disallows it.

# However, there are instances where you want to incorporate data or behavior from several classes into a single class, and Ruby allows this through the use of mixins. We'll learn about mixins in a later lesson! For now, we'll demonstrate what happens if you try to do multiple inheritance in Ruby.

# The demo code we're about to show you includes a fancy trick: if you want to end a Ruby statement without going to a new line, you can just type a semicolon. This means you can write something like
class Monkey
end
#on just one line: class Monkey; end. This is a time saver when you're writing something very short, like an empty class or method definition.

# Check out the code in the editor. See how we're trying to get Dragon to inherit from Creature and Person? We'll get a superclass mismatch for class Dragon error if we try this. Run the code to see for yourself! 

class Creature
  def initialize(name)
    @name = name
  end
end

class Person
  def initialize(name)
    @name = name
  end
end

class Dragon < Creature; end
class Dragon < Person; end # this one will cause the error because of multiple inheritance

# superclass mismatch for class Dragon

------------------------------------------------------------
#Class Basics
class Message
  def initialize(from, to)
    @from = from
    @to = to
  end
end

------------------------------------------------------------
# Getting Classier

class Message
  @@messages_sent = 0
  
  def initialize(from, to)
    @from = from
    @to = to
    
    @@messages_sent += 1
  end
end

------------------------------------------------------------
#Forge an Object in the Fires of Mount Ruby
class Message
  @@messages_sent = 0
  
  def initialize(from, to)
    @from = from
    @to = to
    
    @@messages_sent += 1
  end
  
end

p my_message = Message.new("mark", "joan")

# #<Context::Message:0x00000001fe8e58 @from="mark", @to="joan">

------------------------------------------------------------
# Inheriting a Fortune

class Message
  @@messages_sent = 0
  
  def initialize(from, to)
    @from = from
    @to = to
    
    @@messages_sent += 1
  end
  
end

class Email < Message 
  def initialize(subject)
    @subject = subject
  end
end

p my_message = Message.new("mark", "joan")
p my_message = Email.new("mark")

#<Context::Message:0x00000001e52eb8 @from="mark", @to="joan">
#<Context::Email:0x00000001e52bc0 @subject="mark">

------------------------------------------------------------
# Up, Up, and Away!
# You're a champion! Our last topic: Ruby's super keyword. (We've decided we liked Message's initialize method after all.)
class Message
  @@messages_sent = 0
  
  def initialize(from, to)
    @from = from
    @to = to
    
    @@messages_sent += 1
  end
  
end

class Email < Message 
  def initialize(from, to)
    super
  end
end

p my_message = Message.new("mark", "joan")
p my_message = Email.new("mark", "joan")

#<Context::Message:0x00000001e50488 @from="mark", @to="joan">
#<Context::Email:0x00000001e50168 @from="mark", @to="joan">

