# Agile, Scrum And Waterfall

# Software Development Lifecycles And Methodologies

Lifecycle ==> from beginning to end

    SDLC Software Dev LifeCycle
    
    	Analysis
    	Design  ==>  Architecture 'Big Picture'
    				 Detailed Designs ('Spec' = 'Specification')
    	Build (Code) 
    	Test 
    	Release To Production
    	Ongoing Maintenance 
    		a) Bug Fixes
    		b) New Feature Releases
    		c) Helpdesk system
    	Documentation
    		a) Technical : internal programmers
    		b) User
    
    Analysis
    	Requirements Gathering : talk with customer
    		'Elicit' or ask for the LIST OF REQUIREMENTS which the customer needs
    	Feasibility Study ==> a) Technical b) Financial/Business 
    		==> do a study and determine if we think this project is viable (going
    			to work?).	
    	LIST OF REQUIREMENTS generated
    		VALIDATE ==> how can we tell ("definition of 'done' ")
    
    Design
    	Architecture : Overall big picture
    		BUDGET
    		CASH FLOW
    		TIMESCALE
    		MANPOWER
    		CONSTRAINTS ==> RESTRICTIONS
    			LEGAL, USER, FINANCIAL, INDUSTRY
    		TECHNICAL REQUIREMENTS ==> FIT INSIDE EXISTING FRAMEWORK
    			Greenfield ==> START FROM SCRATCH
    			Brownfield ==> NORMAL, LOCK IN TO EXISTING INFRASTRUCTURE
    
    		Gantt chart ==> Project plan over time
    
    TDD Test Driven Development
    	Old days a) Code First b) Test Second
    	Now      a) Tests written first b) Run code initially so TESTS FAIL
    			 c) Write code which makes all TESTS PASS  
    			 	(Assert.IsEqual(expected, actual));		
    BDD Behaviour Driven Development
    	Tests written GHERKIN syntax which is PLAIN ENGLISH
    
    Tests
    	RED  			WRITE TESTS FIRST ==> CODE (BLANK) FAIL!!!
    	GREEN 			CODE TO PASS TESTS
    	REFACTOR 		PERFORMANCE ETC

# Waterfall model

    Traditional method of building software
    	Analysis=>Design=>Build=>Test=>Release in order
    
    	Good for 
    		SMALLER
    		FIXED
    		REPEATABLE
    		MILITARY GRADE (MISSION CRITICAL)  ==> Primary concern is that 
    					this will work
    		CIVILIAN
    			ENGINEERING => Bridge, Dam, Oil Rig ==> SAFETY IS IMPORTANT

# Agile

    Agile Manifesto
    
    	Value				PEOPLE over PROCESSES
    						WORKING SOFTWARE over DOCUMENTATION
    						COLLABORATING WITH CUSTOMER rather than having
    											nasty negotiations 
    						EMBRACING CHANGE 
    
    
    	Embracing Change
    
    		Goal is to not THINK TOO FAR AHEAD
    
    		Simple
    
    		Build, Test, Release early FIRST WORKING ITERATION
    
    			MVP Minimum Viable Product
    
    		Version 2 etc
    
    			All software follows this process now
    
    				Windows 'as a service' 
    
    
    Good and bad with Agile
    
    	Good
    
    		Flexible
    		Visible testable results quickly
    		Customer is involved  (PRODUCT OWNER is in charge of customer)
    
    	Bad
    
    		Hard to manage 'scope' of project unless clear boundaries are set
    		Hard to manage budget, timescale planning, commitments, deadlines etc

# Scrum

    Practical steps a dev team will take in order to build great software
    
    1) REQUIREMENTS ANALYSIS ==> PRODUCT 'LIST OF REQUIREMENTS'
    
    		'To-do list for project'		PRODUCT BACKLOG
    
    2) SPRINT PLANNING
    
    		Select one or more items from product backlog ==> Create 'SPRINT BACKLOG'
    
    			Mini-to-do-list for this short period of work
    
    		Set goals
    		Timescale
    		Agreement from CLIENT, STAKEHOLDER (PEOPLE WITH INTEREST IN PROJECT) etc
    
    3) BEGIN WORK
    
    		Assign Roles 
    				1) Scrum Master    Clear any 'blockers' or impediments to team
    									working efficiently 
    				2) Product Owner   liaise with customer; IN CHARGE OF BACKLOG LISTS
    									(to-do-lists)  a) PRODUCT b) SPRINT 
    				3) Dev Team        build software, jointly responsible for commitment
    										they make
    
    4) DAILY STAND-UP 10-15 mins
    
    		a) Yesterday b) Today c) Blockers
    
    5) SPRINT REVIEW 
    
    		Invite customer
    		Show off your software 
    		Definition of 'done'
    		Validate (tests) work is done  ==> SHOW SOFTWARE & RUN TESTS 
    
    6) SPRINT RETROSPECTIVE 
    
    		Internal review
    
    Scrum : small, focused pieces of work delivering a fresh INCREMENT OF SOFTWARE
    
    Scrum and Sprints : good for small, DISCRETE, focused periods of work
    
    	INTENSE FOCUS WITH A CLEAR GOAL.

# Kanban

    Japan (Toyota)  ==> JIT = JUST IN TIME DELIVERY   (Minimising waste in warehouses)
    
    Good for 24/7 processes
    
    	 CAR MANUFACTURING
    	 DATACENTRE IN OPERATION 
    
    
    	 		BACKLOG      	SELECTED       		IN   			READY   		DONE
    	 		(TO DO)         FOR 				DEVELOPMENT     FOR
    	 						DEVELOPMENT 						TESTING
    
    
    
    	 											MAX NUMBER 
    	 											OF ITEMS HERE
    	 											EG 5