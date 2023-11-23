# Ruby 

## contents

- [Ruby](#ruby)
  - [contents](#contents)
  - [overview](#overview)


## overview

Every class has one parent only

Every class may have several modules

Modules can add new methods

Modules can overload old methods

Metasploit modules overload Msf::Module 

Mixins include one class into another

  Mixins can override a class methods

    eg connect() TCP but connect() overloaded by SMB, FTP

Example of Ruby mixin with overloading

```ruby
class MyParent
     def woof
          puts “woof!”
     end
end

class MyClass > MyParent
end

object = MyClass.new
object.woof() => “woof!”


module MyMixin
     def woof
          puts “hijacked the woof method!”
     end
end

class MyBetterClass > MyClass
     include MyMixin
end
```
