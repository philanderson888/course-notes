# Fundamentals Of Testing 

### [Trello : SDET : Software Development Engineer In Test](https://trello.com/b/eis78gd9/engineering-module-3b-sdet-master-new)

## SDET Glossary

[Glossary](./Standard%20Glossary%20of%20Terms%20used%20in%20Software%20Testing.md)


## Book

## [Exam](https://www.istqb.org/certification-path-root/foundation-level/foundation-level-exam-structure.html)

40 Questions

26 Pass

## ISTQB

* Testing principles

* Testing in the life cycle

* Test techniques

Root case

effect

defect

error

failure

fault

mistake

bug

### 7 Principles Of Testing

1	Testing shows bugs

2	Exhauastive testing is impossible

3	Early Testing

4	Defect Clustering

5	Pesticide Paradox

6	Testing is context dependant

7	Absence of errors fallacy




### 5 Fundamental Test Activities

Testing highlights issues

Testing proves the system works according to the spec





### Test Process

* Plan and control

	* What to test

	* How to test

	* Who will test

	* Exit Criteria

	* Feed back into planning

* Analysis and design

	* Test basis

	* Test condition

	* Test cases

	* Test procedures

	* Design test

	* Test environment

	* Test tools



* Implementation And Execution

	* Test suites

	* Check environment is according to spec

	* Run tests in order

	* Log

	* Report




* Exit Criteria

	* Satisfy stakeholders

	* Ready for release?


	
* Report

* Closure

	Archive test environment





Testing depends on the context

	Type of project

	Schedule

	Resources




Integration Testing

<pre>

	Top Down



	Bottom Up




</pre>


System Testing

	End to end

	Live environment

	Tested by an independent team


Legal

Contractual

Alpha

Beta


Operational Testing

	Run system

	Maintain system

		Backup

		Maintenance procedures

		Data load

		Data migration

		Security


User Acceptance

	Functional = spec



Regression Testing

	R Recent - new code features need extensive testing
	C Core - of app
	R Risk - some parts of app may be more risky
	C Configuration - some code can depend on config eg server, network
	R Repaired - bug fixes can introduce new issues
	C Chronic - some (particularly legacy) code is particularly vulnerable to breaking


Change related maintenance testing

	After routine maintenance eg

		upgrade of dependencies


Impact Analysis

	Legacy code - hard to test and predict




## Testing - Day 2

### Test Design

Context = Environment

	Maturity of organisation

	Time constraints

	Safety constraints

	Regulatory constraints

### Test Design Spec

	Test items

	Test conditions 

	Test Approach

	High Level Test Cases



### Test Design Spec

	ID
	
	Features Under Test

	Test ID

	Pass/Fail Criteria

 
### Test Design Spec

	Description

	Precondition

	Steps

	Input

	Expected Result

	Actual Result

	Status : Pass/Fail/Not tested/N/A/Cannot test

	Comments

	References

	Conclusion


### Terms

Test base

	system documentation

	list of requirements : from these we produce test conditions

Test conditions

	what are we going to test using one or more test cases

	conditions are the list of items we want to test.  Each one can be verified with one or more test cases

Test cases - set of input values to test

	Preconditions

	How are we going to test a requirement

	Expected results



Test procedures - how to conduct the test

	Also called test scripts

	Run the tests!  Pass/fail



Traceability

	Trace right through

		List of Requirements
		Conditions to be tested
		List of tests

	Horizontal

	Vertical



Scheduling : order of tests running


	Most important first


Test coverage

	Quantitative : eg 80% of tests are complete

	Coverage may tell us when to stop testing



Standardise

	Documentation


Running Tests

	Ensure preconditions met

	

# Testing Techniques

* Spec based testing

* Structure based testing

* Experience based testing

* Equivalence partitioning

* Boundary value analysis

* Decision table

* State transition table

* Use Case testing

* Code coverage

* Statement coverage

* Decision coverage

* Completeness of testing coverage

* Experience-based techniques

* Spec-based techniques



### Specification Based (Black Box Testing)

* Don't know the internal workings

* Functional

* Non-functional


### Specification Techniques

* Smoke test : check system health

* Sanity check : ensure bugs notified have been fixed before running regression

* Equivalence Partitioning

* Boundary Value Analysis

* Decision Table Testing

* State Transition Testing

* Use Case Testing


### Decision Table Testing

* List input conditions

### Infeasability

* test conditions which are logically impossible

### State Transition Testing

* Test to see if a transition works

### Equivalence Partitioning

* Sample tests rather than run them all

* To partition means to group sets of test conditions 

* test at least one from each group

### Boundary value analysis

* testing values at the min and max ends of the ranges

### Use case testing

* Think of real people (actors)

* How the system will be used

* pre-condition

* post-condition

### Experience based techniques

* people who have done this sort of testing before so know what to test for

### Error guessing

* experience of tester used to anticipate defects and design tests to expose them

* intuition of person

* fault attack is list of possible defects to test 

### Exploratory testing

* Informal testing with no fixed structure

* Run some tests and use the feedback to create a few more tests

	1 Product Exploration

	2 Test Design

	3 Test Execution

	4 Heuristics

	5 Review Results

* Used by experienced testers

* Good when spec missing

* Good when extreme time pressure



## SDFPOT 

	Structure of app : how it is built
	Function of app : what it does
	Data 
	Platform : OS + config
	Operations : who uses it and how
	Time : 




# White Box Testing = Structure Based Testing

Also known as `Clear`, `Glass`, `Open`, `Transparent`, `Structural` testing

Looks in detail at the internal structure

Goal 

* Security

* Design

* Usability


### Control flow graphs

Looking at the decision points

Only look at statements affecting the flow of control

* Edge

* Node

* Region


### Statement Testing And Coverage (Statement Coverage)

Coverage is be the percentage of tests completed

### Decision Testing And Coverage

Ensure can get a True and False depending on the code

### Testing Techniques

# Test Management

* Independent Testing

## Risk

Risk = Probability x Impact

* Product Risk

* Project Risk




Risk

Quality

Exhaustive Testing

Error = Mistake = Bug In Coding

Defect = Design Fault

	Root cause 

	Causal effect

Debugging - identify bugs and defects

Testing - systematic exploration with goal of finding and ..... paused here to begin going through the business modules


### Product Risk

* Prone to failure

* May cause harm!

### Project Risk

* 3rd party failure

* Contract issues

### Risk based testing

Aim to reduce the risk of failure

* Identify risks

* Test to explore each risk

* Use risk levels



## Organisation Roles

### Tester

* Contribute to testing plans

* Review requirements

* Prepare test data

* Run tests

* Report

* Automate tests

* Review tests of others


### Independence

Separates responsibilities which helps to enable proper objective testing

Unbiased, objective testing


* none

* testers in the dev team

* test group 

* testers from business communitity

* test specialists eg security



### Test Planning And Automation

Estimate cost/time/resources

### Estimation

* Metrics approach from measurements taken from previous projects

* Expert Based

### Test Monitoring

Review actual against planned

### Test Control

actual vs planned : determine if we have reached goal yet

* % work done

* number of cases executed

* defect totals

* milestones

* re-prioritise activities

* change schedule


## Reporting

* to stakeholders

* gather metrics at the end


## Configuration Management

Helps avoid duplication of work

* Mange config items

* Verify compliance

* ID of documents, hardware etc

* Change management

* Status accounting : track progress through the dev cycle

* Audit : functional

* Audit : Physical

* Identify tests

* Reproduce tests

* Test harness

	Stub : can auto-provide the inputs and read the outputs

	Drivers : 


## Incident Management

Indident is unplanned event

* Log events

* Categorise

* Identify impact

* Track




# ISTQB BCS Book

## Terms

AUT Application Under Test

BACS Bankers Automated Clearing Services

CFG Control Flow Graph

CMMI Capability Maturity Model Integration

COTS Commercial Off The Shelf

CTFL Certified Tester Foundation Level

DSDM Dynamic Systems Dev Methodology

FTP Fundamental Test Process

ISEB Info Systems Exam Board

ISTQB Int Software Testing Quality Board

MISRA Motor Industry Software Reliability Association

RAD Rapid App Dev

RUP Rational Unified Proess

SDLC Software Dev Life Cycle

SIGiST Specialist Interest Group in Software Test

ST State Table

TPI Test Process Improvement

UML Unified Modelling Language

### Intro

Certificate introduced 1998

### Topic list

[Fundamentals]

[Testing through SDLC]

[Static Techniques]

[Test Design]

[Test Management]

[Tool Support]


### Why test?

- Software can cause harm

- Observe effects

- Find root cause

- Contributes to higher quality


### 7 principles

### 5 test activities

### Error => Defect => Failure

### Greater risk eg airline means greater testing

Static testing

	much cheaper to fix bugs at this point before code is actually written!

	Check documentation, specification, written code

Dynamic testing

	live testing

Test techniques

	Goal is to find flaws if they are present

Exhaustive testing is impossible

### Early testing

Check for missing or incomplete or incorrect requirements

Cost at stages

	Requirements £1

	Coding £10

	Testing £100

	System test £1000

	UAT £10000

	Live £100 000

Agile = early testing


### Defect Clustering

Once one fault found often we find exceptions are found in a batch

eg developer inexperience on a part of software

Pareto : 80% of problems from 20% of code



## Testing Notes From Joe's Class : HTTP Testing


Performance Test

	
	Load Test : can it handle load eg 100, 1000, 10000 users
	
	Spike Test : short spike in load
	
	Stress Test to see how much the app can handle before it begins to crash
	
	Soak testing : over period of time
	

JMeter

	Tests performance
	
HTTP requests