# react

## Contents

- [react](#react)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Resources](#resources)
  - [Background](#background)
  - [Hello World](#hello-world)
  - [Component (think of as a class)](#component-think-of-as-a-class)
    - [CreateElement From Component (think of instantiating a class)](#createelement-from-component-think-of-instantiating-a-class)
    - [Render Method](#render-method)
- [React](#react-1)
- [React](#react-2)
- [React Notes 1](#react-notes-1)
  - [Contents](#contents-1)
  - [Introduction](#introduction-1)
  - [Resources](#resources-1)
  - [Comparison with other technologies](#comparison-with-other-technologies)
  - [React Clock](#react-clock)
  - [React from Egghead](#react-from-egghead)
  - [Contents](#contents-2)
    - [Rendering An Element In Raw HTML](#rendering-an-element-in-raw-html)
- [React Notes 2](#react-notes-2)

## Introduction

This repository is a combination of my own learning, also learning React from Udemy's web developer course of 2018, and also from Egghead which has a course on React.

## Resources

[reactforbeginners.com](https://reactforbeginners.com/)

## Background

React updates the view (render) when underlying data changes

A view exists for every 'state' of the app
'Declarative' views
'Encapsulated components' which manage their own state

Render using
Javascript
JSX which uses XML to store data

## Hello World

React Setup

[https://reactjs.org/tutorial/tutorial.html](https://reactjs.org/tutorial/tutorial.html)

```
npm install -g create-react-app
create-react-app my-app
cd my-app
npm start

```

## Component (think of as a class)

Component
Input
Props
Output
Returns a HIERARCHY OF VIEWS to display via RENDER method

```
// Sample Component code
class ShoppingList extends React.Component {
  render() {
    return (
      Shopping List for {this.props.name}
    );
  }
}

```

### CreateElement From Component (think of instantiating a class)

```
return React.createElement('div', 
	{className: 'shopping-list'},
  	React.createElement('h1', ...),
  	React.createElement('ul', ...)
);

```

### Render Method

Returns a description of what you want to render
Returns a REACT ELEMENT which is a lightweight description of what to render
Create REACT ELEMENT using JSX language
Any Javascript expression can go inside the JSX expression
Every REACT ELEMENT is a REAL JAVASCRIPT OBJECT
React uses these instructions to render the screen



# React Notes 1

## Contents

[Introduction](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#introduction)

[Resources](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#resources)

[Comparison with other technologies](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#comparison-with-other-technologies)

[React from Egghead](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#react-from-egghead)

## Introduction

Statement by creators of React at Facebook

```
*React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.*
```

## Resources

[reactforbeginners.com](https://reactforbeginners.com/)

## Comparison with other technologies

## React Clock

Here is a basic clock

```
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

The setInterval function calls function tick() every second.

This function tick() calls ReactDOM.render() so this gets called every second.

It renders the chosen element, in this case `hello world` plus a time string, to the screen at the position of the `div` element with id `root`.

React will compare the previous and current rendition of the screens in the virtual DOMs which it creates. It will then only render the changes, making for a more efficient screen re-render.

We can see this visually by `inspecting` the clock with Chrome Dev Tools and expanding to see the relevant HTML element. We can see the rest of the DOM is static but this little bit updates on every clock tick.

## React from Egghead

## Contents

[CodeSandbox.io](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#codesandbox-io)

[create-react-app](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#create-react-app)

[nellify](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#nellify)

### Rendering An Element In Raw HTML

Before we talk about React let's talk about how raw HTML renders an element which goes something like this

```
<div id="root"></div>
<script type="text/javascript">
const rootElement = document.getElementById('root')
const element = document.createElement('div')
element.textContent='Hello World'
element.className='container'
rootElement.appendChild(element)
</script>
```

# React Notes 2

```jsx
# React JS
	
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
```


	