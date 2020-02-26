# jQuery

JQuery (Chapter 3)
    
    Official Documentation
    	api.jquery.com
    Can switch between Javascript and jQuery at any time!
    	$(function(){});  document.ready
    	$(document).ready(function(){});
    History
    	CREATED IN 2007
    	
    	
    JQUERY SELECTORS
    	USE STANDARD CSS!
    	
    	SELECT BY
    	
    		FIXED EG ID, class, name, tagName, attribute
    		
    		BY STATE  enabled, disabled, hidden, selected
    		
    		BY POSITION 	first, last, nth
    		
    		BY HIERARCHY 	parent, child
    		
    	STANDARD SELECTOR
    		
    		$("selector");
    	
    	CHAINING
    	
    		$("selector").method1().method2();
    		
    	MULTIPLE SELECTORS SEPARATED BY COMMAS
    	
    		$("selector1,selector2")
    	
    	MULTIPLE SELECTORS
    	
    		$("element[attr='value'][attr='value2']")
    	ARRAY SELECTOR
    	
    		$("selector")[0];
    		
    		$("selector").get(0);
    		
    		
    	FILTER SELECTOR
    		An ALTERNATIVE WAY TO SELECT ITEMS
    		$('elements').filter('.special') will sub-select all 'elements' which also have
    					class .special
    					
    					
    .add
    	ADD ITEM 
    		
    		$("selector").add("<div>Text</div>")  
    		
    		
    		
    		
    	JQUERY SELECTORS
    	
    		
    		TEXT INSIDE INPUT BOX
    		
    			$('').val
    			
    			
    			
    		
    		
    jQuery attribute selectors
    $("selector[attr]")   // any selector which simply has this attribute, whether or not it has been set in this case.
    $("selector[attr='value']")
    $("selector[attr^='value']")   // begins with
    $("selector[attr$='value']")   // ends with
    $("selector[attr*='value']")   // contains
    		
    window
    	$(window)   selects the whole window
    	$(window).on('scroll',function(event){});
    	
    *  	
    	ALL
    	
    		$("*") select all
    		
    body
    	$('body').on('click',...);      can be used to trigger whenever the users clicks
    								    anywhere on the page	
    	
    	
    	
    Width and Height
    	$('element').width()		Width with NO PADDING, BORDER, MARGIN
    	$('element').innerWidth()   Width INCLUDING PADDING
    	$('element').outerWidth()   Width INCLUDING PADDING AND BORDER
    	$('element').outerWidth(true) Width INCLUDING PADDING, BORDER, MARGIN
    	
    	
    	
    			
    jQuery Hierarchy selector
    	$("ancestor descendant")
    	$("parent > child")
    	$("prev + next")
    	$("prev sibling / next sibling")
    	$('element').siblings() will select all siblings of an element
    		
    		
    .parent
    	SELECTS THE PARENT ITEM
    	
    		$('selector').focus(function(){
    			$(this).parent().css('background-color','red');
    		});
    		
    jQuery Positional selector
    	$("element:first")
    	$("element:last")
    	$("element:nth")
    	
    :nth-child(4)
    	:nth-child(odd/3/2n-1)
    	FOURTH CHILD REGARDLESS OF TYPE
    	
    :nth-of-type(3)
    	THIRD OF A PARTICULAR TYPE eg p:nth-of-type(3)
    	
    .eq(4)
    	FINDS THE FIFTH ITEM (ZERO BASED)
    	
    	
    .gt(2)
    	FINDS THE ITEMS INDEXED 3 AND ABOVE (ZERO BASED)
    	
    	
    	
    :TYPE_OF EG :BUTTON
    	SELECT ALL ITEMS THAT ARE OF TYPE BUTTON
    	
    		EG <button> AND <input type='button'>
    		
    		$(":button")
    	OTHERS
    		
    		$(":checkbox")
    		$(":password")
    		$(":submit")
    		$(":text")
    		$(":file")
    		
    	CHECKBOX - get or set the 'CHECKED' attribute
    	
    		Javascript
    	
    			document.getElementById("cb").checked = false
    		
    		Jquery
    	
    			if ( $("#cb").attr("checked") === true ) {...}
    			if ( $("#cb").attr("checked") == "checked" ) {...}
    			if ( $("#cb").is(":checked") ) {...}
    			     
    		jQuery : set the 'checked' attribute
    			     
    			     $("#cb").prop("checked", false)
    		
    :contains
    	p:contains('findme')
    		- does paragraph contain findme
    		
    		
    	p:has(img) does the same thing using 'has' instead of 'contains'
    :not
    	$(":not(selector)")
    			li:not(:nth-child(2))
    	
    CHAINING
    	Chaining allows select DOM element once but run multiple commands on that one element 
    		$(".blue").css("background-color","blue").css("width","500px");
    		$(".pink").css("background-color","pink").css("width","500px").append(" Extra Text Added");
    	
    	
    	
    .html
    	SET HTML
    	("#p").html("New text<em>emphasised text</em>");
    	
    .text
    	SET TEXT
    	("#p").text("Text inside a paragraph");
    :first 
    	
    	SET ONLY THE FIRST ITEM OF MANY POSSIBLES FOUND
    	
    	("#div p:first").text("This changes first paragraph of a div");
    	
    	
    .last
    .next
    	next sibling
    .prev
    	previous sibling
    	
    .size
    	returns number of elements selected
    	
    .slice(4)
    	returns elements starting from the 5th element onwards
    	
    :nth-of-type(3)	
    	SELECTS EVERY THIRD EG P ITEM p:nth-of-type(3)
    	
    	$("div p:nth-of-type(3)").html("jQuery changes <em>third</em> paragraph");
    	
    	
    .appendTo
    	APPENDS TEXT TO AN EXISTING ITEM  
    	
    		$( "#firstBlockOfTextToAppend" ).css("font-size","36px").appendTo( "#appendToThisElement" );
    	
    .append
    	APPENDS TO SELECTED ITEM
    	
    	$("div p:last").append("<b> - jQuery appends this HTML to last paragraph</b>").css("font-size","36px").css("font-style","italic");
    	
    	
    .detach
    .insertAfter
    	Adding Text Outside Of Elements
    	
    .filter()
    	.filter('p')
    	.filter( $('selector')
    	.filter(  BOOLEAN TRUE/FALSE )
    	
    	
    .find()
    	similar to .filter
    	
    	.find(input[type=text])
    	
    	
    	
    	
    	
    		
    	
    	
    	Remove elements
    	
    	$("#thisID").remove();
    	$("#thisID").detach();  // use to detach from DOM while manipulating; then can reattach after the manipulation is done
    	$("#thisID").empty();   // removes the contents of the element
    	
    	
    	
    	REPLACE
    	
    		Replace Elements = remove + add together
    	
    		.replaceWith("newContent")  :  Note : this replaces all the innerHTML as well
    	
    		.replaceAll("new_content") 
    		
    	
    	Wrap Elements
    	
    	$("#thisID").wrap()
    	.wrapAll()
    	.wrapInner()
    	.unwrap()
    	
    	
    	Modifying Attributes
    	
    	$("#id").attr("name","value")  will set that attribute 
    	$("#id").prop("name","value")
    	.removeAttr("name") eg .removeAttr('id/class') to remove an ID/class element
    	.removeProp("name")
    	.attr("name",function(attr){....})
    	.attr('href','http://..');
    	
    	JQUERY SET CSS
    	
    		.css("style","value")
    		.css({style":"value","style":"value"})
    		.css("style",function(index,value){.....})	
    	
    	.hasClass("name")
    	.addClass("name1 name2 name3")
    	.removeClass
    	.toggleClass("toggle")     Adds if not present and removes if present
    	.toggleClass("toggle1 toggle2")    toggles between the two classes
    	
    	
    	.width("100px")
    	.height("100px")
    	.width() 
    	.height()
    	.position()
    	
    	Event Object
    	Attachments
    	Document Loading events
    	Form events
    	Keyboard events
    	Mouse events
    	
    	
    	JQUERY EVENTS
    	
    		.ON
    		
    			ON('CLICK',FUNCTION(){})
    			
    		
    		
    		
    		.OFF
    		
    			OFF('CLICK',FUNCTION(){})
    			
    		
    		
    		
    		.BIND
    		
    			.BIND('TAPHOLD',TAPHOLDHANDLER)
    		
    				FUNCTION TAPHOLDERHANDLER(EVENT){
    					(EVENT.TARGET).HIDE();
    				}
    		
    		
    		
    		
    		.UNBIND
    		
    		
    		.ONE
    		
    		
    		
    .live  capture all events even from new events just added programmatically
    .die
    .trigger   ==> IN CODE, SIMULATE AN EVENT EG A CLICK
    .triggerHandler  ==> HANDLE SIMULATED EVENT 
    Publish An Event with 'trigger'
    	$(x).trigger (“click”,[data])
    Subscribe To An Event 
    	$(x).on(“click”,[data], fn(){});	
    Unsubscribe
    	$(x).off(“click”);
    	
    	
    	
    	
    	
    	
    	
    Browser Events
    	error()
    	resize()
    	scroll()
    Document Loading Events
    	load()       // only fires when complete body + all eg images etc have finished loading
    	unload()
    	ready()  == when DOM has loaded but before all eg images load
    Form events
    	Form events  http://codepen.io/codefoster/pen/iCKmA
    	change()    value of element changes
    	focus()     only one element can get focus at any one time
    	blur()
    	focusin()    element or child element receives focus
    	focusout()  
    	select()     user selects text inside element
    	submit()
    	serialize()
    	Serializing Form Data
    		Turning form data into a string ready to be sent to the server is called Serializing and can be done with a command as well
    		
    		var myString = $('#myForm').serialize();   
    		
    Keyboard
    		
    	keydown() 
    	keyup()
    	keypress()
    Mouse events
    	click()
    	dblclick()
    	hover()
    	mousedown/up
    	mouseenter/leave
    	mousemove
    	mouseover
    Effects
    	hide()
    	slide()
    	toggle()   if hiding, show it
    	fadeIn()
    	fadeOut()
    	fadeTo() 	changes opacity of element $('element').fadeTo(2000,0) will disappear
    	fadeToggle()
    	slideUp()
    	slideDown()
    	slideToggle()
    	
    Advanced Effects
    	animate()
    		cause the properties of an element to change
    		$('element').animate({marginLeft:"+=200px"}) moves an item 200 pixels
    	queue()
    	dequeue()
    	clearQueue()
    	delay()
    		$('element').delay(3000).animate({marginLeft:"+=200px"})
    	stop()
    		Stop an ongoing animation before it finishes
    		$('element_which_is_animating').stop();
    			stop(true) cancels animation and future animations
    	finish()
    	easing() depend on time : calculate the effect depending on passing of time
    Callback
    	
    	Can execute after something has completed
    	
    	$('element').fadeTo(2000,0,function(){//dothis}) executes code after element vanishes
    .each
    	ITERATE OVER JSON OBJECT KEYS AND VALUES
    	
    	Show objects with .each
    	function showObjectjQuery(obj) {
    		  var result = "";
    		  $.each(obj, function(key, value) {
    			result += key + " , " + value + "\n";
    		  });
    		  return result;
    	}
    	$.each OVER ARRAY
    		var arr = [ "one", "two", "three", "four", "five" ]; 
    		jQuery.each(arr, function() { 
    			$("#" + this).text("My id is " + this + "."); 
    			return (this != "four"); 
    			// will stop running to skip "five" 
    		});
    		
    		
    	$.each OVER OBJECT
    	
    	
    		var obj = { one:1, two:2, three:3, four:4, five:5 }; 
    		$.each(obj, function(i, val) { 
    			$("#" + i).append(document.createTextNode(" - " + val)); 
    		});
    	
    	
    	
    	
    Helper Function
    jQuery.param()  === $.param()
    Libraries
    jQuery UI 
    	
    	
    	
    JQuery : duplicate summary notes
    
    		SELECT
    		FILTER
    		TRAVERSE DOM
    		CREATE/MODIFY/DELETE
    		
    		CROSS-PLATFORM
    		
    		CHANGE CSS
    		
    		
    		
    		DOWNLOAD DIRECTLY OR ACCESS VIA CDN
    		
    		
    		$(DOCUMENT).READY(FUNCTION(){})
    		
    		
    		
    		
    				VISUAL STUDIO =>MANAGE NUGET PACKAGES => ONLINE => JQUERY
    				
    				NOTE THAT NOW INTELLISENSE IS AVAILABLE FOR JQUERY WHEN YOU 
    				ADD THE JQUERY LIBRARY INTO YOUR PROJECT
    				
    				
    				
    				
    	
    	SELECT
    	
    		TAG
    		
    			$('P')
    			
    		ELEMENT ID
    		
    			$('#ID')
    			
    		CLASS
    		
    			$('.CLASS')
    			
    		ATTRIBUTE
    		
    			$('INPUT[TYPE="TEXT"]')
    			
    			
    			
    			
    			
    	SELECT AND MODIFY
    	
    		$('p').EACH(FUNCTION(){
    			
    			THIS.STYLE.COLOR="RED";
    		
    		});
    	
    	
    	
    	
    	
    	SELECT BY INDEX
    	
    		$('p').EQ(7).CSS('COLOR','RED')		8TH ELEMENT
    		
    		
    	
    	
    	FILTER COMMAND
    	
    		$('P').FILTER($(':FIRST')
    		
    		
    	FIND COMMAND
    	
    		$('MYFORM').FIND('INPUT[TYPE="TEXT"]')
    		
    		
    	FIRST
    	
    		$('p').FIRST()
    		      .LAST()
    			  
    			  
    	NEXT SIBLING
    	
    	
    		$('p').NEXT()
    		      .PREVIOUS()
    			  
    			  
    	SIZE : NUMBER OF ELEMENTS IN SET
    	
    		$('p').SIZE
    		
    		
    	SLICE : RETURNS A PARTIAL ARRAY COMPARED WITH THE ORIGINAL ARRAY OF ITEMS
    	
    		$('p').SLICE(4)
    		
    		
    	MODIFY ELEMENTS
    	
    	
    		ADD CLASS
    			
    			$('p').addClass('className')
    			
    			
    		APPEND
    		
    			$('p').append('<li>hi</li>')
    			
    			
    		PREPEND
    		
    			$('p').prepend('<li>hi</li>')
    			
    		
    		AFTER				add after a given selector
    		
    			('p#thispara').after('some additional text');
    			
    			
    		BEFORE				add before selected item
    		
    			('p#thispara').before('some text before my para');
    			
    		DETACH
    		
    			$('P').detach()
    			
    			
    		HTML : SET THE HTML INSIDE AN ELEMENT
    		
    			$('P').html("<h1>texgt</h1>")
    			$('P').text("some text")
    			
    			
    		REPLACE WITH
    		
    			$('P').replaceWith('<p>test</p>')
    			
    		VAL : VALUE OF TEXT IN A TEXT BOX
    		
    			GET VALUE
    			
    				$('#INPUT1').VAL()
    			
    			SET VALUE
    			
    				$('#INPUT1').VAL('HI')
    	
    	
    		ATTR : SET ATTRIBUTES
    		
    		CSS : SET CSS
    		
    		HTML
    		
    		HEIGHT
    		
    		WIDTH
    		
    		
    		
    		
    		
    		
    JQUERY EVENTS (3-25)
    	$('P').BIND('CLICK',FUNCTION(){})
    	
    	
    	$('P').UNBIND('CLICK',NAMEDFUNCTION)
    	
    	$('P').CLICK(FUNCTION(){})
    	
    	JQUERY EVENTS
    	
    		CLICK
    		DBLCLICK
    		FOCUS
    		BLUR
    			FOCUSIN
    			FOCUSOUT
    		KEYDOWN/UP/PRESS
    		HOVER
    		MOUSEDOWN/UP/ENTER/OUT/OVER/MOVE
    			MOUSEOVER : PARENT OR CHILD ELEMENTS
    			MOUSEENTER : PARENT
    			MOUSEMOVE : EVERY TIME MOUSE MOVES WHEN OVER ELEMENT
    		LOAD/UNLOAD
    		SELECT