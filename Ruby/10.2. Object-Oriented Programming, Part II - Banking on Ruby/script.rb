# What You'll Be Building
class Account
  attr_reader :name, :balance
  def initialize(name, balance=100) #balance=100 - to get a default value of 100 balance
    @name = name
    @balance = balance
  end
  
  def display_balance(pin_number)
    puts pin_number == pin ? "Balance: $#{@balance}." : pin_error
  end
  
  def withdraw(pin_number, amount)
    if pin_number == pin
      @balance -= amount
      puts "Withdrew #{amount}. New balance: $#{@balance}."
    else
      puts pin_error
    end
  end
  
  private
  
  def pin
    @pin = 1234
  end
  
  def pin_error
    "Access denied: incorrect PIN."
  end
end

my_account = Account.new("Eric", 1_000_000) # 1_000_000, you realize it has underscore ruby allows this to make it easy to read big numbers
my_account.withdraw(11, 500_000)
my_account.display_balance(1234)
my_account.withdraw(1234, 500_000)
my_account.display_balance(1234)

# => Access denied: incorrect PIN.
# Balance: $1000000.
# Withdrew 500000. New balance: $500000.
# Balance: $500000.

------------------------------------------------------------
#MyWork
class Account
  attr_reader :name, :balance
  def initialize(name, balance=100)
    @name = name
    @balance = balance
  end
  
  public
  
  def display_balance(pin_number)
    if pin_number == pin
      puts "Balance: $#{@balance}."
    else
      puts pin_error
    end
  end
  
  def withdraw(pin_number, amount)
    if pin_number == pin
      @balance -= amount
      puts "Withdrew #{amount}. New balance: $#{@balance}."
    else
      puts pin_error
    end
  end
  
  private
  
  def pin
    @pin = 1234
  end
  
  def pin_error
    @pin_error = "Access denied: incorrect PIN."
  end
end

checking_account = Account.new("Mark", 1000)
mark.display_balance(1234)
mark.withdraw(12345, 500)
mark.display_balance(1234)

# => Balance: $1000.
# Access denied: incorrect PIN.
# Balance: $1000.

------------------------------------------------------------
#Improved Project
    # Include a deposit method that lets users add money to their accounts
    # Include error checking that prevents users from overdrawing their accounts
    # Create CheckingAccounts or SavingsAccounts that inherit from Account

class Account
  attr_reader :name, :balance
  def initialize(name, balance=100)
    @name = name
    @balance = balance
  end
  
  public
  
  def display_balance(pin_number)
    if pin_number == pin
      puts "Balance: $#{@balance}."
    else
      puts pin_error
    end
  end
  
  def withdraw(pin_number, amount)
    if pin_number == pin && amount < @balance
      @balance -= amount
      puts "Withdrew #{amount}. New balance: $#{@balance}."
    elsif amount > @balance
      puts "Insufficient funds"
    else
      puts pin_error
    end
  end
  
  def deposit(pin_number, amount)
    if pin_number == pin
      @balance += amount
      puts "Deposit #{amount}. New balance: $#{@balance}."
    else
      puts pin_error
    end
  end
  
  private
  
  def pin
    @pin = 1234
  end
  
  def pin_error
    @pin_error = "Access denied: incorrect PIN."
  end
end

checking_account = Account.new("Mark", 500)
checking_account.display_balance(1234)
checking_account.withdraw(1234, 501)
checking_account.display_balance(1234)
checking_account.deposit(1234, 600)

class SavingsAccount < Account
end

savings_account = SavingsAccount.new("Jason", 500)
savings_account.display_balance(1234)
savings_account.withdraw(1234, 501)
savings_account.display_balance(1234)
savings_account.deposit(1234, 800)

# => Balance: $500.
# Insufficient funds
# Balance: $500.
# Deposit 600. New balance: $1100.
# Balance: $500.
# Insufficient funds
# Balance: $500.
# Deposit 800. New balance: $1300.