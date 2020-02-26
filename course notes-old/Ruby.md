# Ruby

# Week 6 - Ruby
    
    [Resources](#resources)
    
    [Ruby Interactive](#ruby-interactive)
    
    [Lesson 0 - Intro](#lesson-0-ruby-intro)
    
    [Bundler And GemFiles]()#bundler-and-gemfiles)
    
    [Lesson 1 - Variables](#lesson-1-variables)
    
    [Lesson 2 - Functions](#lesson-2-functions)
    
    [PostGres Database](#postgres-database)
    
    ### Resources
    
    [Install Ruby](https://rubyinstaller.org)
    
    [https://rubygems.org](https://rubygems.org)
    
    [Github Link To Ruby](https://github.com/spartaglobal/new-curriculum/tree/master/server-side-languages/ruby/language)
    
    Run Ruby live online at [CodeAnyWhere.com](https://codeanywhere.com/editor/#)
    
    ### Ruby Interactive
    
    Run interactive (live) ruby 
    
    ```bash
    // irb = interactive ruby
    irb
    // create variable
    x = 6
    // output
    puts x
    // leave interactive
    exit 
    ``` 
    
    ```ruby
    // run a ruby file
    ruby ./ruby-file.rb 
    ```
    
    ## Ruby Random Terms
    
    MINASWAN Mine is nice - and so write nice
    26.to_f  to float
    26.class  integer
    ruby has no primitive types : everything is an object
    .capitalize (first letter)
    symbol
    puts
    p=print
    ! permanently change
    ? boolean
    gem install rspec
    for key,value in hash
    	puts "key" is value
    end
    $stdout.puts  " _ "  
    .flush
    selection - 
    $stdin.gets:chomp
    $stdout.puts "  "  #{selection}
    sinatrarb.com
    	build apis from scratch
    	build server
    rails : build whole app
    gemfile
    	gem "sinatra"
    	gem "sinatra-contrib"
    sinatra is a framework - very light
    dsl domain specific language
    bundle get "/" do
      "helloworld"
    end
    refresh server
    require sinatra/reloader
      if development?
    mvc
    build blog
    module is collection of classes
    gem "rack"
    rack has own config.ru at top level
    ru rack up
    rackup => runs rack
    require erb is already in ruby
    erb = embedded ruby
    psql -U postgres -d blog -f seed.sql   // use this to seed our database
    pre-screen before
    
    
    ## Lesson 0 - Ruby Intro
    
    Ruby creates code at the server, before it's sent to the browser
    
    [Bundler And GemFiles](#bundler-and-gem-files)
    
    [Windows lab : Installing a Gem](#windows-lab-installing-a-gem)
    
    ## Bundler And GemFiles
    
    Ruby has a 'Bundler' similar to Bower which can be used to install dependencies
    
    [https://bundler.io/](https://bundler.io/)
    
    ```bash
    // install Bundler
    gem install bundler 
    ```
    
    Create a manifest file for a project
    
    ```bash
    // create manifest file
    bundler init
    ```
    
    Install example : MacSay
    
    ```bash
    # install mac-say
    gem install mac-say
    ```
    
    Or we can add it to our Gem file manually, then install it with the `bundle` command
    
    ```ruby
    # add to gem filb
    bundle add mac-say
    ```
    
    Install all libraries
    
    ```ruby
    # install
    bundler install 
    # or a shorthand version of this
    bundle
    ```
    
    And your Gemfile should now look like this
    
    ```ruby
    # frozen_string_literal: true
    source "https://rubygems.org"
    git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }
    # gem "rails"
    gem "mac-say", "~> 0.2.1"
    ```
    
    To update our libraries we can run
    
    ```ruby
    # update latest
    gem update
    ```
    
    ### Windows lab : Installing a Gem
    
    ```ruby
    // add this to our Gemfile
    bundle add 'color_text'
    ```
    
    or install it directly
    
    ```ruby
    gem install 'color_text'
    ```
    
    Now require it in our ruby file and use it
    
    ```ruby
    require 'color_text'
    puts "Hello World".red
    ```
    
    Note that we can install gems directly from GitHub although it's better to use bundler
    
    ```ruby
    # install gem to generate PDF from HTML
    gem "wicked_pdf", :git => "git://github.com/mileszs/wicked_pdf.git"
    ```
    
    ## Lesson 1 - Variables
    
    [variables](#variables)
    
    [naming](#naming)
    
    [case](#case)
    
    [Everything is an object](#everything-is-an-object)
    
    [integer and decimal arithmetic](#integer-and-decimal-arithmetic)
    
    [Strings](#strings)
    
    [Methods](#methods)
    
    [!methods can alter the data](#methods-can-alter-the-data)
    
    [Arrasy](#arrays)
    
    [Hashes](#hashes)
    
    ### Variables
    
    ```ruby
    x = 6
    puts x
    ```
    
    ### naming
    
    use 
    
    	a-z
    
    	A-Z
    
    	0-9
    
    	- dash
    
    	_ underscore
    
    	. period
    
    ### case
    
    ruby uses `snake_case_like_this` 
    
    PascalCase
    
    camelCase
    
    snake_case
    
    CONSTANTS_GLOBAL_CONSTANTS
    
    kebab-case-like-this-for-website-files.html
    
    ### Everything is an object!!!
    
    In ruby there are no `primitives`
    
    Everything is an object and inherits from the root object.
    
    This means that all variables inherit methods passed down from the root object.
    
    ### methods available to every object in Ruby
    
    .ceil
    
    ### integer and decimal arithmetic
    
    if the `inputs` are integers then the output will be an integer
    
    This includes truncation of the answer eg 22/10 = 2
    
    To force decimal numbers then one input must be a decimal eg 22.0/10=2.2
    
    .to_int turns decimal to integer
    
    ## strings
    
    ### Interpolation : putting variables in strings 
    
    ```ruby
    variable_01="Hello"
    variable_02="World"
    output = "#{variable_01} #{variable_02}"
    puts output    # Hello World 
    ```
    
    ### string methods
    
    .reverse
    
    .length
    
    .upcase
    
    .downcase
    
    ### symbols 
    
    ```ruby
    # declare a symbol
    x = :hello
    y = :world
    # concatenate 
    output = "#{x} #{y}"
    puts output
    x = :changeme
    output = "#{x} #{y}"
    puts output
    ```
    
    Declaring this way rather than as a string is more memory efficient. 
    
    They also lack some methods which are normally attached to strings.
    
    They are best used for labels (equivalent of a key)
    
    ### arrays
    
    ```ruby
    # mixed array is the norm
    myArray = [1,2,3,"bob"]
    ```
    
    ```ruby
    myArray.last
    
    myArray.first
    
    # remove last element
    myArray.pop 
    
    # remove first element
    myArray.shift
    ```
    
    ### hashes
    
    hashes store data in key-value pairs
    
    ```ruby
    person = {
    	:name => "Bob",
    	:age => 33
    }
    ```
    
    or
    
    ```ruby
    person = {
    	name: "Bob",
    	age: 33
    }
    ```
    
    
    to obtain data
    
    ```ruby
    puts person[:name]
    ```
    
    ## methods
    
    to see what methods are available just type
    
    ```ruby
    hello = "Hello"
    world = :world
    puts hello.methods
    puts " "
    puts " "
    puts " "
    puts :world.methods
    ```
    
    ### class
    
    we can find out what type of variable our variable is with
    
    ```ruby
    hello = "Hello"
    world = :world
    puts hello.class  # String
    puts world.class  # Symbol
    ```
    
    ### methods! can alter the data 
    
    ```ruby
    alphabet="abc"
    
    puts "Original #{alphabet}" # abc
    
    # output reverse but don't change original
    puts "Reverse #{alphabet.reverse}" # cba
    puts "Original Is Unchanged #{alphabet}" # abc
    
    # permanently change alphabet now with reverse!
    puts "Reverse Permanently #{alphabet.reverse!}" # cba
    puts "Original Is Changed #{alphabet}" # abc
    ```
    
    ### methods? return true or false
    
    ```ruby
    alphabet="abc"
    puts alphabet.start_with?("a")  # true
    puts alphabet.start_with?("b")  # false
    ```
    
    
    ## Lesson 2 - Functions
    
    Here is a function
    
    ```ruby
    # declare the function
    def do_this
    	puts "doing something from inside a function"
    end
    # call the function
    do_this
    ```
    
    brackets are optional ie `my_function` or `my_function()`
    
    ### hoisting
    
    Ruby does not `hoist` variables
    
    
    ### parameters
    
    ```ruby
    def add a,b
    	puts a+b 
    	return a+b
    end
    # call the funtion
    x = 10
    y = 12
    z = add(x,y)
    puts "#{x} plus #{y} equals #{z}"
    ```
    
    ### returning from a function
    
    by default `nil` is returned from a function
    
    ```ruby
    def return_something
    	return 1
    end
    def return_nothing
    end
    
    puts "\n\nThis should return 1"
    puts return_something
    
    puts "\n\nThis should return nil"
    puts return_nothing
    ```
    
    ### optional parameters
    
    ```ruby
    def my_function x,y=10
    	puts x+y 
    end 
    ```
    
    now `y` is an optional parameter
    
    ### splats - unlimited parameters
    
    We can use * as a wildcard for unlimited parameters
    
    ```ruby
    def do_this *my_array
    	puts my_array 
    end 
    ```
    
    so can call it with
    
    ```ruby
    do_this "a","b","c"
    ```
    
    ## Lesson 3 - Control Flow and Loops
    
    ```ruby
    if true 
    	puts "true"
    end
    
    x=10
    
    if x==10
    	puts "true"
    else
    	puts "false"
    end
    
    x=10
    
    if x==11
    	puts "true"
    else
    	puts "false"
    end
    
    x=10
    
    if x==10
    	puts "x is 10"
    elsif x==11
    	puts "x is 11"
    else
    	puts "x is neither 10 nor 11"
    end
    ```
    
    ### then
    
    On single line statements we can include `then`
    
    ```ruby
    if true then puts "true" else puts "false" end
    ```
    
    ### spaceship operator <=>
    
    returns 1, 0 or -1 depending on whether the first input is greater than, the same as, or less than the second input
    
    ### equal?
    
    tests if pointing to the same object
    
    ```ruby
    puts "\n\nequal? tests object equivalence\n\n"
    x=10
    y=10
    if(x.equal?(y))
    	puts "same"
    end
    ```
    
    ### eql?
    
    These test if the hash of the two objects are the same or not
    
    ```ruby
    puts "\n\n=== different ways of testing equivalence ===\n\n"
    x=10
    y=10
    
    puts "x is #{x} and y is #{y}"
    
    puts "\n\ntest for equivalence"
    if (x == y)
    	puts "yes they are equivalent"
    else
    	puts "not same"
    end
    
    puts "\n\ntest for same object"
    if(x.equal?(y))
    	puts "yes they are the same object"
    else
    	puts "not same"
    end
    
    
    puts "\n\ntest for hash equivalence"
    if(x.eql?(y))
    	puts "yes for hash equivalence"
    else
    	puts "not same"
    end
    
    
    puts "\n\n=== using strings now ===\n\n"
    
    x="hello"
    y=x.dup
    
    puts "x is #{x} and y is a copy of #{y}"
    
    puts "\n\n test for equivalence"
    if (x == y)
    	puts "yes they are equivalent"
    else
    	puts "not same"
    end
    
    puts "\n\ntest for same object"
    if(x.equal?(y))
    	puts "yes they are the same object"
    else
    	puts "not same"
    end
    
    
    puts "\n\ntest for hash equivalence"
    if(x.eql?(y))
    	puts "yes for hash equivalence"
    else
    	puts "not same"
    end
    
    
    
    puts "\n\n=== now comparing integer with decimal ===\n\n"
    x=10
    y=10.0
    
    puts "x is #{x} and y is #{y}"
    
    puts "\n\ntest for equivalence"
    if (x == y)
    	puts "yes they are equivalent"
    else
    	puts "not same"
    end
    
    puts "\n\ntest for same object"
    if(x.equal?(y))
    	puts "yes they are the same object"
    else
    	puts "not same"
    end
    
    
    puts "\n\ntest for hash equivalence"
    if(x.eql?(y))
    	puts "yes for hash equivalence"
    else
    	puts "not same"
    end
    ```
    
    ### truthy and falsey
    
    `false` and `nil` are false; everything else is truthy
    
    ```ruby
    puts "\n\ntesting truthiness"
    puts "===================\n\n"
    
    def truthy(boolean)
    	puts "\n\ntesting #{boolean}"
    	if (boolean) 
    		puts "true"
    	else
    		puts "false"
    	end
    end
    truthy(0)     # true
    truthy(1)     # true
    truthy(nil)   # false
    truthy(false) # false
    truthy(true)  # true
    ```
    
    
    ### Logical
    
    & 
    
    and
    
    || 
    
    or
    
    !
    
    not
    
    
    
    
    
    
    
    ## Loops
    
    ### for loop
    
    for i in 1..10 do 
    	puts Faker::Address.city
    	puts Faker::Address.country
    	puts Faker::Address.country_code
    	puts Faker::Bank.swift_bic
    	puts Faker::Bank.iban	
    	puts "\n" 
    end
    
    ### Map
    
    Map - creates a new array from the old one
    
    ### Reduce
    
    Reduce - allows a cumulative field to be passed from one loop to the next eg cumulative sum
    
    ## Lesson 4 - Building Apps Intro
    
    API routes
    
    GET /root
    
    GET /root/:id
    
    GET /root/new
    
    POST /root
    
    GET /root/:id/edit
    
    PUT/PATCH /root/:id
    
    DELETE /root/:id
    
    
    /dt 	list databases
    
    ```ruby
    gem 'pg'
    	models/post.rb
    		class Post
    			# self is a 'class' method
    			def self.open.connection
    			conn : pg.connect/dbname:"blog",
    				user:"postgres"
    				password: "Password"
    		end
    ```		
    
    Outside the class  post.open-connection
    
    ## Ruby Session
    
    ```ruby
    if (!session[:posts])
    	session[:posts]=[]
    end
    
    if !session[:posts].include?(id)
    	session[:posts].push(id)
    end
    
    puts session[:posts]
    
    @visited_posts=sesion[:posts]
    ```
    
    HTML
    
    ```html
    <div>@visited_posts
    ```
    
    ## Lesson 5 - Sinatra
    
    ## Lesson 6 - Routes and Controllers
    
    ## Lesson 7 - ERB Templating
    
    ## Lesson 8 - Forms Methods Override
    
    ## Lesson 9 - Models
    
    ## Lesson 11 - Sessions And Cookies
    
    ## Lesson 12 - Static Assets & Styling
    
    ## Lesson 13 - JSON API - Ignore this module
    
    ## Lesson 14 - SCSS - ignore this module
    
    
    ## Rspec Testing
    
    To test we can do the following 
    
    ```bash
    gem install rspec
    ```
    
    Test if rspec is installed
    
    ```bash
    rspec -v
    ```
    
    Then create a file such as
    
    ```ruby
    require 'rspec'
    # RSpec is a tool for both Behavioural Driven Development as well as Test Driven Development
    # RSpec focuses on providing a framework that makes your test easy to understand and uses written english
    # it has a very rich library of methods to help you test your code and is one of the most widely used test frameworks in ruby
    # It's generally structure is set out as below:
    describe 'This is the description of the product you are going to test' do
      # The describe() method is used to describe a class, method or an example group.
      context 'context is merely another way to break out your code and description' do
        # Context is a recent(ish) addition to the framework to help break down more complex objects.It helps to venture out different outcomes in different scenarios.
        it 'the it block is where your tests begin and get run' do
          # the 'it' function is the actual test to be run and is often described as below
          # it 'should do something' do.....
        end
      end
    end
    ```
    
    and run it with
    
    ```bash
    rspec testfile.rb
    ```
    
    Let's try a real test
    
    ```ruby
    describe 'a simple test' do
    
      it 'should be able to check values' do
    
        # in this example we will use manually input variables to write tests for
        a = 1
        b = 2
        c = true
    
      # Below is the example of an expect
    
        expect(a + b).to eq 3
        expect(c).to be true
    
      end
    
    end
    ```
    
    Tests to look out for 
    
    ```ruby
    expect(a).to eq(b) # == 
    expect(a).to eql(b) # === 
    expect(a).to equal(b) # same object
    expect(b).not_to eql(c) # 1 is integer, 1.0 is float
    ```
    
    Let's move on with some more tests
    
    
    ### rspec --init
    
    ```bash
    # scaffold a structure to run tests
    rspec --init 
    ```
    
    this creates
    
    .rspec
    
    ```ruby
    --require spec_helper
    --color 
    ```
    
    and spec/spec_helper.rb
    
    ```ruby
    require_relative '../lib/calc_engine'
    # real life
    require_relative '../rspec_04'
    ```
    
    To get additional output, in the `spec_helper.rb` file, add
    
    ```ruby
    config.formatter = :documentation
    ```
    
    We can also run multiple tests all at once by requiring them from one file and then running that file as a test.
    
    As an example we can now run
    
    ```bash
    rspec spec/spec_helper.rb
    ```
    
    which will run our first test rspec_04
    
    ### calc tester
    
    This is from github new curriculum ruby language 03 calc walkthrough
    
    Create a class
    
    ```ruby
    class Calcengine
    
    end
    ```
    
    and test it
    
    ```ruby
    calc = Calcengine.new
    ```
    
    Add a method
    
    ```ruby
    class Calcengine
        def add
        end
    end
    ```
    
    Test it
    
    ```ruby
    # expect an `add` method
    expect(calc).to respond_to(:add)
    ```
    
    
    ### Before Hook
    
    We can add some code to be done every test just once (DRY)
    
    ```ruby
    # repeat this block of code for every 'do'
    before(:each) do
      @calc = Calcengine.new
    end
    ```
    
    and change ruby to 
    
    ```ruby
    it 'should correctly add two numbers' do
    	# expect an `add` method
    	expect(@calc).to respond_to(:add)
    	expect(@calc.add(3,4)).to eql(7)
    end
    ```
    
    ### before each, all, suite
    
    before(:each) runs before each test
    
    before(:all) runs first
    
    suite runs before any tests in the RSpec folder
    
    ### after each, all, suite
    
    can run cleanup code with the same syntax
    
    
    ### Faker
    
    To generate fake data we can do the following
    
    ```bash
    gem install faker
    ```
    
    ```ruby
    require faker
    puts Faker::Address.city
    puts Faker::Address.country
    puts Faker::Address.country_code
    puts Faker::Address.Bank.swift_bic
    puts Faker::Address.Bank.iban
    ```
    
    ## HTTP
    
    ```bash
    gem instal httparty
    ```
    
    ```ruby
    require 'httparty'
    response = HTTParty.get("https://www.bbc.co.uk")
    puts response.code
    puts response.message 
    puts response.headers.inspect 
    puts response
    ```
    
    ### Outputting to a file
    
    ```ruby
    require 'httparty'
    response = HTTParty.get('https://www.bbc.co.uk')
    File.open('output.txt', 'w') do |fo|
      	fo.puts "hello world"
    	fo.puts response.code
    	fo.puts response.message
    	fo.puts response.headers.inspect 
    	fo.puts response 
    end
    ```
    
    We could permanently alter puts 
    
    ```ruby
    old_stdout = $stdout 
    File.open('output.txt', 'w') do |fo|
    	$stdout = fo 
    	puts "hello world by altering stdout"
    end
    $stdout = old_stdout
    ```
    
    
    ## RSpec Glossary
    
    ### RSpec commands
    
    [RSpec list of commands](https://relishapp.com/rspec/rspec-expectations/docs/built-in-matchers)
    
    
    
    
    ## PostGres Database
    
    ### Installation
    
    Tip : use v9.5 when downloading as then there are no password issues and the database is accessible without having to use a username and password
    
    Location after install of the postgres executable file is
    
    C:\Program Files\PostgreSQL\11\bin\postgres.exe
    
    ```bash
    # postgres is the default user
    psql -u postgres 
    ```
    
    ```bash
    # list all databases
    \list 
    ```
    
    ```bash
    # delete database if exists
    drop database mydb;
    # create new database from scratch
    create database mydb;
    ```
    
    
    ```bash
    # connect to database
    \c
    ```
    
    
    ```bash
    # no semicolon required if \
    \c blog
    ```
    
    
    ```sql
    CREATE TABLE post (
    	id SERIAL NOT NULL, 
    	title VARCHAR 255 NOT NULL, 
    	body TEXT NOT NULL,
    	PRIMARY KEY(id)
    	)
    ```
    
    
    
    
    # Ruby And Postgres project
    
    Here is the project which was built
    
    [https://github.com/matrbeales/sparta-internal-management-system/blob/master/controllers/api_controller.rb](https://github.com/matrbeales/sparta-internal-management-system/blob/master/controllers/api_controller.rb)