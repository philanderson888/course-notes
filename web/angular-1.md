# Angular

# AngularJS (Angular 1) Terms

```
Ngrx state management 

Angular does state management out of the box

ng-undestroy 

auto-unsubsctibe 

angular services

app.controller('y',function($scope,$http){});

ANGULAR USES REST

ANGULAR DOES 2-WAY BINDING

ng-app
ng-controller
ng-directive
ng-hide
ng-show
ng-class
ng-model INPUT
ng-bind OUTPUT
app.directive('customDirective',function(){ return { template '< p >hi< / p>'};    });
< custom-directive></ custom-directive>
ng-click
ng-copy
ng-init="x=1"     var $scope.x=1
directive ELEMENT <..>   ATTRIBUTE  < div tag="x"> CLASS < div class="x" coMMent    restrict: C/M mandatory
ng-cloak
$error
$valid
$dirty
$touched : focus
input.ng-dirty/touched/valid/invalid CSS
ng-(not-)empty
ng-(un)touched
ng-(in)valid
ng-dirty/pristine
ng-pending
ng-click="dothis()"
$rootScope on ng-app element 
$scope priority over $rootScope
filter : currency/date/json/filter/limitTo/uppercase/lowercase/number/orderBy
$location
$http
$http.get("data.json").then(function(response){$scope.field=response.data})
$timeout(function(){},2000)
$interval(function(){},2000)
custom service  app.service('myService',function(){ this.serviceFunction=function(input_param){return x} });  with app.controller('y',function($scope, myService){$scope.field=myService})
filter : custom : on a service : app.filter('myFilter',['myService',function(myService...)])
$http get/post/put/delete/head/jsonp/patch
$http({method:"GET",url:"path"}).then(function(response(){}));
$http.response.data/headers/status/statusText/config
$index in table
ng-if="true"
ng-options drop-down box
ng-focus/blur/click/dblclick/keydown/up/press/mousedown/up/enter/leave/move/over
ng-copy/cut/change/paste
Angular events add to Javascript events
Event data : ng-click="dothis($event)"     function(event){$scope.x=event.clientX}
form input elements : input/select/button/textarea  (input has checkbox and radio)
select option value="x"
novalidate HTML
$(un)touched/pristine/dirty/(in)valid
ng-repeat="item in list" {{item.a}}
| filter
| limitTo:5
| orderBy:-field01
div style="background-color:{{field01}}"
closure ( function(){   return function() { return x; }    }  )();
filter | currency/
img src={{path}}
error is NULL / UNDEFINED
ng-click="x=1"
ng-show="x===1"
ng-class="{active:x===1"}
interpolation bindings {{ }}
directives ng-click="functionA()"
interpolation bindings such as < span title="{{ attrBinding }}">{{ textBinding }}</ span>
directive attributes such as ng-click="functionExpression()".
service
template
ng-app
nt-init
ng-repeat
ng-view
ng-template
directive
$routeProvider
filter
Factory Method
ng-disabled
ng-show
ng-hide
ng-click
application module
controller module
use module
scope
scope inheritance
custom directive
dependency injection
value
@Component({field:'value'})
@Template({})
bind
control object
input[control]
{{username.value}}
directives:[forEach]
this.username=new Control('abc')
Component : view/controller
componentServices:[x]
@Template({url:x,directives:y})
Class X{ field:Field; constructor (field:Field){this.field=field}}
add($event, newtd)
if($event.which===13)
this.field.add(newtd.value)
toggleTdState(td)
td.done
bootstrap(TdApp)
@Component({componentServices:abc})
Controller Abc => now create Class Abc
app TdApp 
template at template/td.html
service eg abc.js = Class + Constructor with blank array + add_to_array() method + done=check_add_worked() method
ng-model=”x”        INPUTTING - BIND INPUT VALUE TO x
< input ng-model=”x”>        TEXT INPUT BINDS TO FIELD X 
< p ng-bind=”x”>    DISPLAY DATA BOUND TO X 
ng-app  WRITE YOUR ANGULAR CODE HERE
ng-   DIRECTIVE MEANS ANGULAR TO FOLLOW
input ng-model=”x”  INPUT FIELD : DATA ENTERED BOUND TO FIELD X
ng-bind=”x”   DISPLAY x
ng-init=”x='y''”    value of x is y
ng-repeat   EXTRACT ARRAY
li ng-repeat=”item in myArray”        ng-bind=”item”
li ng-repeat=”item in myArray”  {{item}}   
ng-bind=”x | uppercase/lowercase”   DISPLAY X IN UPPERCASE
ng-init=”myArray= [ { x:'value',y:'value'} , { x:'value',y:'value'} , { x:'value',y:'value'} ]”
tr ng-repeat = “item in myArray | orderBy:'-y'”    TABLE ROW ORDER BY Y DESC
td ng-bind=”item.x”   ng-bind=”item.y”      DISPLAY TABLE ITEMS 
ng-init=”myArray=[ {name:”x”,salary:”y”} , {name:”x”,salary:”y”} ]”
tr ng-repeat = “item in myArray” 
ng-bind=”item.salary | currency”   DISPLAY IN MONEY FORMAT
ng-show/hide           AS JQUERY SHOW() HIDE()
checkbox ng-model=”x                div ng-show=”x”     DIV DISPLAYS ON TICK
checkbox ng-model=”x”     div ng-hide=”x”        HIDE DIV ON TRUE
checkbox ng-model=”x”     input ng-disabled=”x”   DISABLE INPUT BOX ON TRUE
ng-init=”x=1”         ng-click=”x=x+1”        ng-bind=”x”    DISPLAY X AND INCREMENT
ng-init=”x=1;y=2”  ng-click=”z=x+y”       ng-bind=”z”   
ng-click
ng-dblclick
ng-mousemove
{{x}}    JUST DISPLAYS X   EG  <p>{{x}}</p>      SAME AS NG-BIND!
ng-mouseover
ng-mouseleave
ng-keyup
ng-keydown
{{}}  same as NG-BIND
{{a+b}}    CONCATENATES STRINGS
{{a+b}}    ADD NUMBERS
ng-init=”myArray=[1,2,3]”      {{myArray[0]}}   displays 1
ng-app=”a” ng-controller=”b”   ng-model=”x”   ng-model=”y” 
var app=angular.module('a',[]);
app.controller('b',function($scope){
$scope.x=4;         ==> SAME AS INPUT VALUE=4
$scope.y=5          ==> SAME AS INPUT VALUE=5
});
SCOPE CONTAINS MODEL DATA
MODEL = DATA + LOGIC + RULES
VIEW
CONTROLLER = INPUT
MODEL : ng-model and $scope
VIEW : ng-bind
CONTROLLER ng-controller   DOES NOT SEEM TO HAVE ANY FUNCTION HERE!

</pre>

```

```jsx

# Angular

Angular is a client-side framework maintained by Google
History

Conceived in about 2009 and first release 2012; now officially supported by Google.
v1 called 'AngularJS'
	MVC architecture
	Javascript is used 
v2 called 'Angular' from now on! (instead of AngularJS)
	Complete rewrite compared with version 1
	service/controller architecture
	Controllers from v1 eliminated in favour of component based UI. This gives improved
		flexibility and usability.
	Typescript is used
	Two layers
		Application layer
		Rendering layer
	SEO friendly which v1 was not.  V2 is rendered server-side
v4
	codebase size reduced by 60%
	Typescript 2.1 and 2.2
	ngIf conditional adding content to DOM
		<div *ngIf="x ; then ABlock else BBlock ">HTML Content<div>
	Angular 4 getting started link https://www.edureka.co/blog/angular-tutorial/?78%5CDASFWERPIQWJGLKNGMAL%2FSD%2CNMGADSLMPQWIRJGFPIQJGFutm_campaign=social-media-edureka-june-ab&utm_medium=crosspost&utm_source=quora and also Angular 4 getting started video Youtube : 1 hour 32 minutes : 8 May 2017 : Edureka
	Angular 4 in 1 hour https://www.youtube.com/watch?v=KhzGSHNhnbI 43 minutes : July 2017 : Traversy Media  
    
Angular Help Links

W3 Schools
Official documentation at https://docs.angularjs.org/api
Quickstart https://angular.io/guide/quickstart
Summary of all directives
    https://www.w3schools.com/angular/angular_ref_directives.asp
WebChat help for Angular http://webchat.freenode.net/?channels=angularjs&uio=d4
Free Online Courses

Work this through!
http://www.tutorialsteacher.com/angularjs/angularjs-tutorials
Angular Video Help

Taster course - 11 minutes - by Jordan Matthiesen from VS Javascript Tools team at 
https://channel9.msdn.com/Series/Visual-Studio-2015-Enterprise-Videos/Building-JavaScript-apps-with-Angular#time=0s
Hello World - using braces {{ }} to display items

Angular can be added to a single HTML page like this
<!DOCTYPE html>
<head>
    <title>Angular JS</title>
    <link rel="stylesheet" href="assets/css/bootstrap.css" />
    <script src="assets/js/angular.js"></script>
</head>
<body ng-app="">
<h1>Angular JS</h1>
    <p>{{"Hello " + " World"}}</p>
</body>
</html>

See Angular_01
Directive

Directives are custom attributes which allow ANGULAR TO EXTEND HTML
	ng-app
	ng-model
	ng-bind
	ng-..
	Can also build our own custom directives
	When naming our own directive we use camelCase eg w3TestDirective but when invoking it must use separated case eg w3-test-directive
	<body ng-app="x">
	<w3-test-directive></w3-test-directive>
	<script>
	var app=angular.module('x',[]);
	app.directive("w3TestDirective",function(){
		return{
			template : "<h1>My First Directive</h1>"
		};
	});
	</script>
	We can use (invoke) the directive by using four methods
		Element Name E		<w3-test-directive></w3-test-directive>
		Attribute		 A		<div w3-test-directive></div>							
		Class        C    <div class="w3-test-directive"></div>			
											must have restrict: C, to work
		Comment      M    <!-- directive: w3-test-directive -->			
											must have restrict: M to work and replace:true also
		app.directive("directive01",function(){
			return{	
				restrict : E/A/C/M   restricts how the directive may be invoked
				template : "<h1>test</h1>"
			};
		});
	Worked Example
		<!DOCTYPE html>
		<html>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
		<body ng-app="myApp">
		<w3-test-directive></w3-test-directive>
		<div w3-test-directive></div>
		<div class="w3-test-directive"></div>
		<!-- directive : w3-test-directive -->
		<script>
		var app = angular.module("myApp", []);
		app.directive("w3TestDirective", function() {
		    return {
		        template : "<h1>Made by a directive!</h1>"
		    };
		});
		</script>
		</body>
		</html>
ng-app

<body ng-app=""> tells us this is an Angular application, and this is the (one) root element of the Angular application.  
This is a blank, nameless application.
Hello World

Angular – Hello World
	Angular can also be run with linking to a .js file in the background using ng-app to link to a function within the .js file
<!DOCTYPE html>
<html ng-app="HelloWorld">                     ng-app refers to FUNCTION HELLOWORLD in myscript.js
<head>
    <title>Angular JS</title>
    <link rel="stylesheet" href="assets/css/bootstrap.css" />
    <script src="assets/js/angular.js"></script>
</head>
<h1>Angular JS</h1>
    <p>{{"Hello " + " World"}}</p>
<script src="myscript.js"></script>
</body>
</html>
Note : it is recommended to place the     <script src="assets/js/angular.js"></script>  at the end of the <head>
ng-model and ng-bind

ng-model maps INPUT TO ANGULAR DATA FIELD
ng-bind maps ANGULAR DATA FIELD TO HTML VISUAL ITEMS ON THE SCREEN
ng-model for INPUT DATA
nb-bind for OUTPUT DATA
<div ng-app="">
<input type="text" ng-model="angular-data-item-01" />
<p ng-bind="angular-data-item-01"></p>
ng-init

Sets initial values
<body ng-app="" ng-init="field01='fred'">
<div ng-bind="field01"></div>
	ng-init="field01=22;field02=33" can initialise multiple fields with semicolons
ng-bind same as {{   }}

<body ng-app="" ng-init="field001='fred'">
<div ng-bind="field01"></div>
<div>{{field01}}</div>
Expressions

{{  expressions  }}  can be numeric {{ 1+1 }}  returns 2 but {{ "1" + "1" }} returns 11
<p>1 + 2 = {{1+2}}</p>     raw HTML with NUMBER
Expressions – Differences with Javascript
https://docs.angularjs.org/guide/expression
Angular variables
Evaluate against a SCOPE OBJECT, not Javascript's GLOBAL WINDOW
Errors return NULL and UNDEFINED
Angular Can:
	contain literals, operators, variables
	be written inside HTML
	support filters
Angular Cannot
	have IF, FOR, DO, WHILE, TRY..CATCH
	declare a function
	use REGEXP
	use 'new' eg var d = new Date()
Expressions Setting CSS

Expressions can be used to set CSS values also for example
<body ng-app="" ng-init="color01='blue'">
<div style="background-color='{{color01}}'">
We can even make it a variable like
<input type="text" ng-model="color01" value={{color01}}>
<div style="background-color: {{color01}}">This text is {{color01}}</div>
see angular_07a_set_CSS.htm for a worked example
Using a checkbox to set CSS

See this code
<p ng-class="[style4, {orange: warning}]">Using Array and Map Syntax</p>
<input ng-model="style4" placeholder="Type: bold, strike" aria-label="Type: bold, strike"><br>
<label><input type="checkbox" ng-model="warning"> warning (apply "orange" class)</label>
and check out working code example (not mine) at https://plnkr.co/edit/?p=preview as well.

Using the value of text to set CSS

Check out working code example (not mine) at https://plnkr.co/edit/?p=preview as well.
Expressions With Variables

body ng-app="" ng-init="x=1;y=2"
div {{x+y}}  show 3
Expressions With Objects

<body ng-app="" ng-init="object01={a:1,b:2,c:'some value'}">
<div ng-bind="object01.a"></div>
see index.htm for a worked example
Expressions With Arrays

<body ng-app="" ng-init="myArray01=[10,20,30]">
<div>{{myArray[2]}}</div>  will return 30
see index.htm for a worked example
Expressions With Arrays Of Objects

Module

A module is an application, or a block of code with a name
var app=angular.module('x',[])
ng-app="x" refers to this from HTML
Note that [] refers to an array of dependent modules (blank in this case)
Controller

Controller is a FUNCTION inside a module
var app=angular.module('x',[])
app.controller=('y',function(){})             // notice that this is an example of a CLOSURE (see index.htm)
HTML reads
<body ng-app="x">
<div ng-controller="y as x">
Controller Holding Data

Often the controller will define the data to be displayed on the page.
app.controller=('y',function(){
	this.myObject=[{a:1},{b:2}]	
})
or
app.controller=('y',function(myObject){
	myObject.a="1";
	myObject.b="2";
})
or
app.controller=('y',function(myObject){
	myObject=[{a:1},{b:2}]
})
ng-cloak

Ensures there is no flicker when screen is loaded, making sure the Angular code does not flash
on the screen and then disappear again, showing the result.
<div ng-cloak>{{1+2}}</div> 
It's quite hard to force this to happen but you can prove it works next time you get a page
which is quite obviously flickering - just add this code!!!
See angular_27 for worked example (trivial)
Angular Getting Started - The Angular Client

Install node
Install npm
Install the Angular Client 
  npm install -g @angular/cli
Create a new project
	ng new my-app
Input Validation

HTML5 now provides basic form validation 'out-of-the-box' with no extra coding.  For example, see index.htm#form-with-validation for working example of native HTML5 validation.
Angular also can be used to provide basic form validation.
Worked example : to validate an email address
<form name="myform><input name="myAddress />
validate with <ng-show="myform.myAddress.$error.email">Invalid Email!!!</div>
ERROR
myform.myfield.$error
VALID
myform.myfield.$valid
DIRTY
myform.myfield.$dirty   IF CHANGED AT ALL
TOUCHED
myform.myfield.$touched  IF FIELD HAS BEEN IN FOCUS
See angular_39
css
<style> input.ng-invalid{  background-color:red }
Other CSS classes
	ng-empty
	ng-not-empty
	ng-touched
	ng-untouched
	ng-valid
	ng-invalid
	ng-dirty
	ng-pending
	ng-pristine
See angular_39 for CSS ng-valid/invalid on an input box
Running an Angular function like a javascript function eg on click
<div ng-click="changeName()"> // note this is an ng-function, not a javascript function
Controller : $scope.changeName = function(){ $scope.firstName="test" }
<div ng-app="myApp" ng-controller="myCtrl">
    <h1 ng-click="changeName()">{{firstname}}</h1>
</div>
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstname = "John";
    $scope.changeName = function() {
        $scope.firstname = "Nelly";
    }
});
</script>
see angular_40
Controllers 
 - are javascript objects
 ng-app="x"
 ng-controller="y"
 $scope is the 'application object'
 controllers can have PROPERTIES and METHODS just like any normal javascript function
 app.controller=('y',function($scope){ 
 		$scope.property01='hi';
 		$scope.method01=function(){//dothis;return something}
   })
Controllers can live in their own separate files  (MVC Model, View, Controller)
namesController.js
angular.module('app01', []).controller('namesController', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});
The scope $scope is available in both the VIEW and the CONTROLLER
$scope.field01   in CONTROLLER
{{field01}}	in VIEW
MVC MODEL
VIEW = HTML
MODEL = DATA = THIS IS ALSO THE SCOPE
CONTROLLER = JAVASCRIPT FUNCTION TO MANIPULATE THE DATA
Changing data in one affects all three
<div ng-app="myApp" ng-controller="myCtrl">
<input ng-model="name">
<h1>My name is {{name}}</h1>
</div>
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = "John Doe";
});
</script>
<p>When you change the name in the input field, the changes will affect the model, and it will also affect the name property in the controller.</p>
$scope : can vary on large pages
$rootScope : on ng-app element
it is possible to have controllers with variables of the same name in $scope and $rootScope - if there is a conflict the $scope wins
Angular Filters

Add a filter with a pipe symbol  eg {{field01 | lowercase }}
currency Format a number to a currency format.
date Format a date to a specified format.
filter Select a subset of items from an array.
json Format an object to a JSON string.
limitTo Limits an array/string, into a specified number of elements/characters.
lowercase Format a string to lower case.
number Format a number to a string.
orderBy Orders an array by an expression.
uppercase Format a string to upper case.
Can also add filter to ng-repeat="item in myArray | orderBy:'country'"
filter : selects subset eg containing the letter i
	<div ng-app="myApp" ng-controller="namesCtrl">
	<ul>
	  <li ng-repeat="x in names | filter : 'i'">
	    {{ x }}
	  </li>
	</ul>
	</div>
	<script>
	angular.module('myApp', []).controller('namesCtrl', function($scope) {
	    $scope.names = [
	        'Jani',
	        'Carl',
	        'Margareth',
	        'Hege',
	        'Joe',
	        'Gustav',
	        'Birgit',
	        'Mary',
	        'Kai'
	    ];
	});
	</script>
	<p>This example displays only the names containing the letter "i".</p>
Dynamic filter worked example
	<p><input type="text" ng-model="test"></p>
	<ul>
	  <li ng-repeat="x in names | filter:test">
	    {{ x }}
	  </li>
	</ul>
Changing the sort order based on ng-click
<div ng-app="myApp" ng-controller="namesCtrl">
<table border="1" width="100%">
  <tr>
    <th ng-click="orderByMe('name')">Name</th>
    <th ng-click="orderByMe('country')">Country</th>
  </tr>
  <tr ng-repeat="x in names | orderBy:myOrderBy">
    <td>{{x.name}}</td>
    <td>{{x.country}}</td>
  </tr>
</table>
</div>
<script>
angular.module('myApp', []).controller('namesCtrl', function($scope) {
  $scope.names = [
    {name:'Jani',country:'Norway'},
    {name:'Carl',country:'Sweden'},
    {name:'Margareth',country:'England'},
    {name:'Hege',country:'Norway'},
    {name:'Joe',country:'Denmark'},
    {name:'Gustav',country:'Sweden'},
    {name:'Birgit',country:'Denmark'},
    {name:'Mary',country:'England'},
    {name:'Kai',country:'Norway'}
  ];
  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
});
</script>
Can create custom filters - a 'filter factory'
Angular Services
Service = function which is available for the angular application
30 built-in services
	$location
	var app = angular.module('myApp', []);
	app.controller('customersCtrl', function($scope, $location) {
	    $scope.myUrl = $location.absUrl();
	});
	returns https://www.w3schools.com/angular/tryit.asp?filename=try_ng_services
	$http service
		handles http requests
		var app = angular.module('myApp', []);
		app.controller('myCtrl', function($scope, $http) {
		   $http.get("welcome.htm").then(function (response) {
		        $scope.myWelcome = response.data;
		   });
		});
		$timeout
			same as javascript timeout
			var app = angular.module('myApp', []);
			app.controller('myCtrl', function($scope, $timeout) {
			    $scope.myHeader = "Hello World!";
			    $timeout(function () {
			        $scope.myHeader = "How are you today?";
			    }, 2000);
			});
			$interval
				same as javascript $interval 
				var app = angular.module('myApp', []);
				app.controller('myCtrl', function($scope, $interval) {
				    $scope.theTime = new Date().toLocaleTimeString();
				    $interval(function () {
				        $scope.theTime = new Date().toLocaleTimeString();
				    }, 1000);
				});
    
Custom Service

	app.service('hexafy', function() {
	  this.myFunc = function (x) {
	      return x.toString(16);
	  }
	});
	app.controller('myCtrl', function($scope, hexafy) {
	    $scope.hex = hexafy.myFunc(255);
	});
Custom Service inside a filter

Define filter with service in it
	app.filter('myFormat',['hexafy', function(hexafy) {
	    return function(x) {
	        return hexafy.myFunc(x);
	    };
	}]);
	This function converts bytes to hexadecimal format for display
    
$http service

The .get method is a shortcut method of the $http service. There are several shortcut methods:
.delete()
.get()
.head()
.jsonp()
.patch()
.post()
.put()
<div ng-app="myApp" ng-controller="myCtrl"> 
<p>Today's welcome message is:</p>
<h1>{{myWelcome}}</h1>
</div>
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("welcome.htm")
    .then(function(response) {
        $scope.myWelcome = response.data;
    });
});
</script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : "welcome.htm"
    }).then(function mySuccess(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});
Same thing with anonymous functions
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("wrongfilename.htm")
    .then(function(response) {
        //First function handles success
        $scope.content = response.data;
    }, function(response) {
        //Second function handles error
        $scope.content = "Something went wrong";
    });
});
http response

The response from the server is an object with these properties:
.config the object used to generate the request.
.data a string, or an object, carrying the response from the server.
.headers a function to use to get header information.
.status a number defining the HTTP status.
.statusText a string defining the HTTP status.
$http displaying JSON data with ng-repeat

<div ng-app="myApp" ng-controller="customersCtrl"> 
<ul>
  <li ng-repeat="x in myData">
    {{ x.Name + ', ' + x.Country }}
  </li>
</ul>
</div>
<script>
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("customers.php").then(function(response) {
        $scope.myData = response.data.records;
    });
});
</script>
Working example at
	angular_36 and angular_37
	<!DOCTYPE html>
	<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
	<body>
	<div ng-app="myApp" ng-controller="customersCtrl"> 
	<table>
	  <tr ng-repeat="x in names">
	    <td>{{ x.Name }}</td>
	    <td>{{ x.Country }}</td>
	  </tr>
	</table>
	</div>
	<script>
	var app = angular.module('myApp', []);
	app.controller('customersCtrl', function($scope, $http) {
	    $http.get("customers.php")
	    .then(function (response) {$scope.names = response.data.records;});
	});
	</script>
	</body>
	</html>
Display table index

Filter : index
<td>{{ $index + 1 }}</td>
	See angular_38 
ng-if

Filter : ng-if
<table>
<tr ng-repeat="x in names">
<td ng-if="$odd" style="background-color:#f1f1f1">{{ x.Name }}</td>
<td ng-if="$even">{{ x.Name }}</td>
<td ng-if="$odd" style="background-color:#f1f1f1">{{ x.Country }}</td>
<td ng-if="$even">{{ x.Country }}</td>
</tr>
</table>
See angular_38
ng-options drop-down boxes

<div ng-app="myApp" ng-controller="myCtrl">
<select ng-model="selectedName" ng-options="x for x in names">
</select>
</div>
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.names = ["Emil", "Tobias", "Linus"];
});
</script>
or use <option ng-repeat>
<select>
<option ng-repeat="x in names">{{x}}</option>
</select>
see angular_41
$scope.cars = [
    {model : "Ford Mustang", color : "red"},
    {model : "Fiat 500", color : "white"},
    {model : "Volvo XC90", color : "black"}
];
<select ng-model="selectedCar" ng-options="x.model for x in cars">
</select>
<h1>You selected: {{selectedCar.model}}</h1>
<p>Its color is: {{selectedCar.color}}</p>
$scope.cars = {
    car01 : "Ford",
    car02 : "Fiat",
    car03 : "Volvo"
};
<select ng-model="selectedCar" ng-options="x for (x, y) in cars">
</select>
<h1>You selected: {{selectedCar}}</h1>
The selected value will always be the value in a key-value pair.
The value in a key-value pair can also be an object:
The options in the dropdown list does not have to be the key in a key-value pair, it can also be the value, or a property of the value object:
Example
<select ng-model="selectedCar" ng-options="y.brand for (x, y) in cars">
</select>
Angular displaying JSON data from PHP mySQL query

Angular displaying JSON data from CSharp SQL query

CORS Cross-Site Origin

PHP code
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("myServer", "myUser", "myPassword", "Northwind");
$result = $conn->query("SELECT CompanyName, City, Country FROM Customers");
$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Name":"'  . $rs["CompanyName"] . '",';
    $outp .= '"City":"'   . $rs["City"]        . '",';
    $outp .= '"Country":"'. $rs["Country"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();
echo($outp);
?>
ng-disabled

Angular Events

ng-blur
ng-change
ng-click
ng-copy
ng-cut
ng-dblclick
ng-focus
ng-keydown
ng-keypress
ng-keyup
ng-mousedown
ng-mouseenter
ng-mouseleave
ng-mousemove
ng-mouseover
ng-mouseup
ng-paste
An AngularJS event will not overwrite an HTML event, both events will be executed.
Mouse Events

Mouse events occur when the cursor moves over an element, in this order:
ng-mouseenter
ng-mouseover
ng-mousemove
ng-mouseleave
Or when a mouse button is clicked on an element, in this order:
ng-mousedown
ng-mouseup
ng-click
You can add mouse events on any HTML element.
Example : count on click
<div ng-app="myApp" ng-controller="myCtrl">
<h1 ng-mousemove="count = count + 1">Mouse over me!</h1>
<h2>{{ count }}</h2>
</div>
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.count = 0;
});
</script>
Toggle

just create a function and in it, set a variable to (not) the value of the variable so it toggles between true and false.  Then use ng-show around an element to only show when the variable is true
<div ng-app="myApp" ng-controller="myCtrl">
<button ng-click="myFunc()">Click Me!</button>
<div ng-show="showMe">
    <h1>Menu:</h1>
    <div>Pizza</div>
    <div>Pasta</div>
    <div>Pesce</div>
</div>
</div>
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
});
</script>
Event Data

Can get event data for example coordinates
<div ng-app="myApp" ng-controller="myCtrl">
<h1 ng-mousemove="myFunc($event)">Mouse Over Me!</h1>
<p>Coordinates: {{x + ', ' + y}}</p>
</div>
<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.myFunc = function(myE) {
        $scope.x = myE.clientX;
        $scope.y = myE.clientY;
    }
});
</script>
Angular Forms

Input controls are the HTML input elements:
input elements
select elements
button elements
textarea elements
checkbox
 <form>
    Check to show a header:
    <input type="checkbox" ng-model="myVar">
</form>
<h1 ng-show="myVar">My Header</h1>
radio buttons
Display some text, based on the value of the selected radio button:
 <form>
Pick a topic:
<input type="radio" ng-model="myVar" value="dogs">Dogs
<input type="radio" ng-model="myVar" value="tuts">Tutorials
<input type="radio" ng-model="myVar" value="cars">Cars
</form>
Try it Yourself »
The value of myVar will be either dogs, tuts, or cars.
select box
<form>
Select a topic:
<select ng-model="myVar">
    <option value="">
    <option value="dogs">Dogs
    <option value="tuts">Tutorials
    <option value="cars">Cars
</select>
</form>
Try it Yourself »
The value of myVar will be either dogs, tuts, or cars.
novalidate : new in HTML5 : required for angular to override standard HTML5 built-in form validation
Form Validation

required (from HTML)
input type=email/
Input fields have the following states:
$untouched The field has not been touched yet
$touched The field has been touched
$pristine The field has not been modified yet
$dirty The field has been modified
$invalid The field content is not valid
$valid The field content is valid
Forms have the following states:
$pristine No fields have been modified yet
$dirty One or more have been modified
$invalid The form content is not valid
$valid The form content is valid
$submitted The form is submitted
AngularJS Global API

angular.lowercase()/uppercase()/isString()/isNumber()
$apply and $digest

$apply() is used automatically within Angular to keep a track of auto-changes to any field, so that these changes can be automatically propogated to other fields.  $apply() calls $digest which 
$watch

$watch can watch for changes to a field
Angular Includes

Include HTML from other files
<div ng-include="otherfile.htm">  (note the include file can have angular code within)
see angular_42
CORS Cross-Origin Domain

Can include files from another domain

see angular_42 for a worked example of this working
Animations

Need angular-anmiate.js to be added as a script file
Angular Routing for SPAs

ng-route can be used to add routes to the application
Must have the angular-route.js file included as a script file
Then ng-route must be added as an application dependency
var app=angular.module('x',["ng-route"]);
Now have access to $routeProvider
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl: "main.htm"
	})
	.when("/test",{
	templateUrl:"test.htm"
	});
});
The files at main.htm or test.htm will be INCLUDED AT THE LOCATION SPECIFIED BY THE NG-VIEW DIV

or

or

Controllers for each view

It is possible to define a controller for each view
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"main.htm"
	})
	.when("/test",{
		templateUrl:"test.htm",
		controller:testCtrl
	});
});
app.controller("testCtrl",function($scope){
	$scope.msg = "test message";
});
Using $template and $templateUrl

using templateUrl can link to another page containing the content to be displayed in the view
Alternatively one can put HTML direct into the page using the template keyword
template:"
Test header
"
Otherwise Method

With routing we are presently using the .when("/route1") to test for a given route.
We can also add at the end an .otherwise option
.when("/thisroute",{templateUrl:"abc.htm"})
.otherwise({templateUrl:"alternativepage.htm"})
Note : href="#!.." is a 'hashbang' and used to link to content created on the server.  
	Content after the hash is never sent to the server. 
	So for example if you have the url example.com/#!recipes/bread. 
	In this case, the page at example.com would be fetched from the server, this could contain a piece of javascript. 
	This script can then read from location.hash, and load the page at /recipes/bread.
Bootstrap

Angular – add a little bit of bootstrap
Can add some simple bootstrap 
<body style="margin:50px">
	<h1>Angular JS 12 - array list with Bootstrap</h1>
	<div ng-controller="y as x"> 
	    <ul class="list-group">
		<li class="list-group-item" 
				ng-repeat="myObject in x.myObjects">
		    <h3>{{myObject.a}}
			  <em class="pull-right">£{{myObject.b}}</em>
	   	    </h3>
		</li>
	    </ul>
	</div>
Angular filters |

Filters | can be used to pipe | the output before displaying
For example to display £2.10 instead of £2.1 we use the following code
<li class="list-group-item" ng-repeat="myObject in x.myObjects">
	<h3>{{myObject.a}}
           	  <em class="pull-right">£{{myObject.b | currency}}</em>
	</h3>
</li>
Filter - LimitTo

Search results can be limited to a maximum specified number
<li class="list-group-item" ng-repeat="myObject in x.myObjects | 	limitTo:5">
	<h3>{{myObject.a}}
		<em class="pull-right">{{myObject.b | currency}}</em>
	</h3>
</li>
Filter - OrderBy

It is possible to order results by one of the fields
orderBy:'x' or '-x'
<li class="list-group-item" ng-repeat="myObject in x.myObjects | 	orderBy:'-b' | limitTo:5">          WILL SORT DESCENDING
	<h3>{{myObject.a}}
		<em class="pull-right">{{myObject.b | currency}}</em>
	</h3>
</li>
Angular - Images

Angular – displaying images
Now we can show how to display images from file names stored in our array.
In our js app file just add a field 'image' with a path to an image
	this.myObjects = [
		{a:"Item 1",b:2.10,image:"assets/images/Hopper-Cool.png"},
		{a:"Item 2",b:2.20,image:"assets/images/Hopper-Cool.png"}
	];
Just reflect this in the HTML code also
           <img src={{myObject.image}} />
Angular – displaying images
The HTML code should actually be
	<img ng-src="{{myObject.image}}" />
Angular Shopping List

Creating a sample shopping list - and let's use bootstrap for display purposes also
Just get the page up and running with dependencies - angular_46
Add a fixed list and display it - angular_47
Add an input box and a ng-click button to push() the item onto the array on click - angular_48
Next, add the remove 'X' button - see angular_49
This has errors 
	1) if duplcates are added so we can fix this
	2) permits addition of blank item
	Fix - see angular_50
Also add in green text when record successfully added - see angular_50
Angular - Setting Bootstrap Tab Values

Angular – adding multiple tabs per item
	Many items have more details which the user may want to have a look at.  
	They can be hidden on different tabs which the user can browse
		<ul class="nav nav-pills">
			<li><a href>Test</a></li>
			<li><a href>Test2</a></li>
		</ul>
Angular – adding an index per tab with ng-click
	
	We can now add an index per tab to keep a numeric tab on each item
		<ul class="nav nav-pills">
			<li><a href ng-click="tab = 1">Test</a></li>
			<li><a href ng-click="tab = 2">Test2</a></li>
		</ul>
		{{tab}} will hold the value of the current tab
Bootstrap Tab Content

We can now add content to each tab and only show it when the tab is the right number for this content.
To evaluate an expression to be TRUE when we want content to display we can code the  following
  <div ng-show="tab===1">content</div>
So we can now do this for our 2 tabs
	<ul class="nav nav-pills">
		<li><a href ng-click="tab = 1">Test</a></li>
		<li><a href ng-click="tab = 2">Test2</a></li>
	</ul>
	{{tab}}
	<div class="panel" ng-show="tab===1">Content for tab 1</div>
	<div class="panel" ng-show="tab===2">Content for tab 2</div>
Tab Content - Reading Via Angular

We can now develop this theme and pull down tab content from our database
this.myObjects = [
	{a:"Item 1",b:2.10,image:"assets/images/Hopper-Cool.png",
		description:"Some description here item 1",
		moredetail:"And more detail here item 1"}	];   });
This data can be put on the page with the following code
	<div class="panel" ng-show="tab===1">
						{{myObject.description}}</div>
	<div class="panel" ng-show="tab===2">
						{{myObject.moredetail}}</div>
Setting Bootstrap Initial Tab Values

When our page loads we can use ng-init to define initial values for example we can specify that tab 1 is visible and showing content by default
	<li class="list-group-item" 
ng-repeat="myObject in x.myObjects
		 |	orderBy:'-b' | limitTo:5" ng-init="tab=1">
Setting Bootstrap Classes ng-class

When a tab gets clicked on then bootstrap automatically sets the 
class of the tab to be 'active' and it displays in a different 
colour so the user knows which tab is the current tab
You will notice at present when the page loads although one of the tabs 
is active (Tab 1) yet Bootstrap has not yet detected a click so the 
class of that tab has not been set to active, so the user does not 
know which tab is active yet. 
We can fix this with ng-class
<ul class="nav nav-pills">
	<li ng-class="{active:tab===1}"><a href ng-click="tab =1">
								Description</a></li>
	<li ng-class="{active:tab===2}"><a href ng-click="tab = 2">
								More Detail</a></li>
</ul>
Angular Sub-Controllers

Let's take some of this code for creating the tabs for each item, 
and put it into a separate 'controller'
<div ng-init="tab=1" ng-controller="PanelController as panel">
	<ul class="nav nav-pills">
		<li ng-class="{active:tab===1}"><a href ng-click="tab = 						1">Description</a></li>
		<li ng-class="{active:tab===2}"><a href ng-click="tab = 2">More 					Detail</a></li>
	</ul>
	<div class="panel" ng-show="tab===1">{{myObject.description}}</div>
	<div class="panel" ng-show="tab===2">{{myObject.moredetail}}</div>
</div>
app.controller("PanelController",function(){    });                 in app.js
Angular – controller syntax
	Before we move on let's have a look at the HTML syntax at work
	<div	 REALM IN WHICH THE CONTROLLER IS VALID 
	ng-controller="PanelController as panel">…</div>
	
	PanelController maps to the name declared in the app.js file
	panel maps to the 'alias' name which we can now use in our HTML code in order to map to the PanelController in app.js, so whenever we use panel in the HTML code we can call on named functions within the controller.
Moving ng-init code into the controller code

Now we can separate some of the ng-directives out of the logic of the HTML code into where it should be ie inside the Javascript file
First thing to move is the ng-init="tab=1"
app.controller("PanelController",function(){
	this.tab=1;
});
Moving ng-click into controller code

We can also create a click function in the controller which has the following syntax:
HTML
	ng-click="panel.selectTab(1)"
	panel REFERS TO THE NAME WE CAN USE IN HTML TO CALL THE APPROPRIATE FUNCTION IN OUR CONTROLLER
	selectTab actually gives the controller method a name
	(1) passes a parameter to our function when we call it
Javascript app.js code
	this.selectTab=function(setTab){
			this.tab=setTab;
	};
	
	this will refer to the PanelController context
	
	selectTab refers to the Javascript function being called
	
	setTab allows us to set the tab number to 1 or 2
Moving ng-class into controller

We can also move the 'active' tab syntax 
HTML
	ng-class="{active:panel.isSelected(1)}" 
Javascript
	this.isSelected=function(checkTab){
		return this.tab===checkTab;
	}; 
The ng-class="active:true" will only be set when we match the this.tab variable (currently selected tab) against the relevant tab number
Angular Forms
 
We want to look at users being able to enter data now
For example a product review with comments and a rating
Basic HTML without extra Angular
<div class="panel" ng-show="panel.isSelected(3)">
<p>Review Rating : {{myObject.reviewStars}}</p>
<p>Review Comments : {{myObject.reviewComments}}</p>
<p>Review Author : {{myObject.reviewAuthor}}</p>
</div>
<div class="panel" ng-show="panel.isSelected(4)">
<form>
	Please enter your rating (1 (worst) - 5 (best)) <input type="number" min="1" 	max="5" />
	<textarea placeholder="Please enter your feedback comments"></textarea>
	<input type="email" placeholder="Your Email Address" />
	<input type="submit" value="submit" />
</form>
</div>
Angular 2

Note : AngularJS is Angular version 1
Angular covers version 2 onwards
Curent version is 4
Getting Started

https://angular.io/guide/quickstart
Build an Angular project with Typescript using the Angular CLI command line.

    
Install the Angular client - npm install -g @angular/cli or npm install --save-dev @angular/cli@latest

    
Create a new application - ng new my-app

    
Change directory cd my-app

    
Launch the server ng serve --open

    
View application at http://localhost:4200/

Anatomy Of An Angular App

src
	app
		app.compoenent...
	assets
		images etc go here
	environments
	favicon.ico
	index.html
	main.ts
	polyfills.ts
	styles.css
		Global styles go here
	test.ts
	tsconfig.app.json
	tsconfig.spec.json
Other files and folders are for build, test, maintain, document and deployment.
my-app
	e2e
		End To End tests
	angular-cli.json
	editorconfig
	karma.conf.js
	protractor.conf.js
	tsconfig.json
		TypeScript 
	tslint.json
Angular 4

Angular 4 Intro

Installing

npm install -g @angular/cli
ng new myApp01
cd myApp01
ng serve
Then run application on http://localhost:4200
Angular 4 Folder Structure

## Angular Glossary

Angular Directive

Directive is an ANGULAR EXTENSION TO HTML using the ng-xxx tag
 ng-show
 ng-hide
 ng-repeat
Angular Application

ng-app
	
	Links the HTML page to the Angular module
HTML
	
	<html ng-app="x">
Javascript
  var app = angular.module('x',[])
Angular Controller

Angular – app and controller
 app is like the overall function, getting into the flow of the Javascript of the named module
 controller is like an individual named function within the app.js file
Controllers define
Functions
 app.controller('x',function(){});
Values
Angular – JSON objects
Create a JSON object with
 var app = angular.module('x',[]);                  ng-app="x"
 app.controller('y',function(){
     this.myObject={a:1,b:"string"}             this refers to 'app'
})
Display in HTML with
<div ng-controller="y as x">
	{{x.myObject.a}}
          {{x.myObject.b}}
</div>
Angular Scope

var app = angular.module('x',[]);                  ng-app="x"
app.controller('y',function(){
     this.myObject={a:1}                             this refers to the controller
})
HTML 
<div ng-controller="y as x">
	{{x.myObject.a}}                                    VALID SCOPE
</div>
	
	{{x.myObject.a}}  		                         INVALID SCOPE
Angular ng-show and ng-hide

var app = angular.module('x',[]);                 
app.controller('y',function(){
     this.myObject={a:1,b:true,c:false}                              
})
HTML 
<div ng-controller="y as x">
	{{x.myObject.a}}                                    
	<button ng-show="x.myObject.b">ITEM IS TRUE</button>
	<button ng-show="x.myObject.c">ITEM IS FALSE</button>
</div>
ng-show 
	<div ng=show="x.myObject.b">WILL SHOW IF b TRUE</div>
NOT ng-show
	<div ng-show="!x.myObject.B>WILL HIDE IF b FALSE</div>
ng-hide
	<div ng-hide="x.myObject.c">WILL HIDE IF c TRUE</div>
Angular Arrays

In the JSON object we now turn it into an array of objects
var app = angular.module('x',[]);                  ng-app="x"
app.controller('y',function(){
     this.myObject=[ {a:1} , {a:2} ];  	    It's now an array
})
HTML 
<div ng-controller="y as x">
	{{x.myObject[0].a}}
	{{x.myObject[1].a}} 
</div>
Angular ng-repeat

ng-repeat can be used to automatically parse an array
	<div ng-controller="y as x">        
		<div ng-repeat="myObjectItem in x.myObject">
			<p>{{myObjectItem.a}}</p>
	</div>
Angular – ng-repeat 
 Renaming – can be convenient to call the ARRAY OBJECT AS A PLURAL EG myObjects so that we can now use myObject in myObjects
	<div ng-controller="y as x">        
		<div ng-repeat="myObject in x.myObjects">
			<p>{{myObject.a}}</p>
	</div>
	app.controller('y',function(){
		this.myObjects = [{a:1},{a:2}];      //array given PLURAL name
	});
Angular Module

Module is where your js code lives
 var app = angular.module('x',[])            	
Controller is like a function 
<div ng-controller="y as x"      		function y in  x
Angular Expression

Expression
<p>{{1+2}}</p>
<p>{{myObject.a}}</p>
Angular ng-copy

Instructs code to run when the user copies an element
<input type="text" ng-copy="{{count=count+1}}" ng-init="count=0" value="copy me multiple times">
see angular_29 also index.htm#ng-copy
```

## Code Snippets

Angular JS 

```html
<html>
<script src="js\angular.min.js"></script> 
<body> 
<div ng-app=""> 
<p>Input my id in the input box:</p> 
<p><input type="text" ng-model="id" </p> 
<br> 
<h1>Welcome! {{id}}</h1> 
</div> 
</body> 
</html> 
 
 
 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJS for beginners</title> 
	<script src="js\angular.min.js"></script> 
</head> 
<body> 
	<div ng-app=" "> 
    	The AngularJSapplication has been started. 
	</div> 
</body> 
</html> 
 
 
 
 
Example 2.2 
 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJSfor beginners</title> 
	<script src="js\angular.min.js"></script> 
</head> 
<body> 
<div ng-app=""> 
<p>User Name: <br> 
<input type="text" ng-model = "Username"></p> 
</div> 
</body> 
</html> 
 
 
 
 
Example 2.3 
 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJSfor beginners</title> 
	<script src="js\angular.min.js"></script> 
</head> 
<body> 
<div ng-app=""> 
<p>User Name: <br> 
<input type="text" ng-model = "Username"></p> 
<p ng-bind="Username"></p>  
</div> 
</body> 
</html> 
 
 
 
 
Example 2.4 
 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJSfor beginners</title> 
	<script src="js\angular.min.js"></script> 
</head> 
<body> 
<div ng-app=""   ng-init="Username= 'Andy Smith' "> 
   <p>User Name: <input type="text" ng-model = "Username"></p> 
   <p ng-bind="Username"></p>  
</div> 
</body> 
</html> 
 
 
 
 
 
 
Example 2.5 
 
<html > 
<head> 
	<title>AngularJSfor beginners</title> 
<script src="js\angular.min.js"></script> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
</head> 
<body> 
<div ng-app=""  ng-init = "ColorName = ['Pink', 'Red', 'Green', 'Blue', 'Black', 'White', 'Yellow', 'Gray']"> 
<p style="color:green; font-weight:bold">Colours Name:</p> 
<ol> 
 	<li ng-repeat="x in ColorName"> 
  <p ng-bind="x"></p>       
 	</li> 
</ol>	 
</div> 
</body> 
</html> 
 
 
 
 
 
Hour 3 
 
 
 
 
 
Example 3.1 
 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJSfor beginners</title> 
<script src="js\angular.min.js"></script> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
</head> 
<body> 
<h3>Using Upper Case Filter</h3> 
<div ng-app=""  ng-init="Username= 'ray' "> 
<p>User Name: <input type="text" ng-model = "Username"></p> 
<p style="color:red" ng-bind="Username | uppercase"></p>  
</div> 
</body> 
</html> 
 
 
 
 
 
Example 3.2 
 
<html > 
<head> 
	<title>AngularJSfor beginners</title> 
	<script src="js\angular.min.js"></script> 
</head> 
<body> 
<h3>Using Lower Case Filter</h3> 
<div ng-app=""  ng-init="Username= 'Ray YAO' "> 
<p>User Name: <input type="text" ng-model="Username"></p> 
<p style="color:red" ng-bind="Username | lowercase"></p>  
</div> 
</body> 
</html> 
 
 
 
 
Example 3.3 
 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJSfor beginners</title> 
	<script src="js\angular.min.js"></script> 
</head> 
<body> 
<h1>Using OrderBy filter</h1> 
<div ng-app="" ng-init="StudentsResult=[{name: 'Tienq', marks:81},	{name: 'Svbrf', marks:70},	{name: 'Yaito', marks:90}, {name: 'Pewfn', marks:63}, {name: 'Riet', marks:98}]"> 
<table border="1" > 
<tr> 
<th>Student Name</th> 
<th>Mathematics Result</th> 
</tr> 
<tr ng-repeat="x in StudentsResult | orderBy:'-marks' "> 
<td ng-bind="x.name "></td> 
<td ng-bind="x.marks "></td> 
</tr> 
</table>	 
</div> 
</body> 
</html> 
 
 
 
 
 
Example 3.4 
 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJSfor beginners</title> 
	<script src="js\angular.min.js"></script> 
</head> 
<body> 
<h1>Using OrderBy filter</h1> 
<div ng-app="" ng-init="StudentsResult=[{name: 'Tienq', marks:81},	{name: 'Svbrf', marks:70},	  
{name: 'Yaito', marks:90}, {name: 'Pewfn', marks:63}, {name: 'Riet', marks:98}]"> 
<table border="1" > 
<tr> 
<th>Student Name</th> 
<th>Mathematics Result</th> 
</tr> 
<tr ng-repeat="x in StudentsResult | orderBy:'marks' "> 
<td ng-bind="x.name "></td> 
<td ng-bind="x.marks "></td> 
</tr> 
</table>	 
</div> 
</body> 
</html> 
 
 
 
 
 
Example 3.5 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJSfor beginners</title> 
<script src="js\angular.min.js"></script> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
</head> 
<body> 
<h1>Using Currency filter</h1> 
 <div ng-app="" ng-init = "Employees_Monthly_Salary=[{name: 'Jay', salary:8100}, {name: 'Sdwt', salary:7000}, {name: 'Hao', salary:9000}, {name: 'Luoe', salary:6300}, {name: 'Fin', salary:9800}]"> 
<table border="1" > 
<tr> 
<th>Employee Name</th> 
<th>Employee Salary</th> 
</tr> 
<tr ng-repeat="x in Employees_Monthly_Salary  "> 
<td ng-bind="x.name "></td> 
<td ng-bind="x.salary | currency "></td> 
</tr> 
</table>	 
</div> 
</body> 
</html> 
 
 
 
 
Hour 4 
 
 
 
 
 
Example 4.1 
 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJS for beginners</title> 
	<script src="js/angular.min.js"></script> 
</head> 
<body> 
<h3>Using Show directive</h3> 
<div ng-app="" > 
<input type="checkbox" ng-model="showHideDiv">Show Div 
<div ng-show="showHideDiv" style="background-color:yellow;height:50px;"> 
<p>I am a div</p> 
<p>I appear when the check box is checked.</p> 
</div> 
</div> 
</body> 
</html> 
 
 
 
 
 
Example 4.2 
 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJSfor beginners</title> 
<script src="js\angular.min.js"></script> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
</head> 
<body> 
<h3>Using Hide directive</h3> 
<div ng-app="" > 
<input type="checkbox" ng-model="HideShowDiv">Hide Div 
<div ng-hide="HideShowDiv" style="background-color:pink;height:50px;"> 
<p>I am a div</p> 
<p>I will disappeared when the check box is checked.</p> 
</div> 
</div> 
</body> 
</html> 
 
 
 
 
 
Example 4.3 
 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJS for beginners</title> 
	<script src="js/angular.min.js"></script> 
</head> 
<body> 
<h3>Using Disable directive</h3> 
<div ng-app="" > 
<input type="checkbox" ng-model="DisableEnable">Disable Button<br><br><br> 
<input type="button" ng-disabled="DisableEnable" value="Submit"> 
</div> 
</body> 
</html> 
 
 
 
 
Example 4.4 
 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJSfor beginners</title> 
<script src="js\angular.min.js"></script> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
</head> 
<body> 
<h3>Using Click directive</h3> 
<div ng-app=""  ng-init="increaseNumber=0"> 
<button ng-click="increaseNumber = increaseNumber + 1">Click Me!</button> 
<p ng-bind="increaseNumber" style="color:blue"></p> 
</div> 
</body> 
</html> 
 
 
 
 
 
Hour 5 
 
 
 
 
 
Example 5.1 
 
<!DOCTYPE html> 
<html > 
<head> 
<title>AngularJSfor beginners</title> 
	<script src="js\angular.min.js"></script> 
</head> 
<body> 
<h3>Add Two Numbers Using Click Event</h3> 
<div ng-app=""  ng-init="firstNumber=47; secondNumber=23"> 
<p>First Number :  <input type="number" ng-model = "firstNumber"></p> 
<p>Second Number: <input type="number" ng-model = "secondNumber"></p> 
<button ng-click="Result=firstNumber + secondNumber"> Add Numbers </button> 
 <p>Result:<p style="font-weight:bold; color:blue" ng-bind = "Result"> </p></p> 
</div> 
</body> 
</html> 
 
 
 
 
 
Example 5.2 
 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJS for beginners</title> 
	<script src="js/angular.min.js"></script> 
</head> 
<body> 
<h4>Add Two Numbers Using Double Click Event</h4> 
<div ng-app=""  ng-init="firstNumber=26;SecondNumber=89"> 
<p>First Number:  &nbsp;&nbsp;&nbsp; <input type="number" ng-model="firstNumber"></p> 
<p>Second Number: <input type="number" ng-model="SecondNumber"></p> 
<button ng-dblclick="Result=firstNumber + SecondNumber">Double Click</button> 
 <p>Result:<p style="font-weight:bold;color:blue" ng-bind="Result"> </p> 
</div> 
</body> 
</html> 
 
 
 
 
 
Example 5.3 
 
<!doctype html> 
<html> 
<head> 
<script src="js\angular.min.js"> 
</script> 
</head> 
<body ng-app=""> 
<br><br> 
<textarea ng-mousemove="count = count + 1"  
ng-init="count=0"> 
Here is a textarea 
</textarea> 
<br><br> 
<h2>count: {{count}}</h2> 
</body> 
</html> 
 
 
 
 
 
Example 5.4 
 
<!doctype html> 
<html> 
<script src="js\angular.min.js"></script> 
<body ng-app=""> 
 <br><br> 
<textarea ng-mouseover="count = count + 1"  
ng-init="count=0"> 
 Here is a textarea. 
</textarea> 
<br><br> 
<h2>count: {{count}}</h2> 
</body> 
</html> 
 
 
 
 
 
Example 5.5 
 
<!doctype html> 
<html> 
<head> 
<script src="js\angular.min.js"> 
</script> 
</head> 
<body ng-app=""> 
<br><br> 
<textarea ng-mouseleave="count = count + 1"  
ng-init="count=0"> 
Here is a textarea 
</textarea> 
<br><br> 
<h2>count: {{count}}</h2> 
<body> 
</html> 
 
 
 
 
 
Example 5.6 
 
<!doctype html> 
<html> 
<head> 
<script src="js\angular.min.js"> 
</script> 
</head> 
<body ng-app=""> 
<br><br> 
<textarea ng-keyup="count = count + 1"  
ng-init="count=0"> 
Here is a textarea 
</textarea> 
<br><br> 
<h2>count: {{count}}</h2> 
<body> 
</html> 
 
 
 
 
 
Example 5.7 
 
<!doctype html> 
<html> 
<head> 
<script src="js\angular.min.js"> 
</script> 
</head> 
<body ng-app=""> 
<br><br> 
<textarea ng-keydown="count = count + 1"  
ng-init="count=0"> 
Here is a textarea 
</textarea> 
<br><br> 
<h2>count: {{count}}</h2> 
<body> 
</html> 
 
 
 
 
 
Hour 6 
  
 
 
 
 
 
Example 6.1 
 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJS for beginners</title> 
	<script src="js/angular.min.js"></script> 
</head> 
<body> 
<h4>Combine Two String Using String Expression</h4> 
<div ng-app="" > 
First String &nbsp;&nbsp;&nbsp;: <input type="text" ng-model="firstString"/><br><br> 
Second String: <input ng-model="secondString"/><br><br> 
Resulting String:<p style="color:blue;font-weight:bold;">{{firstString +" "+secondString}}</p> 
</div>  
</body> 
</html> 
 
 
 
 
 
Example 6.2 
 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJS for beginners</title> 
	<script src="js/angular.min.js"></script> 
</head> 
<body> 
<h4>Multiply Two Number Using Number Expression</h4> 
<div ng-app="" ng-init="firstNumber=9;secondNumber=6"> 
First Number &nbsp;&nbsp;&nbsp;: <input type="number" ng-model="firstNumber"/><br><br> 
Second Number: <input type="number" ng-model="secondNumber"/><br><br> 
Result:<p style="color:blue;font-weight:bold;">{{firstNumber * secondNumber}}</p> 
</div>  
</body> 
</html> 
 
 
 
 
 
Example 6.3 
 
<html > 
<script src= "js\angular.min.js"></script> 
<body> 
<h4>Object Expression</h4> 
<div ng-app=""  ng-init="EmployeeObject = {Emp_name: 'Jay Smith', 	Emp_Month: 'June.15 2015',  Emp_salary: '$8000'}"> 
<p>Employee Name :  {{EmployeeObject.Emp_name}}</p> 
<p>Salary's Month:  {{EmployeeObject.Emp_Month}}</p> 
<p>Employee Salary:  {{EmployeeObject.Emp_salary}}</p> 
</div> 
</body> 
</html> 
 
 
 
 
Example 6.4 
 
<!DOCTYPE html> 
<html > 
<head> 
	<title>AngularJS for beginners</title> 
	<script src="js/angular.min.js"></script> 
</head> 
<body> 
<h4>My Math Result Using Array Expression</h4> 
<div ng-app="" ng-init="MySSCmarks=[98,96,93,99,99]"> 
<p>My score in mathematics is:  {{MySSCmarks[4]}}</p> 
</div>  
</body> 
</html> 
 
 
 
 
 
 
 
Hour 7 
 
 
 
 
Example 7.1 
 
<html> 
<script src= "js\angular.min.js"></script> 
<body> 
<div ng-app="Calculation" ng-controller="myController"> 
 
First Number: <input type="number" ng-model="firstNumber"><br> 
Second Number: <input type="number" ng-model="secondNumber"><br> 
<br> 
Sum: {{firstNumber + secondNumber}} 
</div> 
<script> 
var app = angular.module('Calculation', [ ]); 
app.controller('myController', function($scope) { 
	$scope.firstNumber = 4; 
	$scope.secondNumber = 8; 
}); 
</script> 
</body> 
</html> 
 
 
 
 
 
Example 7.2 
 
<script> 
function ($scope) { 
	$scope.firstNumber = 23; 
	$scope.secondNumber = 63; 
} 
</script> 
 
 
 
 
 
Hour 8 
 
 
 
 
 
Example 8.1 
 
<html> 
<script src= "js\angular.min.js"></script> 
<body> 
<div ng-app="myApplication" ng-controller="myController"> 
{{ firstNum + lastNum }} 
</div> 
<script> 
var myModule = angular.module("myApplication", [ ]); 
myModule.controller("myController", function($scope) { 
	$scope.firstNum = 100; 
	$scope.lastNum = 200; 
}); 
</script> 
</body> 
</html> 
 
 
 
 
 
Example 8.2 
 
<html> 
<script src= "js\angular.min.js"></script> 
<body> 
<div ng-app="myApplication" ng-controller="myController"> 
<p>{{ text1 }}</p> 
<p>{{ text2 }}</p> 
</div> 
<script> 
var myModule = angular.module('myApplication', [ ]); 
myModule.controller('myController', function($scope) { 
$scope.text1 = "javascript"; 
$scope.text2 = angular.uppercase($scope.text1); 
}); 
</script> 
</body> 
</html> 
 
 
 
 
 
Example 8.3 
 
<html> 
<script src= "js\angular.min.js"></script> 
<body> 
<div ng-app="myApplication" ng-controller="myController"> 
<p>{{ text1 }}</p> 
<p>{{ text2 }}</p> 
</div> 
<script> 
var myModule = angular.module('myApplication', [ ]); 
myModule.controller('myController', function($scope) { 
$scope.text1 = "JAVASCRIPT"; 
$scope.text2 = angular.lowercase($scope.text1); 
}); 
</script> 
</body> 
</html> 
 
 
 
 
 
Example 8.4 
 
<html> 
<script src= "js\angular.min.js"></script> 
<body> 
<div ng-app="myApplication" ng-controller="myController"> 
<p>{{ text1 }}</p> 
<p>{{ text2 }}</p> 
</div> 
<script> 
var myModule = angular.module('myApplication', [ ]); 
myModule.controller('myController', function($scope) { 
$scope.text1 = "JAVASCRIPT"; 
$scope.text2 = angular.isString($scope.text1); 
}); 
</script> 
</body> 
</html> 
 
 
 
 
 
Example 8.5 
 
<html> 
<script src= "js\angular.min.js"></script> 
<body> 
<div ng-app="myApplication" ng-controller="myController"> 
<p>{{ text1 }}</p> 
<p>{{ text2 }}</p> 
</div> 
<script> 
var myModule = angular.module('myApplication', [ ]); 
myModule.controller('myController', function($scope) { 
$scope.text1 = "JAVASCRIPT"; 
$scope.text2 = angular.isNumber($scope.text1); 
}); 
</script> 
</body> 
</html> 
 
 
 
 
 
Example 8.6 
 
<html> 
<script src= "js\angular.min.js"></script> 
<body> 
<script>     
var myDate = "Aug/10/2015"; 
var dateObject = new Date();    
document.write(angular.isDate(myDate) + "  ");   
document.write(angular.isDate(dateObject) + "  ");        
</script>   
</body> 
</html> 
 
 
 
 
 
Example 8.7 
 
<html> 
<script src= "js\angular.min.js"></script> 
<body> 
<script>     
var myString = "This is a string";     
function myFunction()   
{   
	return "This is inside a function";   
}   
document.write(angular.isFunction(myString) + "  "); 
document.write(angular.isFunction(myFunction) + " ");     
</script>   
</body> 
</html> 
 
 
 
 
 
Example 8.8 
 
<!DOCTYPE html>   
<html ng-app="">     
<head>     
 <title>Check Element</title>  
<script src="js\angular.min.js"></script>   
</script>     
</head>     
<body>   
<script>  
document.write("<br>");  
document.write("Title is a Dom elememt?");   
document.write("<br>");  
document.write(angular.isElement('title'));   
document.write("<br><br>");    
document.write("Title is a HTML element?");  
document.write("<br>");  
var check=angular.isElement( 
document.querySelector('title'));  
document.write(check); 
</script>   
</body>     
</html>   
 
 
 
 
 
Example 8.9 
 
<html> 
<script src= "js\angular.min.js"></script> 
<body> 
<script>     
var myCar = "This is my car!";    
var carObject = new Object( ) ;   
document.write(angular.isObject(myCar) + " ");  
document.write(angular.isObject(carObject) + " ");     
</script>  
 </body> 
</html> 
 
 
 
 
 
Example 8.10 
 
<html> 
<script src= "js\angular.min.js"></script> 
<body> 
<script>     
var futureCar; 
var existingCar = "Very Good!";    
document.write(angular.isDefined(futureCar) + " ");     
document.write(angular.isDefined(existingCar) + " ");        
</script> 
</body> 
</html> 
 
 
 
 
 
Example 8.11 
 
<html> 
<script src= "js\angular.min.js"></script> 
<body> 
<script>     
var futureCar; 
var existingCar = "Very Good!";    
document.write(angular.isUndefined(futureCar) + " ");     
document.write(angular.isUndefined(existingCar) + " ");        
</script> 
</body> 
</html>   
 
 
 
 
 
Appendix 2  
JavaScript Programs Review 
 
 
 
 
 
1. Countdown to load webpage 
 
<html xmlns="http://www.w3.org/1999/xhtml" > 
<head> 
<title>Countdown to load the page</title> 
<meta http-equiv="Content-Type"  
content="text/html; charset=UTF-8" /> 
<META HTTP-EQUIV="REFRESH" CONTENT="10;  
URL=http://www.amazon.com"> 
<script language="JavaScript"> 
 timeObject = new Date(); 
 countStart = timeObject.getTime(); 
 function initTimer()  
 {  
  var myTime = new Date();  
     	var currentTime = myTime.getTime();   
     	var diffTime = currentTime - countStart;  
     	this.diffSeconds = diffTime/1000;        
     	return(this.diffSeconds);               
 }  
  function getSeconds()  
 {  
     	var mySeconds0 = initTimer();  
     	var mySeconds1 = ""+mySeconds0;  
     	mySeconds1= 10 - eval( 
mySeconds1.substring(0,mySeconds1.indexOf(".")))  
 + " seconds";  
 document.myForm.timeElapse.value = mySeconds1;  
window.setTimeout('getSeconds()',1000);  
 } 
 </script> 
</head> 
<body  onLoad="window.setTimeout('getSeconds()',1)"> 
  <center><br> 
 Load web page after 10 seconds:<br><br> 
 <form name=myForm> 
<input size=9 name=timeElapse></form> 
 </center> 
</body> 
</html>  
 
 
 
 
 
 
2. Are you sure to delete? 
 
<html xmlns="http://www.w3.org/1999/xhtml" > 
<head> 
	<title>Confirm Delete</title> 
<meta http-equiv="Content-Type"  
content="text/html; charset=UTF-8" /> 
	<script language="javascript"> 
 	function delOperation() 
	{ 
   	if(confirm("Are you sure to delete?")) 
      	alert("Already deleted!"); 
   	else 
      	alert("Cancel deleted!"); 
	} 
	</script> 
</head> 
<body> 
<center> 
<br>Are you sure to delete?<br><br> 
<input id="deleteButton" type="button"  
value="Delete" onClick="delOperation()" /> 
</center> 
</body> 
</html> 
 
 
 
 
 
 
3. Marquee Text 
 
<html xmlns="http://www.w3.org/1999/xhtml" > 
<head> 
<title>Marquee Text</title> 
<meta http-equiv="Content-Type"  
content="text/html; charset=UTF-8" /> 
</head> 
<body> 
<div align="center"> 
  <p>&nbsp;</p> 
  <p><span>The Text Scrolls Up Slowly  
	</span><br><br> 
  </p> 
</div> 
<marquee direction=up scrollamount=1  
scrolldelay=100 onmouseover='this.stop()'  
onmouseout='this.start()' height=60> 
<div align="center"> 
  <table> 
	<tr> 
  	<td> 
    	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</td> 
	</tr> 
	<tr> 
  	<td> 
    	BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB</td> 
	</tr> 
	<tr> 
  	<td> 
  	CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</td> 
	</tr> 
	<tr> 
  	<td> 
    	DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD</td> 
	</tr> 
	<tr> 
  	<td> EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</td> 
	</tr> 
	<tr> 
  	<td> 
 	FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF</td> 
	</tr> 
    	<td>  	GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</td> 
  	</tr> 
	<tr> 
  	<td> 
    	HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</td> 
	</tr> 
	<tr> 
  	<td> 
  	KKKKKKKKKKKKKKKKKKKKKKKKKKKKK</td> 
  </table> 
</div> 
</marquee> 
</body> 
</html> 
 
 
 
 
 
 
4. Count how many letters 
 
<html xmlns="http://www.w3.org/1999/xhtml" > 
<head> 
</head> 
<body> 
<p align="center">&nbsp;</p> 
<p align="center">Count how many leters<br> 
</p> 
<div align="center"> 
  <script language="JavaScript">  
function cal(str) 
{  
	re=/[a-z & A-Z]/g;   
	if(re.test(str))        
	return str.match(re).length  
	else  
	return 0  
}  
</script>  
<input onBlur="alert(cal(this.value) )"> 
<input type="button" value="Count Letters"> 
</div> 
</body>  
</body> 
</html> 
 
 
 
 
 
 
5. Search Engine 
  
<html xmlns="http://www.w3.org/1999/xhtml" > 
<head> 
<title>Search Engine</title> 
<meta http-equiv="Content-Type"  
content="text/html; charset=UTF-8" /> 
</head> 
<body><br><br> 
<form Name="myForm"> 
<div align="center"><center><p> 
<script language="JavaScript"> 
var formVariable; 
function makeSearch() 
{ 
 
document.forms[formVariable +  
document.myForm.SearchSelect. 
selectedIndex].elements[0].value= 
document.myForm.SeachText.value; 
document.forms[formVariable+ 
document.myForm.SearchSelect.selectedIndex].submit(); 
} 
</script> 
</p> 
	<p><span style="font-size: 12pt">Keyword:</span> 
    	<input name="SeachText" type="text" size="21"  
style=" margin-left: 1px"> 
	</p> 
	<p><br> 
    	<span style="font-size: 12pt">Select Enginee:</span> 
    	<select Name="SearchSelect" size="1" > 
      	<option selected>Yahoo</option> 
      	<option value="Google">Google</option> 
      	<option value="Bing">Bing</option> 
    	</select> 
  	</p> 
	<p><br> 
<input type="button" value=" SEARCH "  
onClick="makeSearch()">  
    	<script language="JavaScript"> 
formVariable=document.forms.length 
    	</script> 
	</p> 
</center></div> 
</form> 
<form action="http://search.yahoo.com/bin/search"  
method="get"> 
<input type="hidden" name="p" value> 
</form> 
<form action="http://www.google.com/search"> 
<input type="hidden" name="q" value> 
</form> 
<form action="http://www.bing.com/search"> 
<input type="hidden" name="q" value> 
</form> 
</body> 
</html> 
 
 
 
 
 
 
 
6. Select Tag 
 
<html xmlns="http://www.w3.org/1999/xhtml" > 
<head> 
	<title>Select Tag</title> 
<meta http-equiv="Content-Type"  
content="text/html; charset=UTF-8" /> 
<style> 
.conts{visibility:hidden} 
.tab{border-top:solid thin #E0E0E0; 
border-right:solid thin gray; 
border-left:solid thin #E0E0E0; 
font-family:Verdana; 
font-size:10pt; 
text-align:center; 
font-weight:normal} 
.selTab{border-left:solid thin white; 
border-top:solid thin white; 
border-right:solid thin black; 
font-weight:bold; 
text-align:center} 
</style> 
<script language="JavaScript"> 
function public_Labels(label1, label2,  
label3, label4, label5) 
{ 
t1.innerText = label1; 
t2.innerText = label2; 
t3.innerText = label3; 
t4.innerText = label4; 
t5.innerText = label5; 
} 
function public_Texts(Texts1,  
Texts2, Texts3, Texts4, Texts5){ 
t1Texts.innerHTML = Texts1; 
t2Texts.innerHTML = Texts2; 
t3Texts.innerHTML = Texts3; 
t4Texts.innerHTML = Texts4; 
t5Texts.innerHTML = Texts5; 
init(); 
} 
function init(){ 
tabTexts.innerHTML = t1Texts.innerHTML; 
} 
var nowTab; 
var myTab; 
var mark = true; 
function altertab(){ 
if(mark == true){ 
nowTab = t1; 
myTab = t1base; 
mark = false; 
} 
if(window.event.srcElement.className == "tab") 
{ 
nowTab.className = "tab"; 
myTab.style.backgroundColor = "white"; 
nowTab = window.event.srcElement; 
myTabID = nowTab.id + "base"; 
tabContentID = nowTab.id + "Texts"; 
myTab = document.all(myTabID); 
tabContent = document.all(tabContentID); 
nowTab.className = "selTab"; 
myTab.style.backgroundColor = ""; 
tabTexts.innerHTML = tabContent.innerHTML; 
}} 
</script> 
</head> 
<body BGCOLOR="white" onclick="altertab()" onLoad="init()"> 
<br><br> 
<table align="center" CELLPADDING="0" CELLSPACING="0"  
bgcolor="yellow" STYLE="width:400; height:300"> 
<tr><td ID="t1" CLASS="selTab" HEIGHT="25">SELECT 1</td> 
<td ID="t2" CLASS="tab">SELECT 2</td> 
<td ID="t3" CLASS="tab">SELECT 3</td> 
<td ID="t4" CLASS="tab">SELECT 4</td> 
<td ID="t5" CLASS="tab">SELECT 5</td> 
</tr><tr> 
<td ID="t1base" STYLE="height:2; background-colro:white"> 
</td> 
<td ID="t2base" STYLE="height:2; background-color:white"> 
</td> 
<td ID="t3base" STYLE="height:2; background-color:white"> 
</td> 
<td ID="t4base" STYLE="height:2; background-color:white"> 
</td> 
<td ID="t5base" STYLE="height:2; background-color:white"> 
</td> 
</tr><tr><td HEIGHT="*" COLSPAN="5" ID="tabTexts" 
STYLE="border-left:solid thin white;border-bottom:solid  
thin white;border-right:solid thin white">&nbsp;</td> 
</tr></table></div><div CLASS="conts" ID="t1Texts"> 
<p align="center">1.AAAAAAAAAA</p> 
</div><div CLASS="conts" ID="t2Texts"> 
<p align="center">2.BBBBBBBBBB</p> 
</div><div CLASS="conts" ID="t3Texts"> 
<p align="center">3.CCCCCCCCCC </p> 
</div><div CLASS="conts" ID="t4Texts"> 
<p align="center">4.DDDDDDDDDD </p> 
</div><div CLASS="conts" ID="t5Texts"> 
<p align="center">5.EEEEEEEEEE</p> 
</div> 
</body> 
</html> 
 
 
 
 
 
 
7. Time Format Conversion 
 
<html xmlns="http://www.w3.org/1999/xhtml" > 
<head> 
<title>Time Format Conversion</title> 
<meta http-equiv="Content-Type" content="text/html;  
charset=UTF-8" /> 
<SCRIPT LANGUAGE="JavaScript"> 
function timeFormat() { 
	if (document.myForm.showFormat[0].checked) {  
	return true; 
} 
return false; 
} 
function showHours(nowHour) { 
	if (timeFormat() || (nowHour > 0 && nowHour < 13)) { 
	return (nowHour); 
	} 
	if (nowHour == 0) {                               
    	return (12); 
	} 
	return (nowHour-12);                             
} 
function displayZero(timeVal) { 
	if (timeVal > 9) {                            
	return "" + timeVal; 
	} 
	return "0" + timeVal; 
	} 
	function AmPm() {                     
	if (timeFormat()) { 
	return (""); 
	} 
	if (now.getHours() < 12) {   
	return (" AM"); 
	} 
	return (" PM"); 
} 
function displayTime() {     
	now = new Date       
	document.myForm.showTime.value =  
showHours(now.getHours()) + ":" +  
displayZero(now.getMinutes()) + ":" +  
displayZero(now.getSeconds()) + AmPm() 
	setTimeout("displayTime()",1000)   
} 
</script> 
</head> 
<BODY onLoad="displayTime()"> 
<center><br><br> 
<form name=myForm> 
<input type=text name=showTime size=11><p> 
<input type=radio name=showFormat>24 Hour Format<br> 
<input type=radio name=showFormat>12 Hour Format<br> 
</form> 
</center> 
</body> 
</html> 
 
 
 
 
 
 
 
8. Count you typed 
 
<html xmlns="http://www.w3.org/1999/xhtml" > 
<head> 
<title>Show number of words</title> 
<meta http-equiv="Content-Type" content="text/html;  
charset=UTF-8" /> 
<script LANGUAGE="JavaScript"> 
function countWords(myContents) 
{ 
	wordsNum=myContents.value.length;   
	displayNum.innerText=wordsNum; } 
</script> 
</head> 
<body><br><br> 
<center> 
<textarea  id=myContents rows=10 colors=38  
onKeyUp="countWords(this) " onKeyDown="countWords(this)"> 
</textarea> 
<br><h3>The number of words you have typed: </h3> 
<h1><div id="displayNum"></div></h1> 
</center> 
</body> 
</html> 
 
 
 
 
 
 
9. Forbid Copying Photo 
 
<html xmlns="http://www.w3.org/1999/xhtml" > 
<head> 
	<title>Forbid copy photo</title> 
<meta http-equiv="Content-Type" content="text/html;  
charset=UTF-8" /> 
	<script language="javascript"> 
	function stopCopying(control) { 
alert("Stop Copying! Allright Reserved!"); 
window.close(); 
	} 
	function findPhoto() { 
if(document.images)   
 for(i=0;i<document.images.length;i++) 
document.images[i].onmousedown = stopCopying; 
	} 
	</script>    
</head> 
<body oncontextmenu="return false" 
onLoad="findPhoto()"> 
<br><br> 
<div align="center"><img src='' width=200 height=150  
border=1 alt='My Photo'></div> 
</body> 
</html> 
 
 
 
 
 
 
10. Check Password Strength 
 
<html>  
<head>  
<title>Password Strength</title>  
<meta http-equiv="Content-Type"  
content="text/html; charset=UTF-8"/> 
</head>  
<body> <br><center> 
<form name="myForm">  
<label for="pwd1">Password</label>  
<input type="Password" name="pwd1"  
onBlur="valuate(this)" />  
<br><br> 
<label for="pwd2">Retype Password </label> 
<input type="password" name="pwd2" />  
</form> </center> 
<center><div id="showStrength"></div> </center> 
<script type="text/javascript">  
function valuate(pwd) {  
var t=pwd.value;  
var id=getStrength(t);  
  
var message=new Array(4);  
message[0]="Password too short!";  
message[1]="Password poor!";  
message[2]="Password medium!";  
message[3]="Password strong!";  
 
var myColor=new Array(4);  
myColor[0]="black";  
myColor[1]="red";  
myColor[2]="orange";  
myColor[3]="green";  
 
var setWidth=300;  
var setHeight=15;  
var myPWD=document.getElementById("showStrength");  
myPWD.style.fontSize="15px";  
myPWD.style.color=myColor[id];  
myPWD.style.width=setWidth + "px";  
myPWD.style.height=setHeight + "px";  
myPWD.style.lineHeight=setHeight + "px";  
myPWD.style.textIndent="20px";  
myPWD.innerHTML="Strength:  " + message[id];  
}  
function getStrength(p){  
if(p.length < 4){  
return 0;  
}  
var level = 0;  
if (p.match(/[a-z]/ig)){  
level++;  
}  
if (p.match(/[0-9]/ig)){  
level++;  
}  
if (p.match(/(.[^a-z0-9])/ig)){  
level++;  
}  
if (p.length < 6 && level > 0){  
level--;  
}  
return level  
}  
</script>  
</body>  
</html> 
 
 
 
 
 
 
11. Open Your Harddrive 
 
<html xmlns="http://www.w3.org/1999/xhtml" > 
<head> 
<title>Open Your Harddrive</title> 
<meta http-equiv="Content-Type"  
content="text/html; charset=UTF-8" /> 
</head> 
<body> 
<br><center><h3>Open Your Harddrive</h3><br> 
<form action="file:///c|/"> 
<input type="submit" value="Open C Disk"></form> 
<form action="file:///d|/"> 
<input type="submit" value="Open D Disk"></form> 
<form action="file:///e|/"> 
<input type="submit" value="Open E Disk"></form> 
</center> 
</body> 
</html> 
 
 
 
 
 
 
12. Wave Text 
 
<script language="JavaScript"> 
function makeWave(n)  
{    
makeWaveText = "JavaScript"; 
display = ""; 
for (i = 0; i < makeWaveText.length; i++) 
{ 
size = 68*Math.abs(Math.sin( 
(i+n)*3.14/makeWaveText.length)) 
display +=  
"<font style='font-size: "+ size + 
"pt' color='green'>"  
+makeWaveText.substring(i,i+1)+ "</font>"; 
} 
textDiv.innerHTML = display; 
if (n > makeWaveText.length) {n=0} 
else {n++} 
setTimeout("makeWave(" + n + ")", 300); 
} 
 
</script> 
<body onload=makeWave(0);><br> 
<div ID="textDiv" align="center"> 
</div> 
</body>  
 
 
 
 
 
 
13. Text Advertisement 
 
<meta http-equiv="Content-Type" content="text/html;  
charset=UTF-8" /> 
<body onLoad="textAd();"><br><br> 
<div align="center">Text Advertisement<br><br> 
<script language="JavaScript"> 
var myText=" >>>Welcome to JavaScript world!>>>"; 
myText+=" >>>JavaScript is very good language!>>>"; 
 
var aLetter=50; 
function textAd(){ 
document.forms[0].panel.value= 
myText.substring(myText.length-aLetter, myText.length); 
myText=myText.substring(myText.length-1,myText.length) 
+myText; 
myText=myText.substring(0,myText.length-1); 
setTimeout("textAd()",200); 
} 
</script> 
</div> 
<form> 
  <div align="center"> 
	<input type="text" name="panel" value="" size="38"> 
  </div> 
</form> 
</body> 
 
 
 
 
 
 
14. Web Clock 
 
<div align="center"><br> 
  <br> 
  <h2 >Web Clock</h2> 
  <br> 
</div> 
<table bgcolor="green" align=center> 
<tr><td><div id="showClock"></div></td></tr> 
</table> 
<script language="javascript"> 
function webClock(){ 
var dataobj=new Date() 
var hours=dataobj.getHours() 
var minutes=dataobj.getMinutes() 
var seconds=dataobj.getSeconds() 
if(minutes<=9) 
minutes="0"+minutes 
if(seconds<=9) 
seconds="0"+seconds 
Eclock="<font size='7' color='white' face='Arial black'>" 
+hours+":"+minutes+":"+seconds+"</font>" 
showClock.innerHTML=Eclock; 
setTimeout("webClock()",1000) 
} 
webClock(); 
</script> 
 
 
 
 
 
 
15. How much is the Price? 
 
<html> 
<body> 
<meta http-equiv="Content-Type"  
content="text/html; charset=UTF-8" /> 
<SCRIPT LANGUAGE="JavaScript"> 
var sum=0; 
function checkPrice(chk){ 
if (chk.checked == false){  
sum -= eval(chk.value);  
} 
else {  
sum += eval(chk.value);  
} 
document.priceForm.total.value = '$'+ eval(sum); 
} 
</script> 
<br> 
<form method="POST" name="priceForm"> 
<table align=center width=300> 
<tr> 
<td height=50 colspan=2>The Price of Books : </td> 
</tr> 
<tr> 
<td >JAVA in 8 Hours:&nbsp; $500</td> 
<td width=30> 
<input type="checkbox" name="b1" value=500  
onclick="checkPrice(this);"> 
</td> 
</tr> 
<tr> 
<td>LMAP in 8 Hours: $400</td> 
<td width=30> 
<input type="checkbox" name="b2" value=400  
onclick="checkPrice(this);"> 
</td> 
</tr> 
<tr> 
<td>HTML in 8 Hours: $450 </td> 
<td width=30> 
<input type="checkbox" name="b3" value=450  
onclick="checkPrice(this);"> 
</td> 
</tr> 
<tr> 
<td colspan=2 align=right>Total:  
<input type="text" name="total" size=8 value='$0'  
onFocus="this.blur();"> 
</td> 
</tr>	 
</table> 
</form> 
</body> 
</html> 
 
 
 
 
 
 
 
16. Progress Bar 
 
<html> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
<body> 
<br><br> 
<form name=loading> 
<p align=center> <font color="green" size="2" face="Arial Black">Please wait, Loading......</font> 
<br><br> 
<input type=text name=progress size=55 style="font-family:Arial Black; font-weight:bolder; color:green; background-color:#fef4d0; padding:0px; border-style:none;"> 
<br><br> 
<input type=text name=percent size=50 style="font-family:Arial Black; color:green; text-align:center; border-width:medium; border-style:none;"> 
<script language="JavaScript"> 
var loadingPercent=0 ;               
var mark="||" ; 
var sum="||" ; 
count() ;                  
function count(){  
loadingPercent=loadingPercent+2;  
sum =sum + mark;  
document.loading.progress.value=sum ;         
document.loading.percent.value=loadingPercent+"%";      
if (loadingPercent<99)  { 
setTimeout("count()",100); 
}   
else {                    
window.location.href = "http://www.amazon.com"; 
} } 
</script> 
</p> 
</form> 
</body> 
</html> 
 
 
 
 
 
 
17. Filter Ungraceful Words 
 
<html> 
<head> 
<title>Filter Ungraceful Words</title> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
<script language="javascript"> 
message=prompt("Filter “fool, idiot, imbecile and moron” words. Please enter your message: ",""); 
subsitude = /fool|idiot|imbecile|moron/g; 
if (message.match(subsitude)){ 
message=message.replace(subsitude,"master"); 
message=message.bold().fontcolor("#FF0000"); 
myText="Your message has a ungraceful word, which has been replaced by: " + message; 
} 
else{ 
message=message.bold().fontcolor("#0000FF"); 
myText="Yor message has no ungraceful word, you said:  " + message; 
} 
</script> 
</head> 
<body> 
<script language="javascript"> 
document.write(myText) 
</script> 
<br> 
</body> 
</html> 
 
 
 
 
 
 
18. Forbid Copy Password 
 
<html> 
<head> 
<title>Forbid Copy Password</title> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
<script language="javascript"> 
function noCopy(pwd){ 
alert("Please don't copy password!") 
with(document.myForm){ 
if (pwd == "pwd1") { 
pwd1.blur() 
pwd2.focus() 
} 
else if(pwd == "pwd2"){ 
pwd2.blur() 
pwd1.focus() 
}}} 
</script> 
</head> 
<body> 
<form name="myForm"> 
<p><br> 
Password: 
<input type="password" name="pwd1" onSelect="noCopy(this.name)"> 
</p> 
<p>Retype Password: 
<input type="password" name="pwd2" onSelect="noCopy(this.name)"> 
</p> 
<br> 
</form> 
</body> 
</html> 
 
 
 
 
 
 
19.  World Clock 
 
<html> 
<head> 
<title> 
The Time of Cities in the World 
</title> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
<script language="javascript"> 
var t 
function wordTime(){ 
 t=0 
 nowDate= new Date() 
 worldClock("New York",-5) 
 worldClock("Los Angeles",-8) 
 worldClock("London",0) 
 worldClock("Paris",1) 
 worldClock("Tokyo",9) 
 worldClock("Beijing",8) 
 setTimeout("wordTime()",1000) 
} 
function worldClock(city,diffTime){ 
 UTCh= nowDate.getUTCHours() 
 UTCm= nowDate.getUTCMinutes() 
 UTCs= nowDate.getUTCSeconds() 
 UTCms= nowDate.getUTCMilliseconds() 
 with(document){ 
 forms[0][t].value=city + "： " + (UTCh+diffTime) + ":" + (UTCm) + ":" + (UTCs) + "." + (UTCms) 
 t++ 
 } 
} 
</script> 
</head> 
<body onLoad="wordTime()"> 
<center> 
<br><br>World Clock<br><br> 
<form name="myForm"> 
<table align="center"> 
<tr><td> 
<input type="text"><br><input type="text"><br><input type="text"><br> 
<input type="text"><br><input type="text"><br><input type="text"><br> 
</tr> 
</table> 
</form> 
</center> 
</body> 
</html> 
 
 
 
 
 
 
20. Encrypt Code to Number 
 
<html> 
<head> 
<title>Encrypt Code to Number</title> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
</head> 
<SCRIPT LANGUAGE="JavaScript"> 
var strInput; 
var strOutput = "";  
var numInput; 
var numOutput = ""; 
var txt = "Please enter data!"; 
function StrToNum(form) { 
numOutput = ""; 
if(form.input.value == "") alert(txt); 
else { 
strInput = escape(form.input.value); 
for(i = 0; i < strInput.length; i++) { 
numOutput += strInput.charCodeAt(i) - 23; 
} 
form.output.value = numOutput; 
form.input.value = ""; 
} 
} 
function NumToStr(form) { 
strOutput = ""; 
if(form.output.value == "") alert(e) 
else { 
numOutput = form.output.value;   
for(i = 0; i < numOutput.length; i += 2) { 
numInput = parseInt(numOutput.substr(i,[2])) + 23; 
numInput = unescape('%' + numInput.toString(16)); 
strOutput += numInput; 
} 
form.input.value = unescape(strOutput); 
form.output.value = ""; 
} 
} 
</script> 
<body> 
<br> 
<div align="center">Encrypt Code to Number  
</div> 
<center> 
<form> 
<table> 
<tr>  
<td align=center>  
<input name=input type=text size=20 value="JavaScript"> 
</td> 
<td align=center>  
<br> 
<input type=button value=" Encode --> " onClick="javascript:StrToNum(this.form)"> 
<br> 
<input type=button value=" <-- Decode " onClick="javascript:NumToStr(this.form)"> 
<br> 
</td> 
<td align=center>  
<input name=output type=text size=20 value="51749574607691828993"> 
</td> 
</tr> 
</table> 
</form> 
</center> 
</body> 
</html> 
```