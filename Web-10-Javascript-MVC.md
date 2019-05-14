
# MVC 

There are many types of MVC (see todomvc).
MVC : VIEW ACCESS MODEL DIRECTLY.
MVP : PRESENTER TALKS TO MODEL AND VIEW.  COMPLEXITY ADDED.
LINKS
	http://todomvc.com/ - see different types of MVC
	http://localhost:8080/codeigniter-3.0.4/user_guide/tutorial/static_pages.html
	http://domain.com/CONTROLLER/METHOD/ARGUMENTS
	https://addyosmani.com/resources/essentialjsdesignpatterns/book/
Model
	MODEL=DATA=CLASS
var Todo = function ( content, done ) {
    this.content = ko.observable(content);
    this.done = ko.observable(done);
    this.editing = ko.observable(false);
};
		UPDATE MODEL => VIEW UDPATES AUTOMATICALLY
	PERSISTENCE EITHER LOCALLY OR REMOTE DATABASE
COLLECTION = GROUP OF MODELS 
	CAN NOTIFY WHEN ANY MEMBER OF COLLECTION CHANGES
var PhotoGallery = Backbone.Collection.extend({
 
    // Reference to this collection's model.
    model: Photo,
 
    // Filter down the list of all photos
    // that have been viewed
    viewed: function() {
        return this.filter(function( photo ){
           return photo.get( "viewed" );
        });
    },
 
    // Filter down the list to only photos that
    // have not yet been viewed
    unviewed: function() {
      return this.without.apply( this, this.viewed() );
    }
});
Model : Example (Backbone.js)
	var Photo = Backbone.Model.extend({
	 
		// Default attributes for the photo
		defaults: {
		  src: "placeholder.jpg",
		  caption: "A default image",
		  viewed: false
		},
	 
		// Ensure that each photo created has an `src`.
		initialize: function() {
		   this.set( { "src": this.defaults.src} );
		}
	 
	});
	Controller
		Controller is central focus of every web request
		CONTROLLER MAKES THE DECISION WHAT HAPPENS WHEN AN EVENT HAPPENS 
		IN THE VIEW
			EG UPDATE DOM DATA (EG INPUT ON FORM) ==> UPDATE MODEL
		WHEN DATA FROM THE MODEL IS UPDATED
			RENDER TEMPLATE
			UPDATE THE VIEW 
		CONTROLLER EXAMPLE FROM SPINE.JS
			// Controllers in Spine are created by inheriting from Spine.Controller
 
				var PhotosController = Spine.Controller.sub({
				 
			  init: function () {
				this.item.bind( "update", this.proxy( this.render ));               MODEL CHANGES : RE-RENDER VIEW
				this.item.bind( "destroy", this.proxy( this.remove ));            DESTROY : DELETE DATABASE ITEM 
			  },
			 
			  render: function () {
				// Handle templating
				this.replace( $( "#photoTemplate" ).tmpl( this.item ) );
				return this;
			  },
			 
			  remove: function () {
				this.el.remove();
				this.release();
			  }
			});
ROUTE EXAMPLE FROM BACKBONE.JS
var PhotoRouter = Backbone.Router.extend({
  routes: { "photos/:id": "route" },
 
  route: function( id ) {
    var item = photoCollection.get( id );
    var view = new PhotoView( { model: item } );
 
    $('.content').html( view.render().el );
  }
});
	NOTE : 'C' IN MVC CAN HAVE DIFFERENT APPLICATIONS ON SERVER AND ON CLIENT !!!	
Controller 
	Controller = 'super object' referred to in controllers as $this
	application/controllers/Pages.php
		<?php
		class Pages extends CI_Controller {
			   public function view($page = 'home')
			 {
			 }
		}
	 view is a METHOD accepting one argument $page with default value 'home'
	CI_Controller class is defined at system/core/Controller.php
	
	View
		View is a page template
		RENDER() THE VIEW IS TO SHOW THE VIEW
		SINGLE PAGE APPLICATIONS : NO REFRESH BETWEEN VIEWS
	
			NAVIGATION BETWEEN VIEWS IS NOW DONE BY THE 'ROUTER'
	
Model
	Manages
		
		DATA
			
			MAPS TO A TABLE
			
				EG MODEL USER MAPS TO :
				
						APP/MODELS/USER.CS
				
						USER TABLE 	
			
		LOGIC
		
		RULES
		
		
CONTROLLER
	ACCEPTS INPUT 
	
		SENDS COMMANDS TO MODEL TO UPDATE STATE OF MODEL
		
		SENDS COMMANDS TO VIEW TO CHANGE HOW VIEW PRESENTS THE MODEL EG
					SCROLL THROUGH DOCUMENT
					
MVP MODEL VIEW PRESENTER
	P = PASSIVE VIEW WHERE SCREEN ITEM MATCHES DATABASE FIELD DIRECTLY.  ITEM
			CANNOT BE UPDATED BY USER
			
			
MVVM MODEL VIEW VIEW MODEL
	
MVC with MEAN

BEST PRACTICE FOR STRUCTURE
	https://www.terlici.com/2014/08/25/best-practices-express-structure.html
	
SIMPLE  EXAMPLE
	http://timstermatic.github.io/blog/2013/08/17/a-simple-mvc-framework-with-node-and-express/
	
??? WORKING EXAMPLE ???
http://code.tutsplus.com/tutorials/build-a-complete-mvc-website-with-expressjs--net-34168
MVC + MONGO 
	http://www.slideshare.net/huseyinbabal/complete-mvc-on-node-js-27877254
				
