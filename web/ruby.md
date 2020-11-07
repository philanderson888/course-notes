# Ruby 
 
## Contents

- [Ruby](#ruby)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Hello World](#hello-world)
  - [Publish](#publish)
- [changes to the project folder](#changes-to-the-project-folder)
- [installs the projects dependencies](#installs-the-projects-dependencies)
- [sets up the database](#sets-up-the-database)

## Introduction

Ruby is a programming language developed by Yukihiro Matsumoto from Japan and released in the year 1995. There are so many versions have been released for ruby after its initial release. The last stable release is 2.5.1 in early 2018. 
 
Ruby on Rails is a framework built out of Ruby 
 

## Hello World
 
ruby <filename> to run the file 
 
#{variable_name}  inside a string 
 
puts   to screen 
 
gets.chomp accepts input (string) 
 
puts "hi" 
 
name = gets.chomp 
 
puts name 
 
puts "Hello #{name}......!!!! " 
 
 
puts "Please enter your first number:" 
number1 = gets.chomp 
puts "Please enter your second number:" 
number2 = gets.chomp 
 
total = number1.to_i + number2.to_i 
 
puts "The total is: #{total}" 
 
if number1 > number2 
puts "#{number1} is larger than #{number2}" 
else 
puts "#{number2} is larger than #{number1}" 
end	#comment  
 
print "Hello #{name} Please enter your third number: " 
number3 = gets.chomp 
 
 
 
 
 
 
 
 
## Publish

<< CREATE NEW PROJECT>>  rails new <<NAME>> 
 
CD <<partname + tab will find folder>> 
 
rails s   << RUN THE RAILS SERVER>> 
 
CLICK ON PREVIEW (3000 NOT SSL) TO VEIW DEFAULT PAGE AT http://vigorous-rottweiler-53-138287.euw1.nitrousbox.com/ 
 
 
 
 
You will also need to edit the uploader/config/initializers/carrierwave.rb file and add your settings. 
 
You can find the project here: http://git.mattwright.io/matt/uploader 
 
When you have an account on Nitrous (link in previous email) 
 
you can run: git clone git@git.mattwright.io:matt/uploader.git 
 
That will download the project to your box. 
 
You can set this up and run it by going to the terminal and running the following commands: 
 
# changes to the project folder 
cd uploader 
 
# installs the projects dependencies 
bundle install 
 
# sets up the database 
rake db:schema:load 
 
#starts the server 
rails s 
 
you can then click the preview button at the top of the nitrous screen and select 3000 (not the SSL one) 
 
 
 
 
 
 
numbers.rb file 
 
puts "Please enter your first number:" 
number1 = gets.chomp 
puts "Please enter your second number:" 
number2 = gets.chomp 
 
total = number1.to_i + number2.to_i 
 
puts "The total is: #{total}" 
 
if number1 > number2 
puts "#{number1} is larger than #{number2}" 
else 
puts "#{number2} is larger than #{number1}" 
end 
 
 
 
 
 
 
name.rb file 
 
puts "Please enter your name:" 
name = gets.chomp 
puts "Hello #{name}!" 