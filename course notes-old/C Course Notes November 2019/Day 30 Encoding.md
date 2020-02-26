# Day 30 - Encoding

# Encoding, Streaming And Serialisation

We are now going to discuss a new section of the course where we look at getting data across the internet.

Encoding - How files are created and interpreted

Streaming - Sending BLOCKS OF DATA across the internet for processing

Serialisation - Turn raw data into C# known data type eg MyClass instance

# Encoding

Hard Disk 1010101010101010

    Patterns
    	Flags  
    	SOF Start Of File 'flag' on hard disk
    	Signature which is a pattern of '1' and '0' which tell us WHICH FILE TYPE
    		WE ARE ABOUT TO LOOK AT
    
    		JPG     JPEG    Joint Pictures Expert Group
    		PNG  			Portable Network Graphics
    
    		JPG     has FILE SIGNATURE    FF D8 ...
    
    									  binary 1 or 0
    									  byte   1010     1010
    									  nibble 1010 
    									         0000    decimal 0  hexadecimal 0
    									         0001            1              1
    									         0010            2              2
    									         1010           10              A
    									         1100           12              C
    									         1111           15              F
    
    									         F C   1111  1100
    
    		DOCX   has signature   504B 0304  same as XLSX PPTX ZIP
    
    
    Let's do one more thing - examine in detail a file using a HEX EDITOR

# ASCII

When the first computers were built we needed a way to transfer human characters into computer-storable characters. Computers only store binary 1/0 and so we created the ASCII table which maps every character with a number.

    G ==> 71
    g ==> 103

Today whenever we hit these keys, this number is sent to the computer.

ASCII has max of 127 ie binary numbers with 7 digits from 0000000 to 1111111 can make all the characters G == 71 == 1000111 71-64=7-4=3

# Modern Web Today : UTF-8

If we add one more digit to ASCII (7 digits) we create UTF-8 which has 8 digits

This is nice and simple as computers LOVE powers of 2

In fact the WEB IS WRITTEN WITH ASCII CHARACTERS + EXTRA DIGIT (UTF8)

    Proof ==> GetBootstrap.com

# UNICODE : UTF16

We notice however that many languages of the world are not catered for by our simple ASCII/UTF8 because many character sets exist with complex symbols.

Instead of 8 bits then we have 16 bits for the more complex characters (ie double the space needed).

    UNICODE CHINESE CHARACTER

# .NET / C#

    Web - Default 8 bit
    General - 8 bit
    But can be programmed to use 16 bit encoding