# Reason

## Contents

- [Reason](#reason)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [References](#references)
  - [Installing](#installing)
  - [Reason with React](#reason-with-react)

## Introduction

ReasonML is a new object-functional programming language created at Facebook. 

In essence, it is a new C-like syntax for the programming language OCaml. 

The new syntax is intended to make interoperation with JavaScript and adoption by JavaScript programmers easier. 

Additionally, it removes idiosyncrasies of OCaml’s syntax. ReasonML also supports JSX. 

Reason is

- Statically typed 
- Types are inferred by the compiler 
- Let bindings are immutable by default - these avoid help bugs 
- Uses Javascript  
- Uses OCaml 
- Compiles To Javascript

## References

- https://reasonml.github.io/ 
- http://2ality.com/2017/11/about-reasonml.html 
 

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