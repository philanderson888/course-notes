# HTML
x




# HTML super summary

```
<!DOCTYPE HTML PUBLIC ... 4 ... 

        STRICT      ==> NO DEPRECATED ELEMENTS

HEAD

BODY

ELEMENT

    ATTRIBUTE 
    
        VALUE
        

DISPLAY

    H1..6
    
    <<NOTE : ALL SPACES TREATED AS ONE SPACE>>
    
        <PRE>   KEEPS ALL SPACES EXACTLY</PRE>
        
        
    STRONG
    
    EM          ITALIC
    
    B           BOLD
    
    I           ITALIC
    
    
    UL
    
    OL
    
        LI
        
    IMG SRC= WIDTH= HEIGHT= ALT=
    
        TITLE=          APPEARS IN TEXT WHEN USER HOVERS OVER IMAGE
        
    A HREF= 
    
        TARGET=         _SELF   open in same window (default)
                        _BLANK  open in new window
                        _PARENT don't use (frameset parent)
                        _TOP    don't use (fill topmost frame)
                        
            NOTE : TO PERFORM JAVASCRIPT BUT NOT LET THE HYPERLINK CAUSE A PAGE RELOAD YOU CAN ADD THE FOLLOWING
            
            <a href="Javascript:void(0)" onClick="alert('hi');">
                        
                        
    FORM
        ACTION
        METHOD          GET POST
        
        INPUT   
            TEXT
            PASSWORD
            HIDDEN
            CHECKBOX
            RADIO
            RESET
            SUBMIT
            IMAGE
            BUTTON
            FILE
            DATE
            MONTH
            WEEK
            
        TEXTAREA
            ROWS
            COLS
            
        SELECT
            MULTIPLE : CAN SELECT MORE THAN ONE ITEM
            OPTION  EACH ITEM   
                SELECTED        PRESELECT
                VALUE           SUBMITTED WITH FORM
        BUTTON  
            TYPE BUTTON
                 SUBMIT
                 
                 
        DIV
        SECTION
        HEADER
        FOOTER
        
        BLOCK LEVEL
        
        P
        
        DIV
        
        FIELDSET  WITH BORDER AND LEGEND FOR TITLE
        
        
        LABEL FOR=<ID_OF_ELEMENT>
        
            OR
            
                <LABEL>DESCRIPTION
                    <ELEMENT>
                </LABEL>
```

# HTML flow 1

HTML

Fancy Demos
[https://developer.mozilla.org/en-US/docs/Web/Demos_of_open_web_technologies](https://developer.mozilla.org/en-US/docs/Web/Demos_of_open_web_technologies)

HTML
!DOCTYPE must be first line in your code

```
NOT HTML

INSTRUCTION TO YOUR BROWSER ABOUT WHAT TYPE OF LANGUAGE TO EXPECT IN
        THE DOCUMENT AND HOW IT IS TO BE INTERPRETED
<!DOCTYPE html>
```

STRICT HTML
XHTML IS STRICT FORM OF HTML

```
lower case

closing tags

    XHTML   ==> STRICT   (STRICTEST, ONLY CURRENT TAGS)
    
    XHTML   ==> TRANSITIONAL   ==> DEPRECATED TAGS
    
    XHTML   ==> ALLOWS FRAMESETS ALSO
```

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

HTML 5
Semantic tags have meaning

```
eg
    
        HEADER
        NAV
        SECTION
        FOOTER
        ASIDE
        
META

    NAME="DESCRIPTION" CONTENT="MY DESCRIPTION GOES HERE"       

    meta charset=”UTF-8”
    
    meta http-equiv="Content-type" content="text/html;charset=UTF-8"
    
    meta name = "site name"
    

viewport : lets browser know we might be viewing from mobile
viewport width=device sets width to device width
viewport initial scale=1 sets initial scale correctly
```

HTML
<TAG ATTRIBUTE="VALUE">

```
TAG = ELEMENT
```

INPUT TYPE
month mm yyyy

```
color #ffffff white (full colour)    #000000 black   (zero colour)
number min= max=

range min= max=

required

placeholder

autocomplete

    browser will predict
    WORKS WITH text/search/email/tel/password/datepicker/range/color
```

anchor
<a href="#"> reloads page

```
NOTE : TO PERFORM JAVASCRIPT BUT NOT LET THE HYPERLINK CAUSE A PAGE RELOAD
            YOU CAN ADD THE FOLLOWING
            
            <a href="Javascript:void(0)" onClick="alert('hi');">

target 

    target="_self"      open in same window (default)
    
    target="_blank"      open in new window
```

HTML ELEMENTS

```
abbr
    
    abbr has full name on mouseover
    
VIDEO 

        SRC
        WIDTH
        HEIGHT
        POSTER : DISPLAYS WHILE LOADING
        
            video poster is image displayed before the video is played!
        
        AUTOPLAY
        MUTED
        CONTROLS
        LOOP
        PRELOAD = AUTO/NONE/METADATA
                WHEN THE PAGE LOADS, LOAD THE VIDEO YES/NO OR JUST METADATA ONLY
        
        
    
        <VIDEO>
            <SOURCE SRC="ABC.MP4" TYPE="VIDEO.MP4">
            <EMBED SILVERLIGHT/FLASH AS FALLBACK>
        VIDEO EVENTS
            1) LOADEDMETADATA EG LENGTH OF VIDEO
            2) LOADEDDATA  FINISHED BUFFERING AND READY TO PLAY
            3) TIMEUPDATE  SENDS TIME
        VIDEO METHODS
            PLAY() 
            PAUSE() 
            PAUSED 
            CURRENTTIME 
            DURATION 
            VOLUME 
            PLAYBACKRATE
            
        
        
AUDIO
    audio preload autoplay loop src controls    
    audio preload=”auto”, “none”
    
BDI BiDirectional Isolation (eg Arabic right to left)
PATTERN="[a-zA-Z]{3}"   MUST BE THREE LETTERS
        "[0-9]{5}"      MUST BE FIVE NUMBERS
        
DATA-

    CAN ADD CUSTOM DATA- ATTRIBUTES LIKE ID FIELDS
    
    DIV DATA-NAME="X"
    
        $('DIV[DATA-NAME="X"]')
```

TABLE
table <colgroup> <col span="2" style="background-color:red"> <col style="background-color:yellow"> </colgroup>
table border-collapse avoids having double borders for overlapping elements
table caption caption-side:top/bottom etc
table caption defines the title of the table, outside it
table cell can have HTML within it eg <p> <table>,<ul> which is incredible!!!!
table cellpadding provides whitespace within cell <table border="1" cellpadding="10">
table cellspacing provides space around cell <table border="1" cellspacing="0">
table col defines formatting for a column or group of columns in colgroup
table frame <table frame="border"> <table frame="box">
table frame above/below/vsides/hsides/lhs/rhs eg <table frame="hsides">
table frame missing <table frame="void">
table header row <tr><th>Header 1</th><th>Header 2</th></tr>
table padding between a border and content
table rows may be grouped into header, body, footer by the THEAD TFOOT and TBODY tags
table text-align left/right/center/justify
table thead tbody tfoot can be styled by CSS eg <thead><tr><th>Month</th><th>Savings</th> </tr></thead>
table vertical-align sets the heght of text in the box eg top/middle/bottom

# HTML flow 2

HTML OVERVIEW
<H1> TEXT HERE</H1>
<PRE>
IMG
SRC= ALT= WIDTH= HEIGHT=
TITLE = APPEAR OVER IMAGE WHEN USER HOVERS

```
Lowsrc = low res version of an image
                    
                    
    
A   HREF=
    TARGET =_SELF    (DEFAULT) 
        _BLANK   OPENS LINK IN NEW WINDOW/TAB
            PARENT/TOP   DON'T USE  (RELATED TO FRAMES)
            
            <a href="Javascript:void(0)" onClick="alert('hi');">
FORM
    METHOD  GET/POST
        GET = SEND DATA USING .. URL
            <http://remotesite/page.htm?id=4&name=bob&>..
                QUERYSTRING
        POST  :   DATA SENT PART OF MESSAGE BODY
         
    ACTION = "URL-TO-SEND-DATA-TO"
    NAME = myForm
            document.myForm.submit()
TEXTAREA
    ROWS=3  COLS=50
    
SELECT     DROPDOWN
    <SELECT NAME="this_item"
    MULTIPLE        SELECT MULTIPLE ITEMS
    <OPTION VALUE="X"    SELECTED  >Option Here</Option>
        Value data get submitted with form
BLOCK LEVEL VS INLINE
```

## HTML Forms

Forms
Password minlength

Radio
Input type =Radio
Name (of group)group ="gender"
Value (of option)option = "red" (this is sent on click)click

Checkbox
Input name ="dog" (if submitted shows dog=on)

Select name="groupname"
Option value = "optionvalue" > optionvalue </option>

Option

[philanderson888/showcase](https://github.com/philanderson888/showcase)