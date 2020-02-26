# React

# React JS
    
    <pre>
    	
    https://reactjs.org/
    React updates the view (render) when underlying data changes
    A view exists for every 'state' of the app
    'Declarative' views
    'Encapsulated components' which manage their own state
    Render using
    	Javascript
    	JSX which uses XML to store data
    React Setup
    
    https://reactjs.org/tutorial/tutorial.html
    
    npm install -g create-react-app
    create-react-app my-app
    cd my-app
    npm start
    
    React Native - powers mobile apps
    
    Examples Of ReactJS at work
    
    See https://www.jqwidgets.com
    Simple React lab
    
    https://facebook.github.io/react/tutorial/tutorial.html
    React Component Class
    
    Component
    	Input
    		Props 
    	Output
    		Returns a HIERARCHY OF VIEWS to display via RENDER method
    	
    Sample Component code
    
    	class ShoppingList extends React.Component {
    	  render() {
    	    return (
    	    
    
    		    
    Shopping List for {this.props.name}
    
    		    
    
    			    
    Instagram
    
    			    
    WhatsApp
    
    			    
    Oculus
    
    	        
    
            
    
    	    );
    	  }
    	}
    
    // Example usage: 
    
    Created by
    return React.createElement('div', 
    	{className: 'shopping-list'},
      	React.createElement('h1', ...),
      	React.createElement('ul', ...)
    );
    Render Method
    
    	Returns a description of what you want to render
    	Returns a REACT ELEMENT which is a lightweight description of what to render
    	Create REACT ELEMENT using JSX language
    	return React.createElement('div', 
    		{className: 'shopping-list'},
    		React.createElement('h1', ...),
    		React.createElement('ul', ...)
    	);
    	Any Javascript expression can go inside the JSX expression
    	Every REACT ELEMENT is a REAL JAVASCRIPT OBJECT
    	React uses these instructions to render the screen
    
    </pre>