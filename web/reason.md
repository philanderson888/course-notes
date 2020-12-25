# Reason

## Contents

- [Reason](#reason)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [References](#references)
  - [Installing](#installing)
  - [Reason with React](#reason-with-react)

## Introduction

ReasonML is a object-functional programming language created at Facebook. 

It has C-like syntax for the programming language OCaml. 

The new syntax is intended to make interoperation with JavaScript and adoption by JavaScript programmers easier. 

It removes idiosyncrasies of OCaml’s syntax. ReasonML also supports JSX. 

Reason is

- Statically typed 
- Types are inferred by the compiler 
- Let bindings are immutable by default - these avoid help bugs 
- Uses Javascript  
- Uses OCaml 
- Compiles To Javascript

ReasonML is the upgrade to Javascript which Typescript provided, but omitting all of the flaws of Javascript

`ReasonML = Javascript + Types - Bad + Good`



## References

- docs
  - https://reasonml.github.io/ 
- about
  - http://2ality.com/2017/11/about-reasonml.html 
- examples 
  - https://reasonml.github.io/reason-react/docs/en/simple

## Installing

https://reasonml.github.io/docs/en/quickstart-javascript.html 
 
```powershell
# provides the BuckleScript compiler 
npm install -g bs-platform  
# creates project my-first-app
bsb -init my-first-app -theme basic-reason  
cd my-first-app
npm run start 
```

For production

```powershell
# Compiles to src/Demo.bs.js using BuckleScript compiler  
npm run build  
# Runs the demo using NodeJS 
node src/Demo.bs.js  
# Hello, BuckleScript and Reason! 
```

## Reason with React

```powershell
bsb -init my-react-app -theme react
```