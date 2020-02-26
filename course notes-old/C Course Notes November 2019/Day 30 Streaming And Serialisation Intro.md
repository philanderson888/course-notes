# Day 30 - Streaming And Serialisation Intro

# Streaming And Serialisation

If we want to pull down data from a remote location we can do so in a number of ways

    FILE SYSTEM  
    
    HTTP://   WEB
    
    MEMORY    RAM IN LOCAL COMPUTER
    
    OTHER NETWORK LOCATIONS SUCH AS
    	FILE SHARE SMB://
    	EMAIL SMTP/POP/IMAP
    	FTP:// SENDING FILES
    	IP
    	TCP/IP  INTERNET

In order to help us get data properly we split it into TWO TYPES

    BINARY (NON HUMAN-READABLE)
    
    	Raw string of 1/0.
    	.exe
    	.jpg
    	.dll
    
    	Binary files are VERY FAST (RAW 1/0) BUT HAVE TO BE INTERPRETED VIA APPLICATION
    
    														DECODING
    
    
    			1) IDE = BUILD ENVIRONMENT
    					2) COMPILE IT		A) DEBUG (SLOWER)     .EXE / .DLL
    										B) RELEASE (FASTER)   .EXE / .DLL
    						3) RUN IT        EITHER IDE OR ACTUALLY THE OS (WINDOWS)
    
    TEXT-BASED FILE
    
    	.html
    		<html> <head></head>   <body></body>    </html>
    
    	.xml
    		<rootElement>
    			<row>
    				<column data="1">data2</column>
    			</row>
    			<row>
    				<column data="1">data2</column>
    			</row>
    		</rootElement>
    
    	.json   JAVASCRIPT OBJECT NOTATION
    		{
    			"field1":"data1",
    			"field2":"data2",
    			"field3":100,
    			"field4":true
    			"field5":"2019-11-07"
    		}
    
    	.json  ARRAY OF OBJECTS
    
    		[
    			{ "field1":"data1" .... },
    			{},
    			{}
    		]
    
    						raw javascript as STRING
    						JSON.parse ==> TO OBJECT
    						.field1