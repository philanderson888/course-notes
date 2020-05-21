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