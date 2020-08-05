# Node Testing

 
 
Page Testing : Mocha
HTML PRESENTATION AND FUNCTIONALITY
 
Cross-Page Testing 
HTML TALKING TO ANOTHER PAGE
 
Logic Testing : Javascript
 
 
Lint : Potential Errors
 
Link checking  : Link Checker
 
 
 
WRITE TESTS FIRST SO THEY FAIL INITIALLY SO WHEN THEY PASS YOU KNOW IT'S BECAUSE OF THE CODE YOU HAVE WRITTEN
 
 
 
 
Install Mocha
 
Npm install -g Mocha --save-dev
 
 
--save-dev    adds to Development Dependencies instead of runtime dependencies  (NOT DEPLOYED TO LIVE SITE)
 
 
ADD MOCHA FILES TO /PUBLIC FOLDER 
   mocha.js
  mocha.css
 
 
 
INSTALL CHAI ASSERTION LIBRARY SO RUN ASSERTION TESTS IN BROWSER
 
Npm install --save-dev chai
 
ADD CHAI TO /PUBLIC FOLDER     chai.js
 
 
 
 
 
TESTS : TURN ON WITH URL ?TEST=1
 
 
 
 
EXPRESS : APP.USE  
 
** NOTE : RUN THIS FIRST BEFORE OTHER APP.USE METHODS TO DETECT IF NON-PRODUCTION ENVIRONMENT AND TESTING IS ON
   
     res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1'
 
 
 
WEB PAGE
 
CONDITIONAL TESTING CSS AND JS  : GLOBAL ON ALL PAGES
 
{{#IF showTests}} 
 
<link rel='mocha.css'>
 
 
AT END OF BODY
 
<SCRIPT SRC=MOCHA.JS>
<SCRIPT SRC=CHAI.JS>
 
<SCRIPT SRC=GLOBAL-TESTS.JS>
 
 
 
 
CONDITIONAL TESTING CSS AND JS  : GLOBAL ON ALL PAGES
 
 
{{#IF INDIVIDUAL PAGE TEST}}
<SCRIPT SRC=INIDIVIDUAL-PAGE-TEST.JS>
 
 
 
JS TEST FILE IN MOCHA
 
Suite('Global Test', function(){
 
Test('what I am testing gets stated here',function(){
 
Assert(….test must return TRUE!!! …);
 
});
 
});
 
 
 
 
 
CROSS PAGE TESTING
 
USE A 'HEADLESS BROWSER' TO EFFECTIVELY VISIT A REMOTE SITE AND GLEAN INFORMATION TO RUN AGAINST OUR TESTS
 
EG SELENIUM 
 
RUN SOME TESTS AGAINST WHAT THE BROWSER SHOULD DO
 
QUITE COMPLEX
 
 
 
 
 
RUN YOUR MOCHA TEST
 
1.	INSTALL MOCHA GLOBALLY NPM INSTALL -G MOCHA
2.	START YOUR SERVER
3.	RUN YOUR TEST   mocha -u tdd -R spec qa/tests-crosspage.js 2>/dev/null
TDD OR BDD
SPEC IS A 'REPORTER' 
2>/DEV/NULL  ==> OUTPUT STACK TRACE
 
 
 
 
UNIT TESTS FOR TESTING THE LOGIC OF YOUR CODE
 
 
Var expect = require('chai').expect;
 
Suite('my tests', function(){
 
Test ('this test description',function(){
Expect(….must return true …);
});
 
});
 
 
Then run the file with Mocha
 
Mocha -u tdd -R spec unit-test01.js
 
 

