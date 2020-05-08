# Agile And Waterfall

Contract

Pre-course assessment
Test
10 week training
validate your skills
technical
social
trainer validation ==> interviews

graduation
3 months 'placement window'
once week...come in and show your face...
contract

Software Development 'Methodologies' ie Agile and Waterfall

Terms

Iterative -> start simple and build 'MVP' Minimum Viable Product
add iterations which are incremental builds, getting progessively
more complex

Requirements : list of features which customer is asking us to build

```
"backlog" list
```

Scrum : our teams work in a way to build, on a daily basis, iterative products ie slowly getting more complex.

Intro

First ever software projects we call 'monolith' where huge project, all features interlinked and quite complex.

```
Problem ==> technically getting all parts to work in a timescale which is reasonable.
```

Simple, straightforwards IT projects 'Waterfall' method

```
SDLC Software Development Life Cycle

	Feasibility Study
		Does it look like, from an initial analysis point of view, that this
		is a good idea and will make money and will work from a technical 
		point of view?

	Requirements Gathering

		Talk to customer and determine the 'scope' of the project!

		Analysis 

			List of Requirements 

			= 'Product Backlog'  (coders call it this)

	Architecture / High-Level Design

		Greenfield ==> Brand new, ((?? Startup ??))

		Brownfield ==> tie in to existing legacy systems

		Constraints
			£££
			Time
			Architecture 'stack'
				Hardware
				OS
				Database
				Legacy applications
			Legal 
				advertising restrictions
				claims on website
				use of material 'quote/link/reference'
				license
			Industry compliance / good practice  
				Code of conduct
				Pharmaceutical

		Marketing Considerations

		Secure coding : from ground up

	Low Level Design
		Coding 'specs' 
		GUI Front End  UI/UX    User Interface / Experience
									UI = Look and layout
									UX = User interaction and flow of screens

	Coders
		Traditionally 
			Code first then test
		Now
			TDD Test Driven Development
				Build 'tests' which code MUST PASS
					RED      initial tests : all will fail 
					GREEN    code passes
					REFACTOR more efficient

			BDD Behaviour Driven Development
				Gherkin / Cucumber syntax
					Tests written
						As a .... when I ....          then ....
						As a user        click 'login' then login page appears

	Testing (automated tests on build)

	Release

		Manual push to production server

		or

		'Pipeline' which takes

			Raw code (GitHub or similar)

			==> Tests

			==> Staging server (Ready to go)

			==> Production server (Live)

	Ongoing Maintenance

		Bug Fix & New Feature Release (ongoing work)

		Helpdesk

			1st line 	trivial
			2nd line    complex
			3rd line    developers look in detail

	Documentation 
		a) User
		b) Technical 

SDLC
	Feasibility
	Analysis ==> List Of Requirements
	Design
		High/Low level
	Build
	Test
	Release
	Maintain
	Document
```

Summary
Waterfall = traditional software methodology

```
Good for ...
		Small, fixed, non-changing projects 
		Lives at stake or safety important eg Civil Engineering: bridge
		Military
```

V-Model

```
Waterfall = straightforard projects

V-model = Waterfall + extra testing

	List of requirements 								UAT User Acceptance
															Testing

		Full system 								System testing

			Join modules                    	Integration Testing   

				Single block of code 		Unit Test
```

Limitations Of Waterfall

```
Large projects are very difficult to manage

	Often impossible to 'freeze' the project requirements so they often will
	will change over 2/3/4/6.. more months!

	'Scope Creep' ==> project 'scope' changes over time
```

'Agile' Methodology

```
AgileManifesto.org

We value

1. Working software over documentation

	EVERY 'ITERATION' ('SPRINT') WE PRODUCE SOME WORK WHICH CUSTOMER CAN
		VISUALLY SEE AND KNOW IS ACTUALLY WORKING

2. Face-to-face interactions over other methods

3. Embrace change over following a fixed plan

4. Collaboration over negotiation

	Treat client as our 'work colleague' and embrace them onto our team
		PRODUCT OWNER ==> manage carefully this client relationship
```

This practically outworks in a 'methodology' (way of working) called Scrum

Scrum

```
Take 'product backlog' as our main source of information/focus

	Create 'user stories' to 'humanise' these features
		As a .... when i .... then .....

	Prioritise
		a) Difficulty
		b) Importance

Create first 'sprint'

	Select critical items to build

		Off Product Backlog
		On  Sprint Backlog (mini-list)

	Time : 1-4 weeks

People
	Product Owner ==> customer liaison
	Scrum master  ==> 'admin' servant-leader 'facilitator'
	Dev team    3-9 developers, multi-skilled

4 meetings every sprint

	1) Sprint Planning  (decide what's on the SPRINT BACKLOG)

			What are we going to build?

	2) Daily 'standup'
			Did yesterday
			Plan for today
			'Blockers' (hindrances)

	3) Sprint 'review'  invite customer to see our 'build' iteration

	4) Sprint 'retrospective'  internal review, what went wrong or what
								can we do better?
```

Tools
Jira	Paid, Sparta use for project
Trello	Free, good for learning
[Draw.io](http://draw.io/)	Good for design : wireframe = outline of project

What about 'continuous manufacturing'

```
Kanban which means 'continuous flow of work'

	Toyota 'JIT' (Just In Time) manufacturing 

	Kanban often LIMIT ACTIVE WORK ITEMS SO DEVELOPERS NOT OVER-STRETCHED
```

Board Headings

```
Product Backlog     Sprint Backlog    In Progress     Review      Complete
				   (selected for
				   	development )
```