# HTML

[https://developer.mozilla.org/en-US/docs/Web/Demos_of_open_web_technologies](https://developer.mozilla.org/en-US/docs/Web/Demos_of_open_web_technologies)


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


