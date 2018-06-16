# #Need-to-Know Basis

# #You might be wondering why we need to hide information in Ruby. Isn't it okay for every part of your Ruby program to know what every other part is doing?

# Possibly, if you're the only one writing and using your software. But when other people are working on or using your programs, they may attempt to muck around with the way different parts of your program do their jobs. You don't want that!

# For this reason, Ruby allows you to explicitly make some methods public and others private. Public methods allow for an interface with the rest of the program; they say, "Hey! Ask me if you need to know something about my class or its instances."

# Private methods, on the other hand, are for your classes to do their own work undisturbed. They don't want anyone asking them anything, so they make themselves unreachable!

#Difference between public and private:
class Person
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  public    # This method can be called from outside the class.
  
  def about_me
    puts "I'm #{@name} and I'm #{@age} years old!"
  end
  
  private   # This method can't!
  
  def bank_account_number
    @account_number = 12345
    puts "My bank account number is #{@account_number}."
  end
end

eric = Person.new("Eric", 26)
eric.about_me
eric.bank_account_number

# => I'm Eric and I'm 26 years old!
# private method `bank_account_number' called for #<Context::Person:0x0000000154c698 @name="Eric", @age=26> 

-----------------------------------------------------------
#Quick Review: Building a Class
class Dog
  def initialize(name, breed)
    @name = name
    @breed = breed
  end
end

-----------------------------------------------------------
#Going Public
# Going Public

# Great work! Now we'll get into the details of public and private methods.

# Methods are public by default in Ruby, so if you don't specify public or private, your methods will be public. In this case, however, we want to make it clear to people reading our code which methods are public. We do this by putting public before our method definitions, like so:
class Dog
  def initialize(name, breed)
    @name = name
    @breed = breed
  end
  
  public
  def bark
    puts "Woof!"
  end
end

-----------------------------------------------------------
#Private! Keep Out!
#private methods are just that: they're private to the object where they are defined. This means you can only call these methods from other code inside the object. Another way to say this is that the method cannot be called with an explicit receiver. You've been using receivers all along—these are the objects on which methods are called! Whenever you call object.method, object is the receiver of the method

#Sample:
class Dog
  def initialize(name, breed)
    @name = name
    @breed = breed
  end
  
  public
  def bark
    puts "Woof!"
  end
  
  private
  def id
    @id_number = 12345
  end
end

-----------------------------------------------------------
# attr_reader, attr_writer
#sample:

#before:
class Person
  def initialize(name, job)
    @name = name
    @job = job
  end
  
  def name
    @name
  end
  
  def job=(new_job)
    @job = new_job
  end
end

# after:
class Person
  def initialize(name, job)
    @name = name
    @job = job
  end
  
  attr_reader :name
  
  attr_writer :job
end 

-----------------------------------------------------------
# attr_accessor
# short for attr_reader and attr_writer
#sample

#before:
class Person
  attr_reader :name
  attr_reader :job
  attr_writer :job

  
  def initialize(name, job)
    @name = name
    @job = job
  end
end

#after:
class Person
  attr_reader :name
  attr_accessor :job

  def initialize(name, job)
    @name = name
    @job = job
  end
end


-----------------------------------------------------------
#What's a Module?
# You can think of a module as a toolbox that contains a set methods and constants. There are lots and lots of Ruby tools you might want to use, but it would clutter the interpreter to keep them around all the time. For that reason, we keep a bunch of them in modules and only pull in those module toolboxes when we need the constants and methods inside!

# You can think of modules as being very much like classes, only modules can't create instances and can't have subclasses. They're just used to store things!

# Check out our example module in the editor. See how it has an approximation of pi stored in PI and a series of methods for calculating the circumference and area of a circle?

module Circle

  PI = 3.141592653589793
  
  def Circle.area(radius)
    PI * radius**2
  end
  
  def Circle.circumference(radius)
    2 * PI * radius
  end
end

-----------------------------------------------------------
# Module Syntax
# Like class names, module names are written in CapitalizedCamelCase, rather than lowercase_with_underscores.

# It doesn't make sense to include variables in modules, since variables (by definition) change (or vary). Constants, however, are supposed to always stay the same, so including helpful constants in modules is a great idea.

# Ruby doesn't make you keep the same value for a constant once it's initialized, but it will warn you if you try to change it. Ruby constants are written in ALL_CAPS and are separated with underscores if there's more than one word
module MyLibrary
  FAVE_BOOK = "Five People You Meet in Heaven"
end

puts MyLibrary::FAVE_BOOK # to test after I learned namespacing

# => "Five People You Meet in Heave" 

-----------------------------------------------------------
# Resolve to Keep Learning
# One of the main purposes of modules is to separate methods and constants into named spaces. This is called (conveniently enough) namespacing, and it's how Ruby doesn't confuse Math::PI and Circle::PI.
# See that double colon we just used? That's called the scope resolution operator, which is a fancy way of saying it tells Ruby where you're looking for a specific bit of code. If we say Math::PI, Ruby knows to look inside the Math module to get that PI, not any other PI (such as the one we created in Circle).

#sample: 
puts Math::PI
=> 3.141592653589793

-----------------------------------------------------------
# A Few Requirements
# Some modules, like Math, are already present in the interpreter. Others need to be explicitly brought in, however, and we can do this using require.

#sample:
require 'date'

puts Date.today

# => 2018-06-04

-----------------------------------------------------------
#Feeling Included
# We can do more than just require a module, however. We can also include it!

# Any class that includes a certain module can use those module's methods!

# A nice effect of this is that you no longer have to prepend your constants and methods with the module name. Since everything has been pulled in, you can simply write PI instead of Math::PI.

#sample:
class Angle
  include Math 
  attr_accessor :radians
  
  def initialize(radians)
    @radians = radians
  end
  
  def cosine
    cos(@radians) #cos wouldn't work w/o the include Math
  end
end

acute = Angle.new(1)
puts acute.cosine

# => 0.5403023058681398


-----------------------------------------------------------
# The Marriage of Modules and Classes
# What we did in the last exercise might not have seemed strange to you, but think about it: we mixed together the behaviors of a class and a module!

# When a module is used to mix additional behavior and information into a class, it's called a mixin. Mixins allow us to customize a class without having to rewrite code!

# Check out the code in the editor. See how we define the jump method in the Action module, then mix it into the Rabbit and Cricket classes? Click Run to see the effect!
module Action
  def jump
    @distance = rand(4) + 2
    puts "I jumped forward #{@distance} feet!"
  end
end

class Rabbit
  include Action
  attr_reader :name
  def initialize(name)
    @name = name
  end
end

class Cricket
  include Action
  attr_reader :name
  def initialize(name)
    @name = name
  end
end

peter = Rabbit.new("Peter")
jiminy = Cricket.new("Jiminy")

peter.jump
jiminy.jump

# => I jumped forward 5 feet!
# I jumped forward 2 feet!

-----------------------------------------------------------
# Imitating Multiple Inheritance
# Mixins:

module MartialArts
  def swordsman
    puts "I'm a swordsman"
  end
end

class Ninja
  include MartialArts
  def initialize(clan)
    @clan = clan
  end
end

class Samurai
  include MartialArts
  def initialize(shogun)
    @shogun = shogun
  end
end

-----------------------------------------------------------
# Extend Your Knowledge
# Whereas include mixes a module's methods in at the instance level (allowing instances of a particular class to use the methods), the extend keyword mixes a module's methods at the class level. This means that class itself can use the methods, as opposed to instances of the class.

# Check out the code in the editor. We've extended TheHereAnd with ThePresent, allowing it to use the now method. Click Run to see the effect!

# ThePresent has a .now method that we'll extend to TheHereAnd

module ThePresent
  def now
    puts "It's #{Time.new.hour > 12 ? Time.new.hour - 12 : Time.new.hour}:#{Time.new.min} #{Time.new.hour > 12 ? 'PM' : 'AM'} (GMT)."
  end
end

class TheHereAnd
  extend ThePresent
end

TheHereAnd.now

# => It's 3:56 PM (GMT).


-----------------------------------------------------------
# A Matter of Public Knowledge
# practice with public
class Application
  attr_accessor :status
  def initialize; end
  # Add your method here!
  public
  def print_status
    puts "All systems go!"
  end
  
end

-----------------------------------------------------------
# Private Affairs
#practice for private
class Application
  attr_accessor :status
  def initialize; end
  # Add your method here!
  public
  def print_status
    puts "All systems go!"
  end
  
  private
  def password
    12345
  end
  
end

-----------------------------------------------------------
# Module Magic
#practice for module
# Create your module below!
module Languages 
  FAVE = "Ruby"
end

-----------------------------------------------------------
# Mixin for the Win
# practice for mixin
module Languages
  FAVE = "Ruby"  # This is what you typed before, right? :D
end

class Master
  include Languages
  def initialize; end
  def victory
    puts FAVE
  end
end

total = Master.new
total.victory