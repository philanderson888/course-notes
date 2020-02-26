# Testing

Testing has become 'mainstream' as it's a core part of every development workflow.

Testing has 3 libraries

MSTEST    : Microsoft built-in testing framework

NUNIT      : Default 3rd party 

XUNIT       : Most recent testing framework

Testing 'mindset'

RED                    WRITE OUR TESTS FIRST SO THE TEST FAILS STRAIGHT AWAY.

GREEN               WRITE CODE TO PASS TESTS

REFACTOR          TWEAK CODE TO MAKE IT FASTER, MORE EFFICIENT, ETC

TDD                 Test-Driven Development                  :   Tests written in code

BDD                  Behaviour-Driven Development       :   

                               Analysis : Talk To Customer =⇒ LIST OF REQUIREMENTS (BACKLOG)

                               'Humanise' this list by turning them into 'USER STORIES'

                                         As an office administrator

                                        When I log in to the system

                                        I expect to see the home page 

                        Gherkin Syntax =⇒ turn BDD User Stories into C# Code Tests!

Why do we test?

Contract : prove done our work

Test can PROVE IN WRITING what work we have done

Code coverage is % of our CODE BASE which has been covered by TESTS

Never a 100% guarantee of bug-free code

Mindset : helps coders focus on task at hand not generating fancy code.

Code =⇒ just to pass test, and no more.

Without this =⇒ danger =⇒ coders just LOVE TO CODE!!!  

     Business people can  meaningfully interact with coders without exactly knowing what coder is     

            doing 

      Create 'test scenarios' or 'test cases'  =⇒ non-programmers   

## Practicalities

New Project =⇒ Test      a) MSTEST  or   b) NUNIT    or    c) XUNIT

Run Tests 

Test ⇒ Test Explorer ⇒ Run all/selected tests

Method : Meaninful_Name_Like_This(){

// arrange

// instantiate any class 

// state expected outcome

// act : run code

// assert : actual = expected ????

}