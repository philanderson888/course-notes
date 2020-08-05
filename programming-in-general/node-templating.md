# Node Templating


THREE MAIN TYPES OF TEMPLATING
	EJS EMBEDDED JAVASCRIPT
	
	JADE (NOW PUG!?)
	
	HOGAN
	
PARTIAL TEMPLATES ARE JUST PART OF A PAGE
Jade Layout Engine

http://jade-lang.com/
	
http://html2jade.org/
		
http://html2jade.aaron-powell.com/
Note : JADE does not need semicolons after any line (in fact it forbids it and will fail!)
element(attribute='value')
#id
.class
p text
p.
 text
 text
button#button01(type='button') Click Here
doctype html
html(lang="en")
  head
	title pageTitle
	script(src='https://code.jquery.com/jquery-2.2.0.js')
	script(type='text/javascript').
	  if (foo) {
		 bar(1 + 5)
	  }
	script.
	   var a = [1,2,3];
	   function displayArray(element,index,array){
		 
	   }
	   a.forEach(displayArray(element,index,array));
  body(onload="output()")  
	h1 Jade
	#container
		p test
	p.
		Jade is a terse and simple
		templating language with a
		strong focus on performance
		and powerful features
	.col
	  p test
  
	 
P
| Hello,
 = name
From http://www.creativebloq.com/web-design/templating-engines-9134396 
|   what follows is plain text
= name    variable
Each person in people
li=person
         LOOPS OVER ARRAY

EJS Embedded Javascript

Use EJS or Angular or Jade to create templates for our web pages to hold field data
EJS TEMPLATE
https://scotch.io/tutorials/use-ejs-to-template-your-node-application
	ENTRIES.MAP 
	
	EJS MAP FILTER
	
		SPECIFY WHICH PROPERTY OF AN OBJECT YOU WANT TO PERFORM FILTERING ON
		
			<%=: movies | map:'name' | sort | first %>.          
			
							GET FIRST ITEM IN MOVIES ARRAY WHEN SORTED BY NAME ALPHABETICALLY
TEMPLATING WITH MUSTACHE / HOGAN
	MUSTACHE CODE IS MINIMALISTIC
	
	FIELDS DISPLAYED USING {{ ITEM }}
	
	{{ ! COMMENT IN HOGAN }}
	
	
	
	NPM INSTALL HOGAN.JS
	
	FIRST HOGAN APPLICATION
	
		var hogan = require('hogan.js');
		var template = '{{message}}';
		var context = {message: 'Hello template!'};
		var template = hogan.compile(template);
		console.log(template.render(context));
		
		CREATE AND RUN NODE_HOGAN_01.JS TO SEE THIS IN ACTION
	
	
	LOOPING THROUGH AN ARRAY WITH HOGAN
	
		SECTIONS: ITERATING THROUGH MULTIPLE VALUES
		Although Hogan doesn't allow the inclusion of logic in templates, it does include an
		elegant way to iterate through multiple values in a context item using Mustache sections.
		The following context, for example, contains an item with an array of values:
		var context = {
		students: [
		{ name: 'Jane Narwhal', age: 21 },
		{ name: 'Rick LaRue', age: 26 }
		]
		};
		If you want to create a template that will display each student in a separate HTML paragraph,
		with output similar to the following, it would be a straightforward task using a
		
		Hogan template:
		<p>Name: Jane Narwhal, Age: 21 years old</p>
		<p>Name: Rick LaRue, Age: 26 years old</p>
		
		The following template would produce the desired HTML:
		
		{{#students}}
		<p>Name: {{name}}, Age: {{age}} years old</p>
		{{/students}}
		
			CREATE AND RUN NODE_HOGAN_02.JS TO SEE THIS WORKING
			
			
		
		
		IF ARRAY IS BLANK
		
			{{^students}}
			<p>No students found.</p>
			{{/students}}
			
	HOGAN PARTIAL TEMPLATING EXAMPLE
	
		SEE BOOK PAGE 279 FOR GOOD EXAMPLE
		
	
JADE  (PUG)

	VARIATIONS
	
			EXPRESS project --hogan 
					
					https://www.npmjs.com/package/hjs HOGAN JS IS COMPILER FOR MUSTACHE TEST SUITE TEMPLATE LANGUAGE
					
						http://twitter.github.io/hogan.js/
						
					MUSTACHE
					
						http://twitter.github.io/hogan.js/ 
						
						http://mustache.github.io/#demo
						
						https://github.com/raycmorgan/Mu
						
			
			EXPRESS project -c less             -C = CSS
								-c stylus                    
									(no support for SASS)
Ember JS

Ember : was created by Yehuda Katz who was a member of the Ruby on Rails team.   Adopts 'convention over configuration' : be productive first without worrying about fine detail 'configuration' until later???
'convention over configuration' : be productive first without worrying about fine detail 'configuration' until later???
Ruby On Rails

Ruby on Rails adopts 'convention over configuration' : be productive first without worrying about fine detail 'configuration' until later???
Service Workers

https://jakearchibald.github.io/isserviceworkerready/
Yeoman

Installs scaffolding for us
Install yo
npm install -g yo
npm install -g generator-angular 
		
		
Express And Angular

		
		
	
Combine both in one scaffolding
https://www.npmjs.com/package/generator-express-angular
Install the module
	npm install -g generator-express-angular
Make a new directory, and cd into it:
	mkdir my-new-project && cd $_
		
	
Run yo express-angular, optionally passing an app name:
yo express-angular [app-name]
Express And Angular Walkthrough 1

https://coderwall.com/p/ww38iq/angular-and-express-setup
Create a folder
express <<appname>>
cd <<appname>> && npm install    
	
	
	
	